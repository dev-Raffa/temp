"use client"

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { storageKeys } from "@/config/storage-keys";
import { useStepper } from "@/hooks/use-stepper";
import { maskFullName } from "@/utils/mask/mask-full-name";
import { maskPhone } from "@/utils/mask/mask-phone";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { PublicServerCustomerSchema } from "../form";

export function PublicServerCustomerPersonalInfoForm() {
  const form = useFormContext<PublicServerCustomerSchema>();

  const { previousStep, nextStep } = useStepper();

  const name = form.watch("publicServerCustomerPersonal.name");
  const phoneNumber = form.watch("publicServerCustomerPersonal.phoneNumber");

  useEffect(() => {
    if (name && phoneNumber) {
      const timer = setTimeout(async () => {
        const isValid = await form.trigger("publicServerCustomerPersonal");

        if (isValid) {
          const replacePhoneNumberValue = phoneNumber.replace(/[\s()-]/g, "");

          localStorage.setItem(storageKeys.publicServerCustomerName, name);
          localStorage.setItem(storageKeys.publicServerCustomerContact, replacePhoneNumberValue);
          nextStep();
        }
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [name, phoneNumber, document, form, nextStep]);

  async function handleNextStep() {
    const isValid = await form.trigger("publicServerCustomerPersonal");
    if (isValid) nextStep();
  }

  const handleNameChange = (value: string) => {
    const maskedValue = maskFullName(value);
    return maskedValue;
  };

  const handlePhoneChange = (value: string) => {
    const maskedValue = maskPhone(value);
    return maskedValue;
  };

  return (
    <div className="grid grid-cols-1 items-center py-6 sm:py-12 md:py-16">
      <small className="text-[11px] text-muted-foreground pb-6 sm:hidden">
        *Seus dados serão usados exclusivamente para entrarmos em contato e realizarmos a análise gratuita do seu contrato consignado com segurança e sigilo.
      </small>

      <h1 className="text-xl font-medium">Dados</h1>

      <FormField
        control={form.control}
        name="publicServerCustomerPersonal.name"
        render={({ field }) => (
          <FormItem className="py-4">
            <FormLabel className="text-muted-foreground">
              Nome completo
            </FormLabel>
            <FormControl>
              <Input
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                maxLength={100}
                placeholder="Informe seu nome"
                className="px-0 border-x-0 border-t-0 border-b rounded-none"
                {...field}
                onChange={(e) => {
                  const maskedValue = handleNameChange(e.target.value);
                  field.onChange(maskedValue);
                }}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="publicServerCustomerPersonal.phoneNumber"
        render={({ field }) => (
          <FormItem className="py-4">
            <FormLabel className="text-muted-foreground">
              Telefone com DDD
            </FormLabel>
            <FormControl>
              <Input
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                inputMode="numeric"
                maxLength={15}
                placeholder="Informe um telefone válido"
                className="px-0 border-x-0 border-t-0 border-b rounded-none"
                {...field}
                onChange={(e) => {
                  const maskedValue = handlePhoneChange(e.target.value);
                  field.onChange(maskedValue);
                }}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <small className="hidden sm:flex text-[11px] text-muted-foreground pb-6">
        *Seus dados serão usados exclusivamente para entrarmos em contato e realizarmos a análise gratuita do seu contrato consignado com segurança e sigilo.
      </small>

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