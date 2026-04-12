"use client";

import { useState } from "react";
import Link from "next/link";

interface Plan {
  name: string;
  description: string;
  monthlyPrice: number | null;
  annualPrice: number | null;
  priceLabel?: string;
  priceId: string | null;
  annualPriceId: string | null;
  priceUnit?: string;
  minPrice?: string;
  features: string[];
  cta: string;
  ctaHref: string | null;
  highlighted: boolean;
}

const plans: Plan[] = [
  {
    name: "Developer",
    description: "Desarrollo y pruebas",
    monthlyPrice: 0,
    annualPrice: 0,
    priceLabel: "Gratis",
    priceId: null,
    annualPriceId: null,
    features: [
      "Entorno de pruebas AEAT",
      "Sin API key",
      "Sin soporte",
      "Adapters: solo ejemplos de código, sin soporte ni garantías",
    ],
    cta: "Empezar gratis",
    ctaHref: "/register",
    highlighted: false,
  },
  {
    name: "Starter",
    description: "1-3 NIFs",
    monthlyPrice: 19,
    annualPrice: 17.08,
    priceId: "price_1TGauTHpRIgYi6V9SfF1Vcav",
    annualPriceId: "price_1TGqw9HpRIgYi6V9CpSMYSrm",
    features: [
      "1 a 3 NIFs",
      "1 adapter oficial a elegir (Java, .NET, PHP o Python)",
      "Entorno producción AEAT",
      "Firma XAdES-EPES",
      "Soporte por email",
      "Actualizaciones incluidas",
    ],
    cta: "Suscribirse",
    ctaHref: null,
    highlighted: true,
  },
  {
    name: "Studio",
    description: "4-50 NIFs",
    monthlyPrice: 3,
    annualPrice: 22.5,
    priceId: null,
    annualPriceId: null,
    priceUnit: "/NIF/mes",
    minPrice: "Mín. 25\u00A0\u20AC/mes",
    features: [
      "4 a 50 NIFs",
      "Todo lo de Starter",
      "Todos los adapters oficiales incluidos",
      "Soporte prioritario",
      "SLA 99,9%",
    ],
    cta: "Contactar",
    ctaHref: "/contacto",
    highlighted: false,
  },
  {
    name: "Enterprise",
    description: "50+ NIFs",
    monthlyPrice: null,
    annualPrice: null,
    priceLabel: "A medida",
    priceId: null,
    annualPriceId: null,
    features: [
      "50+ NIFs",
      "Todo lo de Studio",
      "Todos los adapters oficiales incluidos",
      "Soporte dedicado",
      "SLA negociado",
      "Integración on-premise",
      "Account manager",
    ],
    cta: "Contactar",
    ctaHref: "/support",
    highlighted: false,
  },
];

const faqs = [
  {
    question: "¿Qué es el plan Developer?",
    answer:
      "El plan Developer es completamente gratuito y sin límite de tiempo. Incluye acceso al entorno de pruebas de la AEAT para que puedas desarrollar e integrar sin riesgo. No requiere tarjeta de crédito.",
  },
  {
    question: "¿Cómo se cuenta un NIF?",
    answer:
      "Un NIF es un número de identificación fiscal único. Cada empresa o autónomo que envía facturas a través de Verifactu cuenta como un NIF. El precio se calcula en función del número de NIFs activos en tu cuenta.",
  },
  {
    question: "¿Puedo cambiar de plan?",
    answer:
      "Sí, puedes subir o bajar de plan en cualquier momento. Los cambios se aplican de forma prorrateada en tu próxima factura.",
  },
  {
    question: "¿Qué incluye el soporte?",
    answer:
      "Developer no incluye soporte, solo acceso al entorno de pruebas. Starter incluye soporte por email con respuesta en 48h. Studio incluye soporte prioritario con respuesta en 24h. Enterprise incluye soporte dedicado.",
  },
  {
    question: "¿Hay descuento anual?",
    answer:
      "Sí, todos los planes de pago tienen un 10% de descuento al contratar anualmente.",
  },
  {
    question: "¿Cuándo entra en vigor la obligación Verifactu?",
    answer:
      "La obligación de Verifactu entra en vigor en enero de 2027 para la mayoría de empresas. Te recomendamos empezar la integración con tiempo suficiente.",
  },
];

function formatPrice(price: number): string {
  if (Number.isInteger(price)) return `${price}`;
  return price.toFixed(2).replace(".", ",");
}

