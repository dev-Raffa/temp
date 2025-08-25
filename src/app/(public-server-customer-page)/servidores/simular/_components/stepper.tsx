import { Separator } from '@/components/ui/separator'
import { StepperContext } from '@/context/stepper-context'
import { cn } from '@/lib/utils'
import { useCallback } from 'react'

export interface PublicServerCustomerStepperProps {
  currentStep: number
  onStepChange?: (step: number) => void
  steps: {
    title: string
    content: React.ReactNode
  }[]
  stepIsVisible: boolean
}

export function PublicServerCustomerStepper({
  steps,
  currentStep,
  onStepChange,
  stepIsVisible
}: PublicServerCustomerStepperProps) {
  const previousStep = useCallback(() => {
    const newStep = Math.max(0, currentStep - 1)
    onStepChange?.(newStep)
  }, [currentStep, onStepChange])

  const nextStep = useCallback(() => {
    const newStep = Math.min(steps.length - 1, currentStep + 1)
    onStepChange?.(newStep)
  }, [currentStep, steps.length, onStepChange])

  return (
    <StepperContext.Provider value={{ previousStep, nextStep }}>
      <div className="p-6 sm:max-w-5xl sm:w-full sm:mx-auto">
        {stepIsVisible && (
          <>
            <div
              className={cn(
                currentStep + 1 === 6 ?
                  'hidden' :
                  'flex flex-col items-center space-y-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0'
              )}
            >
              <h2 className="text-xl font-medium">
                {steps[currentStep]?.title}
              </h2>

              <div className='flex items-center space-x-4'>
                {steps.map((item, index) => (
                  <span
                    key={index}
                    className={cn(
                      index + 1 === 6 ? 'hidden' : 'flex justify-center items-center rounded-full size-6 border',
                      index === currentStep ? "border-secondary-red" : "border-[#555]",
                    )}
                  >
                    <strong className={cn(
                      'text-xs',
                      index === currentStep ? "text-secondary-red" : "text-[#555]"
                    )}>
                      {index + 1}
                    </strong>
                  </span>
                ))}
              </div>
            </div>
            <Separator
              className={cn(
                currentStep + 1 === 6 ? 'hidden' : 'bg-[#555] mt-3'
              )}
            />
          </>
        )}
        <main className='sm:max-w-lg sm:w-full sm:mx-auto md:max-w-xl md:w-full md:mx-auto'>
          {steps[currentStep]?.content}
        </main>
      </div>
    </StepperContext.Provider>
  )
}
