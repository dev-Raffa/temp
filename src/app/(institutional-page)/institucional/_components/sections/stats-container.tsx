import { HandshakeIcon, StarIcon, TrendingUpIcon, UsersIcon } from "lucide-react";
import { ReactNode } from "react";

interface StatsProps {
  id: number;
  icon: ReactNode;
  value: string;
  description: string;
}

const stats: StatsProps[] = [
  {
    id: 1,
    icon: <UsersIcon className="size-6 text-secondary-red" />,
    value: "+60mil",
    description: "Clientes Satisfeitos"
  },
  {
    id: 2,
    icon: <HandshakeIcon className="size-6 text-secondary-red" />,
    value: "+100",
    description: "Colaboradores"
  },
  {
    id: 3,
    icon: <StarIcon className="size-6 text-secondary-red" />,
    value: "Nota 4.7",
    description: "De avaliação no Google"
  },
  {
    id: 4,
    icon: <TrendingUpIcon className="size-6 text-secondary-red" />,
    value: "Desde 2020",
    description: "Atuando no mercado de crédito"
  },
]

export function InstitutionalStatsContainer() {
  return (
    <div className="bg-[#121212] w-full">
      <section className="p-6 md:max-w-5xl md:w-full md:mx-auto">
        <div className="flex flex-col space-y-6 py-6 md:flex-row md:justify-center md:items-center md:space-x-10 md:space-y-0 lg:space-x-20">
          {stats.map((item) => (
            <div
              className="grid grid-cols-1 gap-1.5"
              key={item.id}
            >
              {item.icon}

              <span className="text-lg text-white font-medium">
                {item.value}
              </span>

              <p className="text-muted-foreground font-medium truncate">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}