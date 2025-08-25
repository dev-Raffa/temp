import {
  DialogDescription,
  DialogFooter,
  DialogTitle
} from "@/components/ui/dialog";

import { EllipsisLoader } from "@/components/shared/ellipsis-loader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { storageKeys } from "@/config/storage-keys";
import { useUtmParams } from "@/context/utm-context";
import { useProposals } from "@/hooks/use-proposals";
import { useStepper } from "@/hooks/use-stepper";
import { cn } from "@/lib/utils";
import { FormData, formSchema } from "@/schemas/form";
import { AuthService } from "@/services/auth-service";
import { DataService } from "@/services/data-service";
import { CustomerOrigin } from "@/types/customer";
import { InteractionResponse } from "@/types/interaction";
import { Contracts, Proposal } from "@/types/proposals";
import { env } from "@/utils/env";
import { maskCPF } from "@/utils/mask/mask-cpf";
import { maskFullName } from "@/utils/mask/mask-full-name";
import { maskPhone } from "@/utils/mask/mask-phone";
import { zodResolver } from "@hookform/resolvers/zod";
import { TriangleIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";

export function DesktopFormPerson() {
  const { utmSource, utmContent, utmCampaign, utmId } = useUtmParams();
  const { nextStep } = useStepper();
  const { setProposals, setOperatorInteraction } = useProposals();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
    reset
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      cpf: '',
      phoneNumber: ''
    }
  });

  const name = watch('name');
  const cpf = watch('cpf');
  const phoneNumber = watch('phoneNumber');
  const router = useRouter();

  useEffect(() => {
    setValue('name', maskFullName(name));
  }, [name, setValue]);

  useEffect(() => {
    setValue('cpf', maskCPF(cpf));
  }, [cpf, setValue]);

  useEffect(() => {
    setValue('phoneNumber', maskPhone(phoneNumber));
  }, [phoneNumber, setValue]);

  const onSubmit = handleSubmit(async (data) => {
    try {
      const formData = {
        username: env.NEXT_PUBLIC_USERNAME,
        password: env.NEXT_PUBLIC_PASSWORD,
      };

      const personData = {
        name: data.name,
        phoneNumber: data.phoneNumber,
        cpf: data.cpf,
      };

      const auth = await AuthService.signIn(formData.username, formData.password);
      const token = auth.accessToken;
      if (!token) throw new Error("401 Server Error: Token not found.");

      const replaceDocumentValue = personData.cpf.replace(/\D/g, "");
      const replacePhoneNumberValue = personData.phoneNumber.replace(/[\s()-]/g, "");

      localStorage.setItem(storageKeys.customerName, personData.name);
      localStorage.setItem(storageKeys.customerContact, replacePhoneNumberValue);
      localStorage.setItem(storageKeys.customerDocument, replaceDocumentValue);

      const contracts: Contracts = await DataService.getContractsByCustomerDocument(replaceDocumentValue);
      const amountContracts: Proposal[] = contracts.contratosElegiveis;

      if (amountContracts.length <= 0) {
        const payload = {
          customerOrigin: CustomerOrigin.Api,
          marketingDetails: {
            utmCampaign,
            utmContent,
            utmSource,
            utmId
          },
          name: personData.name,
          phonenumber: replacePhoneNumberValue,
          cpf: replaceDocumentValue,
          amountContractsElegible: amountContracts.length,
        }

        await DataService.createCustomer(payload);
        reset();
        router.push(`/clientes/inadequados?utm_source=${utmSource}&utm_campaign=${utmCampaign}&utm_content=${utmContent}&utm_id=${utmId}`);
        return;
      }

      const interaction: InteractionResponse = await DataService.createInteractionWithOperator();

      localStorage.setItem(storageKeys.operatorId, interaction.operator.id);
      localStorage.setItem(storageKeys.operatorName, interaction.operator.name);
      localStorage.setItem(storageKeys.operatorUsername, interaction.operator.username);
      localStorage.setItem(storageKeys.operatorContact, interaction.operator.phonenumber);
      localStorage.setItem(storageKeys.operatorTeamId, interaction.operator.teamDetails.teamId);
      localStorage.setItem(storageKeys.operatorTeamName, interaction.operator.teamDetails.teamName);

      const payload = {
        customerOrigin: CustomerOrigin.Api,
        marketingDetails: {
          utmCampaign,
          utmContent,
          utmSource,
          utmId
        },
        assignedOperatorRequest: {
          id: interaction.operator.id,
          name: interaction.operator.name,
          username: interaction.operator.username,
          phonenumber: interaction.operator.phonenumber,
          teamDetails: {
            teamId: interaction.operator.teamDetails.teamId,
            teamName: interaction.operator.teamDetails.teamName,
          }
        },
        name: personData.name,
        phonenumber: replacePhoneNumberValue,
        cpf: replaceDocumentValue,
        amountContractsElegible: amountContracts.length,
      }

      await DataService.createCustomer(payload);
      reset();
      setProposals(contracts);
      setOperatorInteraction(interaction);
      nextStep();
    } catch {
      reset();
    }
  });

  return (
    <>
      <div className="w-full flex items-center space-x-4 pt-8 pb-4 px-6">
        <span className="p-3 border rounded-2xl">
          <TriangleIcon className="text-primary-red" />
        </span>
        <div>
          <DialogTitle className="text-lg">
            Faça uma simulação grátis dos seus contratos
          </DialogTitle>
          <DialogDescription className="text-sm">
            Preencha o formulário corretamente.
          </DialogDescription>
        </div>
      </div>

      <div className="max-w-lg w-full mx-auto pb-6 px-6">
        <div className="grid grid-cols-1 gap-4 py-5">
          <div className="space-y-2">
            <Label htmlFor="name">Nome completo</Label>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <Input
                  id="name"
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  maxLength={100}
                  className={cn(
                    errors?.name
                      ? "border-primary-red focus-visible:ring-0"
                      : "border-input"
                  )}
                  {...field}
                />
              )}
            />
            {errors?.name?.message && (
              <span className="pl-2 text-xs text-primary-red font-medium italic">
                {errors?.name?.message}
              </span>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="cpf">CPF</Label>
            <Controller
              name="cpf"
              control={control}
              render={({ field }) => (
                <Input
                  id="cpf"
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  inputMode="numeric"
                  maxLength={14}
                  className={cn(
                    errors?.cpf
                      ? "border-primary-red focus-visible:ring-0"
                      : "border-input"
                  )}
                  {...field}
                />
              )}
            />
            {errors?.cpf?.message && (
              <span className="pl-2 text-xs text-primary-red font-medium italic">
                {errors?.cpf?.message}
              </span>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phoneNumber">Telefone</Label>
            <Controller
              name="phoneNumber"
              control={control}
              render={({ field }) => (
                <Input
                  id="phoneNumber"
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  inputMode="numeric"
                  maxLength={15}
                  className={cn(
                    errors?.phoneNumber
                      ? "border-primary-red focus-visible:ring-0"
                      : "border-input"
                  )}
                  {...field}
                />
              )}
            />
            {errors?.phoneNumber?.message && (
              <span className="pl-2 text-xs text-primary-red font-medium italic">
                {errors?.phoneNumber?.message}
              </span>
            )}
          </div>
        </div>
      </div>

      <DialogFooter className="w-full flex justify-center items-center p-8">
        <Button
          type="submit"
          className="w-full h-10 flex font-medium px-6 hover:bg-black hover:text-primary"
          onClick={onSubmit}
        >
          {!isSubmitting && <span>Simular propostas</span>}
          {isSubmitting && (
            <div className="flex items-center gap-4">
              Consultando
              <EllipsisLoader />
            </div>
          )}
        </Button>
      </DialogFooter>
    </>
  )
}
