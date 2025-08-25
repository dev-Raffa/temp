import {
  CalendarIcon,
  CircleDollarSignIcon,
  SmartphoneIcon,
  StarIcon
} from "lucide-react";

import { ReactNode } from "react";

interface FeaturesProps {
  id: number;
  icon: ReactNode;
  title: string;
  description: string;
}

const features: FeaturesProps[] = [
  {
    id: 1,
    icon: <SmartphoneIcon className="size-6 text-secondary-red" />,
    title: "Agilidade",
    description: "Contrate pelo celular, com formalização 100% digital."
  },
  {
    id: 2,
    icon: <CircleDollarSignIcon className="size-6 text-secondary-red" />,
    title: "Economia",
    description: "Taxas reduzidas e condições que cabem no seu bolso."
  },
  {
    id: 3,
    icon: <CalendarIcon className="size-6 text-secondary-red" />,
    title: "Praticidade",
    description: "As parcelas seguem descontadas na folha, sem mudanças no seu controle."
  },
  {
    id: 4,
    icon: <StarIcon className="size-6 text-secondary-red" />,
    title: "Qualidade",
    description: "Especialistas treinados para garantir uma portabilidade segura e sem complicações."
  },
]

export function InstitutionalSecondaryContainer() {
  return (
    <div className="bg-[#f5f5f6] w-full">
      <div className="grid grid-cols-1 p-6 md:max-w-5xl md:w-full md:mx-auto lg:py-12 2xl:py-16">
        <div className="py-4 space-y-6">
          <h4 className="max-w-xs w-full text-lg text-black font-medium">
            Smart Consig: praticidade, segurança e juros mais baixos
          </h4>

          <div className="md:flex md:justify-center md:items-center md:space-x-4">
            {features.map((item) => (
              <section key={item.id}>
                <div className="flex flex-col space-y-4 py-4">
                  {item.icon}

                  <div className="flex flex-col space-y-1.5">
                    <span className="font-medium">
                      {item.title}
                    </span>

                    <p className="text-sm text-[#555]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}