export default function PricingContent() {
  const [annual, setAnnual] = useState(false);
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  async function handleCheckout(plan: Plan) {
    const priceId = annual ? plan.annualPriceId : plan.priceId;
    if (!priceId) return;

    setLoadingPlan(plan.name);

    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ priceId }),
    });

    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    }

    setLoadingPlan(null);
  }

  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Precios
          </h1>
          <p className="mt-4 text-lg text-muted">
            Empieza gratis. Escala sin límites.
          </p>
          <div className="mt-8 inline-flex items-center gap-1 rounded-full border border-border bg-surface p-1">
            <button
              onClick={() => setAnnual(false)}
              className={`cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                !annual
                  ? "bg-accent text-white"
                  : "text-muted hover:text-foreground"
              }`}
            >
              Mensual
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                annual
                  ? "bg-accent text-white"
                  : "text-muted hover:text-foreground"
              }`}
            >
              Anual
              <span className="ml-1 text-xs opacity-75">-10%</span>
            </button>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-xl p-6 ${
                plan.highlighted
                  ? "border-2 border-accent bg-surface"
                  : "border border-border bg-surface"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-xs font-medium text-white">
                  Popular
                </span>
              )}
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <p className="mt-1 text-sm text-muted">{plan.description}</p>
              <div className="mt-4">
                {plan.priceLabel ? (
                  <span className="text-3xl font-bold">{plan.priceLabel}</span>
                ) : (
                  <>
                    <span className="text-3xl font-bold">
                      {formatPrice(
                        annual ? plan.annualPrice! : plan.monthlyPrice!,
                      )}
                      &euro;
                    </span>
                    <span className="text-sm text-muted">
                      {annual && plan.priceUnit ? "/mes" : plan.priceUnit || "/mes"}
                    </span>
                  </>
                )}
              </div>
              {plan.minPrice && (
                <p className="mt-1 text-xs text-muted">{plan.minPrice}</p>
              )}
              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <span className="mt-0.5 text-accent">&#10003;</span>
                    <span className="text-muted">{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-8">
                {plan.ctaHref ? (
                  <Link
                    href={plan.ctaHref}
                    className={`block rounded-lg px-4 py-2.5 text-center text-sm font-medium transition-colors ${
                      plan.highlighted
                        ? "bg-accent text-white hover:bg-accent/90"
                        : "border border-border hover:bg-surface-bright"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                ) : (
                  <button
                    onClick={() => handleCheckout(plan)}
                    disabled={loadingPlan === plan.name}
                    className={`w-full cursor-pointer rounded-lg px-4 py-2.5 text-center text-sm font-medium transition-colors disabled:opacity-50 ${
                      plan.highlighted
                        ? "bg-accent text-white hover:bg-accent/90"
                        : "border border-border hover:bg-surface-bright"
                    }`}
                  >
                    {loadingPlan === plan.name ? "Redirigiendo..." : plan.cta}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Consultoría */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-3xl px-6 py-24">
          <h2 className="text-center text-3xl font-bold tracking-tight">
            ¿Necesitas ayuda con la integración?
          </h2>
          <p className="mt-4 text-center text-muted">
            Consultoría técnica a medida para equipos que quieren acelerar la
            integración de Verifactu en su ERP. Contacta con nosotros y
            valoramos tu caso.
          </p>
          <div className="mt-10 text-center">
            <Link
              href="/contacto"
              className="inline-block rounded-lg bg-accent px-8 py-3 text-base font-medium text-white transition-colors hover:bg-accent/90"
            >
              Contactar
            </Link>
          </div>
        </div>
      </section>

      {/* Adapters oficiales */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-3xl px-6 py-24">
          <h2 className="text-center text-3xl font-bold tracking-tight">
            Adapters oficiales
          </h2>
          <p className="mt-4 text-center text-muted">
            SDK Verifactu local-first para fabricantes de ERP, con adapters
            oficiales para Java, .NET, PHP y Python incluidos en todos los
            planes de pago.
          </p>
          <div className="mt-12 overflow-hidden rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-background">
                  <th className="px-5 py-3 text-left font-semibold">Plan</th>
                  <th className="px-5 py-3 text-right font-semibold">
                    Adapters
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="px-5 py-3 text-muted">Developer</td>
                  <td className="px-5 py-3 text-right text-muted">
                    Solo ejemplos de código
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-5 py-3 text-muted">Starter</td>
                  <td className="px-5 py-3 text-right font-medium text-accent">
                    1 incluido a elegir
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-5 py-3 text-muted">Studio</td>
                  <td className="px-5 py-3 text-right font-medium text-accent">
                    Todos incluidos
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-3 text-muted">Enterprise</td>
                  <td className="px-5 py-3 text-right font-medium text-accent">
                    Todos incluidos
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-10 text-center">
            <p className="text-base text-muted">
              ¿Listo para integrar Verifactu en tu ERP? Empieza gratis con el
              Developer
            </p>
            <Link
              href="/register"
              className="mt-6 inline-block rounded-lg bg-accent px-8 py-3 text-base font-medium text-white transition-colors hover:bg-accent/90"
            >
              Empezar gratis
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-3xl px-6 py-24">
          <h2 className="text-center text-3xl font-bold tracking-tight">
            Preguntas frecuentes
          </h2>
          <div className="mt-12 space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={faq.question}
                className="rounded-xl border border-border bg-background"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full cursor-pointer items-center justify-between p-6 text-left"
                >
                  <h3 className="font-semibold">{faq.question}</h3>
                  <span className="ml-4 shrink-0 text-xs text-muted">
                    {openFaq === i ? "\u25B2" : "\u25BC"}
                  </span>
                </button>
                {openFaq === i && (
                  <p className="px-6 pb-6 text-sm leading-relaxed text-muted">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
