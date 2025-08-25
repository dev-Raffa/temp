import { FooterContainer } from "@/components/shared/footer";
import { SolicitationForm } from "./_components/forms/solicitation-form";
import { HeaderSection } from "./_components/header/header";

export default function SolitacaoPage(){
    return(
        <main >
            <HeaderSection />
            <section className="px-12 lg:px-44 pb-20">
                <SolicitationForm />
            </section>
            <FooterContainer />
        </main>
    )
}