import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";

export function InstitutionalCardingContainer() {
  return (
    <div className="grid grid-cols-1 px-6 pb-6 md:grid-cols-2 md:h-[460px] md:max-w-5xl md:w-full md:mx-auto md:px-0 md:py-12">
      <div className="size-full pt-12 pb-6 sm:hidden">
        <Image
          src="/carding.png"
          width={4800}
          height={2700}
          alt="Imagem ilustrativa de um cartão de crédito na cor preta"
          className="w-full"
        />
      </div>

      <div className="space-y-4 md:py-6">
        <h2 className="text-lg text-black font-medium">
          Cartão Benefício Smart Consig
        </h2>

        <div className="text-[#555]">
          <p>
            Transforme sua margem em solução, não em dívida rotativa.
            Enquanto os cartões tradicionais acumulam juros rotativos mês após mês, o Cartão Benefício Smart Consig faz diferente.
          </p>
          <p>
            Com a portabilidade, você substitui o antigo por um cartão com juros reduzidos, pagamento direto na folha e a possibilidade de saque do limite. Tudo de forma clara, sem anuidade e com muito mais previsibilidade financeira.
          </p>
        </div>

        <div className="hidden w-full py-6 space-y-2 md:flex md:items-center md:space-x-8">
          <Button
            type="button"
            className="w-full bg-secondary-red rounded sm:w-56 sm:h-9 sm:text-xs"
          >
            Simular crédito
          </Button>

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
        <Button
          type="button"
          className="w-full bg-secondary-red rounded sm:w-56 sm:h-9 sm:text-xs"
        >
          Simular crédito
        </Button>

        <Link
          href="#"
          className="flex justify-center items-center gap-0.5 text-xs font-medium pt-4 sm:pt-0"
        >
          <span>Saiba mais</span>
          <ChevronRightIcon className="size-4" />
        </Link>
      </div>

      <div className="hidden sm:block size-full py-6">
        <Image
          src="/carding.png"
          width={4800}
          height={2700}
          alt="Imagem ilustrativa de um cartão de crédito na cor preta"
          className="w-full"
        />
      </div>
    </div>
  )
}