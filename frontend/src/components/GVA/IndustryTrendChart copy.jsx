import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Sample data structure based on the image
const years = [
  "2012",
  "2013",
  "2014",
  "2015",
  "2017",
  "2018",
  "2019",
  "2020",
  "2021",
  "2022",
  "2023",
  "2024",
];

const industries = [
  "Agriculture,Livestock,Forestry and Fishing",
  "Crops",
  "Livestock",
  "Forestry and Bezina",
  "Fishing and Aquaculture",
  "Mining and Quarrying",
  "Manufacturing",
  "Food Products,Beverages and Tobacco",
  "Textiles,Apparel and Leather Products",
  "Metal Products",
  "Machinery and Equipment",
  "Other Manufactured Goods",
  "Electricity,Gas,Water Supply & Other Utility",
];

const generateData = () => {
  return years.map((year) => {
    const dataPoint = { year };
    industries.forEach((industry) => {
      dataPoint[industry] = Math.floor(Math.random() * 2000000) + 100000;
    });
    return dataPoint;
  });
};

const data = generateData();

const colors = [
  "var(--chart-1)",
  "var(--chart-2)",
  "var(--chart-3)",
  "var(--chart-4)",
  "var(--chart-5)",
  "var(--chart-6)",
  "var(--chart-7)",
  "var(--chart-8)",
  "var(--chart-9)",
  "var(--chart-10)",
  "var(--chart-11)",
  "var(--chart-12)",
  "var(--chart-13)",
];

const IndustryTrendChart = () => {
  // Fixed: Properly initialize the state with useState
  const [selectedIndustries, setSelectedIndustries] = useState(
    industries.slice(0, 5)
  );

  const formatYAxis = (value) => {
    if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
    if (value >= 1000) return `${(value / 1000).toFixed(1)}K`;
    return value.toString();
  };

  return (
    <Card className="w-full max-w-6xl mx-auto">
      <CardHeader>
        <CardTitle>Industry Trends Over Time</CardTitle>
        <CardDescription>
          Comparison of various industries from 2012 to 2024
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[500px]">
          <ChartContainer
            config={{
              ...Object.fromEntries(
                industries.map((industry, index) => [
                  industry,
                  { label: industry, color: colors[index % colors.length] },
                ])
              ),
            }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis tickFormatter={formatYAxis} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend />
                {selectedIndustries.map((industry, index) => (
                  <Line
                    key={industry}
                    type="monotone"
                    dataKey={industry}
                    stroke={colors[index % colors.length]}
                    activeDot={{ r: 8 }}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
        <div className="mt-4">
          <Select onValueChange={(value) => setSelectedIndustries([value])}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select industries to display" />
            </SelectTrigger>
            <SelectContent>
              {industries.map((industry) => (
                <SelectItem key={industry} value={industry}>
                  {industry}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
};

export default IndustryTrendChart;
