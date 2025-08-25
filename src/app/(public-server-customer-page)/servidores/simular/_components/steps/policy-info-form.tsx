"use client"

import Link from "next/link";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

import { EllipsisLoader } from "@/components/shared/ellipsis-loader";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useStepper } from "@/hooks/use-stepper";
import { DataService } from "@/services/data-service";
import { useState } from "react";
import { toast } from "sonner";
import { SacLinkButton } from "../sac-link-button";

interface PublicServerCustomerPolicyInfoFormProps {
  onSubmit: () => void;
}

export function PublicServerCustomerPolicyInfoForm({
  onSubmit
}: PublicServerCustomerPolicyInfoFormProps) {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const { previousStep } = useStepper();

  const handleNextStep = async () => {
    try {
      setIsError(false);
      setIsSubmitting(true);
      await onSubmit();

      const response = await DataService.createInteractionWithDigisac();
      const message = "Olá,%20me%20cadastrei%20no%20site%20e%20quero%20simular.";

      toast.success("Sua proposta foi cadastrada com sucesso!");
      window.location.href = `https://wa.me/${response.phoneNumber}?text=${message}`;
    } catch {
      setIsError(true);
      toast.error("Erro ao cadastrar a sua proposta! Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-8 sm:py-16">
      <Card className="p-6 sm:max-w-sm sm:w-full sm:mx-auto sm:rounded-[36px]">
        <CardHeader className="px-0">
          <CardTitle className="text-xl font-medium pb-2 sm:text-center">
            Política de privacidade
          </CardTitle>
          <Separator />
          <CardDescription className="w-64 pt-2 sm:max-w-64 sm:w-full sm:mx-auto">
            Ao clicar em Simular, você concorda em enviar suas informações para o Grupo Smart Consig, que se compromete a usá-las de acordo com sua política de privacidade.
            Visite a{" "}
            <Link href="#" className="text-[#004aad]">
              Política de Privacidade do Grupo Smart Consig
            </Link>
          </CardDescription>
        </CardHeader>
      </Card>

      {isError && <SacLinkButton />}

      <div className="w-full flex flex-col items-center space-y-6 sm:flex-row sm:justify-center sm:items-center sm:space-x-6 sm:space-y-0 sm:mt-6 md:mt-12">
        <Button
          type="button"
          size="lg"
          variant="outline"
          className="hidden sm:flex h-10 w-72 text-sm rounded text-secondary-red border-secondary-red disabled:bg-zinc-100 disabled:border-none"
          disabled={isSubmitting}
          onClick={() => previousStep()}
        >
          Voltar
        </Button>

        <Button
          type="button"
          size="lg"
          className="w-full h-14 bg-secondary-red rounded-sm sm:h-10 sm:w-72 sm:text-sm sm:rounded"
          disabled={isSubmitting}
          onClick={handleNextStep}
        >
          {isSubmitting ? <EllipsisLoader /> : "Próximo"}
        </Button>

        <Button
          type="button"
          size="lg"
          variant="outline"
          className="h-14 w-full rounded-sm text-secondary-red border-secondary-red sm:hidden disabled:bg-zinc-100 disabled:border-none"
          disabled={isSubmitting}
          onClick={() => previousStep()}
        >
          Voltar
        </Button>
      </div>
    </div>
  )
}