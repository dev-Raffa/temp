import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { ChevronRightIcon, HeadphonesIcon, LaptopIcon } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

interface OptionsProps {
  id: number;
  icon: ReactNode;
  label: string;
}

const options: OptionsProps[] = [
  {
    id: 1,
    icon: <LaptopIcon className="size-6" />,
    label: "Aqui no nosso site"
  },
  {
    id: 2,
    icon: <HeadphonesIcon className="size-6" />,
    label: "Com um de nossos especialistas"
  },
]

export function PublicServerCustomerOptionsContainer() {
  return (
    <div className="grid grid-cols-1 py-12 px-6 md:hidden">
      <div className="space-y-6">
        <h4 className="max-w-xs w-full text-lg text-black font-medium tracking-tight">
          Por aqui, você tem duas possibilidades de simulação:
        </h4>

        {options.map((item) => (
          <Card className="p-6 border-2" key={item.id}>
            <span className="text-secondary-red">
              {item.icon}
            </span>

            <CardHeader className="px-0">
              <CardTitle className="text-base font-medium">
                {item.label}
              </CardTitle>

              <CardDescription className="sr-only">
                {item.label}
              </CardDescription>
            </CardHeader>

            <Link
              href="#"
              className="flex items-center gap-0.5 text-xs text-secondary-red font-medium"
            >
              <span>Simular Crédito</span>
              <ChevronRightIcon className="size-4" />
            </Link>
          </Card>
        ))}
      </div>
    </div>
  )
}