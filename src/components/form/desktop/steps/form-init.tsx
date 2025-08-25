import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  DialogDescription,
  DialogFooter,
  DialogTitle
} from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'
import { useStepper } from '@/hooks/use-stepper'
import { AuthService } from '@/services/auth-service'
import { env } from '@/utils/env'
import { RocketIcon } from 'lucide-react'

import portabilityBanner from '@/app/assets/images/banner.png'
import Image from 'next/image'

export function DesktopFormInit() {
  const { nextStep } = useStepper();

  const handleNextStep = async () => {
    const data = {
      username: env.NEXT_PUBLIC_USERNAME,
      password: env.NEXT_PUBLIC_PASSWORD,
    };

    try {
      await AuthService.signIn(data.username, data.password);
      nextStep();
    } catch (error) {
      console.error("Erro ao autenticar:", error);
    }
  };

  return (
    <>
      <div className="w-full flex items-center space-x-4 pt-8 pb-4 px-6">
        <span className="p-3 border rounded-2xl">
          <RocketIcon className="text-primary-red" />
        </span>
        <div>
          <DialogTitle className="text-lg">
            Faça uma simulação grátis
          </DialogTitle>
          <DialogDescription className="max-w-64 text-sm">
            Vamos verificar propostas para você.
          </DialogDescription>
        </div>
      </div>

      <div className="w-full flex flex-col space-y-6 py-6 px-8">
        <div className="size-full">
          <Image
            src={portabilityBanner}
            width={820}
            height={312}
            className="object-cover size-full rounded"
            alt="Crédito consignado com segurança e velocidade."
          />
        </div>

        <div className="flex items-center gap-2 text-xs">
          <Checkbox checked className="rounded" />
          Concordo com os termos de serviços e privacidade.
        </div>
      </div>

      <Separator />

      <DialogFooter className="w-full flex justify-center items-center p-8">
        <Button
          type="button"
          className="w-full h-10 flex font-medium px-6 hover:bg-black hover:text-primary"
          onClick={handleNextStep}
        >
          Vamos começar ?
        </Button>
      </DialogFooter>
    </>
  );
}
