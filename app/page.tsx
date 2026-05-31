import Link from "next/link";

// 2. Embed, don't send — Cloud API vs Nexus runtime contrast
const contrast = [
  {
    axis: "Dónde viven los datos",
    cloud: "En servidores de terceros",
    nexus: "En la red de tu cliente",
  },
  {
    axis: "Quién custodia el certificado",
    cloud: "La plataforma cloud",
    nexus: "Tu cliente, en su infraestructura",
  },
  {
    axis: "Dónde ocurre firma y encadenado",
    cloud: "En la nube, tras enviar la factura",
    nexus: "En local, antes de salir de la red",
  },
  {
    axis: "Quién asume el riesgo de cumplimiento",
    cloud: "Difuso entre las partes",
    nexus: "Runtime validado que tú integras",
  },
];

// 3. Nexus — three attributes
const pillars = [
  {
    title: "Local-first",
    body: "El runtime se ejecuta donde está el dato. Los datos fiscales y el certificado nunca salen de la red de tu cliente.",
  },
  {
    title: "Embebible",
    body: "Un único componente, cualquier stack. Adapters para Java, .NET, PHP y Python con la misma API.",
  },
  {
    title: "Operable y probado",
    body: "Diagnósticos, backup y restore, detección de drift y validación documentada para producción.",
  },
];

// 4. How it embeds — three steps
const steps = [
  {
    n: "01",
    title: "Despliega el runtime",
    body: "Nexus corre como appliance dentro de la infraestructura de tu cliente. Sin dependencias externas.",
  },
  {
    n: "02",
    title: "Conéctalo a tu ERP",
    body: "Integra con el adapter de tu stack: Java, .NET, PHP o Python. La misma API en todos.",
  },
  {
    n: "03",
    title: "Emite directo a la AEAT",
    body: "Los registros se firman y encadenan en local y van directos a la AEAT desde la red de tu cliente.",
  },
];

// 6. Operability & proof — validation milestones (factual labels only)
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
    name: "GTX Atomicity Validation",
    detail: "Atomicidad transaccional: ningún registro queda a medias.",
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
    detail: "Garantía de instancia única; sin doble emisión.",
  },
  {
    name: "Drift Detection",
    detail: "Detección de desviación de estado y configuración.",
  },
  {
    name: "Performance Envelope Validation",
    detail: "Límites de rendimiento medidos y conocidos.",
  },
  {
    name: "Soak Testing",
    detail: "Estabilidad bajo carga sostenida prolongada.",
  },
  {
    name: "Pilot Readiness Review",
    detail: "Revisión formal de preparación para piloto.",
  },
];

// 7. Audience
const audienceFor = [
  {
    title: "Fabricantes de ERP",
    body: "Añade VeriFactu a tu producto sin construir la capa fiscal desde cero.",
  },
  {
    title: "Fabricantes de TPV",
    body: "Emisión conforme en cada terminal, ejecutándose en local.",
  },
  {
    title: "Software houses / ISVs",
    body: "Integra una vez y despliega en todos tus clientes.",
  },
  {
    title: "Integradores de sistemas",
    body: "Un runtime que despliegas dentro de la infraestructura del cliente.",
  },
];

const audienceNotFor = [
  "Eres una empresa que solo quiere emitir sus propias facturas: necesitas un programa de facturación, no un runtime para integrar.",
  "Buscas una API cloud a la que enviar tus facturas: Nexus es deliberadamente lo contrario.",
  "Quieres software de contabilidad o un portal de facturación para usuarios finales.",
];

// 8. Regulatory coverage
const regulations = [
  {
    title: "Ley Antifraude + RD 1007/2023",
    body: "El reglamento que obliga a los SIF a encadenar y firmar cada registro de facturación.",
  },
  {
    title: "Orden HAC/1177/2024",
    body: "Las especificaciones técnicas exactas que debe cumplir el software para emitir registros VeriFactu.",
  },
  {
    title: "Crea y Crece — Ley 18/2022",
    body: "La obligación de factura electrónica B2B que afecta a los fabricantes de software de gestión en España.",
  },
];

