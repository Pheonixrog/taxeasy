import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const dueDates = [
  {
    date: "31st July 2024",
    color: "from-pink-500 to-rose-500",
    categories: [
      "Salaried Individuals",
      "Freelancers",
      "Persons engaged in Business",
      "Directors of Company",
      "Remaining Persons not covered in other cases"
    ]
  },
  {
    date: "31st October 2024",
    color: "from-blue-500 to-cyan-500",
    categories: [
      "Corporate Assessee (Other than covered in Transfer Pricing)",
      "Non Corporate Assessee (Audit Cases)",
      "Working Partners of Audited Firms"
    ]
  },
  {
    date: "30th November 2024",
    color: "from-amber-500 to-yellow-500",
    categories: [
      "Assessee covered under Transfer Pricing",
      "Section 92E of Income Tax Act, 1961"
    ]
  }
]

export function DueDates() {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">ITR Filing Due Dates (AY 2024-25)</h2>
        </div>
        <div className="text-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dueDates.map((date, index) => (
            <Card key={index} className="text-white bg-white/20 border-none backdrop-blur-lg p-6">
              <CardHeader>
                <CardTitle className={`text-xl font-bold bg-gradient-to-r ${date.color} bg-clip-text text-transparent`}>
                  {date.date}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-white mb-4">To be filed by:</p>
                <ul className="space-y-2">
                  {date.categories.map((category, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <span className="mr-2">•</span>
                      <span>{category}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
