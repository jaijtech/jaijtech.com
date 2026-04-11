import Link from "next/link";

const problems = [
  {
    title: "Implementación interna",
    body: "Implementar Verifactu desde cero son semanas de trabajo y riesgo normativo alto.",
  },
  {
    title: "Pérdida de soberanía",
    body: "Las APIs cloud envían los datos fiscales de tus clientes a servidores de terceros.",
  },
  {
    title: "Sanciones AEAT",
    body: "Un error en producción puede derivar en sanciones graves de la AEAT.",
  },
];

const steps = [
  {
    n: "01",
    title: "Despliega el sidecar",
    body: "Instala el sidecar Docker en tu propia infraestructura. Sin dependencias externas.",
  },
  {
    n: "02",
    title: "Conecta tu ERP",
    body: "Integra con tu ERP usando el adapter de tu lenguaje: Java, .NET, PHP o Python.",
  },
  {
    n: "03",
    title: "Envío directo a AEAT",
    body: "Las facturas van directo a la AEAT desde tu servidor — sin pasar por nadie más.",
  },
];

const differentiators = [
  {
    title: "Tus datos son tuyos",
    body: "Nunca los tocamos ni los almacenamos. Toda la operativa ocurre dentro de tu red.",
  },
  {
    title: "Adapters oficiales",
    body: "SDKs mantenidos para Java, .NET, PHP y Python con la misma API y soporte.",
  },
  {
    title: "Normativa siempre al día",
    body: "Monitorizamos la AEAT por ti. Cambios normativos aplicados sin trabajo extra.",
  },
  {
    title: "Local-first",
    body: "Tu certificado P12 nunca sale de tu red. La firma se hace en tu propio servidor.",
  },
];

const pricingTiers = [
  {
    name: "Sandbox",
    price: "Gratis",
    unit: "",
    description: "Sin límite técnico. Sin tarjeta.",
    cta: "Empezar gratis",
    href: "/register",
    highlighted: false,
  },
  {
    name: "Developer",
    price: "19€",
    unit: "/mes",
    description: "1-3 NIFs. Producción AEAT.",
    cta: "Suscribirse",
    href: "/pricing",
    highlighted: true,
  },
  {
    name: "Studio",
    price: "149€",
    unit: "/mes",
    description: "4-50 NIFs. Multi-NIF dashboard.",
    cta: "Suscribirse",
    href: "/pricing",
    highlighted: false,
  },
  {
    name: "Enterprise",
    price: "Contacto",
    unit: "",
    description: "50+ NIFs. SLA personalizado.",
    cta: "Hablar con ventas",
    href: "/contacto",
    highlighted: false,
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section id="producto" className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          aria-hidden="true"
        >
          <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
        </div>
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="flex flex-col items-center text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs text-muted">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/Verifactu-logo.png"
                alt=""
                className="h-8 w-auto"
              />
              <span>SDK Verifactu local-first</span>
            </div>
            <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
              Confidencialidad total.{" "}
              <span className="text-accent">
                Los datos de tus clientes nunca salen de tu infraestructura.
              </span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
              SDK Verifactu local-first para fabricantes de software. Tu
              certificado, tu servidor, tu control.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://docs.jaijtech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-accent px-8 py-3 text-base font-medium text-white transition-colors hover:bg-accent/90"
              >
                Ver documentación
              </a>
              <Link
                href="/contacto"
                className="rounded-lg border border-border bg-surface px-8 py-3 text-base font-medium text-foreground transition-colors hover:bg-surface-bright"
              >
                Hablar con nosotros
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problema */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              El problema
            </h2>
            <p className="mt-4 text-lg text-muted">
              Implementar Verifactu sin ayuda tiene un coste oculto.
            </p>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {problems.map((p) => (
              <div
                key={p.title}
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
                    <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Cómo funciona
          </h2>
          <p className="mt-4 text-lg text-muted">
            Tres pasos para enviar tu primera factura sin salir de tu red.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="relative">
              <div className="rounded-xl border border-border bg-surface p-8">
                <div className="font-mono text-sm text-accent">{s.n}</div>
                <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {s.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Diferenciadores */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Por qué JaijTech
            </h2>
            <p className="mt-4 text-lg text-muted">
              Diseñado para fabricantes de software que no pueden permitirse
              ceder sus datos.
            </p>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {differentiators.map((d) => (
              <div
                key={d.title}
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
                  <h3 className="text-lg font-semibold">{d.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {d.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Pricing
          </h2>
          <p className="mt-4 text-lg text-muted">
            Empieza gratis. Escala cuando lo necesites.
          </p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pricingTiers.map((t) => (
            <div
              key={t.name}
              className={`relative flex flex-col rounded-xl p-6 ${
                t.highlighted
                  ? "border-2 border-accent bg-surface"
                  : "border border-border bg-surface"
              }`}
            >
              {t.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-xs font-medium text-white">
                  Popular
                </span>
              )}
              <h3 className="text-lg font-semibold">{t.name}</h3>
              <div className="mt-4">
                <span className="text-3xl font-bold">{t.price}</span>
                {t.unit && <span className="text-muted">{t.unit}</span>}
              </div>
              <p className="mt-3 text-sm text-muted">{t.description}</p>
              <Link
                href={t.href}
                className={`mt-auto block rounded-lg px-4 py-2.5 text-center text-sm font-medium transition-colors ${
                  t.highlighted
                    ? "bg-accent text-white hover:bg-accent/90"
                    : "border border-border hover:bg-surface-bright"
                } mt-8`}
              >
                {t.cta}
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-12 rounded-xl border border-border bg-surface p-8 text-center">
          <p className="text-lg">
            ¿Más de 50 NIFs?{" "}
            <span className="text-accent">Hablemos.</span>
          </p>
          <p className="mt-2 text-sm text-muted">
            Diseñamos un plan a medida para tu volumen e infraestructura.
          </p>
          <Link
            href="/contacto"
            className="mt-6 inline-block rounded-lg bg-accent px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-accent/90"
          >
            Contactar
          </Link>
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/pricing"
            className="text-sm text-accent hover:underline"
          >
            Ver todos los planes &rarr;
          </Link>
        </div>
      </section>

      {/* Muy pronto también */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Muy pronto también
          </p>
          <div className="mt-10 flex justify-center">
            <div className="overflow-hidden rounded-2xl border border-border bg-background p-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/Creaycrece-foto.png"
                alt="Crea y Crece — factura electrónica B2B"
                className="h-auto w-full max-w-2xl rounded-xl"
              />
            </div>
          </div>
          <p className="mt-8 text-sm text-muted">
            <span className="font-medium text-foreground">Crea y Crece</span>{" "}
            (Ley 18/2022) — factura electrónica B2B obligatoria
          </p>
          <Link
            href="/contacto"
            className="mt-8 inline-block rounded-lg border border-border bg-background px-8 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface-bright"
          >
            Únete a la lista de espera
          </Link>
        </div>
      </section>
    </>
  );
}
