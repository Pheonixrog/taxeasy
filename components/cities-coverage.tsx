export function CitiesCoverage() {
  const cities = [
    ["Delhi", "Noida", "Greater Noida", "Ghaziabad"],
    ["Lucknow", "Kanpur", "Gurgaon", "Faridabad"],
    ["Pune", "Bangalore", "Indore", "Gwalior"],
    ["Patna", "Dehradun", "Jaipur", "Chandigarh"]
  ]

  return (
    <section className="py-16 px-8 bg-white">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">ITR Filing in Cities</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {cities.map((column, i) => (
            <div key={i} className="space-y-2">
              {column.map((city) => (
                <div key={city} className="hover:text-primary cursor-pointer">
                  ITR Filing in {city}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

