import React from 'react';
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Users, Briefcase, HandHeart, Building, Coins, Sprout } from "lucide-react";

const PackageCard = ({ title, icon: Icon, items }) => (
  <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
    <CardHeader className="space-y-1">
      <div className="flex items-center gap-2 mb-2">
        <Icon className="w-8 h-8 text-teal-500" />
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
      </div>
      <p className="text-sm text-gray-600">Package Includes:</p>
    </CardHeader>
    <CardContent className="pt-4">
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-teal-500 text-sm">•</span>
            <span className="text-sm text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </CardContent>
    <CardFooter>
      <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white">
        GET QUOTE!
      </Button>
    </CardFooter>
  </Card>
);

const CompanyRegistration = () => {
  const packages = [
    {
      title: "Private Limited Company Incorporation",
      icon: Building2,
      items: [
        "Company Name Approval Assistance",
        "Certificate of Incorporation (COI)",
        "PAN of Company",
        "TAN of Company",
        "MOA of Company",
        "AOA of Company",
        "DIN for 2 Directors",
        "DSC for 2 Directors",
        "ESIC Registration",
        "EPF Registration",
        "Company Master Data Listing",
        "Authorized & Paid-Up Capital Listing"
      ]
    },
    {
      title: "One Person Company (OPC) Incorporation",
      icon: Users,
      items: [
        "Company Name Approval Assistance",
        "Certificate of Incorporation (COI)",
        "PAN of Company",
        "TAN of Company",
        "MOA of Company",
        "AOA of Company",
        "DIN for 1 Director",
        "DSC for 1 Director & 1 Nominee",
        "ESIC Registration",
        "EPF Registration",
        "Company Master Data Listing",
        "Authorized & Paid-Up Capital Listing"
      ]
    },
    {
      title: "Limited Liability Partnership (LLP) Registration",
      icon: Briefcase,
      items: [
        "LLP Name Approval Assistance",
        "Certificate of Incorporation (COI)",
        "PAN of Company",
        "TAN of Company",
        "Drafting of LLP Deed",
        "DIN for 2 Partners",
        "DSC for Partner(s)",
        "LLP Master Data Listing",
        "Partners Contribution Listing"
      ]
    },
    {
      title: "Section 8 Company Registration (NGO/Foundation)",
      icon: HandHeart,
      items: [
        "Company Name Approval Assistance",
        "Certificate of Incorporation (COI)",
        "PAN of Company",
        "TAN of Company",
        "MOA of Company",
        "AOA of Company",
        "DIN for 2 Directors",
        "DSC for 2 Directors",
        "ESIC Registration",
        "EPF Registration",
        "Company Master Data Listing"
      ]
    },
    {
      title: "Public Limited Company Registration",
      icon: Building,
      items: [
        "Company Name Approval Assistance",
        "Certificate of Incorporation (COI)",
        "PAN of Company",
        "TAN of Company",
        "MOA of Company",
        "AOA of Company",
        "DIN for 3 Directors",
        "DSC for 7 Directors &/or Shareholders",
        "ESIC Registration",
        "EPF Registration",
        "Company Master Data Listing",
        "Authorized & Paid-Up Capital Listing"
      ]
    },
    {
      title: "Nidhi Company Registration",
      icon: Coins,
      items: [
        "Company Name Approval Assistance",
        "Certificate of Incorporation (COI)",
        "PAN of Company",
        "TAN of Company",
        "MOA of Company",
        "AOA of Company",
        "DIN for 3 Directors",
        "DSC for 7 Directors &/or Shareholders",
        "ESIC Registration",
        "EPF Registration",
        "Company Master Data Listing",
        "Authorized & Paid-Up Capital Listing"
      ]
    },
    {
      title: "Farmer Producer Company Registration",
      icon: Sprout,
      items: [
        "Company Name Approval Assistance",
        "PAN of Company",
        "MOA of Company",
        "DSC for 10 Directors &/or Shareholders",
        "ESIC Registration",
        "Company Master Data Listing",
        "Authorized & Paid-Up Capital Listing",
        "Certificate of Incorporation (COI)",
        "TAN of Company",
        "AOA of Company",
        "DIN for 5 Directors",
        "EPF Registration"
      ]
    }
  ];

  return (
    <div className="min-h-screen  bg-[#f0f9f0] py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Be the Director of your Own Company Today!
          </h1>
          <p className="text-gray-600">
            No Space for any Doubts ! Connect Now for any Queries !
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <PackageCard
              key={index}
              title={pkg.title}
              icon={pkg.icon}
              items={pkg.items}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyRegistration;