import type { Metadata } from "next";
import PricingContent from "./pricing-content";

export const metadata: Metadata = {
  title: "Precios",
  description:
    "Planes y precios del SDK @jaijtech/verifactu. Desde sandbox gratuito hasta enterprise a medida.",
};

export default function PricingPage() {
  return <PricingContent />;
}
