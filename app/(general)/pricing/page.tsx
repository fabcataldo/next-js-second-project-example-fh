import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Pricing Page",
  description: "Esta es la página de precios de mi servicio",
  keywords: ["Pricing Page", "Fabio"],
};

function PricingPage() {
  return (
    <>
      <span className="text-5xl">PricingPage</span>
    </>
  );
}

export default PricingPage;
