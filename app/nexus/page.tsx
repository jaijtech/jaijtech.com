import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nexus Runtime",
  description:
    "Nexus es un runtime appliance fiscal local-first que los fabricantes de ERP, TPV y software de gestión integran en su producto: emisión, firma y encadenado VeriFactu dentro de la red del cliente, sin intermediarios.",
};

// 1. What is Nexus — attributes
const attributes = [
  {
    title: "Runtime appliance",
    body: "Un componente ejecutable que despliegas dentro de la infraestructura de tu cliente, no un servicio al que te conectas.",
  },
  {
    title: "Local-first",
    body: "La emisión, la firma XAdES-EPES y el encadenamiento ocurren en local. Los datos fiscales y el certificado no salen de la red del cliente.",
  },
  {
    title: "Embebible",
    body: "Se integra en tu ERP, TPV o software de gestión mediante un adapter, sobre una API común a todos los lenguajes.",
  },
  {
    title: "Operable",
    body: "Incluye diagnósticos, backup/restore, support bundle y detección de drift para operarlo en producción.",
  },
];

// 2. Why Nexus exists — the problem beyond XML
const problemAspects = [
  {
    title: "Certificados",
    body: "Custodia y uso del certificado del obligado tributario para firmar en local.",
  },
  {
    title: "Envío a la AEAT",
    body: "Comunicación conforme con los servicios de la AEAT desde la red del cliente.",
  },
  {
    title: "Reintentos",
    body: "Gestión de reintentos y errores de envío sin duplicar ni perder registros.",
  },
  {
    title: "Diagnóstico",
    body: "Herramientas para entender el estado del runtime cuando algo falla.",
  },
  {
    title: "Operación",
    body: "Backup, restauración y arranque íntegro como parte del ciclo de vida.",
  },
  {
    title: "Drift y soportabilidad",
    body: "Detección de desviación de estado y recopilación de información de soporte.",
  },
];

// 5. Integration
const integration = [
  {
    title: "SDK y adapters",
    body: "Adapters oficiales para Java, .NET, PHP y Python, todos sobre la misma API del runtime.",
  },
  {
    title: "Contrato de API",
    body: "Una superficie pequeña y predecible: registras un alta y recibes la huella encadenada, el estado AEAT y el XML firmado.",
  },
  {
    title: "Sin reescribir tu producto",
    body: "El adapter conecta tu lógica de facturación existente al runtime; no impone tu arquitectura.",
  },
];

// 6. Operational capabilities
const operations = [
  {
    name: "Diagnósticos / doctor",
    detail: "Comando que verifica el estado del runtime y su configuración.",
  },
  {
    name: "Backup",
    detail: "Respaldo del estado del runtime.",
  },
  {
    name: "Restore",
    detail: "Recuperación del estado a partir de un respaldo.",
  },
  {
    name: "Support bundle",
    detail: "Recopilación estructurada de información para diagnosticar incidencias.",
  },
  {
    name: "Drift detection",
    detail: "Detección de desviación entre el estado esperado y el real.",
  },
];

