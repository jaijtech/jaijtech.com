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
    name: "Sandbox",
    description: "Desarrollo y pruebas",
    monthlyPrice: 0,
    annualPrice: 0,
    priceLabel: "Gratis",
    priceId: null,
    annualPriceId: null,
    features: [
      "Sin límite técnico",
      "Sin tarjeta de crédito",
      "Entorno de pruebas AEAT",
      "Soporte comunidad",
    ],
    cta: "Empezar gratis",
    ctaHref: "/register",
    highlighted: false,
  },
  {
    name: "Developer",
    description: "1-3 NIFs",
    monthlyPrice: 19,
    annualPrice: 17.1,
    priceId: "price_1TGauTHpRIgYi6V9SfF1Vcav",
    annualPriceId: "price_1TGauTHpRIgYi6V9SfF1Vcav",
    features: [
      "1 a 3 NIFs",
      "Entorno producción AEAT",
      "Firma XAdES-EPES",
      "Soporte por email",
      "Actualizaciones incluidas",
    ],
    cta: "Suscribirse",
    ctaHref: "/register",
    highlighted: true,
  },
  {
    name: "Studio",
    description: "4-50 NIFs",
    monthlyPrice: 3,
    annualPrice: 2.7,
    priceId: "price_1TGaxRHpRIgYi6V9vT7tpOpv",
    annualPriceId: "price_1TGaxRHpRIgYi6V9vT7tpOpv",
    priceUnit: "/NIF/mes",
    minPrice: "Mín. 25\u00A0\u20AC/mes",
    features: [
      "4 a 50 NIFs",
      "Todo lo de Developer",
      "Dashboard multi-NIF",
      "Soporte prioritario",
      "SLA 99,9%",
    ],
    cta: "Suscribirse",
    ctaHref: "/register",
    highlighted: false,
  },
  {
    name: "Scale",
    description: "51-500 NIFs",
    monthlyPrice: 2,
    annualPrice: 1.8,
    priceId: "price_1TGazYHpRIgYi6V96F3Ygzyt",
    annualPriceId: "price_1TGazYHpRIgYi6V96F3Ygzyt",
    priceUnit: "/NIF/mes",
    minPrice: "Mín. 25\u00A0\u20AC/mes",
    features: [
      "51 a 500 NIFs",
      "Todo lo de Studio",
      "API rate limits ampliados",
      "Soporte dedicado",
      "Onboarding personalizado",
    ],
    cta: "Suscribirse",
    ctaHref: "/register",
    highlighted: false,
  },
  {
    name: "Enterprise",
    description: "500+ NIFs",
    monthlyPrice: null,
    annualPrice: null,
    priceLabel: "A medida",
    priceId: null,
    annualPriceId: null,
    features: [
      "500+ NIFs",
      "Todo lo de Scale",
      "Infraestructura dedicada",
      "Account manager",
      "SLA personalizado",
      "Integración on-premise",
    ],
    cta: "Contactar",
    ctaHref: "/support",
    highlighted: false,
  },
];

const faqs = [
  {
    question: "¿Qué es el plan Sandbox?",
    answer:
      "El plan Sandbox es completamente gratuito y sin límite de tiempo. Incluye acceso al entorno de pruebas de la AEAT para que puedas desarrollar e integrar sin riesgo. No requiere tarjeta de crédito.",
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
      "Sandbox incluye soporte comunidad. Developer incluye soporte por email con respuesta en 48h. Studio incluye soporte prioritario con respuesta en 24h. Scale y Enterprise incluyen soporte dedicado.",
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

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-xl p-6 ${
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
                      {plan.priceUnit || "/mes"}
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
              {plan.ctaHref ? (
                <Link
                  href={plan.ctaHref}
                  className={`mt-8 block rounded-lg px-4 py-2.5 text-center text-sm font-medium transition-colors ${
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
                  className={`mt-8 w-full cursor-pointer rounded-lg px-4 py-2.5 text-center text-sm font-medium transition-colors disabled:opacity-50 ${
                    plan.highlighted
                      ? "bg-accent text-white hover:bg-accent/90"
                      : "border border-border hover:bg-surface-bright"
                  }`}
                >
                  {loadingPlan === plan.name ? "Redirigiendo..." : plan.cta}
                </button>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-3xl px-6 py-24">
          <h2 className="text-center text-3xl font-bold tracking-tight">
            Preguntas frecuentes
          </h2>
          <div className="mt-12 space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-xl border border-border bg-background p-6"
              >
                <h3 className="font-semibold">{faq.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
