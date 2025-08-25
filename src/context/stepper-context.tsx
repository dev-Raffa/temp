import { createContext } from 'react'

export interface StepperContextProps {
  previousStep: () => void
  nextStep: () => void
}

export const StepperContext = createContext({} as StepperContextProps)
