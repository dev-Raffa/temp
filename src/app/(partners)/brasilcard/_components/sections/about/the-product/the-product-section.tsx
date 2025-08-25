import CardImage from "@/app/assets/images/partners/brasilcard/card.png"
import Image from "next/image";

import { PartnerLabel } from "../../../partner-label/partner-label";

export function TheProductSection(){
    const steps= [
        {
            title:"Solicite o seu cartão",
            description:"preencha o formulário de solicitação do cartão"
        },
        {
            title:"Aguarde a aprovação",
            description:"O resultado da solicitação é instantanêo"
        },
        {
            title:"Use o seu cartão como quiser",
            description:"use o seu cartão e veja o seu limite aumentar."
        }
    ]

    return(
        <section className="p-4 px-12 flex justify-center flex-wrap sm:flex-nowrap gap-1 sm:gap-8 sm:p-6 lg:px-36">
            <figure className="flex items-center overflow-clip rounded-sm justify-center relative w-full sm:w-1/2 min-w-80 min-h-[448px]">
                <Image 
                  src={CardImage}
                  alt="Cartão de crédito BrasilCard"
                  fill
                  loading="lazy"
                  className=" object-contain"
                />
            </figure>
            <article className="flex  flex-col gap-3 items-start justify-center relative w-full sm:w-1/2 min-w-80 sm:min-h-[448px]">
                <h2 className="font-bold text-lg">
                    Saiba como contratar o seu cartão de crédito {<PartnerLabel />}.
                </h2>
                <ul className="w-full">
                    {
                        steps.map((step, index)=>{
                            return(
                                <li key={'step-'+ index} className={`h-[75px] w-full flex items-center gap-2 ${ steps.length !== index+1 && 'border-b-2'}'`}>
                                    <span className="text-red-700 font-bold text-2xl" >{index + 1}</span>
                                    <div>
                                        <h3 className="text-base">{step.title}</h3>
                                        <p className="text-[12px]">{step.description}</p>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
                <section className="flex gap-4 w-full">
                    <a href="#solicitar-cartao" className="flex w-1/2">
                        <button className="w-full bg-red-800 h-8 text-white rounded-[4px] text-[12px]">Fazer Simulação</button>
                    </a>
                    <ul className="flex px-1 items-center justify-between gap-3 w-1/2 h-8">
                        <li>
                            <span className="text-nowrap text-[10px]">Sujeito a análise de crédito*</span>
                        </li>
                    </ul>
                </section>
            </article>
        </section>
    )
}