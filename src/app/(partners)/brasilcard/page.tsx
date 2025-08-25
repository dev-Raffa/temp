import { FooterContainer } from "@/components/shared/footer";
import { SocialSection } from "./_components/sections/social/social-section";
import { ProductSection } from "./_components/sections/product/product-section";
import { AboutSection } from "./_components/sections/about/about-section";
import { BrasilcardHeaderSection } from "./_components/header/header";

export default function BrasilCardPage (){
    return(
        <main>
            <BrasilcardHeaderSection />
            <AboutSection />
            <ProductSection />
            <SocialSection />
            <FooterContainer />
        </main>
    )
}