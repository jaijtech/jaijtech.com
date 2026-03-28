import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "jaijtech — SDK Verifactu para facturación electrónica",
    template: "%s | jaijtech",
  },
  description:
    "SDK TypeScript para Verifactu AEAT. Facturación electrónica española con firma XAdES-EPES, SHA-256, QR normativo y soporte completo del Anexo II.",
  metadataBase: new URL("https://jaijtech.com"),
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://jaijtech.com",
    siteName: "jaijtech",
    title: "jaijtech — SDK Verifactu para facturación electrónica",
    description:
      "SDK TypeScript para Verifactu AEAT. Facturación electrónica española.",
  },
};

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="text-xl font-bold tracking-tight">
          jaijtech
        </Link>
        <div className="hidden items-center gap-6 sm:flex">
          <Link
            href="/pricing"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            Precios
          </Link>
          <Link
            href="/support"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            Soporte
          </Link>
          <a
            href="https://docs.jaijtech.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            Docs
          </a>
          <Link
            href="/pricing"
            className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent/90"
          >
            Empezar gratis
          </Link>
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-3 text-sm font-semibold">Producto</h3>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <Link
                  href="/pricing"
                  className="transition-colors hover:text-foreground"
                >
                  Precios
                </Link>
              </li>
              <li>
                <a
                  href="https://docs.jaijtech.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-foreground"
                >
                  Documentación
                </a>
              </li>
              <li>
                <Link
                  href="/register"
                  className="transition-colors hover:text-foreground"
                >
                  Registro
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold">Recursos</h3>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <a
                  href="https://www.npmjs.com/package/@jaijtech/verifactu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-foreground"
                >
                  npm
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/jaijtech/verifactu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-foreground"
                >
                  GitHub
                </a>
              </li>
              <li>
                <Link
                  href="/support"
                  className="transition-colors hover:text-foreground"
                >
                  Soporte
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <Link
                  href="/terms"
                  className="transition-colors hover:text-foreground"
                >
                  Términos de servicio
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="transition-colors hover:text-foreground"
                >
                  Política de privacidad
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold">Contacto</h3>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <a
                  href="mailto:info@jaijtech.com"
                  className="transition-colors hover:text-foreground"
                >
                  info@jaijtech.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted">
          &copy; 2026 jaijtech. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
