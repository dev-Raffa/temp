import Link from "next/link";

import { Button } from "@/components/ui/button";

export function PublicServerCustomerQuestionContainer() {
  const phoneNumber = "5511960628762";
  const message = "Olá,%20estou%20com%20dúvidas%20e%20preciso%20de%20ajuda%20do%20SAC";

  return (
    <div className="bg-[#121212] w-full">
      <section className="p-6 md:max-w-5xl md:w-full md:mx-auto">
        <div className="flex flex-col space-y-6 py-6 md:flex-row md:justify-center md:items-center md:space-x-6 md:space-y-0">
          <h2 className="max-w-xs w-full text-lg text-white font-medium">
            Tem dúvidas ou desconfiou de algo?
          </h2>

          <Link href={`https://wa.me/${phoneNumber}?text=${message}`}>
            <Button type="button" className="w-full bg-secondary-red rounded md:w-80">
              Falar com a Smart Consig
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}