import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Licenciamiento OEM",
  description:
    "Cómo funciona el licenciamiento OEM de Nexus: embeber y redistribuir el runtime VeriFactu en tu producto bajo acuerdo firmado. Modelo source-available comercial, licencia anual, camino evaluación → piloto → OEM. Sin tarifa pública.",
};

// 2. Who it's for
const audience = [
  {
    title: "Fabricantes de ERP",
    body: "Añadís VeriFactu a vuestro producto y lo desplegáis en toda vuestra base de clientes.",
  },
  {
    title: "Fabricantes de TPV / POS",
    body: "Emisión conforme en cada terminal, ejecutándose en local.",
  },
  {
    title: "ISVs / software houses",
    body: "Integráis una vez y redistribuís Nexus dentro de vuestro producto.",
  },
  {
    title: "Integradores de sistemas",
    body: "Desplegáis el runtime dentro de la infraestructura de cada cliente.",
  },
];

// 3. The path
const path = [
  {
    n: "01",
    title: "Evaluación",
    body: "Bajo un Acuerdo de Evaluación, inspeccionas el código y el contrato de integración en un entorno de prueba. Sin derechos de producción ni redistribución.",
  },
  {
    n: "02",
    title: "Piloto",
    body: "Integración de alcance fijo, acompañada, contra el sandbox de la AEAT, con criterios de éxito definidos. Tarifa fija, acreditable contra el primer año de licencia.",
  },
  {
    n: "03",
    title: "Licencia OEM",
    body: "Único título que habilita el uso en producción y los derechos de embeber y redistribuir Nexus en tu producto. Término anual, con mantenimiento normativo incluido.",
  },
];

// 4. What the license grants
const grants = [
  {
    title: "Embeber + redistribuir",
    body: "El derecho a integrar Nexus en tu producto y a desplegarlo en tus clientes. Estos derechos existen solo bajo un Acuerdo de Licencia OEM firmado.",
  },
  {
    title: "Uso en producción",
    body: "La producción requiere la licencia OEM. La evaluación y el piloto son siempre en entorno de prueba / sandbox.",
  },
  {
    title: "Mantenimiento normativo",
    body: "La adaptación a los cambios de normativa de la AEAT forma parte de la licencia; es el motor de la renovación anual.",
  },
];

// 6. Pricing logic (no numbers)
const pricingLogic = [
  {
    title: "Base anual por fabricante",
    body: "Una base de licencia anual por partner OEM, según el tamaño y el encaje. Es la capa de entrada.",
  },
  {
    title: "Escalado por NIF/año",
    body: "Un componente que escala con los obligados tributarios (NIFs) que tu producto sirve, autodeclarado, con derecho de auditoría. La misma unidad que el entitlement.",
  },
  {
    title: "Anclado en valor, no en volumen",
    body: "El precio refleja el coste de construcción que te ahorras y el riesgo normativo que asumimos por ti. Nunca hay comisión por factura ni por documento.",
  },
];

// 7. Support tiers (no SLA overclaim)
const supportTiers = [
  {
    title: "Standard",
    body: "Respuesta en horario laboral, mejor esfuerzo. Las actualizaciones de normativa van incluidas en la licencia.",
  },
  {
    title: "Priority",
    body: "Objetivos de tiempo de respuesta definidos, asistencia en actualizaciones e interlocutor nombrado.",
  },
];

// 8. What OEM licensing is NOT
const notList = [
  "No es un servicio fiscal gestionado: ningún servicio de JaijTech almacena ni envía tus facturas.",
  "No es una comisión por factura ni un modelo de pago por uso.",
  "No es asesoramiento fiscal ni una certificación oficial.",
  "No es una venta self-service: la relación se formaliza por acuerdo escrito.",
];

