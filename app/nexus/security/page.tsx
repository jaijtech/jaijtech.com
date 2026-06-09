import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Seguridad y confianza",
  description:
    "El modelo de confianza de Nexus para revisiones de seguridad de ERP: local-first, los datos fiscales y el certificado nunca salen de la red del cliente, sin telemetría ni phone-home, código source-available auditable y postura fail-closed.",
};

// 1. Trust properties — the headline guarantees
const properties = [
  {
    title: "Los datos fiscales no salen de la red del cliente",
    body: "La emisión, la firma y el encadenamiento ocurren en local. Las facturas, los NIFs y los importes no se transmiten a JaijTech en ningún momento.",
  },
  {
    title: "El certificado lo custodia el cliente",
    body: "El certificado del obligado tributario permanece en su infraestructura y el runtime lo usa en local. JaijTech nunca almacena, gestiona ni opera claves o certificados.",
  },
  {
    title: "Sin telemetría ni phone-home",
    body: "Nexus no emite telemetría, no llama a casa y no envía pings de licencia por defecto. Funciona aislado de la infraestructura de JaijTech.",
  },
  {
    title: "Código source-available y auditable",
    body: "El código puede ponerse a disposición del partner para inspección y auditoría como parte de la evaluación. La visibilidad permite la diligencia debida; no concede derechos sobre el software.",
  },
];

// 2. Trust boundary explanation
const boundaryPoints = [
  {
    title: "Dentro del límite (cliente)",
    body: "El ERP/TPV, el runtime Nexus, el certificado P12 y la comunicación con la AEAT. Todo el dato fiscal vive y se procesa aquí.",
  },
  {
    title: "Fuera del límite (JaijTech)",
    body: "Actualizaciones de normativa, validación y soporte L3 al equipo del partner. Nada fiscal cruza hacia JaijTech.",
  },
];

// 3. Posture
const posture = [
  {
    title: "Fail-closed",
    body: "Ante una situación incierta, el runtime prefiere rechazar trabajo antes que arriesgar un registro incorrecto, y deja constancia observable de por qué.",
  },
  {
    title: "Superficie de entrada mínima",
    body: "Una superficie de integración pequeña y predecible. Las acciones del operador se realizan desde el propio host, no por endpoints remotos.",
  },
  {
    title: "Secretos en local",
    body: "El material sensible permanece en la infraestructura del cliente. Los diagnósticos y los paquetes de soporte se diseñan para no exponer secretos.",
  },
];

// 4. Operability & evidence for a security review
const evidence = [
  {
    name: "Diagnósticos (doctor)",
    detail: "Verificación del estado del runtime y de su configuración, ejecutable por el operador.",
  },
  {
    name: "Support bundle",
    detail: "Recopilación estructurada de información de diagnóstico, diseñada para no incluir material sensible.",
  },
  {
    name: "Backup & restore",
    detail: "Respaldo y recuperación del estado del runtime como parte del ciclo de vida operativo.",
  },
  {
    name: "Detección de drift",
    detail: "Detección de desviación entre el estado esperado y el real.",
  },
];

// 5. Security expectations during evaluation/pilot
const evalExpectations = [
  "La evaluación y el piloto se realizan en un entorno de prueba / sandbox, contra el entorno de pruebas de la AEAT.",
  "El evaluador usa credenciales y certificados de sandbox propios; JaijTech no recibe certificados ni datos de producción.",
  "El acceso al código y a los materiales de evaluación se realiza bajo acuerdo de evaluación y confidencialidad.",
  "Para producción y redistribución se requiere un acuerdo de licencia OEM firmado.",
];

