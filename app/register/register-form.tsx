"use client";

import { useState } from "react";

export default function RegisterForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      nif: formData.get("nif") as string,
    };

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json();
        throw new Error(body.error || "Error al registrarse");
      }

      setSubmittedEmail(data.email);
      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al registrarse");
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <section className="mx-auto max-w-md px-6 py-24 text-center">
        <div className="rounded-xl border border-border bg-surface p-8">
          <div className="text-4xl text-accent">&#10003;</div>
          <h2 className="mt-4 text-2xl font-bold">
            ¡Cuenta Sandbox creada!
          </h2>
          <p className="mt-4 text-muted">
            Te hemos enviado los detalles de acceso a{" "}
            <span className="text-foreground">{submittedEmail}</span>
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-md px-6 py-24">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight">
          Empieza gratis con el Sandbox
        </h1>
        <p className="mt-4 text-muted">
          Accede al entorno de pruebas Verifactu. Sin tarjeta de crédito. Sin
          límite técnico.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Nombre completo
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-1 w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground placeholder-muted outline-none focus:border-accent focus:ring-1 focus:ring-accent"
            placeholder="Tu nombre"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground placeholder-muted outline-none focus:border-accent focus:ring-1 focus:ring-accent"
            placeholder="tu@empresa.com"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium">
            Empresa
          </label>
          <input
            id="company"
            name="company"
            type="text"
            className="mt-1 w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground placeholder-muted outline-none focus:border-accent focus:ring-1 focus:ring-accent"
            placeholder="Mi Empresa S.L. (opcional)"
          />
        </div>
        <div>
          <label htmlFor="nif" className="block text-sm font-medium">
            NIF/CIF
          </label>
          <input
            id="nif"
            name="nif"
            type="text"
            className="mt-1 w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground placeholder-muted outline-none focus:border-accent focus:ring-1 focus:ring-accent"
            placeholder="B12345678 (opcional)"
          />
        </div>
        {error && <p className="text-sm text-red-500">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-full cursor-pointer rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent/90 disabled:opacity-50"
        >
          {loading ? "Enviando..." : "Crear cuenta Sandbox"}
        </button>
        <p className="text-center text-sm text-muted">
          Gratis para siempre en el entorno de pruebas AEAT.
        </p>
        <p className="text-center text-xs text-muted">
          Al registrarte aceptas los{" "}
          <a href="/terms" className="text-accent hover:underline">
            términos de servicio
          </a>{" "}
          y la{" "}
          <a href="/privacy" className="text-accent hover:underline">
            política de privacidad
          </a>
          .
        </p>
      </form>
    </section>
  );
}
