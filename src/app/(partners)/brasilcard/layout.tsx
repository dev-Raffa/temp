

import React from "react";

import { FooterContainer } from "@/components/shared/footer";
import { ClientSolicitationProvider } from "./contexts/client/client-context";

export const metadata = {
    title: "SmartConSig | Parceria — Brasilcard",
    description: "",
};


export default function BrasilcardLayout({ children }: { children: React.ReactNode }) {
    
    return (
        <>
            <ClientSolicitationProvider>
                {children}
            </ClientSolicitationProvider>
            <FooterContainer/>
        </>
    );
}