import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const html = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>jaijtech — Próximamente</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: system-ui, -apple-system, sans-serif;
      background: #000;
      color: #fff;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 2rem;
      -webkit-font-smoothing: antialiased;
    }
    .container {
      max-width: 480px;
      width: 100%;
      text-align: center;
    }
    .logo {
      font-size: 1.5rem;
      font-weight: 700;
      letter-spacing: -0.025em;
      margin-bottom: 3rem;
    }
    .logo .ai { color: #2563EB; }
    h1 {
      font-size: 2.25rem;
      font-weight: 700;
      line-height: 1.2;
      letter-spacing: -0.025em;
      margin-bottom: 1rem;
    }
    .subtitle {
      color: #a1a1aa;
      font-size: 1.125rem;
      margin-bottom: 2.5rem;
    }
    .form-group {
      display: flex;
      gap: 0.5rem;
      margin-bottom: 1rem;
    }
    input[type="email"] {
      flex: 1;
      padding: 0.75rem 1rem;
      border-radius: 0.5rem;
      border: 1px solid #27272a;
      background: #0a0a0a;
      color: #fff;
      font-size: 0.875rem;
      outline: none;
      transition: border-color 0.2s;
    }
    input[type="email"]::placeholder { color: #a1a1aa; }
    input[type="email"]:focus { border-color: #2563EB; }
    button {
      padding: 0.75rem 1.5rem;
      border-radius: 0.5rem;
      border: none;
      background: #2563EB;
      color: #fff;
      font-size: 0.875rem;
      font-weight: 500;
      cursor: pointer;
      transition: background 0.2s;
      white-space: nowrap;
    }
    button:hover { background: #1d4ed8; }
    button:disabled { opacity: 0.5; cursor: not-allowed; }
    .message {
      font-size: 0.875rem;
      min-height: 1.25rem;
      margin-bottom: 2rem;
    }
    .message.success { color: #34d399; }
    .message.error { color: #f87171; }
    .cta-dev {
      font-size: 0.875rem;
      color: #a1a1aa;
      margin-bottom: 2rem;
    }
    .cta-dev a {
      color: #2563EB;
      text-decoration: none;
      transition: color 0.2s;
    }
    .cta-dev a:hover { color: #60a5fa; }
    footer {
      position: fixed;
      bottom: 2rem;
      color: #a1a1aa;
      font-size: 0.875rem;
    }
    footer a {
      color: #a1a1aa;
      text-decoration: none;
      transition: color 0.2s;
    }
    footer a:hover { color: #fff; }
    @media (max-width: 480px) {
      h1 { font-size: 1.75rem; }
      .form-group { flex-direction: column; }
      button { width: 100%; }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="logo">j<span class="ai">ai</span>jtech</div>
    <h1>Estamos preparando algo grande</h1>
    <p class="subtitle">SDK Verifactu AEAT &mdash; Próximamente</p>
    <form id="notify-form">
      <div class="form-group">
        <input
          type="email"
          name="email"
          placeholder="Avísame cuando esté listo"
          required
        />
        <button type="submit">Notificarme</button>
      </div>
      <div class="message" id="message"></div>
    </form>
    <p class="cta-dev">
      ¿Eres desarrollador? &rarr;
      <a href="/register">Solicita acceso anticipado al sandbox</a>
    </p>
  </div>
  <footer>
    <a href="mailto:soporte@jaijtech.com">soporte@jaijtech.com</a>
  </footer>
  <script>
    document.getElementById('notify-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = e.target.querySelector('button');
      const msg = document.getElementById('message');
      const email = e.target.email.value;
      btn.disabled = true;
      btn.textContent = 'Enviando...';
      msg.textContent = '';
      msg.className = 'message';
      try {
        const res = await fetch('/api/notify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        });
        if (!res.ok) throw new Error();
        msg.textContent = 'Te avisaremos cuando lancemos.';
        msg.className = 'message success';
        e.target.email.value = '';
      } catch {
        msg.textContent = 'Error al registrar. Inténtalo de nuevo.';
        msg.className = 'message error';
      } finally {
        btn.disabled = false;
        btn.textContent = 'Notificarme';
      }
    });
  </script>
</body>
</html>`;

export const config = {
  matcher: [
    "/((?!api|_next|favicon\\.ico|sitemap\\.xml|robots\\.txt|register|pricing|support|success|terms|privacy).*)",
  ],
};

export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/register", request.url), 302);
  }

  return new NextResponse(html, {
    status: 200,
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
