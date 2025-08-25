import dynamic from 'next/dynamic';

const SimulationPageHeader = dynamic(() => import(
  './_components/header'
).then(mod => mod.SimulationPageHeader), { ssr: true });

const SimulationPageExclusiveBenefitsSection = dynamic(() => import(
  './_components/exclusive-benefit-section'
).then(mod => mod.SimulationPageExclusiveBenefitsSection), { ssr: true });

const SimulationPageCompanyStatsSection = dynamic(() => import(
  './_components/company-stats-section'
).then(mod => mod.SimulationPageCompanyStatsSection), { ssr: true });

const SimulationPageLoanProcessSection = dynamic(() => import(
  './_components/loan-process-section'
).then(mod => mod.SimulationPageLoanProcessSection), { ssr: true });

const SimulationPageCompanyMissionSection = dynamic(() => import(
  './_components/company-mission-section'
).then(mod => mod.SimulationPageCompanyMissionSection));

const SimulationPageLGPDSection = dynamic(() => import(
  './_components/lgpd-section'
).then(mod => mod.SimulationPageLGPDSection), { ssr: true });

const SimulationPageInfiniteSliderBanksSection = dynamic(() => import(
  './_components/infinite-slider-banks-section'
).then(mod => mod.SimulationPageInfiniteSliderBanksSection), { ssr: true });

const SimulationPageInfiniteSliderBanksDesktopSection = dynamic(() => import(
  './_components/infinite-slider-banks-desktop-section'
).then(mod => mod.SimulationPageInfiniteSliderBanksDesktopSection), { ssr: true });

const SimulationPageHeroVideoSection = dynamic(() => import(
  './_components/hero-video-section'
).then(mod => mod.SimulationPageHeroVideoSection), { ssr: true });

const SimulationPageReviewsSection = dynamic(() => import(
  './_components/reviews-section'
).then(mod => mod.SimulationPageReviewsSection), { ssr: true });

const SimulationPageFooter = dynamic(() => import(
  './_components/footer'
).then(mod => mod.SimulationPageFooter), { ssr: true });

export const revalidate = 21600 // 6 horas em segundos

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