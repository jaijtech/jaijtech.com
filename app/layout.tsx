import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Script from "next/script";
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
          j<span className="text-accent">ai</span>jtech
        </Link>
        <div className="hidden items-center gap-6 sm:flex">
          <Link
            href="/pricing"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            Precios
          </Link>
          <span className="cursor-not-allowed text-sm text-muted/50">
            Soporte
          </span>
          <span className="cursor-not-allowed text-sm text-muted/50">
            Docs
          </span>
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
        <div className="flex flex-col items-center gap-4 text-sm text-muted">
          <div className="flex gap-4">
            <Link
              href="/terms"
              className="transition-colors hover:text-foreground"
            >
              Términos de servicio
            </Link>
            <Link
              href="/privacy"
              className="transition-colors hover:text-foreground"
            >
              Política de privacidad
            </Link>
          </div>
          <div>&copy; 2026 jaijtech. Todos los derechos reservados.</div>
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
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-5YCGN1NKVZ"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-5YCGN1NKVZ');
        `}
      </Script>
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
