"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
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
      role: formData.get("role") as string,
      nifs: formData.get("nifs") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json();
        throw new Error(body.error || "Error al enviar el mensaje");
      }

      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al enviar el mensaje");
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="text-center">
        <div className="text-4xl text-accent">&#10003;</div>
        <h2 className="mt-4 text-2xl font-bold">Mensaje recibido</h2>
        <p className="mt-3 text-muted">
          Gracias por escribirnos. Te respondemos en menos de 24h laborables.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Nombre
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder-muted outline-none focus:border-accent focus:ring-1 focus:ring-accent"
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
            className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder-muted outline-none focus:border-accent focus:ring-1 focus:ring-accent"
            placeholder="tu@empresa.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-medium">
          Empresa
        </label>
        <input
          id="company"
          name="company"
          type="text"
          className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder-muted outline-none focus:border-accent focus:ring-1 focus:ring-accent"
          placeholder="Mi Empresa S.L. (opcional)"
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="role" className="block text-sm font-medium">
            Rol
          </label>
          <select
            id="role"
            name="role"
            defaultValue=""
            className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-accent focus:ring-1 focus:ring-accent"
          >
            <option value="" disabled>
              Selecciona
            </option>
            <option value="CTO">CTO</option>
            <option value="Developer">Developer</option>
            <option value="Product Manager">Product Manager</option>
            <option value="Otro">Otro</option>
          </select>
        </div>
        <div>
          <label htmlFor="nifs" className="block text-sm font-medium">
            NIFs estimados
          </label>
          <select
            id="nifs"
            name="nifs"
            defaultValue=""
            className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-accent focus:ring-1 focus:ring-accent"
          >
            <option value="" disabled>
              Selecciona
            </option>
            <option value="1-10">1-10</option>
            <option value="11-50">11-50</option>
            <option value="51-200">51-200</option>
            <option value="200+">200+</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-1 w-full resize-y rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder-muted outline-none focus:border-accent focus:ring-1 focus:ring-accent"
          placeholder="Cuéntanos qué necesitas integrar, cuántos NIFs gestionas, en qué stack..."
        />
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className="w-full cursor-pointer rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent/90 disabled:opacity-50"
      >
        {loading ? "Enviando..." : "Enviar mensaje"}
      </button>
      <p className="text-center text-sm text-muted">
        Respondemos en menos de 24h laborables
      </p>
      <p className="text-center text-sm text-muted">
        O escríbenos directamente a{" "}
        <a
          href="mailto:info@jaijtech.com"
          className="text-accent hover:underline"
        >
          info@jaijtech.com
        </a>
      </p>
      <p className="text-center text-xs text-muted">
        Al enviar aceptas la{" "}
        <a href="/privacy" className="text-accent hover:underline">
          política de privacidad
        </a>
        .
      </p>
    </form>
  );
}
