import Image from "next/image";
import Link from "next/link";

import { ChevronRightIcon } from "lucide-react";
import { PublicServerCustomerNavigateButton } from "../../navigate-button";

export function PublicServerCustomerSecondaryContainer() {
  return (
    <div className="grid grid-cols-1 px-6 pb-6 md:grid-cols-2 md:h-[460px] md:max-w-5xl md:w-full md:mx-auto md:px-0 md:py-12">
      <div className="size-full py-6">
        <Image
          src="/container-secondary.png"
          width={1536}
          height={1024}
          alt="Homem sorrindo no telefone"
          className="w-full rounded sm:w-[90%]"
        />
      </div>

      <div className="space-y-4 md:py-6">
        <h2 className="text-lg text-black font-medium">
          O que é a portabilidade do cartão consignado para servidores?
        </h2>

        <p className="text-[#555]">
          Muitos servidores estão pagando juros rotativos de até 15% ao mês em seus cartões.
        </p>

        <p className="text-[#555]">
          Aqui na Smart Consig, fazemos a transferência do seu cartão para outro banco com taxa fixa de apenas 3,80% ao mês. Com isso, você reduz os juros, a parcela e regulariza sua margem — com mais controle e economia na sua folha.
        </p>

        <div className="hidden w-full py-6 space-y-2 md:flex md:items-center md:space-x-8">
          <PublicServerCustomerNavigateButton />

          <Link
            href="#"
            className="flex justify-center items-center gap-0.5 text-xs font-medium pt-4 sm:pt-0"
          >
            <span>Saiba mais</span>
            <ChevronRightIcon className="size-4" />
          </Link>
        </div>
      </div>

      <div className="w-full py-6 space-y-2 md:hidden">
        <PublicServerCustomerNavigateButton />

        <Link
          href="#"
          className="flex justify-center items-center gap-0.5 text-xs font-medium pt-4 sm:pt-0"
        >
          <span>Saiba mais</span>
          <ChevronRightIcon className="size-4" />
        </Link>
      </div>
    </div>
  )
}