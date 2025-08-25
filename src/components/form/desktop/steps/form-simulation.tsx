import { EllipsisLoader } from "@/components/shared/ellipsis-loader";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import {
  DialogDescription,
  DialogFooter,
  DialogTitle
} from "@/components/ui/dialog";
import { useProposals } from "@/hooks/use-proposals";
import { CircleDollarSignIcon } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { DesktopPortabilityContent } from "./proposals/portability";
import { DesktopRefinancingContent } from "./proposals/refinancing";

export function DesktopFormSimulation() {
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
      <div className="w-full flex items-center space-x-4 pt-8 pb-4 px-6">
        <span className="p-3 border rounded-2xl">
          <CircleDollarSignIcon className="text-green-500" />
        </span>
        <div>
          <DialogTitle className="text-lg">
            Resultado da sua simulação
          </DialogTitle>
          <DialogDescription className="max-w-64 text-sm">
            Visualize as propostas disponíveis.
          </DialogDescription>
        </div>
      </div>

      <Carousel className="w-full max-w-sm mx-auto">
        <CarouselContent>
          {proposals?.contratosElegiveis.map((data, index) => {
            const {
              condicoesContratuaisPortabilidade: portability,
              condicoesContratuaisRefinanciamento: refinancing
            } = data;

            return portability ? (
              <DesktopPortabilityContent
                proposal={data}
                index={index}
                portability={portability}
              />
            ) : (
              <DesktopRefinancingContent
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

      <DialogFooter className="w-full mx-auto px-6">
        <Button
          type="button"
          className="bg-green-500 text-white max-w-96 w-full mx-auto flex justify-center items-center font-medium px-6 hover:opacity-80 hover:text-black"
          onClick={sendWhatsAppMessage}
        >
          {!formState.isSubmitting && <span>Resgatar valor total</span>}
          {formState.isSubmitting && <EllipsisLoader />}
        </Button>
      </DialogFooter>
    </>
  )
}
