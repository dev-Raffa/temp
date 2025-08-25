import { cn } from '@/lib/utils'
import { LockKeyholeIcon } from 'lucide-react'

import AnimatedShinyText from '@/components/magic-ui/animated-shiny-text'

export function AnimatedShinySpan() {
  return (
    <div className="z-10 flex items-center sm:hidden">
      <div
        className={cn(
          'group rounded-full text-base text-white transition-all ease-in hover:cursor-pointer bg-gradient-to-r from-neutral-900 to-zinc-800 hover:bg-neutral-800 hover:border-neutral-400',
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center gap-2 px-4 py-1 transition ease-out text-sm text-nwhite hover:text-neutral-400 hover:duration-300">
          <LockKeyholeIcon className="size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          <span>Site seguro</span>
        </AnimatedShinyText>
      </div>
    </div>
  )
}
