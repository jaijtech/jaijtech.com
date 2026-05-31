import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dossier técnico",
  description:
    "Arquitectura, modelo operativo y validaciones del runtime Nexus. Para responder, antes de hablar con nosotros, si Nexus encaja en tu arquitectura.",
};

const contents = [
  "Arquitectura del runtime y boundary de seguridad",
  "Modelo de datos y de emisión",
  "Detalle de las validaciones realizadas",
  "Modelo operativo: backup, restore y drift detection",
  "Envelope de rendimiento medido",
  "Proceso de piloto y licenciamiento OEM",
];

export default function DossierPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
        Dossier técnico
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-muted">
        Para responder, antes de hablar con nosotros, si Nexus encaja en tu
        arquitectura.
      </p>

      <div className="mt-10 rounded-xl border border-border bg-surface p-6">
        <h2 className="text-sm font-semibold text-muted">Qué contiene</h2>
        <ul className="mt-4 space-y-3">
          {contents.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm">
              <span className="mt-0.5 shrink-0 text-accent">&#8250;</span>
              <span className="text-muted">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-10 rounded-xl border border-border bg-surface p-6 text-sm text-muted">
        Estamos preparando el acceso al dossier. Escríbenos y te lo hacemos
        llegar indicando tu rol y tu producto.
      </p>

      <div className="mt-10">
        <Link
          href="/contacto"
          className="inline-block rounded-lg bg-accent px-8 py-3 text-base font-medium text-white transition-colors hover:bg-accent/90"
        >
          Solicitar el dossier
        </Link>
      </div>
    </section>
  );
}
