import React from 'react';
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, FileText, PenTool, Store, XCircle, Package, ClipboardList } from "lucide-react";

const ServiceCard = ({ title, icon: Icon, items }) => (
  <Card className="bg-white shadow-lg hover:shadow-xl transition-all">
    <CardHeader className="pb-2">
      <div className="flex items-center gap-3">
        <Icon className="w-6 h-6 text-teal-500" />
        <h3 className="font-semibold text-lg">{title}</h3>
      </div>
    </CardHeader>
    <CardContent className="pt-4">
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
            <span className="text-sm text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </CardContent>
    <CardFooter>
      <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white">
        CHAT NOW!
      </Button>
    </CardFooter>
  </Card>
);

const GSTServices = () => {
  const services = [
    {
      title: "GST Registration Package",
      icon: FileText,
      items: [
        "Get ARN Number in 1 day",
        "GST Application filing by expert",
        "All queries/doubts resolved by experts",
        "Consultancy @ ₹0 (Free)",
        "100% online process",
        "GST Registration Certificate"
      ]
    },
    {
      title: "GST Return Filing Solution",
      icon: ClipboardList,
      items: [
        "Early Followup & No Missed due dates",
        "Preparing Sales Reconciliation",
        "Preparing Vendor ITC Reconciliation",
        "GSTR 2A/2B whole reconciliation",
        "Preparation of tax computation for your review",
        "Finalization of GST Returns"
      ]
    },
    {
      title: "GST Amendment(s)",
      icon: PenTool,
      items: [
        "GST Amendment of Core fields",
        "GST Amendment of Non-Core fields",
        "Change in Business Name",
        "Change in Address",
        "Change in Mobile No. or Email ID",
        "Adding Additional Place of Business",
        "Change in proprietor/director/partner information"
      ]
    },
    {
      title: "E Commerce Sellers Returns",
      icon: Store,
      items: [
        "For Amazon, Flipkart, Meesho, etc. Sellers",
        "Monthly reconcialition with e-commerce platform sales as well as transaction reports",
        "Monthly TCS reconciltion with GST portal",
        "Preparing Sales & Purchases (ITC) Reconciliation",
        "GSTR 2A/2B whole reconciliation",
        "Preparation of tax computation for your review",
        "Finalization of GST Returns"
      ]
    },
    {
      title: "GST Revocation",
      icon: XCircle,
      items: [
        "Understanding the reason of cancellation",
        "Ensuring all non-compliances to be corrected",
        "Assistance in drafting all legal documents",
        "Revoke a suo-moto cancelled GST Registration",
        "Revoke a suspended GST Registration",
        "Finalizing all Post Revocation Compliances"
      ]
    },
    {
      title: "GST LUT Filing",
      icon: Package,
      items: [
        "Ensuring the eligibility of exporter for LUT Filing",
        "Assistance in completing all required documents for LUT filing",
        "Filing of LUT by expert",
        "100% Online process",
        "Keeping a track on expiration of filed LUT",
        "Reminders in well advance for renewal of LUT at end of each FY"
      ]
    },
    {
      title: "GST Annual Return (GSTR 9/9C)",
      icon: FileText,
      items: [
        "Performing Sales Reconciliation for whole year",
        "Sales reconciliation with e-way bills issued during the year",
        "Sales reconciliation with e-invoices",
        "GSTR 1 vis-à-vis GSTR 3B Reconciliation",
        "GSTR 3B vis-à-vis GSTR 2A/2B Reconciliation",
        "Preparing ITC report to avoid excessive ITC claims",
        "Preparing ITC report to ensure no eligible ITC is missed while claiming",
        "Vendor/ ITC Reconciliation for whole year",
        "Finalization of Annual Return"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
          GST Services We Offer
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              icon={service.icon}
              items={service.items}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GSTServices;