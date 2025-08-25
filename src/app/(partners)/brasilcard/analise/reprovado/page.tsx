import Image from 'next/image'
import Link from 'next/link'
import partnerLogoImage from "@/app/assets/images/partners/brasilcard/logo.jpg"
import logoImage from "@/app/assets/images/logo-red.png"

import { Button } from '@/components/ui/button'
import { ArrowRightIcon, Plus } from 'lucide-react'

export default function AnalysisRegected() {

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-28 sm:py-36">
        <div className="flex justify-center items-center flex-col py-7 sm:flex-row gap-4 sm:gap-8 w-full h:full overflow-clip rounded-sm">                    
            <figure className="sm:w-5/12 w-9/12 h-40 relative">
                <Image 
                    src={logoImage}
                    alt="logo smartconsig"
                    loading="lazy"
                    quality={75}
                    fill
                    className="object-contain"
                />
            </figure>
            <Plus className="w-2/12 h-8 sm:h-12"/>
            <figure className="sm:w-5/12 w-full h-32 rounded-sm relative ">
                <Image
                    src={partnerLogoImage}
                    alt="logo brasilcard"
                    loading="lazy"
                    className="object-contain"
                    quality={75}
                    fill
                />                 
            </figure>
        </div>

        <div className="text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-balance text-black sm:text-6xl">
            Ops... Parece que você não possui nenhuma proposta disponível
          </h1>

          <p className="max-w-xs w-full mx-auto text-lg text-pretty text-muted-foreground font-medium mt-4 sm:text-2xl sm:max-w-full sm:mt-8">
            No momento nosso parceiro não possui nenhuma proposta disponível para você. De qualquer forma, salvamos os
            seus dados na nossa base de dados e podemos entrar em contato com novas propostas para seu perfil em breve.
          </p>

          <div className="flex items-center justify-center mt-8">
            <Link href={"/brasilcard"}>
              <Button
                type='button'
                className='flex items-center gap-2 text-lg px-12 py-6'
              >
                Página Inicial
                <ArrowRightIcon className='size-4 md:size-6' />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}