import { Users, Star, Award, Calendar } from 'lucide-react';

export function WhyTaxEasy() {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-blue-500" />, 
      number: "35,000+", 
      label: "Tax Filers served last year"
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-500" />, 
      number: "4.9 Stars", 
      label: "Customer Ratings on Google (500+ Reviews)"
    },
    {
      icon: <Award className="w-8 h-8 text-red-500" />, 
      label: "Tax Experts at your Service"
    },
    {
      icon: <Calendar className="w-8 h-8 text-green-500" />, 
      number: "7+", 
      label: "Years of Excellence"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50 px-4 sm:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Why TaxEasy?</h2>
          <p className="text-gray-600 text-sm sm:text-base">We are admired by people for our Exceptional Customer Satisfaction!</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="flex justify-center mb-4">{stat.icon}</div>
              {stat.number && <div className="text-lg sm:text-2xl font-bold mb-2">{stat.number}</div>}
              <p className="text-gray-600 text-sm sm:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}