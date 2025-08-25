import Image from "next/image";

import { Button } from "@/components/ui/button";

export function InstitutionalPrimaryContainer() {
  return (
    <div className="grid grid-cols-1">
      <div className="size-full md:hidden">
        <Image
          src="/old-man-phone.jpg"
          width={1536}
          height={1024}
          alt="Homem sorrindo no telefone"
          className="w-full"
        />
      </div>

      <section className="flex flex-col bg-[#121212] p-6 md:bg-[url(/old-man-phone.jpg)] md:bg-cover md:bg-no-repeat md:h-[720px]">
        <div className="md:max-w-6xl md:w-full md:mx-auto">
          <div className="space-y-4 sm:space-y-8 md:mt-40">
            <h1 className="text-[22px] text-white sm:text-black md:max-w-xl md:text-4xl">
              Pra cada conquista, conte com a gente
            </h1>

            <p className="text-white font-light sm:text-[#555] sm:font-medium md:max-w-xl md:text-lg">
              Oferecemos crédito, orientação e apoio pra transformar sonhos em realidade - com respeito, transparência e foco no que importa: você.
            </p>
          </div>

          <div className="flex items-center w-full py-8">
            <Button
              type="button"
              className="w-full bg-secondary-red rounded sm:w-56 sm:h-11"
            >
              Explorar soluções
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}