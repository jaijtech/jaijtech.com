import type { Metadata } from "next";
import RegisterForm from "./register-form";

export const metadata: Metadata = {
  title: "Registro",
  description:
    "Crea tu cuenta gratuita de Sandbox y empieza a integrar Verifactu en minutos.",
};

export default function RegisterPage() {
  return <RegisterForm />;
}
