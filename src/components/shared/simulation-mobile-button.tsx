import { Button } from '@/components/ui/button'

import { UtmLink } from './utm-link'

interface SimulationMobileButtonProps {
  title: string
  className?: string
}

export function SimulationMobileButton({
  title,
  className
}: SimulationMobileButtonProps) {
  return (
    <UtmLink href="/simular/area-cliente">
      <Button className={className || "w-full bg-primary-red font-bold"}>
        {title}
      </Button>
    </UtmLink>
  )
}
