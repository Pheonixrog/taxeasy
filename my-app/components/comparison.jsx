import React from 'react';
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const ComparisonTable = () => {
  const comparisonData = {
    headers: [
      'Point of Comparison',
      'Private Limited Company',
      'One Person Company (OPC)',
      'Limited Liability Partnership (LLP)',
    ],
    rows: [
      {
        point: 'Minimum Number of Directors',
        values: [
          'Two(2)',
          'One(1)',
          'Designated Partners: 2',
        ],
      },
      {
        point: 'Minimum Number of Shareholders',
        values: [
          'Two(2)\nNote: Both Directors & Stakeholders can be Same',
          'Only One(1)\nNote: Both Directors & Stakeholders can be Same',
          'Designated Partners: 2',
        ],
      },
      {
        point: 'Nominee of Shareholder',
        values: [
          'Not Required',
          'One(1) Nominee',
          'Not Required',
        ],
      },
      {
        point: 'Trusted By Customers',
        values: [
          'High',
          'Medium',
          'Medium',
        ],
      },
      {
        point: 'Investors Preference',
        values: [
          'High',
          'Low',
          'Medium',
        ],
      },
      {
        point: 'ESOPs',
        values: [
          'Can Issue ESOPs',
          'Cannot Issue ESOPs',
          'Cannot Issue ESOPs',
        ],
      },
      {
        point: 'Statutory Audit',
        values: [
          'Mandatory',
          'Mandatory',
          'If Contribution > Rs25 Lacs or\nTurnover > Rs40 Lacs',
        ],
      },
    ],
  };

  const getBorderColor = (index) => {
    const colors = ['border-pink-500', 'border-blue-500', 'border-yellow-500', 'border-purple-500'];
    return colors[index] || colors[0];
  };

  return (
    <div className="w-full p-4 overflow-x-auto bg-gray-900">
      <div className="min-w-[900px]">
        {/* Headers */}
        <div className="grid grid-cols-4 gap-4 mb-4">
          {comparisonData.headers.map((header, index) => (
            <Card key={header} className={`bg-white border-t-4 ${getBorderColor(index)}`}>
              <CardHeader className="p-4">
                <h3 className="font-bold text-center text-lg">{header}</h3>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Comparison Rows */}
        {comparisonData.rows.map((row, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-4 gap-4 mb-2">
            <div className="bg-white rounded-lg p-4">
              <p className="font-medium text-gray-700">{row.point}</p>
            </div>
            {row.values.map((value, colIndex) => (
              <div key={colIndex} className="bg-white rounded-lg p-4">
                <p className="text-gray-600 whitespace-pre-line">
                  {value}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComparisonTable;