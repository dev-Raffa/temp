'use client'

import elderlyCasual from '@/app/assets/images/elderly-casual.png';
import elderlySmile from '@/app/assets/images/elderly-smile.png';
import humanImg from '@/app/assets/images/human.png';
import logo from '@/app/assets/images/logo-white.png';
import Image from 'next/image';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { SimulationDesktopButton } from '@/components/shared/simulation-desktop-button';
import { SimulationMobileButton } from '@/components/shared/simulation-mobile-button';
import { Separator } from '@/components/ui/separator';
import { LockKeyholeIcon } from 'lucide-react';

export function SimulationPageHeader() {
  return (
    <Card className="w-full max-w-md mx-auto overflow-hidden rounded-none border-none md:max-w-full">
      <CardContent className="p-0">
        <div className="bg-medium-dark text-white pb-12">
          <header className="flex justify-between items-center pt-2 pb-6 px-6 md:max-w-3xl md:w-full md:mx-auto md:py-6 xl:px-0 lg:max-w-7xl">
            <Image
              src={logo}
              width={450}
              height={200}
              className="w-28 md:w-32"
              alt="Smartconsig logo"
            />

            <div className="flex items-center justify-center space-x-3 text-sm text-white md:text-base">
              <LockKeyholeIcon className="size-4 md:size-5" />
              <Separator orientation='vertical' className='h-4' />
              <span>Site seguro</span>
            </div>
          </header>

          {/* Mobile */}
          <div className="relative bg-danger-red h-72 max-w-[350px] mx-auto rounded-t-2xl overflow-hidden md:hidden">
            <Image
              src={humanImg}
              width={500}
              height={1000}
              alt="Smiling man"
              className="object-cover size-full"
              priority
            />
          </div>

          <CardHeader className="relative z-10 max-w-[370px] mx-auto bg-gray-300 text-black p-6 rounded-xl md:hidden">
            <CardTitle className="text-xl text-primary leading-tight">
              Aposentados: Seu Empréstimo Virou um Problema?
            </CardTitle>

            <CardDescription className="text-xl text-black font-medium tracking-tight pb-4">
              Descubra em 1 minuto como transferir seu consignado e {" "}
              receba até R$ 7.000 dos juros abusivos. Simule Agora!
            </CardDescription>

            <SimulationMobileButton
              title="Simular agora"
              className="bg-danger-red h-11 w-full text-lg font-semibold"
            />
          </CardHeader>

          {/* Desktop */}
          <div className="hidden md:grid md:grid-cols-2 md:place-items-center md:h-[680px] md:gap-6 xl:max-w-[1600px] lg:mx-auto lg:w-full">
            <CardHeader className="relative z-10 flex flex-col justify-center space-y-2 h-full max-w-xl mx-auto text-white p-2">
              <CardTitle className="text-3xl text-danger-red leading-tight xl:text-4xl">
                Faça a portabilidade do seu contrato
                de um jeito seguro e rapido!
              </CardTitle>

              <CardDescription className="text-4xl text-white font-medium tracking-tight pb-4">
                Podemos usar seu contrato com
                juros alto para salvar suas finanças,
                Clique agora mesmo e simule!
              </CardDescription>

              <SimulationDesktopButton
                title="Simular agora"
                className="h-12 bg-danger-red text-white text-lg font-bold hover:bg-white hover:text-danger-red hover:opacity-90"
              />
            </CardHeader>

            <div className="flex items-center space-x-6 h-full px-6 xl:px-0">
              <div className="relative bg-danger-red h-[80%] max-w-md mx-auto rounded-2xl overflow-hidden">
                <Image
                  src={elderlyCasual}
                  width={500}
                  height={500}
                  alt="Casual elderly"
                  className="md:hidden xl:block object-cover w-full h-full"
                  priority
                />
              </div>

              <div className="relative bg-danger-red h-full max-w-md mx-auto rounded-2xl overflow-hidden">
                <Image
                  src={elderlySmile}
                  width={500}
                  height={500}
                  alt="Smiling man"
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
