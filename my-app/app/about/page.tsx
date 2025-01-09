import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-b from-teal-900 to-teal-800">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-white py-8">
          <h1 className="text-3xl font-bold mb-4">
            TaxEasy - Your Gateway to Seamless Business Solution in India!
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center bg-white rounded-lg p-8 shadow-xl">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-teal-900">ABOUT US</h2>
            <p className="text-gray-600 leading-relaxed">
              At Taxeasy Solutions Pvt Ltd, we take pride in being the driving force behind countless successful
              businesses by offering comprehensive services related to Business Setup in India, Startup
              Legalities, ROC Filing, Tax Filings, Trademark Protection and more. As the trusted name behind
              TaxEasy, we bring you a world of expertise and dedication to simplify your journey through the
              intricacies of the Indian business landscape.
            </p>
            <p className="text-gray-600 leading-relaxed">
              At Taxeasy, our vision is to provide all startup & tax related services under one roof so that
              the entrepreneurs and enterprises can focus on their core competencies while leaving the
              complexities of compliance and regulations to us. We aim to be the catalyst that propels
              businesses toward success by providing efficient, reliable, and personalized solutions.
            </p>
            <p className="text-gray-600 leading-relaxed">
              At Taxeasy, we are not just a service provider; we are your partners in success. Join hands
              with us, and let's navigate the journey of entrepreneurship together. Welcome to Taxeasy –
              Where Business Success Begins!
            </p>
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
              Contact Us Today
            </Button>
          </div>
          <div className="relative">
            <img
              src="https://imgs.search.brave.com/MvRK9_FNUF5oZ8jOGN0bbpEmvMTil-Own08d2uTaoSs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jYXJ0b29uLWlt/YWdlLXRocmVlLXBl/b3BsZS13ZWFyaW5n/LWdsYXNzZXMtc3Vp/dC13aXRoLXdvcmQt/Ym9iLWl0XzEwMjM5/ODQtMzI0MDEuanBn/P3NlbXQ9YWlzX2h5/YnJpZA"
              alt="TaxEasy Team"
              className="rounded-lg shadow-lg w-full"
            />
            <div className="absolute inset-0 bg-teal-900/10 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

