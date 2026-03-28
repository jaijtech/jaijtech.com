import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="flex flex-col items-center text-center">
            <span className="mb-6 inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm text-accent">
              SDK Verifactu AEAT
            </span>
            <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              Integra Verifactu en tu{" "}
              <span className="text-accent">negocio</span> o{" "}
              <span className="text-accent">empresa</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted md:text-xl">
              Integra Verifactu en tu software con un SDK que gestiona firma
              XAdES-EPES, cadena SHA-256, envío a la AEAT y QR normativo.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/pricing"
                className="rounded-lg bg-accent px-8 py-3 text-base font-medium text-white transition-colors hover:bg-accent/90"
              >
                Empezar gratis
              </Link>
              <a
                href="https://docs.jaijtech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-border px-8 py-3 text-base font-medium text-foreground transition-colors hover:bg-surface-bright"
              >
                Ver documentación
              </a>
            </div>
            <div className="mt-8 font-mono text-sm text-muted">
              npm install @jaijtech/verifactu
            </div>
          </div>
        </div>
      </section>

      {/* Early Adopters */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Únete a los primeros
            </h2>
            <p className="mt-4 text-lg text-muted">
              Los 10 primeros integradores obtienen licencia Developer gratuita
              durante 1 año
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {Array.from({ length: 10 }, (_, i) => (
              <div
                key={i}
                className="flex h-28 flex-col items-center justify-center rounded-xl border-2 border-dashed border-border bg-background p-4 text-center"
              >
                <span className="text-sm text-muted">Disponible</span>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="mb-6 text-sm font-medium text-muted">
              <span className="text-accent">10 de 10</span> plazas disponibles
            </p>
            <Link
              href="/pricing"
              className="inline-block rounded-lg bg-accent px-8 py-3 text-base font-medium text-white transition-colors hover:bg-accent/90"
            >
              Reservar mi plaza
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Quick start
          </h2>
          <p className="mt-4 text-muted">
            Tres pasos para enviar tu primera factura a la AEAT
          </p>
        </div>
        <div className="mt-12 overflow-hidden rounded-xl border border-border bg-surface">
          <div className="flex items-center gap-2 border-b border-border px-4 py-3">
            <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
            <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
            <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
            <span className="ml-2 text-xs text-muted">index.ts</span>
          </div>
          <pre className="overflow-x-auto p-6 font-mono text-sm leading-relaxed">
            <code>
              <span className="text-muted">{"// 1. Instalar"}</span>
              {"\n"}
              <span className="text-accent">npm install</span>
              {" @jaijtech/verifactu\n\n"}
              <span className="text-muted">{"// 2. Configurar"}</span>
              {"\n"}
              <span className="text-[#c084fc]">import</span>
              {" { "}
              <span className="text-[#fbbf24]">VerifactuClient</span>
              {" } "}
              <span className="text-[#c084fc]">from</span>{" "}
              <span className="text-[#34d399]">
                {"'@jaijtech/verifactu'"}
              </span>
              {"\n\n"}
              <span className="text-[#c084fc]">const</span>{" "}
              <span className="text-[#fbbf24]">client</span>
              {" = "}
              <span className="text-[#c084fc]">new</span>{" "}
              <span className="text-[#fbbf24]">VerifactuClient</span>
              {"({\n"}
              {"  "}
              <span className="text-foreground">nif</span>
              {": "}
              <span className="text-[#34d399]">{"'B12345678'"}</span>
              {",\n"}
              {"  "}
              <span className="text-foreground">name</span>
              {": "}
              <span className="text-[#34d399]">{"'Mi Empresa S.L.'"}</span>
              {",\n"}
              {"  "}
              <span className="text-foreground">environment</span>
              {": "}
              <span className="text-[#34d399]">{"'sandbox'"}</span>
              {"\n})\n\n"}
              <span className="text-muted">{"// 3. Enviar factura"}</span>
              {"\n"}
              <span className="text-[#c084fc]">const</span>{" "}
              <span className="text-[#fbbf24]">result</span>
              {" = "}
              <span className="text-[#c084fc]">await</span>
              {" client."}
              <span className="text-[#60a5fa]">submitInvoice</span>
              {"(invoice)"}
            </code>
          </pre>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Todo lo que necesitas para Verifactu
            </h2>
            <p className="mt-4 text-muted">
              Cumplimiento normativo completo sin complejidad
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-border bg-background p-6">
              <h3 className="font-mono text-lg font-semibold">XAdES-EPES</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Firma digital XML avanzada conforme al estándar europeo.
                Certificados FNMT y otros emisores reconocidos.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-background p-6">
              <h3 className="font-mono text-lg font-semibold">SHA-256</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Cadena hash encadenada entre registros. Integridad garantizada
                según especificación técnica AEAT.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-background p-6">
              <h3 className="font-mono text-lg font-semibold">
                Eventos Anexo II
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Alta, anulación, subsanación y todos los eventos del Anexo II
                del RD 1007/2023 implementados.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-background p-6">
              <h3 className="font-mono text-lg font-semibold">
                Circuit Breaker
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Resiliencia ante caídas del servicio AEAT. Reintentos
                automáticos con backoff exponencial.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-background p-6">
              <h3 className="font-mono text-lg font-semibold">
                QR Normativo
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Generación del código QR según especificación BOE. Listo para
                imprimir en facturas.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-background p-6">
              <h3 className="font-mono text-lg font-semibold">
                TypeScript Nativo
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Tipado completo end-to-end. Autocompletado, validación en
                tiempo de compilación y documentación inline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Precios simples, sin sorpresas
          </h2>
          <p className="mt-4 text-muted">
            Empieza gratis. Escala cuando lo necesites.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <div className="rounded-xl border border-border bg-surface p-8">
            <h3 className="text-lg font-semibold">Sandbox</h3>
            <div className="mt-4">
              <span className="text-4xl font-bold">Gratis</span>
            </div>
            <p className="mt-4 text-sm text-muted">
              Sin límite técnico. Sin tarjeta de crédito.
            </p>
            <Link
              href="/register"
              className="mt-8 block rounded-lg border border-border px-6 py-3 text-center text-sm font-medium transition-colors hover:bg-surface-bright"
            >
              Empezar gratis
            </Link>
          </div>
          <div className="relative rounded-xl border-2 border-accent bg-surface p-8">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-xs font-medium text-white">
              Popular
            </span>
            <h3 className="text-lg font-semibold">Developer</h3>
            <div className="mt-4">
              <span className="text-4xl font-bold">19&euro;</span>
              <span className="text-muted">/mes</span>
            </div>
            <p className="mt-4 text-sm text-muted">
              Para desarrolladores y pequeñas empresas. 1-3 NIFs.
            </p>
            <Link
              href="/pricing"
              className="mt-8 block rounded-lg bg-accent px-6 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-accent/90"
            >
              Suscribirse
            </Link>
          </div>
          <div className="rounded-xl border border-border bg-surface p-8">
            <h3 className="text-lg font-semibold">Studio</h3>
            <div className="mt-4">
              <span className="text-4xl font-bold">3&euro;</span>
              <span className="text-muted">/NIF/mes</span>
            </div>
            <p className="mt-4 text-sm text-muted">
              Para despachos y asesorías. 4-50 NIFs. Mín. 25&euro;/mes.
            </p>
            <Link
              href="/pricing"
              className="mt-8 block rounded-lg border border-border px-6 py-3 text-center text-sm font-medium transition-colors hover:bg-surface-bright"
            >
              Ver detalles
            </Link>
          </div>
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

      {/* CTA Final */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            La obligación Verifactu entra en vigor en enero 2027
          </h2>
          <p className="mt-4 text-lg text-muted">
            Empieza a integrar ahora y llega preparado al plazo legal.
          </p>
          <Link
            href="/pricing"
            className="mt-10 inline-block rounded-lg bg-accent px-8 py-3 text-base font-medium text-white transition-colors hover:bg-accent/90"
          >
            Empezar gratis
          </Link>
        </div>
      </section>
    </>
  );
}