// 9. Pilot — qualification criteria
const pilotCriteria = [
  "Eres fabricante o integrador de software (ERP, TPV, ISV).",
  "Tienes un producto que emite facturas e integrarías Nexus en él.",
  "Cuentas con un entorno técnico y un interlocutor técnico (arquitecto o CTO).",
  "Tienes un horizonte real de despliegue con clientes.",
];

// 10. Dossier — what's inside
const dossierContents = [
  "Arquitectura del runtime y boundary de seguridad",
  "Modelo de datos y de emisión",
  "Detalle de las validaciones realizadas",
  "Modelo operativo: backup, restore y drift detection",
  "Envelope de rendimiento medido",
  "Proceso de piloto y licenciamiento OEM",
];

export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <section id="producto" className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          aria-hidden="true"
        >
          <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
        </div>
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="flex flex-col items-center text-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/Verifactu-logo.png"
              alt="VeriFactu"
              className="mb-8 h-14 w-auto"
            />
            <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
              El runtime VeriFactu que integras —{" "}
              <span className="text-accent">
                no la nube a la que envías facturas.
              </span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
              Infraestructura fiscal local-first para fabricantes de ERP, TPV y
              software de gestión. Nexus se ejecuta dentro de la infraestructura
              de tu cliente: los datos fiscales y el certificado nunca salen de
              su red.
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
            <Link
              href="/developers"
              className="mt-6 text-sm text-muted underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              SDK y herramientas para desarrolladores →
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Embed, don't send */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Integra el runtime, no envíes los datos
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
              Las APIs cloud de VeriFactu mueven los datos de tus clientes a
              servidores de terceros. Nexus invierte el modelo: el runtime va al
              dato, no el dato al runtime.
            </p>
          </div>
          <div className="mt-12 overflow-hidden rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-background">
                  <th className="px-5 py-3 text-left font-semibold"></th>
                  <th className="px-5 py-3 text-left font-semibold text-muted">
                    API cloud
                  </th>
                  <th className="px-5 py-3 text-left font-semibold text-accent">
                    Nexus runtime
                  </th>
                </tr>
              </thead>
              <tbody>
                {contrast.map((row) => (
                  <tr key={row.axis} className="border-b border-border last:border-0">
                    <td className="px-5 py-4 font-medium">{row.axis}</td>
                    <td className="px-5 py-4 text-muted">{row.cloud}</td>
                    <td className="px-5 py-4 text-foreground">{row.nexus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 3. Nexus introduction */}
      <section id="nexus" className="mx-auto max-w-6xl px-6 py-24">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Nexus Runtime
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            Un runtime fiscal que despliegas dentro de tu producto
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted">
            Nexus es un runtime appliance: un componente que despliegas dentro
            de la infraestructura de tu cliente y que emite, firma y encadena
            registros VeriFactu contra la AEAT, sin intermediarios. Implementar
            esa capa desde cero son meses de trabajo normativo y criptográfico
            que no diferencian tu producto. Nexus es esa capa, ya construida y
            validada.
          </p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="rounded-xl border border-border bg-surface p-6"
            >
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/nexus"
            className="text-sm text-accent underline-offset-4 hover:underline"
          >
            Conoce Nexus en detalle →
          </Link>
        </div>
      </section>

      {/* 4. How it embeds */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Cómo se integra
            </h2>
            <p className="mt-4 text-lg text-muted">
              Tres pasos para emitir el primer registro sin salir de la red de
              tu cliente.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n} className="rounded-xl border border-border bg-background p-8">
                <div className="font-mono text-sm text-accent">{s.n}</div>
                <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Technical contract */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            El contrato técnico
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            Una superficie pequeña y predecible. Ejemplos ilustrativos del
            modelo de integración; la referencia completa está en la
            documentación.
          </p>
        </div>
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {/* API contract */}
          <div className="rounded-xl border border-border bg-surface p-6">
            <h3 className="text-sm font-semibold text-muted">
              Contrato de API — runtime local
            </h3>
            <pre className="mt-4 overflow-x-auto rounded-lg border border-border bg-background p-4 font-mono text-xs leading-relaxed text-muted">
{`POST /v1/registros        # Nexus, en la red de tu cliente
{
  "tipo": "alta",
  "factura": {
    "nif_emisor": "...",
    "serie": "A",
    "numero": "2026/001",
    "fecha": "2026-06-01",
    "importe_total": 1210.00
  }
}

200 OK
{
  "huella": "3F2A…",            # hash encadenado
  "encadenamiento": "previo:…", # enlace con registro anterior
  "estado_aeat": "aceptado",
  "xml_firmado": "…XAdES-EPES…"
}`}
            </pre>
          </div>
          {/* SDK / adapter snippet */}
          <div className="rounded-xl border border-border bg-surface p-6">
            <h3 className="text-sm font-semibold text-muted">
              Adapter — misma operación desde tu stack
            </h3>
            <pre className="mt-4 overflow-x-auto rounded-lg border border-border bg-background p-4 font-mono text-xs leading-relaxed text-muted">
{`// Adapter .NET (ilustrativo)
var nexus = new NexusClient("http://localhost:8080");
var res = await nexus.RegistrarAltaAsync(factura);

Console.WriteLine(res.Huella);      // hash encadenado
Console.WriteLine(res.EstadoAeat);  // "aceptado"

// Firma XAdES-EPES y encadenado: en local,
// dentro de la red de tu cliente.`}
            </pre>
          </div>
        </div>
        {/* Architecture snippet */}
        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <h3 className="text-sm font-semibold text-muted">
            Dónde está el boundary
          </h3>
          <pre className="mt-4 overflow-x-auto rounded-lg border border-border bg-background p-4 font-mono text-xs leading-relaxed text-muted">
{`┌────────────── Red del cliente ──────────────┐
│                                               │
│   Tu ERP / TPV ──► Nexus runtime ──► AEAT     │
│                    (firma + encadenado        │
│                     + certificado P12)        │
│                                               │
└───────────────────────────────────────────────┘
    JaijTech: actualizaciones de normativa
    y validación · nunca toca los datos fiscales`}
          </pre>
        </div>
        <div className="mt-12 text-center">
          <a
            href="https://docs.jaijtech.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-accent underline-offset-4 hover:underline"
          >
            Ver documentación completa →
          </a>
        </div>
      </section>

      {/* 6. Operability & proof */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Operabilidad y validación
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
              Nexus se opera, no solo se instala. Esto es lo que hemos validado.
            </p>
          </div>
          <div className="mt-12 overflow-hidden rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-background">
                  <th className="px-5 py-3 text-left font-semibold">
                    Validación
                  </th>
                  <th className="px-5 py-3 text-left font-semibold">
                    Qué comprueba
                  </th>
                </tr>
              </thead>
              <tbody>
                {validations.map((v) => (
                  <tr
                    key={v.name}
                    className="border-b border-border last:border-0"
                  >
                    <td className="px-5 py-3 font-medium">{v.name}</td>
                    <td className="px-5 py-3 text-muted">{v.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-8 text-center text-sm text-muted">
            Validación interna documentada. Herramientas operativas para
            diagnosticar, respaldar y recuperar en producción: diagnósticos,
            backup &amp; restore, detección de drift y bloqueo de instancia
            única.
          </p>
          <div className="mt-8 text-center">
            <Link
              href="/dossier"
              className="text-sm text-accent underline-offset-4 hover:underline"
            >
              Leer el dossier técnico completo →
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Audience */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Para quién es
          </h2>
          <p className="mt-4 text-lg text-muted">
            Es para ti si construyes software que emite facturas.
          </p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {audienceFor.map((a) => (
            <div
              key={a.title}
              className="flex gap-5 rounded-xl border border-border bg-surface p-6"
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
        <div className="mt-10 rounded-xl border border-border bg-surface p-8">
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
      </section>

      {/* 8. Regulatory coverage */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Normativa siempre cubierta
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
              Monitorizamos la normativa de la AEAT. Los cambios llegan como
              actualizaciones del runtime, no como trabajo para tu equipo.
            </p>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {regulations.map((r) => (
              <div
                key={r.title}
                className="rounded-xl border border-border bg-background p-6"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {r.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Pilot program */}
      <section id="pilot" className="mx-auto max-w-6xl px-6 py-24">
        <div className="rounded-2xl border border-accent/30 bg-accent/5 p-10 md:p-14">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-accent">
                Programa de piloto
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
                Evalúa Nexus en tu propio entorno
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                Un piloto es la forma de evaluar Nexus con tu ERP y un caso
                real, antes de cualquier compromiso comercial.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                <span className="font-medium text-foreground">
                  Resultado esperado:
                </span>{" "}
                Nexus integrado en un entorno de prueba, emisión validada contra
                la AEAT y una vía clara hacia el licenciamiento OEM.
              </p>
              <div className="mt-8">
                <Link
                  href="/pilot"
                  className="inline-block rounded-lg bg-accent px-8 py-3 text-base font-medium text-white transition-colors hover:bg-accent/90"
                >
                  Solicitar un piloto
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-muted">
                Criterios de cualificación
              </h3>
              <ul className="mt-4 space-y-3">
                {pilotCriteria.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 shrink-0 text-accent">&#10003;</span>
                    <span className="text-muted">{c}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-muted">
                ¿Aún evaluando?{" "}
                <Link
                  href="/dossier"
                  className="text-accent underline-offset-4 hover:underline"
                >
                  Lee el dossier técnico
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Technical dossier */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Dossier técnico
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                Para responder, antes de hablar con nosotros, si Nexus encaja en
                tu arquitectura.
              </p>
              <div className="mt-8">
                <Link
                  href="/dossier"
                  className="inline-block rounded-lg border border-border bg-background px-8 py-3 text-base font-medium text-foreground transition-colors hover:bg-surface-bright"
                >
                  Acceder al dossier
                </Link>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-background p-6">
              <h3 className="text-sm font-semibold text-muted">Qué contiene</h3>
              <ul className="mt-4 space-y-3">
                {dossierContents.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 shrink-0 text-accent">&#8250;</span>
                    <span className="text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Developers */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Para desarrolladores
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            El punto de entrada técnico a Nexus, para los equipos que evalúan el
            runtime.
          </p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-border bg-surface p-6">
            <h3 className="text-lg font-semibold">SDK y adapters</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              El on-ramp para desarrolladores a Nexus: adapters para Java, .NET,
              PHP y Python con la misma API.
            </p>
            <Link
              href="/developers"
              className="mt-4 inline-block text-sm text-accent underline-offset-4 hover:underline"
            >
              Explorar el SDK →
            </Link>
          </div>
          <div className="rounded-xl border border-border bg-surface p-6">
            <h3 className="text-lg font-semibold">Documentación</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Guías de integración y referencia de la API del runtime.
            </p>
            <a
              href="https://docs.jaijtech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm text-accent underline-offset-4 hover:underline"
            >
              docs.jaijtech.com →
            </a>
          </div>
          <div className="rounded-xl border border-border bg-surface p-6">
            <h3 className="text-lg font-semibold">
              Developer Playground{" "}
              <span className="ml-1 rounded-full border border-border px-2 py-0.5 text-xs font-normal text-muted">
                próximamente
              </span>
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Un entorno para probar el contrato de Nexus sin desplegar nada.
            </p>
            <Link
              href="/developers"
              className="mt-4 inline-block text-sm text-accent underline-offset-4 hover:underline"
            >
              Apuntarse a la lista →
            </Link>
          </div>
        </div>
      </section>

      {/* 12. Final CTA band */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Integra un runtime fiscal probado
          </h2>
          <p className="mt-4 text-lg text-muted">
            Empieza con un piloto en tu propio entorno.
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
      </section>
    </>
  );
}
