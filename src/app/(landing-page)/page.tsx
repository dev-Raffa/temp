import { HeaderContainer } from '@/components/shared/header';
import { InformativeContainer } from '@/components/shared/informative';
import { PortabilityContainer } from '@/components/shared/portability';
import { SimulationContainer } from '@/components/shared/simulation';
import { InfiniteSliderBanksContainer } from '@/components/shared/infinite-slider-banks';
import { InfiniteSliderBanksDesktopContainer } from '@/components/shared/infinite-slider-banks-desktop';
import { HeroVideoContainer } from '@/components/shared/hero-video';
import { ReviewsContainer } from '@/components/shared/reviews';
import { FaqContainer } from '@/components/shared/faq';
import { FooterContainer } from '@/components/shared/footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen overflow-hidden">
      <HeaderContainer />
      <InformativeContainer />
      <PortabilityContainer />
      <SimulationContainer />
      <div className="w-full block md:hidden">
        <InfiniteSliderBanksContainer />
      </div>
      <div className="hidden md:block w-full">
        <InfiniteSliderBanksDesktopContainer />
      </div>
      <div className="max-w-6xl w-full mx-auto pt-16 px-3 md:px-0 md:pt-20 lg:max-w-7xl">
        <HeroVideoContainer />
      </div>
      <section className="pt-12 pb-16 bg-black md:py-16">
        <ReviewsContainer />
      </section>
      <FaqContainer />
      <FooterContainer />
    </div>
  )
}
