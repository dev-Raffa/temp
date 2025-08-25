import elderlyCasual from '@/app/assets/images/elderly-casual.png'
import elderlySmile from '@/app/assets/images/elderly-smile.png'
import logo from '@/app/assets/images/logo-white.png'
import Image from 'next/image'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { SimulationMobileButton } from '@/components/shared/simulation-mobile-button'
import { LockKeyholeIcon } from 'lucide-react'
import { SimulationDesktopButton } from './simulation-desktop-button'

export function HeaderContainer() {
  return (
    <Card className="w-full max-w-md mx-auto overflow-hidden rounded-none border-none md:max-w-full">
      <CardContent className="p-0">
        <div className="bg-gradient-to-b from-[#8a090d] via-[#e42c33] to-[#e42c33] text-white pb-12">
          <header className="flex justify-between items-center pt-2 pb-6 px-6 md:max-w-3xl md:w-full md:mx-auto md:py-6 lg:px-0 lg:max-w-7xl">
            <Image
              src={logo}
              width={150}
              height={200}
              className="w-20 md:w-24 xl:w-28"
              alt="Smartconsig logo"
              priority
              quality={75}
            />
            <div className="flex items-center justify-center gap-x-2 text-sm text-white md:text-base">
              <LockKeyholeIcon className="size-4 md:size-5" />
              <span>Site seguro</span>
            </div>
          </header>

          {/* Mobile */}
          <div className="relative bg-red-500 h-72 max-w-[350px] mx-auto rounded-t-2xl overflow-hidden md:hidden">
            <Image
              src={elderlySmile}
              width={150}
              height={200}
              alt="Smiling man"
              className="object-cover w-full h-full"
              quality={75}
              priority
            />
          </div>

          <CardHeader className="relative z-10 max-w-[370px] mx-auto bg-gray-200 text-black p-6 rounded-xl md:hidden">
            <CardTitle className="text-2xl text-primary leading-tight">
              Quer pagar menos no seu Consignado?
            </CardTitle>
            <CardDescription className="text-base text-black tracking-tight pb-4">
              Devolução aprovada! Recupere os juros abusivos pagos no seu empréstimo.
              Aumente seu salário e resgate até <br />
              <strong>R$ 5.000,00</strong> hoje!
            </CardDescription>
            <SimulationMobileButton title="Simular agora" />
          </CardHeader>

          {/* Desktop */}
          <div className="hidden md:grid md:grid-cols-2 md:place-items-center md:h-[680px] md:gap-6 lg:mx-auto lg:w-full xl:max-w-[1600px]">
            <CardHeader className="relative z-10 flex flex-col justify-center space-y-2 h-full max-w-xl mx-auto text-white p-6">
              <CardTitle className="text-4xl text-black leading-tight">
                Quer pagar menos no seu Consignado?
              </CardTitle>

              <CardDescription className="text-2xl text-white tracking-tight pb-4">
                Devolução aprovada! Recupere os juros abusivos pagos no seu empréstimo.
                Aumente seu salário e resgate até <strong>R$ 5.000,00</strong> hoje!
              </CardDescription>

              <SimulationDesktopButton
                title="Simular agora"
                className="h-12 bg-white text-primary text-lg font-bold hover:bg-black hover:opacity-90"
              />
            </CardHeader>

            <div className="flex items-center space-x-6 h-full px-6 2xl:px-0">
              <div className="relative bg-white h-[80%] max-w-md mx-auto rounded-2xl overflow-hidden">
                <Image
                  src={elderlyCasual}
                  width={500}
                  height={500}
                  alt="Casual elderly"
                  className="md:hidden xl:block object-cover w-full h-full"
                  priority
                />
              </div>

              <div className="relative bg-white h-full max-w-md mx-auto rounded-2xl overflow-hidden">
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
