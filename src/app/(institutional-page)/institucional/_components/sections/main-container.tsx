
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function InstitutionalMainContainer() {
  return (
    <div className="hidden sm:grid grid-cols-1">
      <section className="flex flex-col py-6 bg-[#121212] md:bg-[url(/women.png)] md:bg-cover md:bg-center md:bg-no-repeat md:size-full md:mb-16 lg:mb-20">
        <div className="xl:max-w-6xl xl:w-full xl:mx-auto">
          <div className="space-y-8 mt-28 md:mt-44">
            <Badge variant="outline" className="text-secondary-red border-secondary-red">
              Benefícios
            </Badge>

            <h1 className="text-[22px] text-white md:max-w-xl md:text-4xl">
              Um novo cartão, mais vantagens para servidores públicos
            </h1>

            <p className="text-muted-foreground font-medium md:max-w-xl md:text-[19px] md:text-white">
              Chegou a hora de deixar pra trás o cartão antigo com juros altos e conhecer o Cartão Benefício Smart. Uma solução mais leve, moderna e cheia de vantagens: descontos em farmácias, clube de vantagens, possibilidade de saque e zero anuidade — tudo com desconto direto na folha e muito mais controle.
            </p>
          </div>

          <div className="flex items-center w-full py-8">
            <Button
              type="button"
              className="w-full bg-secondary-red rounded sm:w-72 sm:h-11"
            >
              Quero conhecer os benefícios
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}