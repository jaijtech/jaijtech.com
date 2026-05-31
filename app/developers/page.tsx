import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Para desarrolladores",
  description:
    "El punto de entrada técnico a Nexus: SDK y adapters para Java, .NET, PHP y Python, documentación y el futuro Developer Playground.",
};

export default function DevelopersPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
        Para desarrolladores
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-muted">
        El punto de entrada técnico a Nexus, para los equipos que evalúan el
        runtime. El SDK es el on-ramp al runtime, no un producto aparte.
      </p>

      <div className="mt-12 space-y-6">
        <div className="rounded-xl border border-border bg-surface p-6">
          <h2 className="text-lg font-semibold">SDK y adapters</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Adapters para Java, .NET, PHP y Python con la misma API del runtime.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-surface p-6">
          <h2 className="text-lg font-semibold">Documentación</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Guías de integración y referencia de la API del runtime.
          </p>
          <a
            href="https://docs.jaijtech.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm text-accent underline-offset-4 hover:underline"
          >
            docs.jaijtech.com →
          </a>
        </div>
        <div className="rounded-xl border border-border bg-surface p-6">
          <h2 className="text-lg font-semibold">
            Developer Playground{" "}
            <span className="ml-1 rounded-full border border-border px-2 py-0.5 text-xs font-normal text-muted">
              próximamente
            </span>
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Un entorno para probar el contrato de Nexus sin desplegar nada.
            Escríbenos para entrar en la lista.
          </p>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-4 sm:flex-row">
        <Link
          href="/pilot"
          className="rounded-lg bg-accent px-8 py-3 text-base font-medium text-white transition-colors hover:bg-accent/90"
        >
          Solicitar un piloto
        </Link>
        <Link
          href="/contacto"
          className="rounded-lg border border-border bg-surface px-8 py-3 text-base font-medium text-foreground transition-colors hover:bg-surface-bright"
        >
          Contactar
        </Link>
      </div>
    </section>
  );
}
