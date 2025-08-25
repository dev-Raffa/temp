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
import { AuthService } from "@/services/auth-service";
import { env } from "@/utils/env";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { PublicServerCustomerSchema } from "../form";
import { PublicServerCustomerIsArmedForcesOptions } from "./public-server-options/is-armed-forces-options";
import { PublicServerCustomerIsFederalOptions } from "./public-server-options/is-federal-options";
import { PublicServerCustomerIsMunicipalOptions } from "./public-server-options/is-municipal-options";
import { PublicServerCustomerIsStateOptions } from "./public-server-options/is-state-options";

export function PublicServerCustomerInfoForm() {
  const form = useFormContext<PublicServerCustomerSchema>();

  const [isFederal, setIsFederal] = useState(false);
  const [isState, setIsState] = useState(false);
  const [itIsMunicipal, setItIsMunicipal] = useState(false);
  const [isArmedForces, setIsArmedForces] = useState(false);

  const { nextStep } = useStepper();

  const publicServerType = form.watch("publicServerCustomerInfoForm.publicServerType");
  const federal = form.watch("publicServerCustomerInfoForm.isFederalPublicServer");
  const municipal = form.watch("publicServerCustomerInfoForm.isMunicipalPublicServer");
  const state = form.watch("publicServerCustomerInfoForm.isStatePublicServer");
  const armedForces = form.watch("publicServerCustomerInfoForm.isArmedForcesPublicServer");

  useEffect(() => {
    const shouldAutoAdvance =
      (publicServerType === "Federal" && federal) ||
      (publicServerType === "State" && state) ||
      (publicServerType === "Municipal" && municipal) ||
      (publicServerType === "ArmedForces" && armedForces);

    if (shouldAutoAdvance) {
      const timer = setTimeout(async () => {
        const isValid = await form.trigger("publicServerCustomerInfoForm");

        if (isValid) {
          const formData = {
            username: env.NEXT_PUBLIC_USERNAME,
            password: env.NEXT_PUBLIC_PASSWORD,
          };

          await AuthService.signIn(formData.username, formData.password);
          nextStep();
        }
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [publicServerType, federal, municipal, state, armedForces, form, nextStep]);

  async function handleNextStep() {
    const isValid = await form.trigger("publicServerCustomerInfoForm");
    if (isValid) nextStep();
  }

  return (
    <div className="grid grid-cols-1 items-center py-6 sm:py-12 md:py-16">
      <h1 className="text-xl font-medium">Perguntas</h1>
      <FormField
        control={form.control}
        name="publicServerCustomerInfoForm.publicServerType"
        render={({ field }) => (
          <FormItem className="py-4 space-y-3">
            <FormLabel>
              Você é servidor público?
            </FormLabel>
            <FormControl>
              <RadioGroup
                className="flex flex-col"
                onValueChange={(value) => {
                  field.onChange(value);
                  setIsFederal(value === "Federal");
                  setIsState(value === "State");
                  setItIsMunicipal(value === "Municipal");
                  setIsArmedForces(value === "ArmedForces");
                }}
              >
                <FormItem className="flex items-center gap-x-2">
                  <FormControl>
                    <RadioGroupItem className="border-[#555]" value="Federal" />
                  </FormControl>
                  <FormLabel className="font-normal pb-1">
                    Federal
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center gap-x-2">
                  <FormControl>
                    <RadioGroupItem className="border-[#555]" value="State" />
                  </FormControl>
                  <FormLabel className="font-normal pb-1">
                    Estadual
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center gap-x-2">
                  <FormControl>
                    <RadioGroupItem className="border-[#555]" value="Municipal" />
                  </FormControl>
                  <FormLabel className="font-normal pb-1">
                    Municipal
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center gap-x-2">
                  <FormControl>
                    <RadioGroupItem className="border-[#555]" value="ArmedForces" />
                  </FormControl>
                  <FormLabel className="font-normal pb-1">
                    Forças Armadas
                  </FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <Separator />
      {isFederal && (
        <PublicServerCustomerIsFederalOptions formControl={form.control} />
      )}
      {isState && (
        <PublicServerCustomerIsStateOptions formControl={form.control} />
      )}
      {itIsMunicipal && (
        <PublicServerCustomerIsMunicipalOptions formControl={form.control} />
      )}
      {isArmedForces && (
        <PublicServerCustomerIsArmedForcesOptions formControl={form.control} />
      )}
      <div className="w-full sm:flex sm:justify-center sm:items-center">
        <Button
          type="button"
          size="lg"
          className="w-full h-14 bg-secondary-red rounded-sm mt-6 sm:h-10 sm:w-72 sm:text-sm sm:rounded sm:mt-12"
          onClick={() => handleNextStep()}
        >
          Próximo
        </Button>
      </div>
    </div>
  );
}