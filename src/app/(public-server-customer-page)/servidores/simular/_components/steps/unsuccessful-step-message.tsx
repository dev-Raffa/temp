"use client"

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { XCircleIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function PublicServerCustomerUnsuccessfulStepMessage() {
  const router = useRouter();

  const handleRedirect = () => {
    localStorage.clear();
    router.push("/servidores");
  }

  return (
    <div>
      <div className="flex flex-col items-center space-y-2 p-6 sm:py-12">
        <XCircleIcon className="hidden sm:flex sm:size-12 sm:text-secondary-red" />

        <h1 className="w-60 text-xl text-center font-medium p-4 sm:w-72 sm:text-2xl md:w-96">
          Não encontramos contratos válidos neste momento.
        </h1>

        <p className="text-sm text-muted-foreground sm:max-w-md sm:py-2">
          Recebemos seus dados e fizemos a simulação, mas no momento você ainda não atende aos critérios necessários para seguir com o processo.
        </p>

        <p className="text-sm text-muted-foreground sm:max-w-md sm:py-2">
          Mas fique tranquilo(a): sua situação pode mudar a qualquer momento, e nossa equipe vai te manter atualizado(a)!
        </p>

        <p className="text-sm text-muted-foreground sm:max-w-md sm:py-2">
          Enquanto isso, conheça melhor a Smart Consig e veja como ajudamos milhares de servidores a economizar todos os dias:
        </p>
      </div>
      <section className="flex flex-col space-y-4 pb-6 px-6 sm:items-center sm:pb-8">
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width={100}
            height={100}
            viewBox="0 0 32 32"
            className="size-8 fill-secondary-red"
          >
            <path d="M11.469 5C7.918 5 5 7.914 5 11.469v9.062C5 24.082 7.914 27 11.469 27h9.062C24.082 27 27 24.086 27 20.531V11.47C27 7.918 24.086 5 20.531 5zm0 2h9.062A4.463 4.463 0 0125 11.469v9.062A4.463 4.463 0 0120.531 25H11.47A4.463 4.463 0 017 20.531V11.47A4.463 4.463 0 0111.469 7zm10.437 2.188a.902.902 0 00-.906.906c0 .504.402.906.906.906a.902.902 0 00.907-.906.902.902 0 00-.907-.906zM16 10c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 2c2.223 0 4 1.777 4 4s-1.777 4-4 4-4-1.777-4-4 1.777-4 4-4z" />
          </svg>
          <Link
            className="text-xs tracking-wide hover:underline"
            href="https://www.instagram.com/smart_consig/"
          >
            Visite nosso perfil no Instagram.
          </Link>
        </div>

        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width={100}
            height={100}
            viewBox="0 0 30 30"
            className="size-8 fill-secondary-red"
          >
            <path d="M24 4H6a2 2 0 00-2 2v18a2 2 0 002 2h10v-9h-3v-3h3v-1.611C16 9.339 17.486 8 20.021 8c1.214 0 1.856.09 2.16.131V11h-1.729C19.376 11 19 11.568 19 12.718V14h3.154l-.428 3H19v9h5a2 2 0 002-2V6a2 2 0 00-2-2z" />
          </svg>
          <Link
            className="text-xs tracking-wide hover:underline"
            href="https://www.facebook.com/people/Grupo-Smart-Consig/61573653152094/"
          >
            Visite nosso perfil no Facebook.
          </Link>
        </div>
      </section>
      <Separator className="sm:hidden" />
      <div className="w-full sm:flex sm:justify-center sm:items-center">
        <Button
          type="button"
          size="lg"
          className="w-full h-14 bg-secondary-red rounded-sm mt-8 sm:h-10 sm:w-72 sm:text-sm sm:rounded sm:mt-12"
          onClick={handleRedirect}
        >
          Voltar para o ínicio
        </Button>
      </div>
    </div>
  )
}