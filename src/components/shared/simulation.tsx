import simulation from "@/app/assets/images/simulation.png";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "../ui/card";

import { SimulationMobileButton } from "@/components/shared/simulation-mobile-button";
import { SimulationDesktopButton } from "./simulation-desktop-button";

export function SimulationContainer() {
  return (
    <>
      {/* Mobile */}
      <div className="bg-black w-full flex flex-col items-center py-12 md:hidden">
        <div className="max-w-[322px] mx-auto w-full flex flex-col justify-center space-y-2">
          <span className="text-2xl text-primary font-bold leading-none tracking-tighter sm:text-4xl">
            Exemplo de simulação
          </span>
          <p className="text-white font-medium sm:hidden">
            Reduzimos o juros e valor de parcela do seu empréstimo, garantindo economia até o fim do contrato. Além disso,
            sua margem consignável e benefício irão aumentar, liberando novo crédito. Simule agora e aproveite!
          </p>
        </div>

        <Image
          src={simulation}
          width={600}
          height={700}
          className="h-[600px] w-auto rounded-xl sm:h-[700px]"
          alt="Simulação de crédito"
        />

        <div className="w-full px-6">
          <SimulationMobileButton title="Simule sem compromisso" />
        </div>
      </div>

      {/* Desktop */}
      <Card className="hidden md:block w-full mx-auto overflow-hidden rounded-none border-none">
        <CardContent className="p-0">
          <div className="bg-black text-white py-12">
            <div className="hidden md:grid md:grid-cols-2 md:place-items-center md:h-[680px] md:gap-6 xl:max-w-[1600px] lg:mx-auto lg:w-full">
              <div className="relative bg-primary h-full max-w-md mx-auto rounded-2xl overflow-hidden">
                <Image
                  src={simulation}
                  width={500}
                  height={700}
                  alt="Simulação de crédito"
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>

              <CardHeader className="relative z-10 flex flex-col justify-center space-y-2 h-[80%] max-w-2xl mx-auto bg-white text-black py-6 px-12 rounded-2xl">
                <div className="flex flex-col justify-center space-y-2">
                  <CardTitle className="text-4xl text-primary-red font-bold leading-tight">
                    Exemplo de simulação
                  </CardTitle>

                  <CardDescription className="text-2xl text-black tracking-tight pb-4">
                    Reduzimos o juros e valor de parcela do seu empréstimo, garantindo economia até o fim do contrato. Além disso,
                    sua margem consignável e benefício irão aumentar, liberando novo crédito. Simule agora e aproveite!
                  </CardDescription>
                </div>

                <SimulationDesktopButton title="Simule sem compromisso" />
              </CardHeader>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  )
}