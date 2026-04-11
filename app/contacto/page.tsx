import type { Metadata } from "next";
import ContactForm from "./contact-form";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Hablemos sobre tu integración Verifactu. Volúmenes grandes, planes a medida y consultoría especializada.",
};

export default function ContactoPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Hablemos
        </h1>
        <p className="mt-4 text-lg text-muted">
          Cuéntanos qué necesitas integrar. Te contestamos en menos de 24h
          laborables.
        </p>
      </div>
      <div className="mt-12 rounded-xl border border-border bg-surface p-8">
        <ContactForm />
      </div>
      <p className="mt-6 text-center text-sm text-muted">
        ¿Prefieres email directo?{" "}
        <a
          href="mailto:legal@jaijtech.com"
          className="text-accent hover:underline"
        >
          legal@jaijtech.com
        </a>
      </p>
    </section>
  );
}
