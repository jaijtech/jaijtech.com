import { NextRequest } from "next/server";

const store = new Map<string, number[]>();

export function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") || "127.0.0.1";
}

export function rateLimit(
  ip: string,
  route: string,
  maxRequests: number,
  windowMs: number,
): { limited: boolean } {
  const key = `${route}:${ip}`;
  const now = Date.now();
  const cutoff = now - windowMs;

  const timestamps = store.get(key)?.filter((t) => t > cutoff) ?? [];
  timestamps.push(now);
  store.set(key, timestamps);

  return { limited: timestamps.length > maxRequests };
}
