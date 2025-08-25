import Image from "next/image";

import {
  ClockIcon,
  CompassIcon,
  HeartHandshakeIcon,
  MedalIcon,
  UserCheckIcon,
  WalletIcon
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const missionPoints = [
  {
    icon: CompassIcon,
    title: "Nossa Visão",
    description: "Ser referência de agilidade, qualidade e eficiência na intermediação de crédito consignado.",
  },
  {
    icon: MedalIcon,
    title: "Uma empresa de valores",
    description: "Ética, respeito, proatividade, honestidade, qualidade e eficiência.",
  },
  {
    icon: HeartHandshakeIcon,
    title: "Atendimento Smart",
    description: "Temos uma equipe de consultores financeiros especializados.",
  },
  {
    icon: WalletIcon,
    title: "As melhores taxas do mercado",
    description: "Condições e prazos flexíveis encaixados no seu orçamento.",
  },
  {
    icon: UserCheckIcon,
    title: "Crédito descomplicado",
    description: "100% on-line, com uma equipe ágil, transparente e qualificada.",
  },
  {
    icon: ClockIcon,
    title: "Agilidade e praticidade",
    description: "Valor na conta até 24h c/ parcelas descontadas em seu benefício.",
  },
]

export function SimulationPageCompanyMissionSection() {
  return (
    <div className="bg-white text-black py-16 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="space-y-8">
            <div>
              <p className="text-danger-red text-xl font-medium mb-4">NOSSA MISSÃO</p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Oferecer soluções financeiras para beneficiários do INSS, por meio de
                uma gestão humanizada que transforme positivamente a vida de nossos clientes.
              </h2>
            </div>

            <div className="relative h-[300px] lg:h-[400px] rounded-t-3xl overflow-hidden">
              <Image
                src="/smartconsig.jpg"
                alt="Team celebration"
                fill
                className="object-cover"
                priority
              />

              <div className="absolute bottom-6 left-6 bg-medium-dark text-danger-red rounded-full px-4 py-2">
                <span className="flex items-center gap-2">
                  <WalletIcon className="size-4" />
                  Crédito Facilitado
                </span>
              </div>

              <div className="absolute top-6 right-6 bg-medium-dark text-danger-red rounded-full px-4 py-2">
                <span className="flex items-center gap-2">
                  <UserCheckIcon className="size-4" />
                  Atendimento Premium
                </span>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {missionPoints.map((point, index) => (
              <Card key={index} className="bg-medium-dark">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    <div className="rounded-full border-2 border-danger-red p-3 w-fit">
                      <point.icon className="size-6 text-danger-red" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-white mb-2">{point.title}</h3>
                      <p className="text-gray-400">{point.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

