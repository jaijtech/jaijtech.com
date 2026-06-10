import Link from "next/link";
import Image from "next/image";

// 2. Embed, don't send — SaaS / API cloud vs jaijtech runtime
const comparison = [
  {
    topic: "Ubicación de los datos",
    cloud: "En servidores de terceros",
    jaij: "En la red de tu cliente",
  },
  {
    topic: "Custodia del certificado",
    cloud: "La plataforma cloud",
    jaij: "Tu cliente, en su infraestructura",
  },
  {
    topic: "Firma y encadenado",
    cloud: "En la nube, tras enviar la factura",
    jaij: "En local, antes de salir de la red",
  },
  {
    topic: "Riesgo de cumplimiento",
    cloud: "Difuso entre las partes",
    jaij: "Lo asume el integrador, sobre un runtime validado",
  },
];

// 3. Nexus — three attributes
const pillars = [
  {
    title: "Local-first",
    body: "El runtime se ejecuta donde está el dato. Los datos fiscales y el certificado nunca salen de la red de tu cliente.",
  },
  {
    title: "Integrable",
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
    body: "jaijtech runtime corre como un contenedor dentro de la infraestructura de tu cliente. Sin dependencias externas.",
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
    name: "Emisión contra el sandbox de la AEAT",
    detail: "Emisión conforme contra el entorno oficial de pruebas de la AEAT.",
  },
  {
    name: "Respuestas adversas de la AEAT",
    detail: "Comportamiento ante respuestas y condiciones adversas de la AEAT.",
  },
  {
    name: "Atomicidad transaccional",
    detail: "Ningún registro queda a medias.",
  },
  {
    name: "Integridad en el arranque",
    detail: "Integridad del estado verificada en cada arranque.",
  },
  {
    name: "Fallo de almacenamiento",
    detail: "Comportamiento determinista ante fallo de almacenamiento.",
  },
  {
    name: "Bloqueo de instancia única",
    detail: "Una sola instancia escribe; sin doble emisión.",
  },
  {
    name: "Detección de desviación",
    detail: "Detección de desviación de estado y configuración.",
  },
  {
    name: "Límites de rendimiento",
    detail: "Límites de rendimiento medidos y conocidos.",
  },
  {
    name: "Estabilidad bajo carga prolongada",
    detail: "Estabilidad bajo carga sostenida prolongada.",
  },
  {
    name: "Revisión de preparación para piloto",
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
  "Modelo operativo: copia de seguridad, restauración y detección de desviaciones",
  "Envelope de rendimiento medido",
  "Proceso de piloto y licenciamiento OEM",
];

export default function Home() {
  return (
    <>
      {/* 1. Hero — cinematic security / data-sovereignty section */}
      <section id="producto" className="relative overflow-hidden bg-[#070d1a]">
        {/* Final composed hero artwork (lock + VeriFactu) as the background */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <Image
            src="/images/hero-security-verifactu.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="hero-bg object-cover object-center"
          />
          {/* Dark left-side gradient so the copy stays readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#070d1a] via-[#070d1a]/60 to-transparent" />
          {/* Mobile: extra veil so the artwork never fights the text */}
          <div className="absolute inset-0 bg-[#070d1a]/45 md:bg-transparent" />
          {/* Blend into the next section */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-black" />
        </div>

        {/* Content */}
        <div className="relative mx-auto flex min-h-[560px] max-w-6xl items-center px-6 py-20 md:min-h-[640px] md:py-28">
          <div className="w-full max-w-3xl">
            <h1 className="max-w-xl text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl">
              Tus datos permanecen{" "}
              <span className="text-accent">donde deben estar.</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/70">
              Tus facturas, certificados y evidencias fiscales permanecen en tu
              propia infraestructura,{" "}
              <span className="font-medium text-white">bajo tu control</span> y
              sin depender de servicios de terceros. Cumple VeriFactu sin ceder
              tus datos.
            </p>

            {/* Trust signals */}
            <ul className="mt-9 flex flex-col gap-4">
              {[
                {
                  label: "No custodiamos certificados",
                  // shield with check
                  icon: (
                    <>
                      <path d="M12 3 5 5.6v5.2c0 4.4 2.9 7.5 7 8.9 4.1-1.4 7-4.5 7-8.9V5.6L12 3z" />
                      <path d="m9.2 11.8 1.9 1.9 3.7-3.7" />
                    </>
                  ),
                },
                {
                  label: "No almacenamos tus facturas",
                  // data store, struck through
                  icon: (
                    <>
                      <ellipse cx="12" cy="6" rx="7" ry="2.6" />
                      <path d="M5 6v6c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6V6" />
                      <path d="M5 12v6c0 1.4 3.1 2.6 7 2.6 1.2 0 2.3-.1 3.3-.3" />
                      <path d="m4 3.5 16 17" />
                    </>
                  ),
                },
                {
                  label: "No dependes de la nube",
                  // cloud off
                  icon: (
                    <>
                      <path d="M6.5 18A4 4 0 0 1 6 10.1" />
                      <path d="M8.5 7.2A6 6 0 0 1 18 10.4a3.6 3.6 0 0 1 2.3 5.4" />
                      <path d="M9.5 18h7" />
                      <path d="m3 3.5 17.5 17.5" />
                    </>
                  ),
                },
              ].map((item) => (
                <li
                  key={item.label}
                  className="flex items-center gap-3 whitespace-nowrap text-sm font-medium text-[#D7F25B]"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent shadow-[0_0_24px_-8px_#2563eb]">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {item.icon}
                    </svg>
                  </span>
                  {item.label}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/pilot"
                className="rounded-lg bg-accent px-8 py-3 text-center text-base font-medium text-white transition-colors hover:bg-accent/90"
              >
                Solicitar un piloto
              </Link>
              <Link
                href="/dossier"
                className="rounded-lg border border-white/20 bg-white/5 px-8 py-3 text-center text-base font-medium text-white backdrop-blur transition-colors hover:bg-white/10"
              >
                Ver dossier técnico
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Embed, don't send */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Integra el runtime, no expongas los datos
            </h2>
            <p className="mx-auto mt-4 max-w-5xl text-lg text-muted">
              Otras soluciones Saas / APIs cloud de VeriFactu que puedes
              encontrar en el mercado mueven y procesan los datos de tus clientes
              en servidores de terceros, pierdes absolutamente su control.
            </p>
            <p className="mx-auto mt-5 max-w-5xl text-lg font-semibold text-white">
              jaijtech funciona al revés: se ejecuta donde están los datos en
              lugar de enviarlos a un servidor externo.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-[max-content_1fr_1fr] md:gap-x-5">
            {/* Topic labels — destacados en blanco, a la izquierda (desktop) */}
            <div className="hidden md:block">
              <div className="h-12" aria-hidden="true" />
              <div className="mt-3 rounded-2xl border-2 border-transparent p-6">
                {comparison.map((row) => (
                  <div
                    key={row.topic}
                    className="flex min-h-[64px] items-center justify-end border-b border-transparent py-2 last:border-0"
                  >
                    <span className="text-right text-sm font-semibold text-white">
                      {row.topic}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* jaijtech runtime — panel positivo (candado) */}
            <div>
              <div className="flex items-center gap-3">
                <div className="flex flex-1 items-center justify-between gap-3 rounded-full bg-accent px-6 py-3">
                  <span className="text-sm font-bold uppercase tracking-wide text-white md:text-base">
                    jaijtech runtime
                  </span>
                  <span className="h-px w-8 shrink-0 bg-white/50" />
                </div>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-accent/10 text-accent">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="5" y="11" width="14" height="9" rx="2" />
                    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                  </svg>
                </div>
              </div>
              <div className="mt-3 rounded-2xl border-2 border-accent/50 p-6">
                {comparison.map((row) => (
                  <div
                    key={row.topic}
                    className="flex min-h-[64px] flex-col justify-center border-b border-accent/15 py-2 last:border-0"
                  >
                    <span className="mb-0.5 text-xs font-semibold uppercase tracking-wide text-white md:hidden">
                      {row.topic}
                    </span>
                    <span className="text-sm font-semibold leading-snug text-accent">
                      {row.jaij}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* SaaS / API cloud — panel de aviso (warning) */}
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-yellow-400 bg-yellow-400/10 text-yellow-400">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h16.9a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" />
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                </div>
                <div className="flex flex-1 items-center justify-between gap-3 rounded-full bg-yellow-400 px-6 py-3">
                  <span className="h-px w-8 shrink-0 bg-black/30" />
                  <span className="text-sm font-bold uppercase tracking-wide text-[#1a1206] md:text-base">
                    SaaS / API cloud
                  </span>
                </div>
              </div>
              <div className="mt-3 rounded-2xl border-2 border-yellow-400/40 p-6">
                {comparison.map((row) => (
                  <div
                    key={row.topic}
                    className="flex min-h-[64px] flex-col justify-center border-b border-yellow-400/15 py-2 last:border-0"
                  >
                    <span className="mb-0.5 text-xs font-semibold uppercase tracking-wide text-white md:hidden">
                      {row.topic}
                    </span>
                    <span className="text-sm font-semibold leading-snug text-yellow-400">
                      {row.cloud}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Nexus introduction */}
      <section id="nexus" className="mx-auto max-w-6xl px-6 py-24">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            jaijtech runtime
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            Un runtime fiscal que despliegas dentro de tu producto
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted">
            jaijtech runtime es el componente que aporta el cumplimiento
            VeriFactu a tu producto, ejecutándose dentro de la infraestructura de
            tu cliente. Te evita construir y mantener esa capa por tu cuenta, sin
            convertir tu producto en algo dependiente de la nube.
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
            Conoce jaijtech runtime en detalle →
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
          {/* Adapter snippet */}
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
          <Link
            href="/developers"
            className="text-sm text-accent underline-offset-4 hover:underline"
          >
            Documentación técnica →
          </Link>
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
              Nexus está pensado para operarse en producción. Esto es lo que hemos validado.
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
              className="flex gap-5 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-6"
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
        <div className="mt-10 rounded-xl border border-rose-500/20 bg-rose-500/5 p-8">
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
              Al día con la normativa
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
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#D7F25B] [text-shadow:0_0_24px_rgba(215,242,91,0.25)] md:text-4xl">
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
            Los recursos técnicos para evaluar e integrar el runtime Nexus.
          </p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-border bg-surface p-6">
            <h3 className="text-lg font-semibold">Adapters de integración</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Adapters para Java, .NET, PHP y Python, todos sobre la misma API
              del runtime.
            </p>
            <Link
              href="/developers"
              className="mt-4 inline-block text-sm text-accent underline-offset-4 hover:underline"
            >
              Ver los recursos de integración →
            </Link>
          </div>
          <div className="rounded-xl border border-border bg-surface p-6">
            <h3 className="text-lg font-semibold">Documentación</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Guías de integración y referencia de la API del runtime.
            </p>
            <Link
              href="/developers"
              className="mt-4 inline-block text-sm text-accent underline-offset-4 hover:underline"
            >
              Documentación técnica →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
