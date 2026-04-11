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

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);
  const { limited } = await rateLimit(ip, "/api/contact", 3, 10 * 60 * 1000);
  if (limited) {
    return Response.json(
      {
        error:
          "Demasiados intentos. Espera 10 minutos antes de volver a intentarlo.",
      },
      { status: 429 },
    );
  }

  const { name, email, company, role, nifs, message } = await request.json();

  if (!name || !email || !message) {
    return Response.json(
      { error: "Nombre, email y mensaje son obligatorios" },
      { status: 400 },
    );
  }

  const safe = {
    name: escapeHtml(String(name)),
    email: escapeHtml(String(email)),
    company: company ? escapeHtml(String(company)) : "",
    role: role ? escapeHtml(String(role)) : "",
    nifs: nifs ? escapeHtml(String(nifs)) : "",
    message: escapeHtml(String(message)).replace(/\n/g, "<br />"),
  };

  const now = new Date().toLocaleString("es-ES", {
    timeZone: "Europe/Madrid",
    dateStyle: "full",
    timeStyle: "short",
  });

  await resend.emails.send({
    from: "JaijTech <soporte@jaijtech.com>",
    to: email,
    subject: "Hemos recibido tu mensaje — JaijTech",
    html: `
      <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 520px; margin: 0 auto; color: #1a1a1a;">
        <p style="font-size: 16px;">Hola ${safe.name},</p>
        <p>Hemos recibido tu mensaje y te responderemos en menos de 24h laborables.</p>
        <p>Mientras tanto, puedes consultar la documentación en
          <a href="https://docs.jaijtech.com" style="color: #2563EB; text-decoration: none;">docs.jaijtech.com</a>.
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

  await resend.emails.send({
    from: "JaijTech <soporte@jaijtech.com>",
    to: "jaijtech@gmail.com",
    replyTo: email,
    subject: `Nuevo contacto — ${safe.name} (${safe.company || "sin empresa"})`,
    html: `
      <div style="font-family: system-ui, -apple-system, sans-serif; color: #1a1a1a;">
        <h2 style="margin-top: 0;">Nuevo mensaje desde /contacto</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 520px;">
          <tr><td style="padding: 8px 12px; border: 1px solid #e5e5e5; font-weight: 600;">Nombre</td><td style="padding: 8px 12px; border: 1px solid #e5e5e5;">${safe.name}</td></tr>
          <tr><td style="padding: 8px 12px; border: 1px solid #e5e5e5; font-weight: 600;">Email</td><td style="padding: 8px 12px; border: 1px solid #e5e5e5;"><a href="mailto:${safe.email}">${safe.email}</a></td></tr>
          <tr><td style="padding: 8px 12px; border: 1px solid #e5e5e5; font-weight: 600;">Empresa</td><td style="padding: 8px 12px; border: 1px solid #e5e5e5;">${safe.company || "N/A"}</td></tr>
          <tr><td style="padding: 8px 12px; border: 1px solid #e5e5e5; font-weight: 600;">Rol</td><td style="padding: 8px 12px; border: 1px solid #e5e5e5;">${safe.role || "N/A"}</td></tr>
          <tr><td style="padding: 8px 12px; border: 1px solid #e5e5e5; font-weight: 600;">NIFs estimados</td><td style="padding: 8px 12px; border: 1px solid #e5e5e5;">${safe.nifs || "N/A"}</td></tr>
          <tr><td style="padding: 8px 12px; border: 1px solid #e5e5e5; font-weight: 600;">Fecha</td><td style="padding: 8px 12px; border: 1px solid #e5e5e5;">${now}</td></tr>
        </table>
        <h3 style="margin-top: 24px;">Mensaje</h3>
        <div style="padding: 16px; border: 1px solid #e5e5e5; border-radius: 8px; background: #fafafa;">
          ${safe.message}
        </div>
      </div>
    `,
  });

  return Response.json({ success: true });
}
