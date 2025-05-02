"use client";
import { ReactNode, useEffect } from "react";
import { initMercadoPago } from "@mercadopago/sdk-react";

export default function MercadoPagoProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    initMercadoPago(
      process.env.NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY!,
      { locale: "pt-BR", advancedFraudPrevention: false}
    );
  }, []);

  return <>{children}</>;
}