export default function OemPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="mx-auto max-w-3xl px-6 py-24">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          Licenciamiento OEM
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
          Embebe Nexus en tu producto bajo licencia OEM
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          El licenciamiento OEM es la forma en que los fabricantes de software
          integran Nexus en su producto y lo redistribuyen a sus clientes: una
          integración, muchos despliegues. Tú mantienes la relación con tu
          cliente; nosotros mantenemos la capa fiscal al día.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
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
            Hablar de licenciamiento OEM
          </Link>
        </div>
      </section>

      {/* 2. Who it's for */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Para quién es
            </h2>
            <p className="mt-4 text-lg text-muted">
              Para quien construye software que emite facturas y lo distribuye a
              muchos clientes.
            </p>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {audience.map((a) => (
              <div
                key={a.title}
                className="rounded-xl border border-border bg-background p-6"
              >
                <h3 className="text-lg font-semibold">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {a.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. The path */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            El camino: evaluación → piloto → OEM
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            Tres etapas. Solo la última habilita producción y redistribución.
          </p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {path.map((p) => (
            <div
              key={p.n}
              className="rounded-xl border border-border bg-surface p-6"
            >
              <div className="font-mono text-sm text-accent">{p.n}</div>
              <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Source-available + grants */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Modelo source-available comercial
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              El código puede ponerse a disposición para inspección y auditoría
              como parte de la evaluación. La{" "}
              <span className="font-medium text-foreground">visibilidad del
              código no concede derechos</span>: todos los derechos derivan del
              acuerdo escrito. No es software de código abierto.
            </p>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {grants.map((g) => (
              <div
                key={g.title}
                className="rounded-xl border border-border bg-background p-6"
              >
                <h3 className="text-lg font-semibold">{g.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {g.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Annual model */}
      <section className="mx-auto max-w-3xl px-6 py-24">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Licencia anual, no perpetua
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          El valor de Nexus incluye seguir el ritmo de los cambios de
          VeriFactu y de la AEAT. Una licencia perpetua sobre una versión de
          hoy sería un pasivo mañana. El término anual alinea el precio con ese
          valor renovable: la cobertura normativa va dentro de la licencia.
        </p>
      </section>

      {/* 6. Pricing logic */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Cómo se estructura el precio
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              La lógica, no las cifras. No publicamos una tarifa: el precio se
              acuerda en la conversación, anclado en el valor de cada caso.
            </p>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {pricingLogic.map((p) => (
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
          <div className="mx-auto mt-10 max-w-3xl rounded-xl border border-accent/30 bg-accent/5 p-6 text-sm leading-relaxed text-muted">
            <span className="font-medium text-foreground">
              La tarifa del piloto se acredita
            </span>{" "}
            contra el primer año de licencia OEM, de modo que el piloto acelera
            la decisión en lugar de bloquearla. Las cifras concretas (base,
            bandas y porcentaje de soporte) se definen en la conversación
            comercial, no aquí.
          </div>
        </div>
      </section>

      {/* 7. Support tiers */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Soporte
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            El soporte se estructura por capacidad de respuesta, no por uso. Los
            compromisos de respuesta se pactan en el acuerdo; JaijTech no aloja
            el software y no ofrece un SLA de servicio.
          </p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {supportTiers.map((t) => (
            <div
              key={t.title}
              className="rounded-xl border border-border bg-surface p-6"
            >
              <h3 className="text-lg font-semibold">{t.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{t.body}</p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-muted">
          El detalle de niveles y compromisos se concreta en el Acuerdo de
          Licencia OEM. Ver también el{" "}
          <Link href="/support" className="text-accent underline-offset-4 hover:underline">
            modelo de soporte
          </Link>
          .
        </p>
      </section>

      {/* 8. What it is NOT */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-3xl px-6 py-24">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Lo que el licenciamiento OEM no es
          </h2>
          <ul className="mt-8 space-y-3">
            {notList.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 shrink-0 text-muted">—</span>
                <span className="text-muted">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 9. CTA */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="rounded-2xl border border-accent/30 bg-accent/5 p-10 text-center md:p-14">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Hablemos de licenciamiento OEM
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            El piloto es el primer paso. Con su evidencia definimos la vía a
            producción y los términos OEM.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/pilot"
              className="rounded-lg bg-accent px-8 py-3 text-base font-medium text-white transition-colors hover:bg-accent/90"
            >
              Solicitar un piloto
            </Link>
            <Link
              href="/contacto"
              className="rounded-lg border border-border bg-background px-8 py-3 text-base font-medium text-foreground transition-colors hover:bg-surface-bright"
            >
              Contactar
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
