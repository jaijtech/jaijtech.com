import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pago confirmado",
};

export default function SuccessPage() {
  return (
    <section className="mx-auto max-w-md px-6 py-24 text-center">
      <div className="rounded-xl border border-border bg-surface p-8">
        <div className="text-5xl text-accent">&#10003;</div>
        <h1 className="mt-6 text-2xl font-bold">¡Pago confirmado!</h1>
        <p className="mt-4 text-muted">
          Tu suscripción está activa. Hemos enviado un email de confirmación con
          los detalles de acceso.
        </p>
        <div className="mt-8 space-y-3">
          <a
            href="https://docs.jaijtech.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent/90"
          >
            Ir a la documentación
          </a>
          <Link
            href="/"
            className="block rounded-lg border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-surface-bright"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </section>
  );
}
