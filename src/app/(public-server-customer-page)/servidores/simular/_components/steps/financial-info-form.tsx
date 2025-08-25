"use client"

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";

import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useStepper } from "@/hooks/use-stepper";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { PublicServerCustomerSchema } from "../form";

export function PublicServerCustomerFinancialInfoForm() {
  const form = useFormContext<PublicServerCustomerSchema>();

  const { previousStep, nextStep } = useStepper();

  const hasPayrollCard = form.watch("publicServerCustomerFinancial.hasAPayrollCard");
  const currentBank = form.watch("publicServerCustomerFinancial.currentBank");

  useEffect(() => {
    if (hasPayrollCard && currentBank) {
      const timer = setTimeout(async () => {
        const isValid = await form.trigger("publicServerCustomerFinancial");
        if (isValid) nextStep();
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [hasPayrollCard, currentBank, form, nextStep]);

  async function handleNextStep() {
    const isValid = await form.trigger("publicServerCustomerFinancial");
    if (isValid) nextStep();
  }

  return (
    <div className="grid grid-cols-1 items-center py-6 sm:py-12 md:py-16">
      <h1 className="text-xl font-medium">Perguntas</h1>
      <FormField
        control={form.control}
        name="publicServerCustomerFinancial.hasAPayrollCard"
        render={({ field }) => (
          <FormItem className="py-4 space-y-3">
            <FormLabel>
              Você possui cartão consignado?
            </FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                className="flex flex-col"
              >
                <FormItem className="flex items-center gap-x-2">
                  <FormControl>
                    <RadioGroupItem className="border-[#555]" value="yes" />
                  </FormControl>
                  <FormLabel className="font-normal pb-1">
                    Sim
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center gap-x-2">
                  <FormControl>
                    <RadioGroupItem className="border-[#555]" value="no" />
                  </FormControl>
                  <FormLabel className="font-normal pb-1">
                    Não
                  </FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <Separator />
      <FormField
        control={form.control}
        name="publicServerCustomerFinancial.currentBank"
        render={({ field }) => (
          <FormItem className="py-4 space-y-3">
            <FormLabel>
              Qual banco está descontando hoje?
            </FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                className="flex flex-col"
              >
                <FormItem className="flex items-center gap-x-2">
                  <FormControl>
                    <RadioGroupItem className="border-[#555]" value="bancobmg" />
                  </FormControl>
                  <FormLabel className="font-normal pb-1">
                    Banco Bmg
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center gap-x-2">
                  <FormControl>
                    <RadioGroupItem className="border-[#555]" value="bancopan" />
                  </FormControl>
                  <FormLabel className="font-normal pb-1">
                    Banco Pan
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center gap-x-2">
                  <FormControl>
                    <RadioGroupItem className="border-[#555]" value="bancosantander" />
                  </FormControl>
                  <FormLabel className="font-normal pb-1">
                    Banco Santander
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center gap-x-2">
                  <FormControl>
                    <RadioGroupItem className="border-[#555]" value="bancodaycoval" />
                  </FormControl>
                  <FormLabel className="font-normal pb-1">
                    Banco Daycoval
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center gap-x-2">
                  <FormControl>
                    <RadioGroupItem className="border-[#555]" value="bancomaster" />
                  </FormControl>
                  <FormLabel className="font-normal pb-1">
                    Banco Master
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center gap-x-2">
                  <FormControl>
                    <RadioGroupItem className="border-[#555]" value="outro" />
                  </FormControl>
                  <FormLabel className="font-normal pb-1">
                    Outro
                  </FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <small className="text-[11px] text-muted-foreground pb-4">
        *Caso o seu cartão não seja de um desses bancos, infelizmente não poderemos prosseguir com o atendimento.
      </small>
      <Separator className="sm:hidden" />
      <div className="w-full flex flex-col items-center space-y-6 sm:flex-row sm:justify-center sm:items-center sm:space-x-6 sm:space-y-0 sm:mt-6">
        <Button
          type="button"
          size="lg"
          variant="outline"
          className="hidden sm:flex h-10 w-72 text-sm rounded text-secondary-red border-secondary-red"
          onClick={() => previousStep()}
        >
          Voltar
        </Button>

        <Button
          type="button"
          size="lg"
          className="w-full h-14 bg-secondary-red rounded-sm sm:h-10 sm:w-72 sm:text-sm sm:rounded"
          onClick={() => handleNextStep()}
        >
          Próximo
        </Button>

        <Button
          type="button"
          size="lg"
          variant="outline"
          className="h-14 w-full rounded-sm text-secondary-red border-secondary-red sm:hidden"
          onClick={() => previousStep()}
        >
          Voltar
        </Button>
      </div>
    </div>
  );
}