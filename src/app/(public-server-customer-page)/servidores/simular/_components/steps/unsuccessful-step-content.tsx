"use client"

import { useState } from "react";
import { PublicServerCustomerStepper } from "../stepper";
import { PublicServerCustomerPersonalInfoForm } from "./personal-info.form";
import { PublicServerCustomerUnsuccessfulStepMessage } from "./unsuccessful-step-message";

export function PublicServerCustomerUnsuccessfulStepContent() {
  const [localStep, setLocalStep] = useState(0);

  return (
    <PublicServerCustomerStepper
      steps={[
        {
          title: "Suas informações",
          content: <PublicServerCustomerPersonalInfoForm />
        },
        {
          title: "",
          content: <PublicServerCustomerUnsuccessfulStepMessage />
        },
      ]}
      currentStep={localStep}
      onStepChange={setLocalStep}
      stepIsVisible={false}
    />
  )
}