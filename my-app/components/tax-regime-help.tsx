import { Button } from "@/components/ui/button"

export function TaxRegimeHelp() {
  return (
    <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
      <div className="container text-center">
        <div className="mb-2 text-gray-600">OLD OR NEW REGIME ?</div>
        <h2 className="text-3xl font-bold mb-4">
          Worry about which Tax Regime is Better for You ?
        </h2>
        <p className="text-gray-600 mb-8">
          Need not to worry Just, Just Call or Whatsapp and Talk to an Expert !
        </p>
        <Button size="lg" className="bg-primary hover:bg-primary/90">
          CALL NOW
        </Button>
      </div>
    </section>
  )
}

