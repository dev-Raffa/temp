import Link from "next/link";

import { Button } from "@/components/ui/button";
import { AlertCircleIcon } from "lucide-react";

export function SacLinkButton() {
  const sacPhoneNumber = "5511960628762";
  const message = "Olá,%20estou%20com%20dúvidas%20e%20preciso%20de%20ajuda%20do%20SAC";

  return (
    <div className="flex flex-col items-center space-y-4 mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
      <div className="flex items-center gap-2">
        <AlertCircleIcon className="size-6 text-secondary-red flex-shrink-0 sm:size-4" />
        <p className="max-w-60 text-sm text-center font-semibold text-secondary-red sm:max-w-full sm:text-start sm:font-medium">
          Precisa de ajuda ou está enfrentando problemas?
        </p>
      </div>

      <Link href={`https://wa.me/${sacPhoneNumber}?text=${message}`} replace>
        <Button
          type="button"
          size="sm"
          className="w-full bg-black text-white text-xs rounded sm:text-sm md:w-80"
        >
          Falar com o nosso suporte
        </Button>
      </Link>
    </div>
  )
}