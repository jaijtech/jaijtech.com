import { NextRequest } from "next/server";
import Stripe from "stripe";
import { getClientIp, rateLimit } from "@/lib/ratelimit";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);
  const { limited } = rateLimit(ip, "/api/checkout", 10, 5 * 60 * 1000);
  if (limited) {
    return Response.json(
      { error: "Demasiados intentos. Espera unos minutos antes de volver a intentarlo." },
      { status: 429 },
    );
  }

  const { priceId } = await request.json();

  if (!priceId) {
    return Response.json({ error: "priceId es obligatorio" }, { status: 400 });
  }

  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    payment_method_types: ["card"],
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing`,
  });

  return Response.json({ url: session.url });
}
