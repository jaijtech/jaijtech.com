import { NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const { name, email, company, nif } = await request.json();

  if (!name || !email) {
    return Response.json(
      { error: "Nombre y email son obligatorios" },
      { status: 400 },
    );
  }

  await resend.emails.send({
    from: "jaijtech <info@jaijtech.com>",
    to: email,
    subject: "Bienvenido a jaijtech — Tu cuenta Sandbox está lista",
    html: `
      <h1>¡Bienvenido, ${name}!</h1>
      <p>Tu cuenta Sandbox de jaijtech está lista para usar.</p>
      <p>Empieza con la documentación:</p>
      <p><a href="https://docs.jaijtech.com">docs.jaijtech.com</a></p>
      <p>Instala el SDK:</p>
      <code>npm install @jaijtech/verifactu</code>
      <p>Si necesitas ayuda, escríbenos a <a href="mailto:info@jaijtech.com">info@jaijtech.com</a>.</p>
    `,
  });

  await resend.emails.send({
    from: "jaijtech <info@jaijtech.com>",
    to: "info@jaijtech.com",
    subject: `Nuevo registro Sandbox: ${name}`,
    html: `
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Empresa:</strong> ${company || "N/A"}</p>
      <p><strong>NIF:</strong> ${nif || "N/A"}</p>
    `,
  });

  return Response.json({ success: true });
}
