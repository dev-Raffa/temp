'use client'

import { ProposalsProvider } from '@/context/proposals-context'
import { UtmProviderSuspense } from '@/context/utm-context'
import { useState } from 'react'
import { Stepper } from '../stepper'
import { DesktopFormFinished } from './steps/form-finished'
import { DesktopFormPerson } from './steps/form-person'
import { DesktopFormSimulation } from './steps/form-simulation'

export function DesktopFormContent() {
  const [currentStep, setCurrentStep] = useState(0)

  return (
    <UtmProviderSuspense>
      <form>
        <ProposalsProvider>
          <Stepper
            steps={[
              {
                label: 'Formulário de dados pessoais',
                content: <DesktopFormPerson />
              },
              {
                label: 'Resultado da simulação',
                content: <DesktopFormSimulation />
              },
              {
                label: 'Redirecionamento',
                content: <DesktopFormFinished />
              }
            ]}
            currentStep={currentStep}
            onStepChange={setCurrentStep}
          />
        </ProposalsProvider>
      </form>
    </UtmProviderSuspense>
  )
}
