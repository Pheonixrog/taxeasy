import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="absolute inset-0 bg-black/60 z-10" />
      {/* <img
        src="/team-bg.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      /> */}
      <div className="container relative z-20 text-center text-white pt-16">
        <h2 className="text-xl md:text-2xl font-semibold text-teal-400 mb-4">
          TOP RATED IN DELHI NCR!
        </h2>
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          FILE YOUR ITR FOR AY 2024-25 (FY 2023-24)
        </h1>
        <p className="text-xl md:text-2xl mb-8">7 + YEARS OF EXCELLENCE</p>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          Salary ITR | Mutual Fund ITR | Stock Market ITR | Freelancer ITR | Business ITR | Futures & Options ITR
          Capital Gain ITR | House Property ITR | Pension ITR
        </p>
        <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white">
          CALL NOW
        </Button>
      </div>
    </div>
  )
}

