import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Soporte",
  description:
    "Soporte de JaijTech para equipos de ERP y partners: soporte técnico L3 al equipo del integrador y acompañamiento durante el piloto. El fabricante mantiene el soporte L1/L2 de sus clientes finales.",
};

// Support model — who supports whom
const model = [
  {
    title: "JaijTech → equipo del partner",
    body: "Damos soporte técnico de tercer nivel (L3) al equipo de ingeniería del fabricante o integrador: cuestiones del runtime, del contrato de integración y del protocolo.",
  },
  {
    title: "Partner → sus clientes finales",
    body: "El fabricante o integrador mantiene la relación y el soporte de primer y segundo nivel (L1/L2) de sus propios clientes. JaijTech no presta soporte directo al usuario final.",
  },
  {
    title: "Durante el piloto",
    body: "El soporte lo presta directamente el equipo fundador, en interlocución técnica directa, durante la integración y la validación contra el entorno de pruebas de la AEAT.",
  },
];

// What's in scope / out of scope
const inScope = [
  "Comportamiento del runtime y del contrato de la API.",
  "Integración mediante los adapters y el modelo de despliegue.",
  "Diagnóstico técnico con el comando doctor y el paquete de diagnóstico.",
  "Errores del runtime y consultas sobre el protocolo VeriFactu.",
];

const outOfScope = [
  "Interpretación fiscal, contable o legal de una operación: JaijTech no presta asesoramiento fiscal ni legal.",
  "Representación ante la AEAT: JaijTech no es colaborador social; la emisión la realiza el obligado tributario.",
  "Operación del software por cuenta del cliente: no operamos un servicio fiscal gestionado.",
];

export default function SupportPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          Soporte para partners
        </h1>
        <p className="mt-4 text-lg text-muted">
          Apoyamos a los equipos técnicos que integran Nexus. El soporte es un
          modelo por niveles, no un servicio alojado.
        </p>
      </div>

      {/* Support model */}
      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {model.map((m) => (
          <div
            key={m.title}
            className="rounded-xl border border-border bg-surface p-6"
          >
            <h2 className="text-base font-semibold">{m.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{m.body}</p>
          </div>
        ))}
      </div>

      {/* Boundaries */}
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-6">
          <h3 className="text-lg font-semibold">Qué cubre el soporte</h3>
          <ul className="mt-4 space-y-3">
            {inScope.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 shrink-0 text-accent">&#10003;</span>
                <span className="text-muted">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-rose-500/20 bg-rose-500/5 p-6">
          <h3 className="text-lg font-semibold">Qué queda fuera</h3>
          <ul className="mt-4 space-y-3">
            {outOfScope.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 shrink-0 text-muted">—</span>
                <span className="text-muted">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Maintenance vs support note */}
      <div className="mt-10 rounded-xl border border-border bg-surface p-6 text-sm leading-relaxed text-muted">
        <span className="font-medium text-foreground">
          Mantenimiento normativo y soporte son cosas distintas.
        </span>{" "}
        La adaptación a los cambios de normativa de la AEAT forma parte de la
        licencia (es el motor de la renovación anual). El soporte añade{" "}
        <span className="font-medium text-foreground">capacidad de respuesta</span>{" "}
        al equipo del partner. Cualquier compromiso de tiempos de respuesta se
        pacta en el acuerdo aplicable y se refiere a respuesta, no a la
        disponibilidad de un servicio operado por JaijTech: JaijTech no aloja el
        software y no ofrece un SLA de servicio.
      </div>

      {/* Channels */}
      <div className="mt-16 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-border bg-surface p-6">
          <h3 className="text-lg font-semibold">Documentación técnica</h3>
          <p className="mt-2 text-sm text-muted">
            Guías de integración y referencia del contrato del runtime.
          </p>
          <Link
            href="/developers"
            className="mt-4 inline-block text-sm text-accent hover:underline"
          >
            Documentación técnica &rarr;
          </Link>
        </div>
        <div className="rounded-xl border border-border bg-surface p-6">
          <h3 className="text-lg font-semibold">Contacto directo</h3>
          <p className="mt-2 text-sm text-muted">
            Para consultas técnicas y comerciales del equipo del partner.
          </p>
          <a
            href="mailto:info@jaijtech.com"
            className="mt-4 inline-block text-sm text-accent hover:underline"
          >
            info@jaijtech.com &rarr;
          </a>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 rounded-2xl border border-accent/30 bg-accent/5 p-8 text-center">
        <h3 className="text-lg font-semibold">¿Evaluando Nexus para tu producto?</h3>
        <p className="mt-2 text-sm text-muted">
          El soporte de integración se presta dentro del programa de piloto.
        </p>
        <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/pilot"
            className="rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent/90"
          >
            Solicitar un piloto
          </Link>
          <Link
            href="/dossier"
            className="rounded-lg border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface-bright"
          >
            Leer el dossier técnico
          </Link>
        </div>
      </div>
    </section>
  );
}
