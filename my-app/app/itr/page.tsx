import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact-form"
import { Partners } from "@/components/partners"
import { ITRFormsGrid } from "@/components/itr-forms-grid"
import { TaxRegimeHelp } from "@/components/tax-regime-help"
import { TaxRegimeComparison } from "@/components/tax-regime-comparison"
import { Footer } from "@/components/footer"
import { ProcessSteps } from "@/components/process-steps"

export default function ITRPage() {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-b from-teal-900 to-teal-800 pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center text-white mb-12">
          <h1 className="text-4xl font-bold mb-4">TOP RATED IN DELHI NCR!</h1>
          <h2 className="text-2xl mb-6">FILE YOUR ITR FOR AY 2024-25 (FY 2023-24) NOW!</h2>
          <p className="text-xl mb-8">7 + YEARS OF EXCELLENCE</p>
          <p className="text-lg mb-8">
            Salary ITR | Mutual Fund ITR | Stock Market ITR | Freelancer ITR | Business ITR | 
            Futures & Options ITR | Capital Gain ITR | House Property ITR | Pension ITR
          </p>
          <Button size="lg" className="bg-white text-teal-900 hover:bg-gray-100">
            CALL NOW
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="aspect-video">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/your-video-id"
              title="ITR Filing Guide"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
              File your ITR Today!
            </h2>
            <ContactForm />
            <div className="mt-6 flex justify-center space-x-4">
              <Button variant="outline" className="w-full">
                CALL NOW
              </Button>
              <Button variant="outline" className="w-full">
                WHATSAPP
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Partners />
    <ProcessSteps/>
          <ITRFormsGrid />
          <TaxRegimeComparison />
          <TaxRegimeHelp />
          <Footer/>
    </>
  )
}

