import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Script from "next/script";
import Header from "./header";
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
    default:
      "SDK Verifactu local-first para fabricantes de ERP en España | JaijTech",
    template: "%s | JaijTech",
  },
  description:
    "SDK Verifactu local-first para fabricantes de ERP, TPV y software de gestión en España. Tu certificado, tu servidor, tu control. Datos fiscales que nunca salen de tu infraestructura.",
  metadataBase: new URL("https://jaijtech.com"),
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://jaijtech.com",
    siteName: "JaijTech",
    title:
      "SDK Verifactu local-first para fabricantes de ERP en España | JaijTech",
    description:
      "SDK Verifactu local-first para fabricantes de ERP, TPV y software de gestión en España. Tu certificado, tu servidor, tu control. Datos fiscales que nunca salen de tu infraestructura.",
  },
};

function Footer() {
  return (
    <footer className="border-t border-border bg-[#2D3748]">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center gap-6">
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
              href="mailto:info@jaijtech.com"
              className="transition-colors hover:text-foreground"
            >
              info@jaijtech.com
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
