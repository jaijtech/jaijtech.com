import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Recursos de integración",
  description:
    "Recursos técnicos para evaluar e integrar Nexus: contrato de API, OpenAPI, el camino a una primera emisión en modo demo y el paquete de evaluación para socios. El producto es el runtime Nexus.",
};

// 2. API contract overview
const contract = [
  {
    title: "API HTTP local",
    body: "Hablas con el runtime por HTTP dentro de la red del cliente. Autenticación por clave del componente (cabecera X-Nexus-Key).",
  },
  {
    title: "Publicar y consultar",
    body: "Publicas lotes de registros (alta y anulación) y recibes un identificador de operación opaco. Consultas el estado hasta su estado terminal.",
  },
  {
    title: "Idempotencia",
    body: "Cada envío lleva una clave de idempotencia: reintentar nunca crea duplicados. La emisión es exactly-once efectiva.",
  },
  {
    title: "Se detiene de forma segura",
    body: "Si el runtime no puede aceptar trabajo de forma segura, responde con un error explícito y reintentable en lugar de descartar en silencio.",
  },
];

// 4. Partner evaluation package
const packageContents = [
  {
    name: "ERP Quickstart",
    body: "De cero a un primer envío contra el sandbox de la AEAT, paso a paso.",
  },
  {
    name: "Reference Integration",
    body: "El contrato completo: endpoints, esquemas, idempotencia, polling, patrón outbox y errores.",
  },
  {
    name: "Primera emisión",
    body: "El camino más corto a una operación aceptada, en modo demo, sin certificado ni AEAT.",
  },
  {
    name: "OpenAPI + esquemas",
    body: "Contrato OpenAPI 3.0, JSON Schemas y ejemplos para generar tu cliente.",
  },
  {
    name: "Evaluation Checklist",
    body: "Guía para que tu equipo evalúe el encaje técnico de forma estructurada.",
  },
  {
    name: "Pilot Guide + Troubleshooting",
    body: "Cómo se conduce el piloto y cómo diagnosticar las incidencias más comunes.",
  },
];

// 5. Integration flow
const flow = [
  {
    n: "01",
    title: "Despliega el runtime",
    body: "Nexus corre como un único contenedor con un volumen de datos local, dentro de la infraestructura del cliente.",
  },
  {
    n: "02",
    title: "Publica un lote",
    body: "Tu ERP envía el registro al endpoint local con una clave de idempotencia y tu propia referencia externa.",
  },
  {
    n: "03",
    title: "Consulta la operación",
    body: "Consultas por el identificador de operación o por tu referencia, hasta el estado terminal (aceptado / rechazado / fallido).",
  },
  {
    n: "04",
    title: "Guarda el resultado",
    body: "Guardas el resultado en tu factura. Tu ERP sigue siendo la fuente de la verdad.",
  },
];

// 6. Stacks
const stacks = [
  { name: "Java", body: "Cliente generable desde el contrato OpenAPI." },
  { name: ".NET", body: "Cliente generable desde el contrato OpenAPI." },
  { name: "PHP", body: "Cliente generable desde el contrato OpenAPI." },
  { name: "Python", body: "Cliente generable desde el contrato OpenAPI." },
];

// 7. FAQ
const faqs = [
  {
    q: "¿El producto es una librería o el runtime?",
    a: "El producto es Nexus, el runtime que se despliega e integra en tu producto. Los recursos de esta página (contrato de API, OpenAPI, ejemplos) son el punto de entrada técnico para integrarlo.",
  },
  {
    q: "¿Nexus es open source?",
    a: "No. Nexus se distribuye bajo un modelo source-available comercial: el código puede ponerse a disposición para inspección y auditoría durante la evaluación, pero la visibilidad no concede derechos. El acceso se hace a través del programa de piloto.",
  },
  {
    q: "¿Puedo probar sin certificado ni AEAT?",
    a: "Sí. El modo demo completa operaciones en local —sin certificado, sin AEAT, sin red— para que pruebes la integración de extremo a extremo. Después apuntas el mismo código al sandbox de la AEAT.",
  },
  {
    q: "¿Cómo obtengo el paquete y la imagen?",
    a: "El paquete de evaluación y la imagen del runtime se entregan dentro del programa de piloto, bajo un acuerdo de evaluación. No hay distribución pública.",
  },
];

