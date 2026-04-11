import type { Metadata } from "next";
import RegisterForm from "./register-form";

export const metadata: Metadata = {
  title: "Crear cuenta Sandbox",
  description:
    "Crea tu cuenta gratuita en el Sandbox de @jaijtech/verifactu. Entorno de pruebas AEAT. Sin tarjeta de crédito. Sin límite técnico.",
};

export default function RegisterPage() {
  return <RegisterForm />;
}
