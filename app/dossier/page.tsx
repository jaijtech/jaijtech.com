import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dossier técnico",
  description:
    "Dossier técnico de Nexus: arquitectura, evidencia de validación, preparación operativa y limitaciones conocidas. Para evaluar, antes de hablar con nosotros, si Nexus encaja en tu arquitectura.",
};

// Section navigation
const toc = [
  { id: "resumen", label: "1. Resumen ejecutivo" },
  { id: "producto", label: "2. Visión de producto" },
  { id: "problema", label: "3. Planteamiento del problema" },
  { id: "arquitectura", label: "4. Arquitectura" },
  { id: "validacion", label: "5. Evidencia de validación" },
  { id: "operativa", label: "6. Preparación operativa" },
  { id: "limitaciones", label: "7. Limitaciones conocidas" },
  { id: "piloto", label: "8. Propuesta de piloto" },
  { id: "por-que", label: "9. Por qué Nexus" },
  { id: "estado", label: "10. Estado actual" },
  { id: "nota", label: "11. Nota sobre el alcance" },
];

// Section 5 — Validation evidence
const validations = [
  {
    name: "AEAT Sandbox Validation",
    detail: "Emisión conforme contra el entorno oficial de pruebas de la AEAT.",
  },
  {
    name: "AEAT Adversarial Validation",
    detail: "Comportamiento ante respuestas y condiciones adversas de la AEAT.",
  },
  {
    name: "Property-based testing",
    detail: "Propiedades del sistema verificadas con entradas generadas automáticamente.",
  },
  {
    name: "GTX Atomicity Validation",
    detail: "Atomicidad transaccional: ningún registro queda en estado parcial.",
  },
  {
    name: "Startup Integrity Validation",
    detail: "Integridad del estado verificada en cada arranque.",
  },
  {
    name: "Storage Failure Validation",
    detail: "Comportamiento determinista ante fallo de almacenamiento.",
  },
  {
    name: "Single-Instance Lock Validation",
    detail: "Garantía de instancia única; sin doble emisión concurrente.",
  },
  {
    name: "Performance Envelope Validation",
    detail: "Límites de rendimiento medidos y conocidos en el entorno de prueba.",
  },
  {
    name: "Soak Testing",
    detail: "Estabilidad bajo carga sostenida prolongada.",
  },
];

// Section 6 — Operational readiness
const tooling = [
  {
    name: "Doctor / diagnósticos",
    detail: "Comando de diagnóstico que verifica el estado del runtime y su configuración.",
  },
  {
    name: "Backup & restore",
    detail: "Respaldo y recuperación del estado del runtime.",
  },
  {
    name: "Paquete de diagnóstico",
    detail: "Recopilación estructurada de información para el diagnóstico de incidencias.",
  },
  {
    name: "Drift Detection",
    detail: "Detección de desviación entre el estado esperado y el real.",
  },
];

// Section 7 — Known limitations
const limitations = [
  {
    title: "En fase de piloto",
    body: "Nexus está en programa de piloto, no en disponibilidad general. La integración se realiza de forma acompañada.",
  },
  {
    title: "Validación interna, no certificación legal",
    body: "La evidencia de este dossier corresponde a validación técnica interna. No constituye una certificación ni homologación oficial.",
  },
  {
    title: "No somos colaborador social de la AEAT",
    body: "JaijTech no actúa como colaborador social ni como representante ante la AEAT. La emisión la realiza el propio obligado tributario desde su infraestructura.",
  },
  {
    title: "Funcionalidad B9.2 diferida",
    body: "El alcance B9.2 está diferido fuera del piloto actual y no forma parte de la evidencia presentada.",
  },
  {
    title: "Soporte de piloto liderado por el equipo fundador",
    body: "Durante el piloto, el soporte técnico lo presta directamente el equipo fundador.",
  },
  {
    title: "Distribución directa del runtime",
    body: "El runtime se distribuye de forma directa durante el piloto; no hay imagen pública publicada en un registro abierto.",
  },
];

// Section 9 — Why Nexus
const whyNexus = [
  {
    title: "Local-first por diseño",
    body: "El runtime se ejecuta donde está el dato. Los datos fiscales y el certificado no salen de la red del cliente.",
  },
  {
    title: "Integrable en tu producto",
    body: "Un único componente con adapters para Java, .NET, PHP y Python sobre la misma API.",
  },
  {
    title: "Operable y validado",
    body: "Diagnósticos, backup/restore, detección de drift y un cuerpo de validación documentado.",
  },
];

