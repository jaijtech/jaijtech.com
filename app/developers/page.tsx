import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Para desarrolladores",
  description:
    "El punto de entrada técnico para evaluar JaijTech: SDK y adapters para Java, .NET, PHP y Python, documentación y el futuro Developer Playground. El runtime Nexus es el producto.",
};

// 3. Integration stacks
const stacks = [
  {
    name: "Java",
    body: "Adapter sobre la misma API del runtime.",
  },
  {
    name: ".NET",
    body: "Adapter sobre la misma API del runtime.",
  },
  {
    name: "PHP",
    body: "Adapter sobre la misma API del runtime.",
  },
  {
    name: "Python",
    body: "Adapter sobre la misma API del runtime.",
  },
];

// 4. Developer Playground tools (coming soon)
const playground = [
  {
    name: "VeriFactu XML Validator",
    body: "Valida la estructura de un registro VeriFactu sin desplegar nada.",
  },
  {
    name: "Hash Chain Explorer",
    body: "Inspecciona el encadenamiento y la huella de una secuencia de registros.",
  },
  {
    name: "Sandbox Playground",
    body: "Prueba el contrato del runtime contra un entorno de pruebas.",
  },
];

// 5. Technical evaluation path
const evaluationPath = [
  {
    n: "01",
    title: "Lee la documentación",
    body: "Entiende el modelo del runtime y el contrato de la API.",
  },
  {
    n: "02",
    title: "Inspecciona el SDK",
    body: "Revisa el adapter de tu stack y cómo conecta tu producto al runtime.",
  },
  {
    n: "03",
    title: "Lee el dossier técnico",
    body: "Arquitectura, evidencia de validación y limitaciones conocidas.",
  },
  {
    n: "04",
    title: "Solicita un piloto",
    body: "Evalúa Nexus en tu propio entorno con un caso real.",
  },
];

// 6. FAQ
const faqs = [
  {
    q: "¿El SDK es el producto?",
    a: "No. El producto es Nexus, el runtime que se despliega e integra en tu producto. El SDK y los adapters son el punto de entrada técnico para evaluarlo e integrarlo.",
  },
  {
    q: "¿Puedo usar el SDK sin Nexus?",
    a: "El SDK y los adapters están pensados para integrar el runtime Nexus en tu producto. Son la interfaz hacia el runtime, no un sustituto de él.",
  },
  {
    q: "¿Nexus es open source?",
    a: "No. Nexus es el runtime comercial y se distribuye bajo licenciamiento; durante esta fase, a través del programa de piloto.",
  },
  {
    q: "¿Puedo probar sin AEAT ni certificados?",
    a: "La evaluación inicial del contrato y del SDK no requiere certificados de producción. La emisión conforme se valida contra el entorno de pruebas de la AEAT durante el piloto.",
  },
  {
    q: "¿Cómo empiezo un piloto?",
    a: "Desde la página de piloto puedes enviarnos tu producto, tu stack y tu caso de uso. Revisamos el encaje técnico y concretamos la conversación inicial.",
  },
];

export default function DevelopersPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="mx-auto max-w-3xl px-6 py-24">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          Para desarrolladores
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
          El punto de entrada técnico para evaluar JaijTech
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          SDK, documentación y herramientas para que los equipos técnicos
          evalúen e integren el runtime. El SDK es el on-ramp; el producto es{" "}
          <Link href="/nexus" className="text-accent underline-offset-4 hover:underline">
            Nexus
          </Link>
          , el runtime que se despliega en la infraestructura de tu cliente.
        </p>
      </section>

      {/* 2. SDK */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-3xl px-6 py-24">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">SDK</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            El SDK es la interfaz de desarrollador hacia Nexus. Te permite
            conectar tu ERP, TPV o software de gestión al runtime y emitir
            registros VeriFactu a través de una API común.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-border bg-background p-6">
              <h3 className="text-lg font-semibold">Para qué sirve</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Integrar la emisión conforme en tu producto sin construir la capa
                fiscal: firma, encadenamiento y envío los resuelve el runtime.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-background p-6">
              <h3 className="text-lg font-semibold">Relación con Nexus</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                El SDK habla con el runtime Nexus, que se ejecuta dentro de la red
                del cliente. El SDK es el punto de entrada; Nexus es el producto.
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <a
              href="https://docs.jaijtech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline-offset-4 hover:underline"
            >
              Documentación →
            </a>
            <a
              href="https://www.npmjs.com/package/@jaijtech/verifactu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline-offset-4 hover:underline"
            >
              npm: @jaijtech/verifactu →
            </a>
            <a
              href="https://github.com/jaijtech/verifactu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline-offset-4 hover:underline"
            >
              GitHub →
            </a>
          </div>
        </div>
      </section>

      {/* 3. Integration stacks */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Stacks de integración
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Adapters para los lenguajes más habituales en software de gestión,
            todos sobre la misma API del runtime.
          </p>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stacks.map((s) => (
            <div
              key={s.name}
              className="rounded-xl border border-border bg-surface p-6"
            >
              <h3 className="text-lg font-semibold">{s.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Developer Playground */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Developer Playground
              </h2>
              <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted">
                Próximamente
              </span>
            </div>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Herramientas para explorar el contrato del runtime sin desplegar
              nada. Aún no están disponibles.
            </p>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {playground.map((p) => (
              <div
                key={p.name}
                className="rounded-xl border border-border bg-background p-6"
              >
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {p.body}
                </p>
                <span className="mt-4 inline-block text-xs font-medium uppercase tracking-widest text-muted">
                  Próximamente
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Technical evaluation path */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Cómo evaluar JaijTech
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Un camino sugerido, de la documentación al piloto.
          </p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {evaluationPath.map((step) => (
            <div
              key={step.n}
              className="rounded-xl border border-border bg-surface p-6"
            >
              <div className="font-mono text-sm text-accent">{step.n}</div>
              <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.body}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
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

      {/* 6. FAQ */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-3xl px-6 py-24">
          <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">
            Preguntas frecuentes
          </h2>
          <div className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-xl border border-border bg-background p-6"
              >
                <h3 className="font-semibold">{faq.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
