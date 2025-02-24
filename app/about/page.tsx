import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";

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
                At Taxcure Consultancy LLP, we specialize in providing
                comprehensive tax, accounting services and financial services
                tailored to meet the unique needs of individuals, families, and
                businesses. With years of experience in the industry, our team
                of dedicated professionals is committed to delivering reliable,
                efficient, and personalized solutions that help you navigate the
                complexities of tax laws, financial planning, and wealth
                management.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We understand that managing taxes and finances can be
                overwhelming, which is why we strive to simplify the process.
                Whether you need help with tax preparation, business consulting,
                financial planning, or investment strategies, we&apos;re here to
                guide you every step of the way.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our mission is to empower you to make informed financial
                decisions that align with your goals. We take pride in offering
                transparent, honest advice and work closely with each client to
                create a strategy that maximizes savings, minimizes liabilities,
                and ensures long-term financial success. At Taxcure Consultancy
                LLP, we believe that proactive financial management is key to
                building a secure future. Let us take care of your financial
                needs so you can focus on what matters most. Reach out to us
                today and discover how we can help you achieve financial peace
                of mind.
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
      <Footer />
    </>
  );
}
