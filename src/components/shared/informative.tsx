import elderlyThoughtful from "@/app/assets/images/elderly-thoughtful.png";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

import { SimulationMobileButton } from "@/components/shared/simulation-mobile-button";
import { SimulationDesktopButton } from "./simulation-desktop-button";

export function InformativeContainer() {
  return (
    <Card className="w-full max-w-md mx-auto overflow-hidden rounded-none border-none md:max-w-full">
      <CardContent className="p-0">
        <div className="bg-gray-200 text-black py-12">
          {/* Mobile */}
          <div className="relative bg-red-500 h-72 max-w-[280px] mx-auto rounded-t-2xl overflow-hidden md:hidden">
            <Image
              src={elderlyThoughtful}
              width={500}
              height={700}
              alt="Thoughtful old woman"
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </div>

          <CardHeader className="relative z-10 max-w-[370px] mx-auto bg-white text-black p-6 rounded-xl md:hidden">
            <div className="flex flex-col justify-center space-y-2">
              <CardTitle className="text-2xl font-bold leading-tight">
                Você sabe se o seu empréstimo tem juros abusivos?
              </CardTitle>
              <CardDescription className="text-base text-black tracking-tight pb-4">
                A taxa de juros no empréstimo consignado não pode ultrapassar  <strong>1,66%</strong> ao mês.
                Quer descobrir se está pagando mais do que deveria? Faça agora uma simulação gratuita dos seus contratos.
                Pare de perder dinheiro para o banco! Reduza suas parcelas e aumente seu salário. Aproveite essa oportunidade
                para recuperar o que é seu!
              </CardDescription>
            </div>
            <SimulationMobileButton title="Quero simular agora" />
          </CardHeader>

          {/* Desktop */}
          <div className="hidden md:grid md:grid-cols-2 md:place-items-center md:h-[680px] md:gap-6 xl:max-w-[1600px] lg:mx-auto lg:w-full">
            <div className="relative bg-red-500 h-full max-w-md mx-auto rounded-2xl overflow-hidden">
              <figure className="relative w-full h-full max-w-[500px] max-h-[700px]">
                <Image
                  src={elderlyThoughtful}
                  fill
                  alt="Thoughtful old woman"
                  className="object-cover"
                  loading="lazy"
                />
              </figure>
              <Image
                src={elderlyThoughtful}
                width={500}
                height={700}
                alt="Thoughtful old woman"
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </div>

            <CardHeader className="relative z-10 flex flex-col justify-center space-y-2 h-[80%] max-w-2xl mx-auto bg-white text-black py-6 px-12 rounded-2xl">
              <div className="flex flex-col justify-center space-y-2">
                <CardTitle className="xl:text-3xl 2xl:text-4xl font-bold leading-tight">
                  Você sabe se o seu empréstimo tem juros abusivos?
                </CardTitle>

                <CardDescription className="text-xl 2xl:text-2xl text-black tracking-tight pb-4">
                  A taxa de juros no empréstimo consignado não pode ultrapassar <strong>1,66%</strong> ao mês.
                  Quer descobrir se está pagando mais do que deveria? Faça agora uma simulação gratuita dos seus contratos.
                  Pare de perder dinheiro para o banco! Reduza suas parcelas e aumente seu salário. Aproveite essa oportunidade
                  para recuperar o que é seu!
                </CardDescription>
              </div>

              <SimulationDesktopButton title="Quero simular agora" />
            </CardHeader>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}