import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqContainer() {
  return (
    <div
      className="bg-gray-200 h-[520px] w-full flex flex-col items-center justify-center overflow-hidden md:h-[680px]"
    >
      <div className="w-full flex flex-col space-y-6">
        <p className="text-black text-2xl text-center font-bold tracking-tighter md:text-5xl">
          FAQ<br />
          Perguntas e respostas
        </p>

        <Accordion
          type="single"
          className="w-full mx-auto text-sm text-black px-3 sm:text-base md:max-w-3xl md:px-0"
          collapsible
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>Como solicitar a portabilidade?</AccordionTrigger>
            <AccordionContent className="whitespace-pre-line">
              Solicitar a portabilidade é simples! Basta clicar no botão abaixo e preencher nosso formulário rápido. Nossa equipe entrará em contato para confirmar as informações e iniciar o processo. Tudo será feito de forma online, sem que você precise sair de casa.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>A portabilidade tem algum custo?</AccordionTrigger>
            <AccordionContent className="whitespace-pre-line">
              A portabilidade de consignado é gratuita! Você não paga nada para transferir seu empréstimo de um banco para outro. Todos os custos são cobertos pelos bancos envolvidos no processo, garantindo que você aproveite todas as vantagens sem gastar nada a mais.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Quanto tempo leva o processo de portabilidade?</AccordionTrigger>
            <AccordionContent className="whitespace-pre-line">
              O processo de portabilidade é rápido e descomplicado! Depois de enviar a documentação, a transferência para o novo banco pode ser concluída em até 7 dias úteis, dependendo da análise do banco. Nossa equipe acompanha cada etapa para garantir que tudo ocorra dentro do prazo.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Acabei de fazer um empréstimo, posso reduzir?</AccordionTrigger>
            <AccordionContent className="whitespace-pre-line">
              Mesmo para aqueles que acabaram de adquirir um empréstimo consignado, a redução da taxa de juros é uma opção válida, resultando na diminuição da parcela. Essa redução não apenas afeta positivamente o contrato atual, mas também abre espaço para o aumento da margem, permitindo a liberação de um novo valor.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Os serviços da Smart Consig são confiáveis?</AccordionTrigger>
            <AccordionContent className="whitespace-pre-line">
              Sua segurança é nossa prioridade e sua tranquilidade é nossa missão. Com mais de 5 anos de atuação, garantimos 100% de segurança em nossos serviços. Somos uma empresa regularizada pela ANEPS e autorizada pelo BACEN como correspondente bancário, proporcionando confiança e integridade em cada transação.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
