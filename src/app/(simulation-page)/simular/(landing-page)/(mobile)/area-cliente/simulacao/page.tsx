"use client"

import Link from "next/link";

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

import { EllipsisLoader } from "@/components/shared/ellipsis-loader";
import { Button } from "@/components/ui/button";
import { useProposals } from "@/hooks/use-proposals";
import { CircleDollarSignIcon, EyeIcon } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { MobilePortabilityDataContent } from "./portability";
import { MobileRefinancingDataContent } from "./refinancing";

export default function MobileFormSimulationPage() {
  const { formState } = useForm();
  const { proposals, operatorInteraction } = useProposals();

  const [operatorPhoneNumber, setOperatorPhoneNumber] = useState<string | null>(null);

  const handleCreateInteraction = useCallback(async () => {
    try {
      const interaction = operatorInteraction;
      if (interaction?.operator?.phonenumber) setOperatorPhoneNumber(interaction.operator.phonenumber);
    } catch (error) {
      console.error("Erro ao buscar operador:", error);
    }
  }, []);

  useEffect(() => {
    handleCreateInteraction();
  }, [handleCreateInteraction]);

  const sendWhatsAppMessage = async () => {
    if (operatorPhoneNumber) {
      const message = "Vi%20no%20anúncio%20e%20quero%20ser%20atendido";
      window.location.href = `https://wa.me/55${operatorPhoneNumber}?text=${message}`;
    }
  }

  return (
    <>
      <div className="flex justify-center items-center space-x-4 pb-6">
        <span className="p-3 border rounded-2xl">
          <CircleDollarSignIcon className="text-green-500" />
        </span>
        <div>
          <h1 className="text-lg font-semibold leading-none tracking-tight">
            Resultado da sua simulação
          </h1>
          <h3 className="max-w-64 text-sm text-muted-foreground">
            Visualize as propostas disponíveis.
          </h3>
        </div>
      </div>

      <Carousel className="w-full max-w-[300px] mx-auto">
        <CarouselContent>
          {proposals?.contratosElegiveis.map((data, index) => {
            const {
              condicoesContratuaisPortabilidade: portability,
              condicoesContratuaisRefinanciamento: refinancing
            } = data;

            return portability ? (
              <MobilePortabilityDataContent
                proposal={data}
                index={index}
                portability={portability}
              />
            ) : (
              <MobileRefinancingDataContent
                proposal={data}
                index={index}
                refinancing={refinancing}
              />
            )
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div className="w-full max-w-72 mx-auto mt-auto flex flex-col space-y-3 px-0 pt-3 pb-16">
        <Link href="/simular/area-cliente/atendimento">
          <Button
            type="button"
            variant="outline"
            className="w-full flex items-center gap-2"
          >
            <EyeIcon className="size-4" />
            Ver todos os detalhes
          </Button>
        </Link>

        <Button
          type="button"
          className="bg-green-500 text-white text-lg font-bold w-full flex justify-center items-center px-6 hover:opacity-80 hover:text-black"
          onClick={sendWhatsAppMessage}
        >
          {!formState.isSubmitting && <span>Resgatar valor total</span>}
          {formState.isSubmitting && <EllipsisLoader />}
        </Button>
      </div>
    </>
  )
}