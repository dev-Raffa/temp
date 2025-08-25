"use client"

import SimulationLandingPage from "./(landing-page)/page";

import { UtmProviderSuspense } from "@/context/utm-context";

export default function SimulationPage() {
  return (
    <UtmProviderSuspense>
      <SimulationLandingPage />
    </UtmProviderSuspense>
  )
}