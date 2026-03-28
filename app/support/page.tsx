import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Soporte",
  description: "Canales de soporte del SDK @jaijtech/verifactu.",
};

export default function SupportPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          Soporte
        </h1>
        <p className="mt-4 text-lg text-muted">
          ¿Necesitas ayuda? Estamos aquí para ayudarte.
        </p>
      </div>
      <div className="mt-16 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-border bg-surface p-6">
          <h3 className="text-lg font-semibold">Documentación</h3>
          <p className="mt-2 text-sm text-muted">
            Guías, tutoriales y referencia de API completa.
          </p>
          <a
            href="https://docs.jaijtech.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm text-accent hover:underline"
          >
            docs.jaijtech.com &rarr;
          </a>
        </div>
        <div className="rounded-xl border border-border bg-surface p-6">
          <h3 className="text-lg font-semibold">Email</h3>
          <p className="mt-2 text-sm text-muted">
            Para consultas técnicas y comerciales.
          </p>
          <a
            href="mailto:info@jaijtech.com"
            className="mt-4 inline-block text-sm text-accent hover:underline"
          >
            info@jaijtech.com &rarr;
          </a>
        </div>
        <div className="rounded-xl border border-border bg-surface p-6">
          <h3 className="text-lg font-semibold">GitHub</h3>
          <p className="mt-2 text-sm text-muted">
            Issues, bugs y peticiones de funcionalidades.
          </p>
          <a
            href="https://github.com/jaijtech/verifactu"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm text-accent hover:underline"
          >
            github.com/jaijtech/verifactu &rarr;
          </a>
        </div>
        <div className="rounded-xl border border-border bg-surface p-6">
          <h3 className="text-lg font-semibold">npm</h3>
          <p className="mt-2 text-sm text-muted">
            Paquete oficial y changelog de versiones.
          </p>
          <a
            href="https://www.npmjs.com/package/@jaijtech/verifactu"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm text-accent hover:underline"
          >
            npmjs.com/@jaijtech/verifactu &rarr;
          </a>
        </div>
      </div>
      <div className="mt-16 rounded-xl border border-border bg-surface p-8 text-center">
        <h3 className="text-lg font-semibold">
          ¿Necesitas soporte Enterprise?
        </h3>
        <p className="mt-2 text-sm text-muted">
          SLA personalizado, soporte dedicado e integración on-premise.
        </p>
        <a
          href="mailto:info@jaijtech.com?subject=Consulta Enterprise"
          className="mt-6 inline-block rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent/90"
        >
          Contactar ventas
        </a>
      </div>
    </section>
  );
}
