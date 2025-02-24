export function TaxRegimeComparison() {
  return (
    <section className="py-16 px-4 sm:px-8 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">Which Tax Regime is better?</h2>
        <p className="text-center text-gray-600 mb-8">Old Regime or New Regime</p>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse min-w-max">
            <thead>
              <tr>
                <th className="border p-2 bg-gray-50 text-xs sm:text-sm">Deductions Income</th>
                {[1.5, 1.625, 1.875, 2.125, 2.375, 2.625, 2.875, 3.125, 3.25, 3.5, 3.75].map((amount) => (
                  <th key={amount} className="border p-2 bg-gray-50 text-xs sm:text-sm">
                    {amount.toFixed(3)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[6.5, 7.5, 8, 8.5, 9, 10, 11, 12.25, 13.5, 14.25, 15].map((income, index) => (
                <tr key={income} className="text-xs sm:text-sm">
                  <td className="border p-2 bg-gray-50 font-medium">₹{income.toFixed(2)},000</td>
                  {[...Array(11)].map((_, colIndex) => (
                    <td
                      key={colIndex}
                      className={`border p-2 text-center text-xs sm:text-sm whitespace-nowrap 
                        ${index === colIndex ? 'bg-teal-100' :
                          index > colIndex ? 'bg-green-50 text-green-600' :
                          'bg-pink-50 text-pink-600'}`}
                    >
                      {index === colIndex ? 'Same' : index > colIndex ? 'New' : 'Old'}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