const faqs = [
  {
    q: "¿Qué datos fiscales recibe JaijTech?",
    a: "Ninguno. Nexus es local-first: las facturas, los NIFs, los importes y los certificados no se transmiten a JaijTech. JaijTech provee normativa, validación y soporte, fuera del límite de confianza del cliente.",
  },
  {
    q: "¿Hay un servicio cloud que pueda ser comprometido?",
    a: "No hay un servicio transaccional de JaijTech en la ruta de la factura. No existe una plataforma central que almacene o envíe las facturas del cliente, por lo que no hay esa clase de superficie que comprometer.",
  },
  {
    q: "¿Nexus se conecta a JaijTech para validar la licencia?",
    a: "No. El entitlement de licencia se verifica en local, basado en fichero, sin conexión saliente hacia JaijTech. Nexus puede funcionar aislado de la red de JaijTech.",
  },
  {
    q: "¿Podemos auditar el código antes de comprometernos?",
    a: "Sí. El modelo source-available existe precisamente para permitir la diligencia debida: el partner puede inspeccionar el código bajo el acuerdo de evaluación y confidencialidad. La visibilidad no concede derechos de uso, producción ni redistribución.",
  },
  {
    q: "¿Esto es una certificación de seguridad?",
    a: "No. Esta página describe el modelo de confianza y la validación técnica interna del producto. No constituye una certificación ni una homologación oficial de la AEAT ni de terceros.",
  },
];

export default function SecurityPage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-3xl px-6 py-24">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          Seguridad y confianza
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
          Diseñado para pasar la revisión de seguridad de un ERP
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          Nexus es local-first por diseño. El componente que embebes en tu
          producto se ejecuta dentro de la red de tu cliente, y el límite de
          confianza es su propia infraestructura: los datos fiscales y el
          certificado nunca salen de ella, y nada fiscal cruza hacia JaijTech.
        </p>
      </section>

      {/* 1. Trust properties */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Las garantías, en cuatro propiedades
            </h2>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {properties.map((p) => (
              <div
                key={p.title}
                className="rounded-xl border border-border bg-background p-6"
              >
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Trust boundary */}
      <section className="mx-auto max-w-3xl px-6 py-24">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          El límite de confianza
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          El runtime se sitúa entre tu producto y la AEAT, dentro de la red del
          cliente. JaijTech queda fuera de ese límite.
        </p>
        <pre className="mt-8 overflow-x-auto rounded-xl border border-border bg-surface p-5 font-mono text-xs leading-relaxed text-muted">
{`┌──────────────── Red del cliente ────────────────┐
│  (límite de confianza)                           │
│                                                  │
│     ERP / TPV  ──►  Nexus runtime  ──►  AEAT      │
│                     · firma + encadenado         │
│                     · certificado P12 (del       │
│                       obligado, en local)        │
│                                                  │
└──────────────────────────────────────────────────┘
   JaijTech: normativa + validación + soporte L3
   · fuera del límite · no accede a los datos fiscales`}
        </pre>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {boundaryPoints.map((b) => (
            <div
              key={b.title}
              className="rounded-xl border border-border bg-surface p-6"
            >
              <h3 className="text-lg font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {b.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Posture */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Postura de seguridad
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Un componente fiscal embebido debe fallar de forma segura.
            </p>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {posture.map((p) => (
              <div
                key={p.title}
                className="rounded-xl border border-border bg-background p-6"
              >
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Evidence / operability */}
      <section className="mx-auto max-w-3xl px-6 py-24">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Qué puede comprobar tu equipo
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          El runtime se opera, no solo se instala. Estas capacidades dan a tu
          equipo evidencia operativa durante la evaluación.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {evidence.map((e) => (
            <div
              key={e.name}
              className="rounded-xl border border-border bg-surface p-5"
            >
              <h3 className="font-semibold">{e.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {e.detail}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm leading-relaxed text-muted">
          La evidencia de validación publicada corresponde a validación técnica
          interna documentada. No constituye una certificación ni una
          homologación oficial de la AEAT ni de terceros. El detalle está en el{" "}
          <Link href="/dossier" className="text-accent underline-offset-4 hover:underline">
            dossier técnico
          </Link>
          .
        </p>
      </section>

      {/* 5. Evaluation expectations */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-3xl px-6 py-24">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Seguridad en la evaluación y el piloto
          </h2>
          <div className="mt-8 rounded-xl border border-border bg-background p-8">
            <ul className="space-y-4">
              {evalExpectations.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 shrink-0 text-accent">&#10003;</span>
                  <span className="text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
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
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-10 text-center md:p-14">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              ¿Lo evaluamos con tu equipo de seguridad?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
              El dossier técnico responde a la mayoría de las preguntas de una
              revisión; el piloto lo demuestra en tu propio entorno.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
