"use client";

import { useState } from "react";

const inputClass =
  "mt-1 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder-muted outline-none focus:border-accent focus:ring-1 focus:ring-accent";

export default function PilotForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    // Placeholder submission flow — no backend integration yet (WEB-02.4).
    // Simulates a successful inquiry locally so the conversion path is testable.
    await new Promise((resolve) => setTimeout(resolve, 600));

    setLoading(false);
    setSuccess(true);
  }

  if (success) {
    return (
      <div className="text-center">
        <div className="text-4xl text-accent">&#10003;</div>
        <h2 className="mt-4 text-2xl font-bold">Solicitud registrada</h2>
        <p className="mt-3 text-muted">
          Gracias. Revisaremos tu caso y te contactaremos para concretar la
          conversación inicial. Mientras tanto, puedes leer el dossier técnico.
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
            className={inputClass}
            placeholder="Tu nombre"
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
            required
            className={inputClass}
            placeholder="Empresa S.L."
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="role" className="block text-sm font-medium">
            Rol
          </label>
          <select id="role" name="role" defaultValue="" required className={inputClass}>
            <option value="" disabled>
              Selecciona
            </option>
            <option value="CTO">CTO</option>
            <option value="Arquitecto de software">Arquitecto de software</option>
            <option value="Líder técnico">Líder técnico</option>
            <option value="Desarrollador">Desarrollador</option>
            <option value="Producto">Producto</option>
            <option value="Otro">Otro</option>
          </select>
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
            className={inputClass}
            placeholder="tu@empresa.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="website" className="block text-sm font-medium">
          Web de la empresa
        </label>
        <input
          id="website"
          name="website"
          type="url"
          className={inputClass}
          placeholder="https://empresa.com"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="productType" className="block text-sm font-medium">
            Tipo de producto
          </label>
          <select
            id="productType"
            name="productType"
            defaultValue=""
            required
            className={inputClass}
          >
            <option value="" disabled>
              Selecciona
            </option>
            <option value="ERP">ERP</option>
            <option value="POS">TPV / POS</option>
            <option value="ISV">ISV / software house</option>
            <option value="Integrator">Integrador de sistemas</option>
            <option value="Other">Otro</option>
          </select>
        </div>
        <div>
          <label htmlFor="customerCount" className="block text-sm font-medium">
            Nº estimado de clientes
          </label>
          <select
            id="customerCount"
            name="customerCount"
            defaultValue=""
            className={inputClass}
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
        <label htmlFor="stack" className="block text-sm font-medium">
          Stack actual
        </label>
        <input
          id="stack"
          name="stack"
          type="text"
          className={inputClass}
          placeholder="Java, .NET, PHP, Python… base de datos, despliegue"
        />
      </div>

      <div>
        <label htmlFor="deploymentModel" className="block text-sm font-medium">
          Modelo de despliegue previsto
        </label>
        <select
          id="deploymentModel"
          name="deploymentModel"
          defaultValue=""
          className={inputClass}
        >
          <option value="" disabled>
            Selecciona
          </option>
          <option value="on-premise-cliente">
            On-premise en infraestructura del cliente
          </option>
          <option value="cloud-privada-cliente">
            Cloud privada del cliente
          </option>
          <option value="hibrido">Híbrido</option>
          <option value="por-definir">Por definir</option>
        </select>
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium">
          Descripción del proyecto
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={5}
          className={`${inputClass} resize-y`}
          placeholder="Qué producto integrarías con Nexus, caso de uso real y horizonte de despliegue."
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full cursor-pointer rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent/90 disabled:opacity-50"
      >
        {loading ? "Enviando..." : "Solicitar un piloto"}
      </button>

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