export default function DevelopersPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="mx-auto max-w-3xl px-6 py-24">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          Recursos de integración
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
          Todo lo técnico para integrar Nexus
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          El producto es{" "}
          <Link href="/nexus" className="text-accent underline-offset-4 hover:underline">
            Nexus
          </Link>
          , el runtime que se despliega en la infraestructura de tu cliente.
          Esta página reúne los recursos para que tu equipo entienda el contrato,
          pruebe la integración y prepare un piloto.
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

      {/* 2. API contract overview */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              El contrato de API
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Una superficie pequeña y predecible. Integras contra el borde del
              runtime; sus internos quedan fuera de alcance.
            </p>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {contract.map((c) => (
              <div
                key={c.title}
                className="rounded-xl border border-border bg-background p-6"
              >
                <h3 className="text-lg font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-10 max-w-2xl">
            <pre className="overflow-x-auto rounded-xl border border-border bg-background p-5 font-mono text-xs leading-relaxed text-muted">
{`POST /v1/verifactu/alta        # Nexus, en la red de tu cliente
X-Nexus-Key: <clave-del-componente>
X-Idempotency-Key: ERP:INV-2026.0001
X-External-Reference: INV-2026.0001

{ "nifEmisor": "B12345674", "registros": [ … ] }

200 OK
{ "id": "op_…" }               # identificador de operación

GET /v1/operations/op_…        # consulta el estado terminal
{ "estado": "accepted", "externalReference": "INV-2026.0001" }

# Ejemplo ilustrativo. El contrato completo está en el OpenAPI.`}
            </pre>
          </div>
        </div>
      </section>

      {/* 3. OpenAPI + primera emisión */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-surface p-8">
            <h3 className="text-xl font-semibold">OpenAPI</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              El contrato está descrito en un fichero OpenAPI 3.0, acompañado de
              JSON Schemas y ejemplos de petición y respuesta. Genera tu cliente
              con tu herramienta habitual; el contrato es la fuente de la verdad
              de la integración. Se entrega en el paquete de evaluación.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-8">
            <h3 className="text-xl font-semibold">Primera emisión</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              El camino más corto desde &ldquo;tengo el paquete&rdquo; a
              &ldquo;veo una operación aceptada&rdquo;. Usa un modo demo que
              completa operaciones en local —sin certificado, sin AEAT, sin
              red— para que valides tu integración de extremo a extremo antes de
              apuntar al sandbox de la AEAT.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Partner evaluation package */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              El paquete de evaluación
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Lo que recibe el equipo de un partner para evaluar e integrar
              Nexus, entregado dentro del programa de piloto.
            </p>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {packageContents.map((p) => (
              <div
                key={p.name}
                className="rounded-xl border border-border bg-background p-6"
              >
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Integration flow */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Un flujo de integración de ejemplo
          </h2>
          <p className="mt-4 text-lg text-muted">
            Cuatro pasos, del despliegue al resultado guardado en tu factura.
          </p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {flow.map((s) => (
            <div
              key={s.n}
              className="rounded-xl border border-border bg-surface p-6"
            >
              <div className="font-mono text-sm text-accent">{s.n}</div>
              <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Stacks */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Cualquier stack
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              El contrato es HTTP + OpenAPI, así que generas un cliente en el
              lenguaje de tu producto.
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stacks.map((s) => (
              <div
                key={s.name}
                className="rounded-xl border border-border bg-background p-6"
              >
                <h3 className="text-lg font-semibold">{s.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-24">
        <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">
          Preguntas frecuentes
        </h2>
        <div className="mt-12 space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="rounded-xl border border-border bg-surface p-6"
            >
              <h3 className="font-semibold">{faq.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{faq.a}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/pilot"
            className="inline-block rounded-lg bg-accent px-8 py-3 text-base font-medium text-white transition-colors hover:bg-accent/90"
          >
            Solicitar un piloto
          </Link>
        </div>
      </section>
    </>
  );
}
