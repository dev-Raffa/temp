import Image from "next/image";
import partnerLogoImage from "@/app/assets/images/partners/brasilcard/logo.jpg"
import logoImage from "@/app/assets/images/logo-red.png"

import { Plus } from "lucide-react";
import { PartnerLabel } from "../../../partner-label/partner-label";

export function ThePartneshipSection(){
    return(
        <section className="flex justify-center flex-wrap sm:flex-nowrap gap-8 p-6 px-12 lg:px-36">
            <section className="sm:p-4 lg:p-9 flex justify-center items-center w-full sm:w-1/2 min-w-80 min-h-[400px]">
                <div className="flex justify-center items-center flex-col sm:flex-row gap-4 sm:gap-8 w-full h:full overflow-clip rounded-sm">                    
                    <figure className="sm:w-5/12 w-9/12 h-36 sm:h-80 relative">
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
                    <figure className="sm:w-5/12 w-full h-36 sm:h-60 rounded-sm relative ">
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
            </section>
            <article className="flex flex-col gap-3 items-start justify-center relative w-full sm:w-1/2 min-w-80 min-h-[448px]">
                <h2 className="font-bold text-lg">
                    Uma Parceria Pensada para Você
                </h2>
                <p className="font-light text-[#555555]">
                    Na SmartConsig, nosso compromisso é abrir portas para suas conquistas financeiras. 
                    É por isso que buscamos os melhores parceiros do mercado para ampliar suas possibilidades. 
                    Ao nos unirmos à {<PartnerLabel />}, estamos conectando nossa expertise em crédito com a tradição de uma empresa sólida, tudo para oferecer a você, nosso cliente, um acesso facilitado a um cartão de crédito completo e cheio de vantagens. 
                    Esta parceria é o nosso jeito de ir além, entregando mais valor e confiança para o seu dia a dia.
                </p>
            </article>
        </section>
    )
}