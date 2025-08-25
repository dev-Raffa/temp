import elderlyHeadset from "@/app/assets/images/elderly-headset.png";
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

export function PortabilityContainer() {
  return (
    <Card className="w-full max-w-md mx-auto overflow-hidden rounded-none border-none md:max-w-full">
      <CardContent className="p-0">
        <div className="bg-white text-black py-12">
          {/* Mobile */}
          <div className="relative bg-primary h-72 max-w-[280px] mx-auto rounded-t-2xl overflow-hidden md:hidden">
            <Image
              src={elderlyHeadset}
              width={422}
              height={591}
              alt="Elderly headset man"
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </div>

          <CardHeader className="relative z-10 max-w-[370px] mx-auto bg-black p-6 rounded-xl md:hidden">
            <div className="flex flex-col justify-center space-y-2">
              <CardTitle className="text-2xl text-primary-red font-bold leading-tight">
                Seu consignado pode liberar dinheiro!
              </CardTitle>
              <CardDescription className="text-base text-white tracking-tight pb-4">
                Ao revisar seu contrato, você pode acessar dinheiro que está retido
                e aprovar a devolução pelos juros abusivos cobrados nas parcelas.
                Faça agora uma simulação gratuita e descubra como liberar um valor de
                até <strong>R$ 5.000,00</strong>! Não perca a chance de colocar mais dinheiro no seu bolso!
              </CardDescription>
            </div>
            <SimulationMobileButton title="Fazer a minha portabilidade" />
          </CardHeader>

          {/* Desktop */}
          <div className="hidden md:grid md:grid-cols-2 md:place-items-center md:h-[680px] md:gap-6 xl:max-w-[1600px] lg:mx-auto lg:w-full">
            <CardHeader className="relative z-10 flex flex-col justify-center space-y-2 h-[80%] max-w-2xl mx-auto bg-black py-6 px-12 rounded-2xl">
              <div className="flex flex-col justify-center space-y-2">
                <CardTitle className="text-3xl 2xl:text-4xl text-primary-red font-bold leading-tight">
                  Seu consignado pode liberar dinheiro!
                </CardTitle>

                <CardDescription className="text-xl 2xl:text-2xl text-white tracking-tight pb-4">
                  Ao revisar seu contrato, você pode acessar dinheiro que está retido
                  e aprovar a devolução pelos juros abusivos cobrados nas parcelas.
                  Faça agora uma simulação gratuita e descubra como liberar um valor de
                  até <strong>R$ 5.000,00</strong>! Não perca a chance de colocar mais dinheiro no seu bolso!
                </CardDescription>
              </div>

              <SimulationDesktopButton title="Desejo fazer a simulação" />
            </CardHeader>

            <div className="relative bg-primary h-full max-w-md mx-auto rounded-2xl overflow-hidden">
              <Image
                src={elderlyHeadset}
                width={500}
                height={700}
                alt="Elderly headset man"
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}