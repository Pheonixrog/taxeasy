import { Phone, FileText, Check } from 'lucide-react'

export function ProcessSteps() {
  const steps = [
    {
      icon: <Phone className="w-12 h-12 text-blue-500" />,
      title: "Step 1",
      description: "Call or Whatsapp on given Numbers"
    },
    {
      icon: <FileText className="w-12 h-12 text-teal-500" />,
      title: "Step 2",
      description: "Provide the Information & Documents as required by our Expert"
    },
    {
      icon: <Check className="w-12 h-12 text-green-500" />,
      title: "Step 3",
      description: "Sit Back & Relax ! Your ITR will be filed within Same Day"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto w-20 h-20 flex items-center justify-center bg-gray-50 rounded-full mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

