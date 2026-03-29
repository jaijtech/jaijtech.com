import type { Metadata } from "next";
import RegisterForm from "./register-form";

export const metadata: Metadata = {
  title: "Acceso anticipado",
  description:
    "Solicita acceso anticipado al SDK @jaijtech/verifactu. Sé de los primeros en integrar Verifactu.",
};

export default function RegisterPage() {
  return <RegisterForm />;
}
