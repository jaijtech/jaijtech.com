import { NextRequest } from "next/server";
import { Resend } from "resend";
import { getClientIp, rateLimit } from "@/lib/ratelimit";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const PRODUCT_TYPES: Record<string, string> = {
  ERP: "ERP",
  POS: "TPV / POS",
  ISV: "ISV / software house",
  Integrator: "Integrador de sistemas",
  Other: "Otro",
};

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);
  const { limited } = await rateLimit(ip, "/api/pilot", 3, 10 * 60 * 1000);
  if (limited) {
    return Response.json(
      {
        error:
          "Demasiados intentos. Espera 10 minutos antes de volver a intentarlo.",
      },
      { status: 429 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Solicitud no válida." }, { status: 400 });
  }

  const {
    name,
    company,
    role,
    email,
    website,
    productType,
    stack,
    deploymentModel,
    customerCount,
    description,
  } = body;

  // Server-side validation — do not rely on client validation.
  if (!name || !company || !role || !email || !productType || !description) {
    return Response.json(
      {
        error:
          "Nombre, empresa, rol, email, tipo de producto y descripción son obligatorios.",
      },
      { status: 400 },
    );
  }

  if (typeof email !== "string" || !EMAIL_RE.test(email)) {
    return Response.json(
      { error: "Introduce un email válido." },
      { status: 400 },
    );
  }

  const safe = {
    name: escapeHtml(String(name)),
    company: escapeHtml(String(company)),
    role: escapeHtml(String(role)),
    email: escapeHtml(String(email)),
    website: website ? escapeHtml(String(website)) : "",
    productType: PRODUCT_TYPES[String(productType)] || escapeHtml(String(productType)),
    stack: stack ? escapeHtml(String(stack)) : "",
    deploymentModel: deploymentModel ? escapeHtml(String(deploymentModel)) : "",
    customerCount: customerCount ? escapeHtml(String(customerCount)) : "",
    description: escapeHtml(String(description)).replace(/\n/g, "<br />"),
  };

  const now = new Date().toLocaleString("es-ES", {
    timeZone: "Europe/Madrid",
    dateStyle: "full",
    timeStyle: "short",
  });

  const row = (label: string, value: string) =>
    `<tr><td style="padding: 8px 12px; border: 1px solid #e5e5e5; font-weight: 600;">${label}</td><td style="padding: 8px 12px; border: 1px solid #e5e5e5;">${value}</td></tr>`;

  try {
    // Internal notification — the lead.
    await resend.emails.send({
      from: "JaijTech <soporte@jaijtech.com>",
      to: "jaijtech@gmail.com",
      replyTo: safe.email,
      subject: "New Nexus Pilot Request",
      html: `
        <div style="font-family: system-ui, -apple-system, sans-serif; color: #1a1a1a;">
          <h2 style="margin-top: 0;">New Nexus Pilot Request</h2>
          <table style="border-collapse: collapse; width: 100%; max-width: 560px;">
            ${row("Name", safe.name)}
            ${row("Company", safe.company)}
            ${row("Role", safe.role)}
            ${row("Email", `<a href="mailto:${safe.email}">${safe.email}</a>`)}
            ${row("Website", safe.website || "N/A")}
            ${row("Product type", safe.productType)}
            ${row("Stack", safe.stack || "N/A")}
            ${row("Deployment model", safe.deploymentModel || "N/A")}
            ${row("Customer count", safe.customerCount || "N/A")}
            ${row("Date", now)}
          </table>
          <h3 style="margin-top: 24px;">Description</h3>
          <div style="padding: 16px; border: 1px solid #e5e5e5; border-radius: 8px; background: #fafafa; max-width: 560px;">
            ${safe.description}
          </div>
        </div>
      `,
    });

    // Acknowledgement to the requester — no ambiguous state.
    await resend.emails.send({
      from: "JaijTech <soporte@jaijtech.com>",
      to: safe.email,
      subject: "Hemos recibido tu solicitud de piloto — JaijTech",
      html: `
        <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 520px; margin: 0 auto; color: #1a1a1a;">
          <p style="font-size: 16px;">Hola ${safe.name},</p>
          <p>Hemos recibido tu solicitud para el programa de piloto de Nexus. Revisaremos tu caso y te contactaremos para concretar la conversación inicial.</p>
          <p>Mientras tanto, puedes leer el dossier técnico en
            <a href="https://jaijtech.com/dossier" style="color: #2563EB; text-decoration: none;">jaijtech.com/dossier</a>.
          </p>
          <br />
          <p>El equipo de JaijTech</p>
          <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 24px 0;" />
          <p style="font-size: 13px; color: #71717a;">
            <a href="https://jaijtech.com" style="color: #2563EB; text-decoration: none;">jaijtech.com</a>
            &nbsp;&middot;&nbsp;
            <a href="mailto:soporte@jaijtech.com" style="color: #2563EB; text-decoration: none;">soporte@jaijtech.com</a>
          </p>
        </div>
      `,
    });
  } catch {
    return Response.json(
      {
        error:
          "No hemos podido enviar tu solicitud. Inténtalo de nuevo o escríbenos a soporte@jaijtech.com.",
      },
      { status: 502 },
    );
  }

  return Response.json({ success: true });
}
