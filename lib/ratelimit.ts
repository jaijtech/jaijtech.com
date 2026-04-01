import { NextRequest } from "next/server";
import Redis from "ioredis";

let redis: Redis | null = null;
let redisAvailable = true;

try {
  redis = new Redis("redis://localhost:6379", {
    maxRetriesPerRequest: 1,
    connectTimeout: 3000,
    lazyConnect: true,
  });
  redis.on("error", () => {
    redisAvailable = false;
  });
  redis.on("connect", () => {
    redisAvailable = true;
  });
  redis.connect().catch(() => {
    redisAvailable = false;
  });
} catch {
  redisAvailable = false;
}

// In-memory fallback
const memoryStore = new Map<string, number[]>();

export function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") || "127.0.0.1";
}

function rateLimitMemory(
  ip: string,
  route: string,
  maxRequests: number,
  windowMs: number,
): { limited: boolean } {
  const key = `${route}:${ip}`;
  const now = Date.now();
  const cutoff = now - windowMs;

  const timestamps = memoryStore.get(key)?.filter((t) => t > cutoff) ?? [];
  timestamps.push(now);
  memoryStore.set(key, timestamps);

  return { limited: timestamps.length > maxRequests };
}

async function rateLimitRedis(
  ip: string,
  route: string,
  maxRequests: number,
  windowMs: number,
): Promise<{ limited: boolean }> {
  const key = `ratelimit:${route}:${ip}`;
  const now = Date.now();
  const cutoff = now - windowMs;

  const pipeline = redis!.pipeline();
  pipeline.zremrangebyscore(key, 0, cutoff);
  pipeline.zadd(key, now, `${now}`);
  pipeline.zcard(key);
  pipeline.expire(key, Math.ceil(windowMs / 1000));
  const results = await pipeline.exec();

  const count = results?.[2]?.[1] as number;
  return { limited: count > maxRequests };
}

export async function rateLimit(
  ip: string,
  route: string,
  maxRequests: number,
  windowMs: number,
): Promise<{ limited: boolean }> {
  if (redis && redisAvailable) {
    try {
      return await rateLimitRedis(ip, route, maxRequests, windowMs);
    } catch {
      return rateLimitMemory(ip, route, maxRequests, windowMs);
    }
  }
  return rateLimitMemory(ip, route, maxRequests, windowMs);
}

export async function checkDuplicate(email: string): Promise<boolean> {
  if (!redis || !redisAvailable) return false;

  try {
    const key = `register:email:${email.toLowerCase().trim()}`;
    const exists = await redis.exists(key);
    return exists === 1;
  } catch {
    return false;
  }
}

export async function markRegistered(email: string): Promise<void> {
  if (!redis || !redisAvailable) return;

  try {
    const key = `register:email:${email.toLowerCase().trim()}`;
    await redis.set(key, "1", "EX", 86400);
  } catch {
    // Ignore Redis failures
  }
}
