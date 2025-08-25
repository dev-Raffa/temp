import { ThePartnerSection } from "./the-partner/the-partner";
import { ThePartneshipSection } from "./the-partneship/the-partneship-section";
import { TheProductSection } from "./the-product/the-product-section";

export function AboutSection(){
    return(
        <section className="py-14 flex flex-col gap-y-16">
            <ThePartneshipSection />
            <ThePartnerSection />
            <TheProductSection />
        </section>
    )
}