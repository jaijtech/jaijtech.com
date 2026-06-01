import type { Metadata } from "next";
import Link from "next/link";
import PilotForm from "./pilot-form";

export const metadata: Metadata = {
  title: "Programa de piloto",
  description:
    "Evalúa Nexus en tu propio entorno, con tu ERP y un caso real, antes de cualquier compromiso comercial. Programa de piloto para fabricantes e integradores de software.",
};

// Section 2 — Who should apply
const audienceFor = [
  {
    title: "Fabricantes de ERP",
    body: "Añadís VeriFactu a vuestro producto sin construir la capa fiscal desde cero.",
  },
  {
    title: "Fabricantes de TPV / POS",
    body: "Necesitáis emisión conforme en cada terminal, ejecutándose en local.",
  },
  {
    title: "ISVs / software houses",
    body: "Integráis una vez y desplegáis en toda vuestra base de clientes.",
  },
  {
    title: "Integradores de sistemas",
    body: "Desplegáis un runtime dentro de la infraestructura del cliente.",
  },
];

const audienceNotFor = [
  "Eres una empresa que solo quiere emitir sus propias facturas: necesitas un programa de facturación, no un runtime para integrar.",
  "Buscas una API cloud a la que enviar tus facturas: Nexus es deliberadamente lo contrario.",
  "No tienes un producto propio que emita facturas ni un equipo técnico que realice la integración.",
];

// Section 3 — Pilot process
const steps = [
  {
    n: "01",
    title: "Conversación inicial",
    body: "Revisamos tu caso, tu producto y el alcance del piloto. Confirmamos que hay encaje técnico.",
  },
  {
    n: "02",
    title: "Revisión de arquitectura",
    body: "Analizamos tu stack, el modelo de despliegue y dónde encaja el runtime en tu producto.",
  },
  {
    n: "03",
    title: "Despliegue en sandbox",
    body: "Desplegamos Nexus en un entorno de prueba contra el sandbox de la AEAT.",
  },
  {
    n: "04",
    title: "Integración",
    body: "Conectas tu ERP/TPV al runtime mediante el adapter de tu stack.",
  },
  {
    n: "05",
    title: "Validación",
    body: "Emites registros y validas el comportamiento de extremo a extremo.",
  },
  {
    n: "06",
    title: "Decisión comercial",
    body: "Con la evidencia del piloto, definimos la vía a producción y el licenciamiento OEM.",
  },
];

// Section 4 — What is included
const included = [
  {
    title: "Acompañamiento técnico",
    body: "Interlocución directa con nuestro equipo durante la integración.",
  },
  {
    title: "Asistencia en el despliegue",
    body: "Apoyo para desplegar el runtime en tu entorno de prueba.",
  },
  {
    title: "Revisión de integración",
    body: "Revisamos la integración con tu ERP/TPV y el uso del adapter.",
  },
  {
    title: "Soporte de validación",
    body: "Apoyo para validar la emisión contra el entorno de pruebas de la AEAT.",
  },
  {
    title: "Acceso al dossier técnico",
    body: "Arquitectura, modelo operativo y detalle de las validaciones realizadas.",
  },
];

// Section 5 — What we expect
const expectations = [
  {
    title: "Un interlocutor técnico",
    body: "Un arquitecto, líder técnico o desarrollador que conduzca la integración por tu parte.",
  },
  {
    title: "Un entorno de prueba",
    body: "Un entorno donde desplegar el runtime y ejecutar la integración.",
  },
  {
    title: "Esfuerzo de integración",
    body: "Tiempo de tu equipo para conectar tu producto al runtime.",
  },
  {
    title: "Un caso de uso real",
    body: "Un escenario representativo de cómo emitiríais en producción.",
  },
];

// Section 6 — Success criteria
const successCriteria = [
  "Despliegue del runtime completado en tu entorno.",
  "Primeros registros emitidos contra el entorno de pruebas de la AEAT.",
  "Validación de extremo a extremo correcta.",
  "Vía a producción identificada.",
];

// Section 7 — FAQ
const faqs = [
  {
    q: "¿Salen los datos de nuestra infraestructura?",
    a: "No. Nexus se ejecuta dentro de la red de tu cliente. Los datos fiscales y el certificado nunca salen de su infraestructura. JaijTech no toca los datos fiscales.",
  },
  {
    q: "¿Necesitamos nuestro propio certificado?",
    a: "Sí. El certificado (P12) del emisor permanece en su infraestructura. El runtime lo usa en local para firmar; no se transmite a terceros.",
  },
  {
    q: "¿Nexus está en la nube?",
    a: "No. Nexus es un runtime appliance local-first que se despliega en la infraestructura del cliente. No es una API cloud a la que se envían facturas.",
  },
  {
    q: "¿Cuánto dura un piloto?",
    a: "Depende del alcance de la integración y de la disponibilidad de tu equipo. Definimos el alcance juntos en la conversación inicial; no fijamos plazos que no podamos garantizar.",
  },
  {
    q: "¿Qué pasa después del piloto?",
    a: "Si la validación es correcta, identificamos la vía a producción y pasamos a una conversación de licenciamiento OEM. Durante el piloto no hay compromiso comercial.",
  },
];

