import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PersonDetails } from "@/types/proposals";
import { EyeIcon } from "lucide-react";

interface DesktopPersonDataProps {
  personData: PersonDetails;
}

export function DesktopPersonData({ personData }: DesktopPersonDataProps) {
  const formattedDate = new Date(personData.dataNascimento).toLocaleDateString("pt-BR");

  return (
    <Sheet>
      <div className="w-full py-5">
        <SheetTrigger asChild>
          <Button
            type="button"
            variant="outline"
            className="w-full flex items-center gap-2"
          >
            <EyeIcon className="size-4" />
            Ver todos os detalhes
          </Button>
        </SheetTrigger>
      </div>

      <SheetContent className="w-full">
        <SheetHeader className="pb-6 px-6 text-left">
          <SheetTitle>Ficha completa da simulação</SheetTitle>
          <SheetDescription className="sr-only">
            Acompanhe o retorno da sua simulação.
          </SheetDescription>
        </SheetHeader>

        <Tabs defaultValue="person-data" className="px-4">
          <TabsList>
            <TabsTrigger value="person-data">Dados pessoais</TabsTrigger>
            <TabsTrigger value="portability-data">Dados portabilidade</TabsTrigger>
          </TabsList>

          <TabsContent value="person-data">
            <div className="grid grid-cols-1 gap-y-3 p-3">
              <div className="flex flex-col space-y-2">
                <span className="text-sm font-semibold">
                  Nome completo
                </span>
                <p className="text-sm">
                  {personData.nome}
                </p>
              </div>

              <div className="flex flex-col space-y-2">
                <span className="text-sm font-semibold">
                  CPF
                </span>
                <p className="text-sm">
                  {personData.cpf}
                </p>
              </div>

              <div className="flex flex-col space-y-2">
                <span className="text-sm font-semibold">
                  Cidade
                </span>
                <p className="text-sm">
                  {personData.cidade} - {personData.uf}
                </p>
              </div>

              <div className="flex flex-col space-y-2">
                <span className="text-sm font-semibold">
                  Data de nascimento
                </span>
                <p className="text-sm">
                  {formattedDate}
                </p>
              </div>

              <div className="flex flex-col space-y-2">
                <span className="text-sm font-semibold">
                  Idade
                </span>
                <p className="text-sm">
                  {personData.idade}
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="portability-data">
            <div className="grid grid-cols-1 gap-y-3 p-3">
              <div className="flex flex-col space-y-2">
                <span className="text-sm font-semibold">
                  Banco atual
                </span>
                <p className="text-sm">
                  {personData.banco}
                </p>
              </div>

              <div className="flex flex-col space-y-2">
                <span className="text-sm font-semibold">
                  Meio de pagamento
                </span>
                <p className="text-sm">
                  {personData.meioPagamento}
                </p>
              </div>

              <div className="flex flex-col space-y-2">
                <span className="text-sm font-semibold">
                  Benêficio
                </span>
                <p className="text-sm">
                  {personData.beneficioEspecie}
                </p>
              </div>

              <div className="flex flex-col space-y-2">
                <span className="text-sm font-semibold">
                  Número do benêficio
                </span>
                <p className="text-sm">
                  {personData.numeroBeneficio}
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <SheetFooter className="w-full pt-6 px-6">
          <SheetClose asChild>
            <Button type="button" className="w-full">Fechar</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
