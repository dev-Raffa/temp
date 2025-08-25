"use client"

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function PublicServerCustomerNavigateButton() {
  const router = useRouter();

  return (
    <Button
      type="button"
      className="w-full bg-secondary-red rounded sm:w-56 sm:h-9 sm:text-xs"
      onClick={() => router.push("/servidores/simular")}
    >
      Simular crédito
    </Button>
  )
}