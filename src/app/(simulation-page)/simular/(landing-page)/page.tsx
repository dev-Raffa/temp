import { SimulationPageCompanyMissionSection } from "./_components/company-mission-section";
import { SimulationPageCompanyStatsSection } from "./_components/company-stats-section";
import { SimulationPageExclusiveBenefitsSection } from "./_components/exclusive-benefit-section";
import { SimulationPageFooter } from "./_components/footer";
import { SimulationPageHeader } from "./_components/header";
import { SimulationPageHeroVideoSection } from "./_components/hero-video-section";
import { SimulationPageInfiniteSliderBanksDesktopSection } from "./_components/infinite-slider-banks-desktop-section";
import { SimulationPageInfiniteSliderBanksSection } from "./_components/infinite-slider-banks-section";
import { SimulationPageLGPDSection } from "./_components/lgpd-section";
import { SimulationPageLoanProcessSection } from "./_components/loan-process-section";
import { SimulationPageReviewsSection } from "./_components/reviews-section";

export default function SimulationLandingPage() {
  return (
    <div className="min-h-screen overflow-hidden">
      <SimulationPageHeader />
      <SimulationPageExclusiveBenefitsSection />
      <SimulationPageCompanyMissionSection />
      <SimulationPageCompanyStatsSection />
      <SimulationPageLoanProcessSection />
      <SimulationPageLGPDSection />
      <div className="w-full block md:hidden">
        <SimulationPageInfiniteSliderBanksSection />
      </div>
      <div className="hidden md:block w-full">
        <SimulationPageInfiniteSliderBanksDesktopSection />
      </div>
      <div className='bg-medium-dark'>
        <section className="max-w-6xl w-full mx-auto pt-16 px-3 md:px-0 md:pt-20 lg:max-w-7xl">
          <SimulationPageHeroVideoSection />
        </section>
      </div>
      <section className="pt-12 pb-16 bg-medium-dark md:py-16">
        <SimulationPageReviewsSection />
      </section>
      <SimulationPageFooter />
    </div>
  )
}