import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { Partners } from "@/components/partners"
import { ProcessSteps } from "@/components/process-steps"
import { CheckCircle } from 'lucide-react'
import GSTServices from "@/components/gst"

export default function GSTPage() {
  const services = [
    "GST Registration",
    "GSTR-9/9C Annual Filing",
    "GST Return Filing",
    "GST LUT Form",
    "GST for Exporters",
    "GST for Freelancers",
    "Amazon/Flipkart/Meesho Sellers GST Registration & Returns"
  ]

  return (
    <>
    <div className="min-h-screen bg-gradient-to-b from-teal-900 to-teal-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="text-white">
            <h1 className="text-3xl font-bold mb-4">
              Top GST Consultants in Delhi NCR!
            </h1>
            <p className="text-xl mb-8">
              All GST Solutions available with TaxEasy
            </p>
            <div className="space-y-4">
              {services.map((service) => (
                <div key={service} className="flex items-center space-x-3">
                  <CheckCircle className="text-teal-400" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 p-4 bg-yellow-50/10 rounded-lg">
              <p className="text-lg">GET STARTED @ Just Rs. 0 FOR FREE!</p>
            </div>
            <div className="mt-8 flex items-center space-x-4">
              <img src="https://imgs.search.brave.com/WFUCWSTA1WQZxQ6Bj0PpSiIS0qx9cb9e-ysxkOY4rTA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvZ29vZ2xlLXMt/bG9nby8xNTAvR29v/Z2xlX0ljb25zLTA5/LTUxMi5wbmc" alt="Google" className="h-8 w-8" />
              <div>
                <div className="text-yellow-400 flex">
                  {"★".repeat(5)}
                </div>
                <p>4.9 Rating on Google Reviews</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
              Get Free Consultation By Expert!
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
    <GSTServices/>
    <ProcessSteps/>
    <Footer/>
    </>
  )
}

