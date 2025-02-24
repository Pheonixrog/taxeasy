import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function TaxcurePage() {
  const services = {
    "Business Registration": [
      "Company Incorporation",
      "One Person Company",
      "LLP Registration",
      "Partnership Firm Registration",
      "Section 8 Company Registration",
      "MSME Registration",
      "Start-up India Registration",
      "GST Registration",
    ],
    "Income Tax Return": [
      "ITR-1",
      "ITR-2",
      "ITR-3",
      "ITR-4",
      "ITR-5",
      "ITR-6",
      "ITR-7",
      "Income Tax Forms",
      "Form 3CA-CD & 3CB-CD",
      "Form 10B",
      "Form 10BB",
      "Form 15CA",
      "Form 15CB",
      "etc.",
    ],
    "Compliance & GST Solutions": [
      "ROC Forms",
      "GSTR-1",
      "GSTR-3B",
      "GSTR-4",
      "GSTR-9",
      "GSTR-9C",
      "etc.",
    ],
    "Audit, Assurance & TDS": [
      "Income Tax Audit",
      "GST Audit",
      "Statutory Audit",
      "Internal Audit",
      "TDS Returns",
      "24Q - Salaried Person",
      "26Q - Other than Salaried",
      "27Q - Payments to Non-Residents (NRI)",
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[400px] max-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/remove2.jpg"
            alt="Consultancy"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {/* Expert Tax & Business Solutions */}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl">
              {/* Comprehensive financial services tailored to your needs */}
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>

          {/* First Row */}
          <div className="grid grid-cols-1 lg:grid-cols-7 gap-6 mb-6">
            <div className="relative h-[250px] lg:h-[300px] rounded-lg overflow-hidden shadow-lg lg:col-span-3">
              <Image
                src="/remove1.jpg"
                alt="Business Services"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <Card className="h-[300px] shadow-lg hover:shadow-xl transition-all lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-lg font-bold">
                  Business Registration
                </CardTitle>
              </CardHeader>
              <CardContent className="overflow-auto max-h-[300px]">
                <ul className="space-y-2 text-gray-700">
                  {services["Business Registration"].map((item) => (
                    <li key={item} className="text-sm flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="h-[300px] shadow-lg hover:shadow-xl transition-all lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-lg font-bold">
                  Income Tax Return
                </CardTitle>
              </CardHeader>
              <CardContent className="overflow-auto max-h-[220px]">
                <ul className="space-y-2 text-gray-700">
                  {services["Income Tax Return"].map((item) => (
                    <li key={item} className="text-sm flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
            <Card className="h-[300px] shadow-lg hover:shadow-xl transition-all lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-lg font-bold">
                  Compliance & GST Solutions
                </CardTitle>
              </CardHeader>
              <CardContent className="overflow-auto max-h-[220px]">
                <ul className="space-y-2 text-gray-700">
                  {services["Compliance & GST Solutions"].map((item) => (
                    <li key={item} className="text-sm flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="h-[300px] shadow-lg hover:shadow-xl transition-all lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-lg font-bold">
                  Audit, Assurance & TDS
                </CardTitle>
              </CardHeader>
              <CardContent className="overflow-auto max-h-[280px]">
                <ul className="space-y-2 text-gray-700">
                  {services["Audit, Assurance & TDS"].map((item) => (
                    <li key={item} className="text-sm flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <div className="relative h-[250px] lg:h-[300px] rounded-lg overflow-hidden shadow-lg lg:col-span-3">
              <Image
                src="/remove4.jpg"
                alt="Financial Services"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="relative h-[400px] lg:h-full">
                <Image
                  src="/remove3.jpg"
                  alt="Our Mission"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Our Mission
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Our mission is to empower individuals and businesses with
                  expert tax and accounting solutions that drive financial
                  clarity and success. We deliver personalized, innovative
                  strategies, ensuring compliance, minimizing liabilities, and
                  optimizing growth.
                </p>
                <Button variant="outline" className="mt-8 self-start">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
