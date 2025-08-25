import { StepperContext, StepperContextProps } from '@/context/stepper-context'
import { useContext } from 'react'

export function useStepper(): StepperContextProps {
  return useContext(StepperContext)
}
