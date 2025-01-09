export function ITRForms() {
  const forms = [
    {
      title: "ITR-1 Return Filing (Sahaj)",
      items: [
        "Resident Individuals",
        "Income less than or equal to ₹50 Lakhs",
        "Income from Salary",
        "One House Property",
        "Income from Other Sources",
        "Pension Income"
      ]
    },
    // Add other ITR forms similarly
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-4">Types of ITR Forms?</h2>
        <p className="text-center text-gray-600 mb-12">
          We will guide you as which ITR Form is applicable to you as per your details
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {forms.map((form, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-4">{form.title}</h3>
              <ul className="space-y-2">
                {form.items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

