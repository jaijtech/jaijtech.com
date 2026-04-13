"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Producto", anchor: "/#producto" },
  { href: "/pricing", label: "Pricing" },
];

export default function Header() {
  const pathname = usePathname();

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  const contactActive = pathname.startsWith("/contacto");

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-[#2D3748]">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/jaijtech-logo1.png"
            alt="JaijTech"
            className="h-9 w-auto"
          />
        </Link>
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.anchor ?? link.href}
              className={`border-b-2 pb-0.5 text-sm transition-colors ${
                isActive(link.href)
                  ? "border-accent text-white"
                  : "border-transparent text-muted hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://docs.jaijtech.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border-b-2 border-transparent pb-0.5 text-sm text-muted transition-colors hover:text-foreground"
          >
            Documentación
          </a>
          <Link
            href="/contacto"
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              contactActive
                ? "bg-accent text-white ring-2 ring-accent/50"
                : "bg-accent text-white hover:bg-accent/90"
            }`}
          >
            Contacto
          </Link>
        </div>
      </nav>
    </header>
  );
}
