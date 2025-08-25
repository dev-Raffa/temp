import { LockKeyholeIcon } from "lucide-react";
import { AnalysisForm } from "../forms/analysis/analysis-form";

import Image from "next/image";
import Logo from "@/app/assets/images/logo-red.png"
import HeadlineImage from "@/app/assets/images/partners/brasilcard/cards.png"

export function BrasilcardHeaderSection (): JSX.Element {
  return (
    <header id="solicitar-cartao" className="flex flex-col min-h-[90dvh] items-center justify-end relative w-full bg-transparent">
      <nav className="flex h-[80px] items-center justify-between px-8 lg:px-[150px] py-0 relative w-full backdrop-blur-[2px] backdrop-brightness-[100%]">
        <figure className=" w-20 md:w-24 xl:w-28 h-full inline-flex items-center relative flex-[0_0_auto]">
          <Image
            src={Logo}
            width={150}
            height={200}
            className="w-20 md:w-24 xl:w-28"
            alt="Smartconsig logo"
            priority
            quality={75}
          />
        </figure>

        <figure className="flex items-center justify-center gap-x-2 text-sm text-red-800 md:text-base">
          <LockKeyholeIcon className="size-4 md:size-5" />
          <span>Site seguro</span>
        </figure>
      </nav>

      <main className="flex flex-wrap-reverse sm:flex-nowrap items-center py-12 gap-3 px-2 md:px-6 lg:px-36 justify-center relative w-full grow bg-[url('/brasilcard-headline-background.png')]">
        <section className="w-full sm:w-1/2 px-9 h-full gap-y-5 flex flex-col items-start justify-center">
          <h1 className="text-white font-normal text-3xl">
              Garanta seu Cartão <span className="font-bold">BrasilCard</span>: Rápido, Fácil e 100% Digital.
          </h1>
          <AnalysisForm />
          
        </section>
        <figure className="relative h-60 sm:h-96 w-full sm:w-1/2">
            <Image 
              src={HeadlineImage}
              alt="mulher negra sorrindo e segurando um cartão de crédito"
              priority
              fill
              className="object-contain"
            />
        </figure>
      </main>
    </header>
  );
};
