import { NextRequest } from "next/server";
import { Resend } from "resend";
import { getClientIp, rateLimit, checkDuplicate, markRegistered } from "@/lib/ratelimit";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);
  const { limited } = await rateLimit(ip, "/api/register", 3, 10 * 60 * 1000);
  if (limited) {
    return Response.json(
      { error: "Demasiados intentos. Espera 10 minutos antes de volver a intentarlo." },
      { status: 429 },
    );
  }

  const { name, email, company, nif } = await request.json();

  if (!name || !email) {
    return Response.json(
      { error: "Nombre y email son obligatorios" },
      { status: 400 },
    );
  }

  const isDuplicate = await checkDuplicate(email);
  if (isDuplicate) {
    return Response.json({
      success: true,
      message: "Ya hemos recibido tu solicitud. Te avisaremos pronto.",
    });
  }

  const now = new Date().toLocaleString("es-ES", {
    timeZone: "Europe/Madrid",
    dateStyle: "full",
    timeStyle: "short",
  });

  await resend.emails.send({
    from: "JaijTech <soporte@jaijtech.com>",
    to: email,
    subject: "Solicitud recibida — @jaijtech/verifactu",
    html: `
      <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 520px; margin: 0 auto; color: #1a1a1a;">
        <p style="font-size: 16px;">Hola ${name},</p>
        <p>Hemos recibido tu solicitud de acceso anticipado a <strong>@jaijtech/verifactu</strong>.</p>
        <p>Te avisaremos en cuanto el sandbox esté disponible.</p>
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
    subject: `Nuevo lead — ${name} (${company || "sin empresa"})`,
    html: `
      <div style="font-family: system-ui, -apple-system, sans-serif; color: #1a1a1a;">
        <h2 style="margin-top: 0;">Nuevo lead de acceso anticipado</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 480px;">
          <tr><td style="padding: 8px 12px; border: 1px solid #e5e5e5; font-weight: 600;">Nombre</td><td style="padding: 8px 12px; border: 1px solid #e5e5e5;">${name}</td></tr>
          <tr><td style="padding: 8px 12px; border: 1px solid #e5e5e5; font-weight: 600;">Email</td><td style="padding: 8px 12px; border: 1px solid #e5e5e5;"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding: 8px 12px; border: 1px solid #e5e5e5; font-weight: 600;">Empresa</td><td style="padding: 8px 12px; border: 1px solid #e5e5e5;">${company || "N/A"}</td></tr>
          <tr><td style="padding: 8px 12px; border: 1px solid #e5e5e5; font-weight: 600;">NIF/CIF</td><td style="padding: 8px 12px; border: 1px solid #e5e5e5;">${nif || "N/A"}</td></tr>
          <tr><td style="padding: 8px 12px; border: 1px solid #e5e5e5; font-weight: 600;">Fecha</td><td style="padding: 8px 12px; border: 1px solid #e5e5e5;">${now}</td></tr>
        </table>
      </div>
    `,
  });

  await markRegistered(email);

  return Response.json({ success: true });
}
