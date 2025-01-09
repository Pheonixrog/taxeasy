import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  const services = {
    "BUSINESS REGISTRATION": [
      "Sole Proprietorship Registration",
      "Partnership Firm Registration",
      "Private Limited Company Incorporation",
      "LLP Registration",
      "One Person Company Registration",
      "Startup Registration",
      "Section 8 Company Registration",
      "Farmer Producer Company Registration",
      "Public Limited Company Registration",
      "Nidhi Company Registration"
    ],
    "GST SOLUTIONS": [
      "GST Registration",
      "GST Return Filing Solutions",
      "GST Amendment(s)",
      "E-Commerce Seller Returns",
      "GST Revocation",
      "GST LUT Filing",
      "GST Annual Return (GSTR-9)",
      "GST Annual Return (GSTR-9C)",
      "GST Billing Solutions",
      "GST E-Invoicing Solutions"
    ],
    "ANNUAL COMPLIANCES": [
      "Income Tax Return (ITR) Filing",
      "TDS Returns Filing",
      "Company Annual Compliances",
      "LLP Annual Compliances",
      "ESIC Return Filing",
      "EPF Return Filing",
      "Director Annual Compliances",
      "Company Amendment(s)",
      "Return of Deposits",
      "Other Annual Compliances"
    ],
    "OTHER REGISTRATIONS": [
      "TDS Registration",
      "Payroll Processing",
      "Startup India Registration (DPIIT)",
      "Import Export Code (IEC)",
      "Udyam Registration",
      "Trademark Registration",
      "FSSAI Registration",
      "ISO Certifications",
      "Digital Signature Certificate (DSC)",
      "Other Registrations"
    ]
  }

  return (
    <footer className="bg-gray-900 px-8 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(services).map(([category, items]) => (
            <div key={category}>
              <h3 className="font-bold mb-4">{category}</h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-gray-400 hover:text-white text-sm">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-wrap justify-between items-center">
            <div className="space-y-4">
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Youtube size={20} />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Facebook size={20} />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Instagram size={20} />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Twitter size={20} />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Linkedin size={20} />
                </Link>
              </div>
              <p className="text-sm text-gray-400">
                © 2017-2024 TaxEasy Solutions Pvt. Ltd. All Rights Reserved
              </p>
            </div>
            {/* <div className="flex space-x-4 mt-4 lg:mt-0">
              <Link href="#" className="text-sm text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-white">
                Refund Policy
              </Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-white">
                Disclaimer
              </Link>
            </div> */}
          </div> 
        </div>
      </div>
    </footer>
  )
}

