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
    default: "JaijTech — SDK Verifactu local-first",
    template: "%s | JaijTech",
  },
  description:
    "SDK Verifactu local-first para fabricantes de software. Tu certificado, tu servidor, tu control. Los datos de tus clientes nunca salen de tu infraestructura.",
  metadataBase: new URL("https://jaijtech.com"),
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://jaijtech.com",
    siteName: "JaijTech",
    title: "JaijTech — SDK Verifactu local-first",
    description:
      "SDK Verifactu local-first para fabricantes de software. Tu certificado, tu servidor, tu control.",
  },
};

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/jaijtech-logo2.png"
            alt="JaijTech"
            className="h-8 w-auto"
          />
          <span className="text-lg font-bold tracking-tight">JaijTech</span>
        </Link>
        <div className="hidden items-center gap-7 md:flex">
          <Link
            href="/#producto"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            Producto
          </Link>
          <Link
            href="/pricing"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            Pricing
          </Link>
          <a
            href="https://docs.jaijtech.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            Documentación
          </a>
          <Link
            href="/contacto"
            className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent/90"
          >
            Contacto
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
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-start md:justify-between">
          <div className="flex items-center gap-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/Verifactu-logo.png"
              alt="Verifactu"
              className="h-6 w-auto"
            />
            <span className="text-base font-semibold tracking-tight">
              JaijTech
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted">
            <a
              href="https://docs.jaijtech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              Documentación
            </a>
            <Link
              href="/contacto"
              className="transition-colors hover:text-foreground"
            >
              Contacto
            </Link>
            <a
              href="mailto:legal@jaijtech.com"
              className="transition-colors hover:text-foreground"
            >
              legal@jaijtech.com
            </a>
            <Link
              href="/terms"
              className="transition-colors hover:text-foreground"
            >
              Términos
            </Link>
            <Link
              href="/privacy"
              className="transition-colors hover:text-foreground"
            >
              Privacidad
            </Link>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-6 text-center text-xs text-muted">
          &copy; 2026 JaijTech
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
