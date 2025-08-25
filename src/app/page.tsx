import { UtmProviderSuspense } from "@/context/utm-context";

import LandingPage from "./(landing-page)/page";

export default function HomePage() {
  return (
    <UtmProviderSuspense>
      <LandingPage />
    </UtmProviderSuspense>
  )
}