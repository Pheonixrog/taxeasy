import { Hero } from "@/components/hero"
import { Partners } from "@/components/partners"
import { ProcessSteps } from "@/components/process-steps"
import { ITRFormsGrid } from "@/components/itr-forms-grid"
import { TaxRegimeComparison } from "@/components/tax-regime-comparison"
import { TaxRegimeHelp } from "@/components/tax-regime-help"
import { DueDates } from "@/components/due-dates"
import { ScenariosFAQ } from "@/components/scenarios-faq"
import { CustomerReviewsSlider } from "@/components/customer-reviews-slider"
import { CitiesCoverage } from "@/components/cities-coverage"
import { Footer } from "@/components/footer"
import { WhyTaxEasy } from "@/components/why-taxeasy"

export default function Home() {
  return (
    <div className="min-h-screen ">
      
      <Hero />
      <Partners />
      <ProcessSteps/>
      <ITRFormsGrid />
      <TaxRegimeComparison />
      <TaxRegimeHelp />
      <WhyTaxEasy/>
      <DueDates />
      <ScenariosFAQ />
      <CustomerReviewsSlider />
      <CitiesCoverage />
      <Footer />
    </div>
  )
}

