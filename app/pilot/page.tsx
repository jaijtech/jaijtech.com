import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Programa de piloto",
  description:
    "Evalúa Nexus en tu propio entorno, con tu ERP y un caso real, antes de cualquier compromiso comercial. Para fabricantes e integradores de software.",
};

const criteria = [
  "Eres fabricante o integrador de software (ERP, TPV, ISV).",
  "Tienes un producto que emite facturas e integrarías Nexus en él.",
  "Cuentas con un entorno técnico y un interlocutor técnico (arquitecto o CTO).",
  "Tienes un horizonte real de despliegue con clientes.",
];

export default function PilotPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <p className="text-sm font-medium uppercase tracking-widest text-accent">
        Programa de piloto
      </p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
        Evalúa Nexus en tu propio entorno
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-muted">
        Un piloto es la forma de evaluar Nexus con tu ERP y un caso real, antes
        de cualquier compromiso comercial. Al final tendrás Nexus integrado en un
        entorno de prueba, emisión validada contra la AEAT y una vía clara hacia
        el licenciamiento OEM.
      </p>

      <h2 className="mt-12 text-lg font-semibold">Criterios de cualificación</h2>
      <ul className="mt-4 space-y-3">
        {criteria.map((c) => (
          <li key={c} className="flex items-start gap-3 text-sm">
            <span className="mt-0.5 shrink-0 text-accent">&#10003;</span>
            <span className="text-muted">{c}</span>
          </li>
        ))}
      </ul>

      <div className="mt-12 rounded-xl border border-border bg-surface p-8 text-center">
        <h2 className="text-lg font-semibold">¿Encajas con el perfil?</h2>
        <p className="mt-2 text-sm text-muted">
          Cuéntanos sobre tu producto y tu stack. Te respondemos en menos de 24h
          laborables.
        </p>
        <Link
          href="/contacto"
          className="mt-6 inline-block rounded-lg bg-accent px-8 py-3 text-base font-medium text-white transition-colors hover:bg-accent/90"
        >
          Solicitar un piloto
        </Link>
      </div>
    </section>
  );
}
