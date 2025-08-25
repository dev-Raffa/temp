import { InstitutionalFooterContainer } from "./_components/footer/footer";
import { InstitutionalHeader } from "./_components/header/header";
import { InstitutionalCardingContainer } from "./_components/sections/carding-container";
import { InstitutionalCompanyContainer } from "./_components/sections/company-container";
import { InstitutionalMainContainer } from "./_components/sections/main-container";
import { InstitutionalPrimaryContainer } from "./_components/sections/primary-container";
import { InstitutionalSecondaryContainer } from "./_components/sections/secondary-container";
import { InstitutionalSquadContainer } from "./_components/sections/squad-container";
import { InstitutionalStatsContainer } from "./_components/sections/stats-container";
import { InstitutionalWorkWithUsContainer } from "./_components/sections/work-with-us-container";

export default function InstitutionalPage() {
  return (
    <div className="min-h-screen">
      <InstitutionalHeader />
      <InstitutionalPrimaryContainer />
      <InstitutionalSecondaryContainer />
      <InstitutionalCardingContainer />
      <InstitutionalMainContainer />
      <InstitutionalStatsContainer />
      <InstitutionalCompanyContainer />
      <InstitutionalSquadContainer />
      <InstitutionalWorkWithUsContainer />
      <InstitutionalFooterContainer />
    </div>
  )
}