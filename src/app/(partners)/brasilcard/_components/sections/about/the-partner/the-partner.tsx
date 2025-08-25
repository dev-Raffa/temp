import Image from "next/image";
import BusinessFacadeImg from "@/app/assets/images/partners/brasilcard/company-facade.jpg"

import { PartnerLabel } from "../../../partner-label/partner-label";

export function ThePartnerSection(){
    return(
            <section className="flex flex-wrap sm:flex-nowrap justify-center px-12 lg:px-36 gap-9 p-6 bg-[#F5F5F6]">
                <section className="sm:p-4 lg:p-9 flex justify-center items-center w-full sm:w-1/2 min-w-80 min-h-[400px]">
                    <figure className="overflow-clip w-full h-full rounded-sm relative ">
                        <Image 
                        src={BusinessFacadeImg}
                        alt="Fachada da empresa BrasilCard."
                        fill
                        loading="lazy"
                        className="object-cover"
                        />
                    </figure>
                </section>
                <article className="flex flex-col gap-3 items-start justify-center relative w-full sm:w-1/2 min-w-80 min-h-[448px]">
                    <h2 className="font-bold text-lg">
                        Conheça a {<PartnerLabel />}: Tradição e Segurança
                    </h2>
                    <p className="font-light text-[#555555]">
                        A {<PartnerLabel />} é uma das empresas mais tradicionais e respeitadas no mercado brasileiro de meios de pagamento. Com anos de experiência, construiu uma reputação de solidez e confiança, oferecendo soluções de crédito que facilitam a vida de milhões de pessoas.
                    </p>
                    <p className="font-light text-[#555555]">
                        Sua ampla rede credenciada garante aceitação em milhares de estabelecimentos por todo o país, proporcionando liberdade e segurança para suas compras. Escolhemos a {<PartnerLabel />} pela sua excelência e compromisso com o cliente, valores que compartilhamos na SmartConsig.
                    </p>
                </article>
            </section>
        )
}