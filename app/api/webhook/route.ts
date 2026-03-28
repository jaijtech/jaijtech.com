import { NextRequest } from "next/server";
import { headers } from "next/headers";
import Stripe from "stripe";
import { Resend } from "resend";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const body = await request.text();
  const headersList = await headers();
  const sig = headersList.get("stripe-signature");

  if (!sig) {
    return Response.json(
      { error: "Missing stripe-signature header" },
      { status: 400 },
    );
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!,
    );
  } catch {
    return Response.json(
      { error: "Webhook signature verification failed" },
      { status: 400 },
    );
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;

      if (session.customer_email) {
        await resend.emails.send({
          from: "jaijtech <info@jaijtech.com>",
          to: session.customer_email,
          subject: "Bienvenido a jaijtech — Tu suscripción está activa",
          html: `
            <h1>¡Gracias por suscribirte!</h1>
            <p>Tu suscripción a jaijtech está activa.</p>
            <p>Empieza con la documentación:</p>
            <p><a href="https://docs.jaijtech.com">docs.jaijtech.com</a></p>
            <p>Instala el SDK:</p>
            <code>npm install @jaijtech/verifactu</code>
            <p>Si necesitas ayuda, escríbenos a <a href="mailto:info@jaijtech.com">info@jaijtech.com</a>.</p>
          `,
        });
      }

      await resend.emails.send({
        from: "jaijtech <info@jaijtech.com>",
        to: "info@jaijtech.com",
        subject: `Nueva suscripción: ${session.customer_email || "desconocido"}`,
        html: `
          <p><strong>Session ID:</strong> ${session.id}</p>
          <p><strong>Email:</strong> ${session.customer_email || "N/A"}</p>
          <p><strong>Importe:</strong> ${((session.amount_total || 0) / 100).toFixed(2)} €</p>
        `,
      });
      break;
    }
    case "customer.subscription.deleted": {
      const subscription = event.data.object as Stripe.Subscription;
      console.log("Subscription cancelled:", subscription.id);
      break;
    }
  }

  return Response.json({ received: true });
}