// 7. Validation evidence (documented facts only)
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
    detail: "Atomicidad transaccional: ningún registro queda en estado parcial.",
  },
  {
    name: "Storage Failure Validation",
    detail: "Comportamiento determinista ante fallo de almacenamiento.",
  },
  {
    name: "OPS-01",
    detail: "Validación de las capacidades operativas del runtime.",
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

// 9. FAQ
const faqs = [
  {
    q: "¿Nexus está en la nube?",
    a: "No. Nexus es un runtime appliance local-first que se despliega en la infraestructura del cliente. No es una API cloud a la que se envían facturas.",
  },
  {
    q: "¿Salen los datos de nuestra infraestructura?",
    a: "No. El runtime se ejecuta dentro de la red del cliente. Los datos fiscales y el certificado nunca salen de su infraestructura. JaijTech no toca los datos fiscales.",
  },
  {
    q: "¿Necesitamos nuestro propio certificado?",
    a: "Sí. El certificado (P12) del obligado tributario permanece en su infraestructura y el runtime lo usa en local para firmar; no se transmite a terceros.",
  },
  {
    q: "¿Se puede embeber en nuestro producto?",
    a: "Sí. Esa es su razón de ser: se integra en tu ERP, TPV o software de gestión mediante un adapter para Java, .NET, PHP o Python sobre la misma API.",
  },
  {
    q: "¿Está listo para producción?",
    a: "Nexus está en programa de piloto y cuenta con validación técnica interna documentada y una revisión de preparación para piloto. No constituye una certificación ni una homologación oficial; el camino a producción se define en el piloto.",
  },
];

export default function NexusPage() {
  return (
    <>
      {/* Hero / 1. What is Nexus */}
      <section id="que-es" className="relative overflow-hidden">
        <div className="mx-auto max-w-3xl px-6 py-24">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Nexus Runtime
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            El runtime VeriFactu que integras en tu producto
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Nexus es un runtime appliance fiscal: un componente que los
            fabricantes de ERP, TPV y software de gestión despliegan dentro de la
            infraestructura de su cliente y que emite, firma y encadena registros
            VeriFactu contra la AEAT, sin intermediarios.
          </p>
        </div>
        <div className="border-t border-border bg-surface">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {attributes.map((a) => (
                <div
                  key={a.title}
                  className="rounded-xl border border-border bg-background p-6"
                >
                  <h2 className="text-lg font-semibold">{a.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {a.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Why Nexus exists */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Por qué existe Nexus
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            VeriFactu no es solo generar un XML. Cumplir de forma fiable implica
            resolver, y operar en el tiempo, un conjunto de problemas que no
            diferencian tu producto.
          </p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {problemAspects.map((p) => (
            <div
              key={p.title}
              className="rounded-xl border border-border bg-surface p-6"
            >
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-muted">
          Nexus es esa capa, ya construida, validada internamente y preparada
          para operarse. El fabricante integra un runtime probado en lugar de
          mantener una implementación normativa y criptográfica propia.
        </p>
      </section>

      {/* 3. Architecture */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-3xl px-6 py-24">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Arquitectura
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            El runtime se sitúa entre tu producto y la AEAT, dentro de la red del
            cliente. El límite de confianza es la propia infraestructura del
            cliente: nada fiscal lo cruza hacia JaijTech.
          </p>
          <pre className="mt-8 overflow-x-auto rounded-xl border border-border bg-background p-5 font-mono text-xs leading-relaxed text-muted">
{`┌──────────────── Red del cliente ────────────────┐
│  (límite de confianza)                           │
│                                                  │
│     ERP / TPV                                     │
│        │                                         │
│        ▼                                         │
│     Nexus runtime                                │
│     · firma XAdES-EPES                            │
│     · encadenado                                 │
│     · certificado P12                            │
│        │                                         │
│        ▼                                         │
│      AEAT                                         │
│                                                  │
└──────────────────────────────────────────────────┘
   JaijTech: actualizaciones de normativa + validación
   · fuera del límite · no accede a los datos fiscales`}
          </pre>
        </div>
      </section>

      {/* 4. Deployment */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Despliegue
          </h2>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-border bg-surface p-6">
            <h3 className="text-lg font-semibold">Infraestructura del cliente</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              El runtime se despliega dentro de la infraestructura del cliente,
              sin dependencias de servicios externos para emitir.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-6">
            <h3 className="text-lg font-semibold">Propiedad del certificado</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              El certificado del obligado tributario permanece en su poder y en
              su red. El runtime lo usa en local; no se transmite a terceros.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-6">
            <h3 className="text-lg font-semibold">Ejecución local</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Firma y encadenado se realizan en local antes de enviar el registro
              a la AEAT desde la propia red del cliente.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Integration */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Integración
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              El SDK y los adapters son el punto de entrada técnico al runtime.
            </p>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {integration.map((i) => (
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
          <div className="mx-auto mt-10 max-w-2xl">
            <pre className="overflow-x-auto rounded-xl border border-border bg-background p-5 font-mono text-xs leading-relaxed text-muted">
{`POST /v1/registros        # Nexus, en la red de tu cliente
{ "tipo": "alta", "factura": { … } }

200 OK
{
  "huella": "3F2A…",            # hash encadenado
  "encadenamiento": "previo:…",
  "estado_aeat": "aceptado",
  "xml_firmado": "…XAdES-EPES…"
}
# Ejemplo ilustrativo. Referencia completa en la documentación.`}
            </pre>
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/developers"
              className="text-sm text-accent underline-offset-4 hover:underline"
            >
              Documentación técnica →
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Operational capabilities */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Capacidades operativas
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Nexus se opera, no solo se instala.
          </p>
        </div>
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {operations.map((o) => (
            <div
              key={o.name}
              className="rounded-xl border border-border bg-surface p-5"
            >
              <h3 className="font-semibold">{o.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {o.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Validation evidence */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-3xl px-6 py-24">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Evidencia de validación
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Validación técnica interna documentada. No constituye una
            certificación ni una homologación oficial de la AEAT ni de terceros.
          </p>
          <div className="mt-8 overflow-hidden rounded-xl border border-border">
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

      {/* 8. Pilot CTA */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="rounded-2xl border border-accent/30 bg-accent/5 p-10 text-center md:p-14">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Evalúa Nexus en tu propio entorno
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            Un piloto te permite comprobar, con tu ERP y un caso real, que Nexus
            se integra y emite en tu arquitectura, antes de cualquier compromiso
            comercial.
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

      {/* 9. FAQ */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-3xl px-6 py-24">
          <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">
            Preguntas frecuentes
          </h2>
          <div className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-xl border border-border bg-background p-6"
              >
                <h3 className="font-semibold">{faq.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
