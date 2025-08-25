import Image from "next/image";
import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";

import { ChevronRightIcon, HomeIcon } from "lucide-react";
import { PublicServerCustomerNavigateButton } from "../../navigate-button";

export function PublicServerCustomerPrimaryContainer() {
  return (
    <div className="grid grid-cols-1">
      <div className="size-full md:hidden">
        <Image
          src="/container-primary.png"
          width={1536}
          height={1024}
          alt="Homem sorrindo no telefone"
          className="w-full"
        />
      </div>

      <section className="flex flex-col bg-[#121212] p-6 md:bg-[url(/container-primary.png)] md:bg-cover md:bg-no-repeat md:h-[720px]">
        <div className="md:max-w-6xl md:w-full md:mx-auto">
          <Breadcrumb className="pb-6 md:pt-8 lg:pt-16">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/servidores" className="flex items-center gap-0.5 text-white">
                    <HomeIcon className="size-4" />
                    Home
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-white" />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link className="md:text-[#f5f5f6] font-medium" href="/servidores">
                    Portabilidade Consignado
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="space-y-4 md:mt-36 lg:mt-28">
            <h1 className="text-[22px] text-white md:max-w-xl md:text-4xl">
              Portabilidade de cartão consignado para servidores públicos.
            </h1>

            <p className="text-muted-foreground font-medium md:max-w-xl md:text-lg md:text-white">
              Reduza os juros rotativos de até 15% ao mês para apenas 3,80%, regularize sua margem e diminua sua parcela — tudo com segurança e sem burocracia.
            </p>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-6 md:w-full md:py-12">
            <PublicServerCustomerNavigateButton />

            <Link
              href="#"
              className="flex justify-center items-center gap-0.5 text-xs text-white font-medium pt-4 pb-4"
            >
              <span>Saiba mais</span>
              <ChevronRightIcon className="size-4" />
            </Link>
          </div>

          <div className="w-full py-6 space-y-2 md:hidden">
            <PublicServerCustomerNavigateButton />

            <Link
              href="#"
              className="flex justify-center items-center gap-0.5 text-xs text-white font-medium pt-4"
            >
              <span>Saiba mais</span>
              <ChevronRightIcon className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}