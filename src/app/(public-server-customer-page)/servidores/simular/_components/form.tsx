"use client"

import {
  publicServerCustomerDocumentUploadSchema,
  publicServerCustomerFinancialSchema,
  publicServerCustomerInfoFormSchema,
  publicServerCustomerPersonalSchema
} from "@/schemas/public-server-customer-form";

import {
  ArmedForcesPublicServant,
  CreatePublicServerCustomerRequest,
  CustomerOrigin,
  FederalServantLink,
  MunicipalPublicServantLink,
  Segment,
  StatePublicServantLink
} from "@/types/customer";

import {
  armedForcesLinkMap,
  federalServantLinkMap,
  municipalServantLinkMap,
  publicServantTypeMap,
  stateServantLinkMap
} from "@/utils/mappers/public-servant-type-mapper";

import { Form } from "@/components/ui/form";
import { storageKeys } from "@/config/storage-keys";
import { DataService } from "@/services/data-service";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { PublicServerCustomerStepper } from "./stepper";
import { PublicServerCustomerFinancialInfoForm } from "./steps/financial-info-form";
import { PublicServerCustomerPersonalInfoForm } from "./steps/personal-info.form";
import { PublicServerCustomerPolicyInfoForm } from "./steps/policy-info-form";
import { PublicServerCustomerInfoForm } from "./steps/public-server-info-form";
import { PublicServerCustomerSuccessfulStepContent } from "./steps/successful-step-content";
import { PublicServerCustomerUnsuccessfulStepContent } from "./steps/unsuccessful-step-content";
import { PublicServerCustomerUploadDocumentForm } from "./steps/upload-document-form";

const formSchema = z.object({
  publicServerCustomerInfoForm: publicServerCustomerInfoFormSchema,
  publicServerCustomerFinancial: publicServerCustomerFinancialSchema,
  publicServerCustomerPersonal: publicServerCustomerPersonalSchema,
  publicServerCustomerDocumentUpload: publicServerCustomerDocumentUploadSchema,
});

export type PublicServerCustomerSchema = z.infer<typeof formSchema>;

export function PublicServerCustomerSimulationForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAValidCustomer, setIsAValidCustomer] = useState(false);

  const form = useForm<PublicServerCustomerSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      publicServerCustomerPersonal: {
        name: "",
        phoneNumber: "",
      }
    }
  });

  const validateCustomerEligibility = async () => {
    const formData = form.getValues();
    const hasAPayrollCard = formData.publicServerCustomerFinancial?.hasAPayrollCard;
    const selectedBank = formData.publicServerCustomerFinancial?.currentBank;
    const isFederal = formData.publicServerCustomerInfoForm.isFederalPublicServer;
    const isMunicipal = formData.publicServerCustomerInfoForm.isMunicipalPublicServer;
    const isState = formData.publicServerCustomerInfoForm.isStatePublicServer;
    const isArmedForces = formData.publicServerCustomerInfoForm.isArmedForcesPublicServer;
    let isValid = true;

    if (
      isFederal === "CommissionedPosition" ||
      isFederal === "TemporaryPosition" ||
      isFederal === "CltCeletista" ||
      isFederal === "Other"
    ) {
      isValid = false;
    }

    if (
      isMunicipal === "CommissionedPosition" ||
      isMunicipal === "TemporaryPosition" ||
      isMunicipal === "CLTEmployee" ||
      isMunicipal === "Other"
    ) {
      isValid = false;
    }

    if (isState === "Others") isValid = false;
    if (isArmedForces === "Others") isValid = false;
    if (hasAPayrollCard === "no") isValid = false;
    if (selectedBank === "outro") isValid = false;

    setIsAValidCustomer(isValid);
  };

  const watchedFields = form.watch([
    "publicServerCustomerInfoForm",
    "publicServerCustomerFinancial",
  ]);

  const onSubmit = form.handleSubmit(async data => {
    const publicServantType = publicServantTypeMap[data.publicServerCustomerInfoForm.publicServerType];

    const formData: CreatePublicServerCustomerRequest = {
      customerOrigin: CustomerOrigin.Api,
      marketingDetails: {
        utmSource: localStorage.getItem(storageKeys.utmSource) || "",
        utmCampaign: localStorage.getItem(storageKeys.utmCampaign) || "",
        utmId: localStorage.getItem(storageKeys.utmId) || "",
        utmContent: localStorage.getItem(storageKeys.utmContent) || "",
      },
      segment: Segment.PublicServant,
      publicServantDetails: {
        publicServantType,
        federalServantLink: data.publicServerCustomerInfoForm.isFederalPublicServer
          ? federalServantLinkMap[data.publicServerCustomerInfoForm.isFederalPublicServer]
          : FederalServantLink.None,
        statePublicServantLink: data.publicServerCustomerInfoForm.isStatePublicServer
          ? stateServantLinkMap[data.publicServerCustomerInfoForm.isStatePublicServer]
          : StatePublicServantLink.None,
        municipalPublicServantLink: data.publicServerCustomerInfoForm.isMunicipalPublicServer
          ? municipalServantLinkMap[data.publicServerCustomerInfoForm.isMunicipalPublicServer]
          : MunicipalPublicServantLink.None,
        armedForcesPublicServant: data.publicServerCustomerInfoForm.isArmedForcesPublicServer
          ? armedForcesLinkMap[data.publicServerCustomerInfoForm.isArmedForcesPublicServer]
          : ArmedForcesPublicServant.None,
      },
      name: localStorage.getItem(storageKeys.publicServerCustomerName) || "",
      phonenumber: localStorage.getItem(storageKeys.publicServerCustomerContact) || "",
      cpf: "57255858082",
      amountContractsElegible: 0
    };

    const createUser = await DataService.createPublicServerCustomer(formData);
    Promise.resolve(createUser);
  });

  useEffect(() => {
    validateCustomerEligibility();
  }, [watchedFields]);

  return (
    <Form {...form}>
      <form onSubmit={onSubmit}>
        <PublicServerCustomerStepper
          steps={[
            {
              title: "Suas informações",
              content: <PublicServerCustomerInfoForm />
            },
            {
              title: "Suas informações",
              content: isAValidCustomer ?
                <PublicServerCustomerFinancialInfoForm /> :
                <PublicServerCustomerUnsuccessfulStepContent />
            },
            {
              title: "Suas informações",
              content: isAValidCustomer ?
                <PublicServerCustomerPersonalInfoForm /> :
                <PublicServerCustomerUnsuccessfulStepContent />
            },
            {
              title: "Suas informações",
              content: <PublicServerCustomerUploadDocumentForm />
            },
            {
              title: "Suas informações",
              content: <PublicServerCustomerPolicyInfoForm onSubmit={onSubmit} />
            },
            {
              title: "",
              content: <PublicServerCustomerSuccessfulStepContent />
            },
          ]}
          currentStep={currentStep}
          onStepChange={setCurrentStep}
          stepIsVisible={true}
        />
      </form>
    </Form>
  )
}