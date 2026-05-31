import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nexus Runtime",
  description:
    "Nexus es un runtime appliance fiscal que despliegas dentro de la infraestructura de tu cliente: emisión, firma y encadenado VeriFactu en local, sin intermediarios.",
};

export default function NexusPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <p className="text-sm font-medium uppercase tracking-widest text-accent">
        Nexus Runtime
      </p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
        El runtime fiscal que integras en tu producto
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-muted">
        Nexus es un runtime appliance: un componente que despliegas dentro de la
        infraestructura de tu cliente y que emite, firma y encadena registros
        VeriFactu contra la AEAT, sin intermediarios. Local-first, embebible y
        validado para producción.
      </p>
      <p className="mt-10 rounded-xl border border-border bg-surface p-6 text-sm text-muted">
        Estamos ampliando esta página. Mientras tanto, el dossier técnico cubre
        la arquitectura, el modelo operativo y las validaciones realizadas.
      </p>
      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Link
          href="/pilot"
          className="rounded-lg bg-accent px-8 py-3 text-base font-medium text-white transition-colors hover:bg-accent/90"
        >
          Solicitar un piloto
        </Link>
        <Link
          href="/dossier"
          className="rounded-lg border border-border bg-surface px-8 py-3 text-base font-medium text-foreground transition-colors hover:bg-surface-bright"
        >
          Leer el dossier técnico
        </Link>
      </div>
    </section>
  );
}