export default function PilotPage() {
  return (
    <>
      {/* Section 1 — Pilot Program */}
      <section className="mx-auto max-w-3xl px-6 py-24">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          Programa de piloto
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
          Evalúa Nexus en tu propio entorno
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          Evalúa Nexus en tu propio entorno antes de cualquier compromiso
          comercial. El piloto está dirigido a fabricantes e integradores de
          software que emiten facturas y quieren integrar el runtime VeriFactu
          en su producto.
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted">
          El objetivo es comprobar, con tu ERP y un caso real, que Nexus se
          integra, se despliega y emite contra la AEAT en tu arquitectura. Al
          final tendrás evidencia concreta y una vía clara hacia el
          licenciamiento OEM.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#solicitud"
            className="rounded-lg bg-accent px-8 py-3 text-base font-medium text-white transition-colors hover:bg-accent/90"
          >
            Solicitar un piloto
          </a>
          <Link
            href="/dossier"
            className="rounded-lg border border-border bg-surface px-8 py-3 text-base font-medium text-foreground transition-colors hover:bg-surface-bright"
          >
            Leer el dossier técnico
          </Link>
        </div>
      </section>

      {/* Section 2 — Who should apply */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Para quién es
            </h2>
            <p className="mt-4 text-lg text-muted">
              Para equipos que construyen software que emite facturas.
            </p>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {audienceFor.map((a) => (
              <div
                key={a.title}
                className="flex gap-5 rounded-xl border border-border bg-background p-6"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {a.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-xl border border-border bg-background p-8">
            <h3 className="text-lg font-semibold">No es para ti si…</h3>
            <ul className="mt-4 space-y-3">
              {audienceNotFor.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 shrink-0 text-muted">—</span>
                  <span className="text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Section 3 — Pilot process */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            El proceso del piloto
          </h2>
          <p className="mt-4 text-lg text-muted">
            Seis etapas. El alcance y el ritmo se definen contigo.
          </p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((s) => (
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
        <p className="mt-8 text-center text-sm text-muted">
          No fijamos plazos que no podamos garantizar; la duración depende del
          alcance de la integración y de tu equipo.
        </p>
      </section>

      {/* Section 4 — What is included */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Qué incluye
            </h2>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {included.map((i) => (
              <div
                key={i.title}
                className="rounded-xl border border-border bg-background p-6"
              >
                <h3 className="text-lg font-semibold">{i.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {i.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — What we expect */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Qué esperamos de ti
          </h2>
          <p className="mt-4 text-lg text-muted">
            Un piloto es un trabajo conjunto. Esto es lo que necesitamos por tu
            parte.
          </p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {expectations.map((e) => (
            <div
              key={e.title}
              className="rounded-xl border border-border bg-surface p-6"
            >
              <h3 className="text-lg font-semibold">{e.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{e.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 6 — Success criteria */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-3xl px-6 py-24">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Criterios de éxito
            </h2>
            <p className="mt-4 text-lg text-muted">
              Un piloto se considera completado cuando:
            </p>
          </div>
          <div className="mt-12 rounded-xl border border-border bg-background p-8">
            <ul className="space-y-4">
              {successCriteria.map((c) => (
                <li key={c} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 shrink-0 text-accent">&#10003;</span>
                  <span className="text-muted">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Section 7 — FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Preguntas frecuentes
          </h2>
        </div>
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

      {/* Section 8 — Call to action + lead capture */}
      <section
        id="solicitud"
        className="border-t border-border bg-surface scroll-mt-16"
      >
        <div className="mx-auto max-w-3xl px-6 py-24">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Solicitar un piloto
            </h2>
            <p className="mt-4 text-lg text-muted">
              Cuéntanos sobre tu producto y tu stack. Revisamos tu caso y te
              contactamos para la conversación inicial.
            </p>
          </div>
          <div className="mt-12 rounded-xl border border-border bg-background p-8">
            <PilotForm />
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/dossier"
              className="text-sm text-accent underline-offset-4 hover:underline"
            >
              ¿Aún evaluando? Leer el dossier técnico →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
