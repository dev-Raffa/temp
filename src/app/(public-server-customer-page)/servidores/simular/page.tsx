"use client"

import logoWhiteImg from "@/app/assets/images/logo-white.png";
import Image from "next/image";
import Link from "next/link";

import { UtmProviderSuspense } from "@/context/utm-context";
import { PublicServerCustomerSimulationForm } from "./_components/form";

export default function PublicServerCustomerSimulationPage() {
  return (
    <UtmProviderSuspense>
      <div className="min-h-screen w-full overflow-hidden">
        <header className="bg-secondary-red h-[70px] w-full overflow-hidden px-6 pt-4 sm:py-2 sm:px-8 md:px-12">
          <Link href="/servidores">
            <Image
              src={logoWhiteImg}
              width={400}
              height={180}
              className="w-1/4 sm:w-[14%] md:w-[10%] xl:w-[8%]"
              alt="Logo da Smartconsig na cor branca"
            />
          </Link>
        </header>
        <PublicServerCustomerSimulationForm />
      </div>
    </UtmProviderSuspense>
  )
}