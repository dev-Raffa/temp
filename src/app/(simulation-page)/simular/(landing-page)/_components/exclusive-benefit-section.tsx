import {
  ClockIcon,
  TargetIcon,
  ThumbsUpIcon,
  WalletIcon
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: TargetIcon,
    title: "100%",
    description: "de aprovação para negativados.",
    variant: "black",
  },
  {
    icon: WalletIcon,
    title: "Redução",
    description: "nas parcelas, até 50% mais baratas.",
    variant: "red",
  },
  {
    icon: ClockIcon,
    title: "24 horas",
    description: "ou menos para ter seu dinheiro liberado.",
    variant: "white",
  },
  {
    icon: ThumbsUpIcon,
    title: "Praticidade",
    description: "processo feito 100% pelo celular.",
    variant: "black",
  },
]

export function SimulationPageExclusiveBenefitsSection() {
  return (
    <div className="py-16 px-5 lg:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary-red text-xl font-medium mb-2">NOSSOS DIFERENCIAIS</p>
          <h2 className="text-2xl md:text-3xl font-bold">Vantagens Exclusivas</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className={`border-0 ${benefit.variant === "black"
                ? "bg-medium-dark text-white"
                : benefit.variant === "red"
                  ? "bg-gray-200 text-primary-red"
                  : "bg-white text-black shadow-lg"
                }`}
            >
              <CardContent className="pt-6">
                <div className="flex flex-col items-start">
                  <div
                    className={`rounded-full p-3 border-2 ${benefit.variant === "white"
                      ? "border-primary-red" : "border-medium-red"
                      } mb-4`}
                  >
                    <benefit.icon
                      className={`w-6 h-6 ${benefit.variant === "white"
                        ? "text-primary-red"
                        : benefit.variant === "red"
                          ? "text-black"
                          : "text-primary-red"
                        }`}
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{benefit.title}</h3>
                  <p
                    className={`${benefit.variant === "white"
                      ? "text-gray-600"
                      : benefit.variant === "red"
                        ? "text-black/80"
                        : "text-white/80"
                      }`}
                  >
                    {benefit.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}