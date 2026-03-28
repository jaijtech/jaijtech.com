import { NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const { email } = await request.json();

  if (!email) {
    return Response.json({ error: "Email es obligatorio" }, { status: 400 });
  }

  await resend.emails.send({
    from: "jaijtech <info@jaijtech.com>",
    to: "info@jaijtech.com",
    subject: `Nueva solicitud de notificación: ${email}`,
    html: `
      <p>Un usuario quiere ser notificado cuando lancemos:</p>
      <p><strong>Email:</strong> ${email}</p>
    `,
  });

  return Response.json({ success: true });
}
