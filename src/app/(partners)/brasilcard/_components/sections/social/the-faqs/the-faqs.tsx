import { Accordion, 
    AccordionContent, 
    AccordionItem, 
    AccordionTrigger } from "@/components/ui/accordion"

export function TheFaqs(){
    const faqs = [
        {
            quest: `O que é essa parceria entre a SmartConsig e a BrasilCard?`,
            answer: "A SmartConsig, especialista em soluções de crédito, uniu-se à BrasilCard, uma administradora de cartões com vasta experiência, para oferecer a você um cartão de crédito com benefícios exclusivos, de forma 100% digital e sem burocracia, diretamente em nossa plataforma."
        },
        {
            quest: "Por que a SmartConsig está oferecendo este cartão?",
            answer: "Nosso objetivo na SmartConsig é ampliar o acesso a soluções financeiras inteligentes. Ao oferecer o cartão BrasilCard, complementamos nosso portfólio e damos a você mais uma ferramenta para organizar sua vida financeira com praticidade e segurança."
        },
        {
            quest: "Quem pode solicitar o cartão BrasilCard pela SmartConsig?",
            answer: "Qualquer pessoa que atenda aos critérios básicos de solicitação de crédito pode pedir o cartão. O processo é aberto a clientes e não clientes da SmartConsig, mas usuários da nossa plataforma podem ter uma análise de crédito facilitada."
        },
        {
            quest: "Preciso ser cliente de crédito consignado da SmartConsig para ter o cartão?",
            answer: "Não necessariamente. A oferta está disponível para um público amplo. No entanto, ter um bom relacionamento com a SmartConsig pode contribuir positivamente para sua análise de crédito."
        },
        {
            quest: "Onde o cartão BrasilCard é aceito?",
            answer: "Seu cartão BrasilCard é aceito em uma extensa rede de estabelecimentos credenciados em todo o território nacional, incluindo supermercados, farmácias, postos de gasolina, lojas de departamento e muito mais."
        }
    ]
    return(
        <section className="px-4 gap-8 py-10 pb-28 lg:px-36 flex flex-col w-full text-start sm:justify-center relative">
            <h2 className="font-bold text-lg max-w-[600px]">
                Perguntas Frequentes:
            </h2>
            <Accordion type="single" collapsible>
                {faqs.map((faq, index)=>{
                    return(
                        <AccordionItem key={`faq-${index}`} value={`faq-${index + 1}`}>
                            <AccordionTrigger className="text-start">{faq.quest}</AccordionTrigger>
                            <AccordionContent>{faq.answer}</AccordionContent>
                        </AccordionItem>    
                    )
                })}
            </Accordion>
        </section>
    )
}