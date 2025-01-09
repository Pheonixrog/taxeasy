
import { ContactForm } from "@/components/contact-form"
import { Partners } from "@/components/partners"
import { CitiesCoverage } from "@/components/cities-coverage"
import { Footer } from "@/components/footer"
import { ProcessSteps } from "@/components/process-steps"
import  ComparisonTable  from "@/components/comparison"
import CompanyRegistration from "@/components/comp"

export default function CompanyPage() {
  const services = [
    "Private Limited Company Registration",
    "One Person Company (OPC) Registration",
    "Limited Liability Partnership (LLP) Registration",
    "Section 8 Company Registration (NGO/ Foundation)",
    "Public Limited Company Registration",
    "Nidhi Company Registration",
    "Farmer Producer (FPO) Company registration"
  ]

  return (
    <>
    <div className="min-h-screen bg-gradient-to-b from-teal-900 to-teal-800 pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="text-white">
            <h1 className="text-3xl font-bold mb-4">
              Top Company Consultants in Delhi NCR!
            </h1>
            <div className="space-y-4">
              {services.map((service) => (
                <div key={service} className="flex items-center space-x-2">
                  <svg
                    className="w-5 h-5 text-teal-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{service}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 p-4 bg-yellow-50/10 rounded-lg">
              <p className="text-lg">
                GET STARTED @ Just Rs. 0 FOR FREE CONSULTATION!
              </p>
            </div>
            <div className="mt-8 flex items-center space-x-4">
              <img src="https://imgs.search.brave.com/WFUCWSTA1WQZxQ6Bj0PpSiIS0qx9cb9e-ysxkOY4rTA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvZ29vZ2xlLXMt/bG9nby8xNTAvR29v/Z2xlX0ljb25zLTA5/LTUxMi5wbmc" alt="Google" className="h-8 w-8" />
              <div>
                <div className="text-yellow-400 flex">{"★".repeat(5)}</div>
                <p>4.9 Rating on Google Reviews</p>
              </div>
            </div>
            <div className="mt-4 text-sm">
              IN 10 DAYS | MOST AFFORDABLE PRICES
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
              Get Instant Quote !
            </h2>
            <ContactForm />
            <p className="mt-4 text-center text-gray-600">
              Call Now: 9936818000; 9555400354
            </p>
          </div>
        </div>
      </div>
    </div>
    
    <Partners />
    <ProcessSteps/>
    <CompanyRegistration/>
    <ComparisonTable/>
     <CitiesCoverage />
          <Footer />
    </>
  )
}

