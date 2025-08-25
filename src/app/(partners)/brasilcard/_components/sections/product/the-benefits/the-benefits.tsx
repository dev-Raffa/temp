import { Card, CardContent } from "@/components/ui/card";
import { PartnerLabel } from "../../../partner-label/partner-label";
import { 
    Banknote, 
    CalendarClock, 
    CalendarDays, 
    ChartNoAxesCombined, 
    Percent, 
    ShieldCheck, 
    ShoppingBag, 
    ShoppingCart 
} from "lucide-react";

export function TheBenefits (){
    const benefits = [
    { 
      icon: <CalendarClock className="h-14 w-auto" />, 
      title: "Até 45 dias para pagar a fatura",
    },
    {
      icon: <ChartNoAxesCombined className="h-14 w-auto" />,
      title: "Aumento rápido de limite",
    },
    {
      icon: <ShoppingBag className="h-14 w-auto" />,
      title: "Parcelamento de compras",
    },
    {
      icon: <CalendarDays className="h-14 w-auto" />,
      title: "Sem anuidade e taxa de adesão",
    },
    {
      icon: <Percent className="h-14 w-auto" />,
      title: "Descontos promocionais",
    },
    {
      icon: <Banknote className="h-14 w-auto" />,
      title: "Saque emergencial",
    },
    {
      icon: <ShoppingCart className="h-14 w-auto" />,
      title: "ofertas em produtos",
    },
    {
      icon: <ShieldCheck className="h-14 w-auto" />,
      title: "Facilidade e segurança",
    },
  ];

    return(
        <section className="gap-8 px-4 py-10 lg:px-36 flex flex-col w-full justify-center relative pb-8">
            <h2 className="font-bold text-lg max-w-[600px]">
              Todas as vantagens que um cartão de crédito pode oferecer, você encontra na {<PartnerLabel />}!
            </h2>

            <ul className="grid w-full grid-cols-2 h-fit lg:grid-cols-4 lg:h-[500px] gap-6 relative">
              {benefits.map((feature, index) => (
                <Card
                    key={index}
                    className={`w-full h-fit py-4 bg-transparent rounded-[10px] overflow-hidden shadow-[0px_0px_5px_3px_#00000033] border-none`}
                >
                    <CardContent className="flex flex-col  items-center justify-center gap-3 h-fit">
                        <figure className="relative text-red-800 h-[50px] sm:h-[60px]">
                          {feature.icon}
                        </figure>
                        <p className="relative font-bold text-sm sm:text-base text-center h-4">
                          {feature.title}
                        </p>
                    </CardContent>
                </Card>
              ))}
            </ul>
        </section>
    )
}