import { Button } from "@/components/ui/button";

export function TaxRegimeHelp() {
  return (
    <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50 px-4 sm:px-8">
      <div className="container mx-auto text-center">
        <div className="mb-2 text-gray-600 text-sm sm:text-base">OLD OR NEW REGIME ?</div>
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Worry about which Tax Regime is Better for You ?
        </h2>
        <p className="text-gray-600 mb-8 text-sm sm:text-base">
          Need not to worry, Just Call or Whatsapp and Talk to an Expert !
        </p>
        <Button size="lg" className="bg-primary hover:bg-primary/90 text-sm sm:text-base px-6 py-3">
          CALL NOW
        </Button>
      </div>
    </section>
  );
}