export default function DossierPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-24">
      {/* Header */}
      <p className="text-sm font-medium uppercase tracking-widest text-accent">
        Dossier técnico
      </p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
        Nexus Runtime — evaluación técnica
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-muted">
        Este documento existe para responder, antes de hablar con nosotros, si
        Nexus encaja en tu arquitectura. Está dirigido a CTOs, arquitectos de
        software y directores técnicos de fabricantes de ERP/TPV e integradores.
        Lenguaje técnico, evidencia documentada, sin afirmaciones de marketing.
      </p>

      {/* Disclaimer banner */}
      <div className="mt-8 rounded-xl border border-accent/30 bg-accent/5 p-5 text-sm leading-relaxed text-muted">
        <span className="font-medium text-foreground">Alcance de la evidencia:</span>{" "}
        las validaciones descritas corresponden a{" "}
        <span className="font-medium text-foreground">validación técnica interna</span>.
        No constituyen una certificación ni una homologación oficial de la AEAT
        ni de ningún tercero.
      </div>

      {/* Table of contents */}
      <nav className="mt-10 rounded-xl border border-border bg-surface p-6">
        <h2 className="text-sm font-semibold text-muted">Contenido</h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {toc.map((t) => (
            <li key={t.id}>
              <a
                href={`#${t.id}`}
                className="text-sm text-muted underline-offset-4 transition-colors hover:text-foreground hover:underline"
              >
                {t.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* 1. Executive summary */}
      <section id="resumen" className="mt-16 scroll-mt-20">
        <h2 className="text-2xl font-bold tracking-tight">
          1. Resumen ejecutivo
        </h2>
        <p className="mt-4 leading-relaxed text-muted">
          Nexus es un componente fiscal que los fabricantes de software
          integran en su producto para emitir registros VeriFactu. Se ejecuta
          dentro de la infraestructura del cliente: la emisión, la firma
          XAdES-EPES y el encadenamiento ocurren en local, y los datos fiscales
          no salen de su red. El runtime cuenta con un cuerpo de validación
          técnica interna y herramientas operativas (diagnósticos, backup/restore,
          detección de drift). Actualmente está en programa de piloto.
        </p>
      </section>

      {/* 2. Product overview */}
      <section id="producto" className="mt-12 scroll-mt-20">
        <h2 className="text-2xl font-bold tracking-tight">
          2. Visión de producto
        </h2>
        <p className="mt-4 leading-relaxed text-muted">
          Nexus no es una API cloud a la que se envían facturas, ni un programa
          de facturación para usuarios finales. Es infraestructura: un componente
          que el fabricante de ERP, TPV o software de gestión despliega dentro de
          la infraestructura de su cliente y conecta a su producto mediante un
          adapter. Los adapters (Java, .NET, PHP, Python) son la vía de
          integración con el runtime.
        </p>
      </section>

      {/* 3. Problem statement */}
      <section id="problema" className="mt-12 scroll-mt-20">
        <h2 className="text-2xl font-bold tracking-tight">
          3. Planteamiento del problema
        </h2>
        <p className="mt-4 leading-relaxed text-muted">
          VeriFactu obliga a los sistemas de facturación a firmar y encadenar
          cada registro conforme a la Ley Antifraude, el RD 1007/2023 y la Orden
          HAC/1177/2024. Implementar esa capa desde cero implica trabajo
          normativo y criptográfico recurrente que no diferencia el producto del
          fabricante. Las alternativas cloud resuelven el cumplimiento moviendo
          los datos fiscales del cliente a servidores de terceros, lo que traslada
          un problema de soberanía del dato.
        </p>
      </section>

      {/* 4. Architecture summary */}
      <section id="arquitectura" className="mt-12 scroll-mt-20">
        <h2 className="text-2xl font-bold tracking-tight">4. Arquitectura</h2>
        <p className="mt-4 leading-relaxed text-muted">
          El runtime se despliega en la red del cliente. El ERP/TPV se comunica
          con él a través del adapter; el runtime firma y encadena el registro y
          lo envía a la AEAT desde la propia red del cliente. JaijTech provee
          actualizaciones de normativa y validación, pero no interviene en el
          flujo de datos fiscales.
        </p>
        <pre className="mt-6 overflow-x-auto rounded-lg border border-border bg-surface p-4 font-mono text-xs leading-relaxed text-muted">
{`┌────────────── Red del cliente ──────────────┐
│                                               │
│   ERP / TPV ──► Nexus runtime ──► AEAT        │
│                 (firma XAdES-EPES             │
│                  + encadenado                 │
│                  + certificado P12)           │
│                                               │
└───────────────────────────────────────────────┘
   JaijTech: normativa + validación
   · no toca los datos fiscales`}
        </pre>
      </section>

      {/* 5. Validation evidence */}
      <section id="validacion" className="mt-12 scroll-mt-20">
        <h2 className="text-2xl font-bold tracking-tight">
          5. Evidencia de validación
        </h2>
        <p className="mt-4 leading-relaxed text-muted">
          Validación técnica interna documentada. Cada entrada describe qué
          comprueba; no se publican métricas ni se afirma certificación externa.
        </p>
        <div className="mt-6 overflow-hidden rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-surface">
                <th className="px-5 py-3 text-left font-semibold">Validación</th>
                <th className="px-5 py-3 text-left font-semibold">
                  Qué comprueba
                </th>
              </tr>
            </thead>
            <tbody>
              {validations.map((v) => (
                <tr key={v.name} className="border-b border-border last:border-0">
                  <td className="px-5 py-3 font-medium">{v.name}</td>
                  <td className="px-5 py-3 text-muted">{v.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 6. Operational readiness */}
      <section id="operativa" className="mt-12 scroll-mt-20">
        <h2 className="text-2xl font-bold tracking-tight">
          6. Preparación operativa
        </h2>
        <p className="mt-4 leading-relaxed text-muted">
          El runtime incluye herramientas para diagnosticar, respaldar y
          recuperar en producción.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {tooling.map((t) => (
            <div
              key={t.name}
              className="rounded-xl border border-border bg-surface p-5"
            >
              <h3 className="font-semibold">{t.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {t.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Known limitations */}
      <section id="limitaciones" className="mt-12 scroll-mt-20">
        <h2 className="text-2xl font-bold tracking-tight">
          7. Limitaciones conocidas
        </h2>
        <p className="mt-4 leading-relaxed text-muted">
          Lo que Nexus aún no es, dicho de forma explícita.
        </p>
        <div className="mt-6 space-y-3">
          {limitations.map((l) => (
            <div
              key={l.title}
              className="rounded-xl border border-border bg-surface p-5"
            >
              <h3 className="font-semibold">{l.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{l.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Pilot proposal */}
      <section id="piloto" className="mt-12 scroll-mt-20">
        <h2 className="text-2xl font-bold tracking-tight">
          8. Propuesta de piloto
        </h2>
        <p className="mt-4 leading-relaxed text-muted">
          El piloto permite evaluar Nexus con tu ERP y un caso real, en tu propio
          entorno, antes de cualquier compromiso comercial. Se considera completado
          cuando el runtime está desplegado en tu entorno, se han emitido los
          primeros registros contra el entorno de pruebas de la AEAT, la validación
          de extremo a extremo es correcta y existe una vía a producción identificada.
        </p>
        <div className="mt-6">
          <Link
            href="/pilot"
            className="inline-block rounded-lg bg-accent px-8 py-3 text-base font-medium text-white transition-colors hover:bg-accent/90"
          >
            Solicitar un piloto
          </Link>
        </div>
      </section>

      {/* 9. Why Nexus */}
      <section id="por-que" className="mt-12 scroll-mt-20">
        <h2 className="text-2xl font-bold tracking-tight">9. Por qué Nexus</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {whyNexus.map((w) => (
            <div
              key={w.title}
              className="rounded-xl border border-border bg-surface p-5"
            >
              <h3 className="font-semibold">{w.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{w.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 10. Current status */}
      <section id="estado" className="mt-12 scroll-mt-20">
        <h2 className="text-2xl font-bold tracking-tight">10. Estado actual</h2>
        <p className="mt-4 leading-relaxed text-muted">
          Nexus se encuentra en programa de piloto. Ha completado el cuerpo de
          validación técnica interna descrito en la sección 5 y una revisión
          formal de preparación para piloto (Pilot Readiness Review). El soporte
          durante el piloto lo presta el equipo fundador. No hay disponibilidad
          general ni distribución pública del runtime en esta fase.
        </p>
      </section>

      {/* 11. Constraints note */}
      <section id="nota" className="mt-12 scroll-mt-20">
        <h2 className="text-2xl font-bold tracking-tight">
          11. Nota sobre el alcance
        </h2>
        <p className="mt-4 leading-relaxed text-muted">
          Este dossier describe validación técnica interna y el alcance del
          programa de piloto. No constituye una certificación, homologación ni
          asesoramiento legal, ni afirma despliegues en producción, clientes,
          métricas de rendimiento publicadas ni endosos de terceros. Cualquier
          dato presentado se limita a lo verificado internamente en entornos de
          prueba.
        </p>
      </section>

      {/* CTA footer */}
      <div className="mt-16 rounded-2xl border border-accent/30 bg-accent/5 p-8 text-center">
        <h2 className="text-2xl font-bold tracking-tight">
          ¿Encaja Nexus en tu arquitectura?
        </h2>
        <p className="mt-3 text-muted">
          Evalúalo en tu propio entorno con un piloto.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/pilot"
            className="rounded-lg bg-accent px-8 py-3 text-base font-medium text-white transition-colors hover:bg-accent/90"
          >
            Solicitar un piloto
          </Link>
          <Link
            href="/developers"
            className="rounded-lg border border-border bg-background px-8 py-3 text-base font-medium text-foreground transition-colors hover:bg-surface-bright"
          >
            Para desarrolladores
          </Link>
        </div>
      </div>
    </article>
  );
}
