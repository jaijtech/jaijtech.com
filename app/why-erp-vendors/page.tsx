import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Por qué los fabricantes de ERP eligen Nexus",
  description:
    "Por qué un fabricante de ERP integra Nexus en lugar de construir VeriFactu desde cero, usar una API cloud o un middleware genérico de e-invoicing: local-first, residencia del dato, una integración para muchos despliegues y cobertura normativa continua.",
};

// 2. Alternatives comparison
const comparison = [
  {
    axis: "Construirlo en casa",
    cost: "Meses de trabajo normativo y criptográfico que no diferencian tu producto, más mantenimiento perpetuo de cada cambio de la AEAT.",
    nexus: "Una capa ya construida y validada que integras; el mantenimiento normativo viaja en la licencia.",
  },
  {
    axis: "API cloud de VeriFactu",
    cost: "Los datos fiscales de tu cliente viajan a servidores de terceros y el proveedor entra en la ruta de envío; dependes de su disponibilidad.",
    nexus: "Emisión en local, dentro de la red de tu cliente, sin intermediario en la ruta.",
  },
  {
    axis: "Middleware genérico de e-invoicing",
    cost: "Amplio y poco profundo; VeriFactu es un protocolo con semántica de auditoría propia que un middleware genérico cubre de forma superficial.",
    nexus: "Profundidad en un único régimen (AEAT VeriFactu): encadenado, huella, taxonomía de errores y evidencia de sandbox.",
  },
];

// 3. Core reasons
const reasons = [
  {
    title: "Local-first y residencia del dato",
    body: "El runtime se ejecuta dentro de la red de tu cliente. Las facturas, los NIFs y los importes no salen de su infraestructura ni llegan a JaijTech.",
  },
  {
    title: "El certificado lo custodia el cliente",
    body: "El certificado del obligado tributario permanece en su poder. El runtime lo usa en local; JaijTech nunca lo almacena ni lo opera.",
  },
  {
    title: "Una integración → muchos despliegues",
    body: "Integras Nexus una sola vez en tu producto y lo redistribuyes a toda tu base de clientes bajo licencia OEM. Ese apalancamiento es el modelo.",
  },
  {
    title: "El riesgo normativo, fuera de tu plan",
    body: "Los cambios de la AEAT llegan como actualizaciones del runtime, parte de la licencia anual, en lugar de convertirse en trabajo recurrente para tu equipo.",
  },
];

// 5. Integration story (high level)
const integrationStory = [
  {
    n: "01",
    title: "Tu ERP sigue siendo la fuente de la verdad",
    body: "Nexus no se convierte en tu sistema de registro. Tu ERP conserva la factura; Nexus ejecuta su emisión fiscal y te devuelve el resultado.",
  },
  {
    n: "02",
    title: "Publicas con clave de idempotencia",
    body: "Desde tu patrón de outbox, envías el registro al runtime con una clave de idempotencia. Reintentar nunca duplica: la emisión es exactly-once efectiva.",
  },
  {
    n: "03",
    title: "Consultas el resultado y lo guardas",
    body: "Consultas la operación por su identificador o por tu propia referencia, y guardas el estado terminal en tu factura. Si el runtime no puede aceptar trabajo de forma segura, se detiene y lo indica de forma explícita en lugar de descartarlo en silencio.",
  },
];

// 6. Fit
const goodFit = [
  "ERP/TPV desplegados on-premise en casa del cliente.",
  "Modelo hosted-per-customer (una instancia por cliente).",
  "ERP verticales con una base de clientes definida.",
];

export default function WhyErpVendorsPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="mx-auto max-w-3xl px-6 py-24">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          Para fabricantes de ERP
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
          Por qué los fabricantes de ERP eligen Nexus
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          Hay tres formas habituales de resolver VeriFactu: construirlo desde
          cero, enviar los datos a una API cloud o usar un middleware genérico.
          Nexus es una cuarta vía: un runtime local-first que embebes en tu
          producto y que mantiene el dato fiscal donde debe estar.
        </p>
      </section>

      {/* 2. Comparison */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Frente a las alternativas
            </h2>
          </div>
          <div className="mt-12 overflow-hidden rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-background">
                  <th className="px-5 py-3 text-left font-semibold">
                    Alternativa
                  </th>
                  <th className="px-5 py-3 text-left font-semibold text-muted">
                    Su coste
                  </th>
                  <th className="px-5 py-3 text-left font-semibold text-accent">
                    Con Nexus
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr
                    key={row.axis}
                    className="border-b border-border last:border-0"
                  >
                    <td className="px-5 py-4 font-medium">{row.axis}</td>
                    <td className="px-5 py-4 text-muted">{row.cost}</td>
                    <td className="px-5 py-4 text-foreground">{row.nexus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 3. Core reasons */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Las razones de fondo
          </h2>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="rounded-xl border border-border bg-surface p-6"
            >
              <h3 className="text-lg font-semibold">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{r.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Integration story */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Cómo encaja en tu arquitectura
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              A alto nivel: tu ERP manda, Nexus ejecuta la emisión fiscal con
              garantías de consistencia.
            </p>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {integrationStory.map((s) => (
              <div
                key={s.n}
                className="rounded-xl border border-border bg-background p-6"
              >
                <div className="font-mono text-sm text-accent">{s.n}</div>
                <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/developers"
              className="text-sm text-accent underline-offset-4 hover:underline"
            >
              Ver los recursos de integración →
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Fit + honest caveat */}
      <section className="mx-auto max-w-3xl px-6 py-24">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Dónde encaja mejor
        </h2>
        <div className="mt-8 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-6">
          <h3 className="text-lg font-semibold">Buen encaje</h3>
          <ul className="mt-4 space-y-3">
            {goodFit.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 shrink-0 text-accent">&#10003;</span>
                <span className="text-muted">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <h3 className="text-lg font-semibold">
            Honestamente: SaaS multi-tenant
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Nexus es un runtime de instancia única por despliegue. Si tu ERP es
            un SaaS multi-tenant, servir a muchos obligados implica orquestar una
            flota de instancias, y la operación de flota a escala se apoya en una
            capa de supervisión (visibilidad y entitlements, nunca el dato
            fiscal). Es un encaje posible, pero lo decimos por adelantado: lo
            valoramos contigo en el piloto antes de cualquier compromiso.
          </p>
        </div>
      </section>

      {/* 7. CTA */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-10 text-center md:p-14">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Compruébalo en tu propio entorno
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
              El dossier responde a la evaluación técnica; el piloto lo demuestra
              con tu ERP. Y el licenciamiento OEM es la vía a producción.
            </p>
            <div className="mt-10 flex flex-col flex-wrap justify-center gap-4 sm:flex-row">
              <Link
                href="/pilot"
                className="rounded-lg bg-accent px-8 py-3 text-base font-medium text-white transition-colors hover:bg-accent/90"
              >
                Solicitar un piloto
              </Link>
              <Link
                href="/dossier"
                className="rounded-lg border border-border bg-background px-8 py-3 text-base font-medium text-foreground transition-colors hover:bg-surface-bright"
              >
                Leer el dossier técnico
              </Link>
              <Link
                href="/oem"
                className="rounded-lg border border-border bg-background px-8 py-3 text-base font-medium text-foreground transition-colors hover:bg-surface-bright"
              >
                Licenciamiento OEM
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
