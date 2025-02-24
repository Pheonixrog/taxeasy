export function CitiesCoverage() {
  const cities = [
    ["Delhi", "Noida", "Greater Noida", "Ghaziabad"],
    ["Lucknow", "Kanpur", "Gurgaon", "Faridabad"],
    ["Pune", "Bangalore", "Indore", "Gwalior"],
    ["Patna", "Dehradun", "Jaipur", "Chandigarh"]
  ]

  return (
    <section className="py-16 px-4 sm:px-8 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-gray-800">
          ITR Filing in Cities
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 text-center">
          {cities.flat().map((city) => (
            <div
              key={city}
              className="p-3 sm:p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition cursor-pointer hover:text-primary"
            >
              ITR Filing in {city}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
