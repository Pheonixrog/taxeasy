'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function ScenariosFAQ() {
  const scenarios = [
    "Are you a salaried person and engaged in Sale/ Purchase of Shares or Mutuals during the FY?",
    "Do you have Income from Freelancing?",
    "Have you switched your Job during the FY and you have Multiple Employers during the Year?",
    "You don't have your Form 16 available with you?",
    "Have you earned any Dividend during the Financial Year?",
    "Have you Invested in Stock Market / Mutual Funds during the Financial Year?",
    "Do you have any Capital Gain/Loss during the Financial Year?",
    "Do you have any Income from Business / Profession?",
    "Are you a Partner in any Firm or Director in any Company?",
    "Do you have any Rental Income along with other Income Sources during the Financial Year?",
    "Have you received Arrears of Salary during the Financial Year?"
  ]

  return (
    <section className="py-16 px-8 bg-gradient-to-r from-purple-50 to-pink-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-2">
          Do you also have any of the following Scenario's?
        </h2>
        <p className="text-center text-gray-600 mb-8">
          We have got you covered ! Call Now !
        </p>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {scenarios.map((scenario, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {scenario}
              </AccordionTrigger>
              <AccordionContent>
                Contact our experts to get personalized assistance with this scenario.
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

