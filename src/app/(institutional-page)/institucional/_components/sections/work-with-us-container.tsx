import { Button } from "@/components/ui/button";
import { ArrowUpRightFromSquareIcon } from "lucide-react";

export function InstitutionalWorkWithUsContainer() {
  return (
    <div className="hidden sm:flex bg-[#121212] w-full">
      <section className="p-6 md:max-w-3xl md:w-full md:mx-auto">
        <div className="flex flex-col space-y-6 py-6 md:flex-row md:justify-between md:items-center md:space-y-0">
          <h2 className="max-w-sm w-full text-xl text-white font-semibold lg:text-2xl">
            Faça parte da nossa equipe
          </h2>

          <Button type="button" className="flex items-center gap-1 w-full bg-secondary-red rounded md:w-60">
            Enviar Currículo
            <ArrowUpRightFromSquareIcon className="size-4" />
          </Button>
        </div>
      </section>
    </div>
  )
}