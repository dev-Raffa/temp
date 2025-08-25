import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";
import { ContractsRefinancingDetails, Proposal } from "@/types/proposals";
import { ChevronRightIcon } from "lucide-react";

interface MobileRefinancingDataContentProps {
  proposal: Proposal;
  index: number;
  refinancing: ContractsRefinancingDetails | null;
}

export function MobileRefinancingDataContent({
  proposal,
  index,
  refinancing
}: MobileRefinancingDataContentProps) {
  return (
    <CarouselItem key={index}>
      <Card className="p-1">
        <CardContent className="aspect-square flex flex-col items-center justify-between space-y-3 p-4">
          <Badge className="bg-green-500 text-white">
            Proposta {index + 1}
          </Badge>

          <Badge className="flex items-center justify-center bg-gray-200 text-black text-lg font-bold py-2 max-w-md w-full rounded-full hover:bg-gray-100">
            {refinancing?.nomeBancoContratoAtual}
          </Badge>

          <div className="w-full text-center pb-4 border-b border-gray-400">
            <span className="text-lg font-bold">
              Taxa de Juros
            </span>
            <div className="flex justify-between items-center pt-6">
              <div className="flex flex-col space-y-3">
                <span className="text-lg">Atual</span>
                <p className="font-bold text-destructive">
                  {refinancing?.antigaTaxaJuros
                    .toFixed(2)
                    .replace(".", ",")
                  }% a.m.
                </p>
              </div>
              <ChevronRightIcon className="size-12" />
              <div className="flex flex-col space-y-3">
                <span className="text-lg font-semibold">Reduzida</span>
                <p className="font-bold text-green-500">
                  {refinancing?.novaTaxaJuros
                    .toFixed(2)
                    .replace(".", ",")
                  }% a.m.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full text-center pb-4 border-b border-gray-400">
            <span className="text-lg font-bold">
              Saldo devedor
            </span>
            <div className="flex justify-between items-center gap-6 pt-6">
              <div className="flex flex-col space-y-3">
                <span className="text-lg">Atual</span>
                <p className="font-bold text-destructive">
                  {Number(
                    refinancing?.saldoDevedor
                  ).toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              </div>
              <ChevronRightIcon className="size-12" />
              <div className="flex flex-col space-y-3">
                <span className="text-lg font-semibold">Reduzido</span>
                <p className="font-bold text-green-500">
                  {Number(
                    refinancing?.saldoDevedorReduzido
                  ).toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-3">
            <span className="text-2xl text-center font-bold">
              Troco de volta
            </span>
            <div className="flex items-center">
              <ChevronRightIcon className="size-12" />
              <p className="text-4xl font-bold text-green-500">
                {Number(refinancing?.valorTroco)
                  .toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })
                  .replace(/(\d)\d*\.(\d)/, "*.*$2")}
              </p>
            </div>
            <span className="text-muted-foreground text-xs text-center font-medium">
              *Clique abaixo para acessar o valor total
            </span>
          </div>
        </CardContent>
      </Card>
    </CarouselItem>
  )
}