"use client"

import logoRedImg from "@/app/assets/images/logo-red.png";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export function PublicServerCustomerHeader() {
  const router = useRouter();

  return (
    <header className="w-full overflow-hidden">
      <div className="flex justify-between items-center py-4 px-6 sm:px-8 md:px-12">
        <Image
          src={logoRedImg}
          width={400}
          height={180}
          className="w-1/4 sm:w-[14%] md:w-[10%] xl:w-[8%]"
          alt="Logo da Smartconsig na cor vermelha"
        />

        <div className="flex items-center space-x-3 md:space-x-6">
          <Button
            type="button"
            size="sm"
            className="h-8 bg-secondary-red text-xs rounded"
            onClick={() => router.push("/servidores/simular")}
          >
            Simular Crédito
          </Button>

          <Link
            href=""
            className="hidden md:flex md:items-center md:gap-1 md:h-8 md:text-xs"
          >
            Ajuda
            <ChevronRightIcon className="size-4" />
          </Link>
        </div>
      </div>
    </header>
  )
}