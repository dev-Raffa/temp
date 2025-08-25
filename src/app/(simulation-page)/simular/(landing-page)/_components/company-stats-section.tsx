import {
  MonitorIcon,
  StarIcon,
  TrophyIcon,
  Users2Icon
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const overviewStats = [
  {
    icon: MonitorIcon,
    value: "+55mil",
    label: "Clientes atendidos.",
  },
  {
    icon: TrophyIcon,
    value: "5 anos",
    label: "de atuação no mercado de crédito.",
  },
  {
    icon: Users2Icon,
    value: "+100",
    label: "colaboradores",
  },
  {
    icon: StarIcon,
    value: "Nota 4.7",
    label: "de avaliação no Google.",
  },
]

export function SimulationPageCompanyStatsSection() {
  return (
    <div className="bg-medium-dark py-16 px-5">
      <h2 className="text-center text-2xl text-white md:text-3xl font-bold mb-12">
        Conheça nossa empresa
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
        {overviewStats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-col items-center pb-2">
              <stat.icon className="w-8 h-8 text-danger-red mb-2" />
              <CardTitle className="text-3xl font-bold">{stat.value}</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-gray-600">
              <p>{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

