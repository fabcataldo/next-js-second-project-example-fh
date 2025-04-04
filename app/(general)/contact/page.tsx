import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact Page",
  description: "Esta es la pág. de contacto de la empresa",
  keywords: ["Contact Page", "Fabio"],
};
function ContactPage() {
  return (
    <>
      <span className="text-5xl">Contact Page</span>
    </>
  );
}

export default ContactPage;
