"use client";

import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const data = [
  {
    year: 2012,
    agriculture: 1501947,
    manufacturing: 1409986,
    construction: 777335,
    trade: 883582,
    mining: 261085,
  },
  {
    year: 2013,
    agriculture: 1524288,
    manufacturing: 1486873,
    construction: 780050,
    trade: 981620,
    mining: 262609,
  },
  {
    year: 2014,
    agriculture: 1609198,
    manufacturing: 1560709,
    construction: 800771,
    trade: 1034506,
    mining: 263107,
  },
  {
    year: 2015,
    agriculture: 1605715,
    manufacturing: 1683938,
    construction: 835229,
    trade: 1135841,
    mining: 288685,
  },
  {
    year: 2017,
    agriculture: 1616146,
    manufacturing: 1903850,
    construction: 865335,
    trade: 1261426,
    mining: 317974,
  },
  {
    year: 2018,
    agriculture: 1726004,
    manufacturing: 2054764,
    construction: 916445,
    trade: 1389322,
    mining: 349248,
  },
  {
    year: 2019,
    agriculture: 1840023,
    manufacturing: 2209428,
    construction: 964306,
    trade: 1568175,
    mining: 329612,
  },
  {
    year: 2020,
    agriculture: 1878596,
    manufacturing: 2328992,
    construction: 1026789,
    trade: 1707781,
    mining: 326815,
  },
  {
    year: 2021,
    agriculture: 1994326,
    manufacturing: 2259706,
    construction: 1043429,
    trade: 1828368,
    mining: 317134,
  },
  {
    year: 2022,
    agriculture: 2074212,
    manufacturing: 2329160,
    construction: 995371,
    trade: 1438477,
    mining: 291075,
  },
  {
    year: 2023,
    agriculture: 2170106,
    manufacturing: 2561083,
    construction: 1198532,
    trade: 1614780,
    mining: 309276,
  },
  {
    year: 2024,
    agriculture: 2272250,
    manufacturing: 2504663,
    construction: 1306256,
    trade: 1838718,
    mining: 315256,
  },
];

const formatValue = (value) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

export default function IndustryTrendsChart() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Industry Sector Trends (2012-2024)</CardTitle>
        <CardDescription>
          Economic performance of major industry sectors over time
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* Ensure the ChartContainer occupies full width and height */}
        <ChartContainer
          config={{
            agriculture: {
              label: "Agriculture & Fishing",
              color: "rgb(45, 185, 185)",
            },
            manufacturing: {
              label: "Manufacturing",
              color: "hsl(var(--chart-2))",
            },
            construction: {
              label: "Construction",
              color: "hsl(var(--chart-3))",
            },
            trade: {
              label: "Trade & Services",
              color: "hsl(var(--chart-4))",
            },
            mining: {
              label: "Mining & Quarrying",
              color: "hsl(var(--chart-5))",
            },
          }}
          className="w-full h-[500px]" // Make the container fill the width and set a height
        >
          {/* Make the chart responsive */}
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="year"
                label={{ value: "Year", position: "insideBottom", offset: -5 }}
              />
              <YAxis
                tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
                label={{
                  value: "Value (Millions USD)",
                  angle: -90,
                  position: "insideLeft",
                }}
              />
              <ChartTooltip
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-background border border-border p-3 rounded-lg shadow-lg">
                        <p className="font-semibold mb-2">Year: {label}</p>
                        {payload.map((entry, index) => (
                          <div
                            key={index}
                            className="flex justify-between gap-4"
                          >
                            <span style={{ color: entry.color }}>
                              {entry.name}:
                            </span>
                            <span className="font-medium">
                              {formatValue(entry.value)}
                            </span>
                          </div>
                        ))}
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Line
                type="monotone"
                dataKey="agriculture"
                stroke={`rgb(45, 18, 185)`}
                strokeWidth={2}
                dot={true}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="manufacturing"
                stroke="rgb(4, 185, 15)"
                strokeWidth={2}
                dot={true}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="construction"
                stroke="rgb(45, 18, 0.5)"
                strokeWidth={2}
                dot={true}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="trade"
                stroke="rgb(453, 185, 185)"
                strokeWidth={2}
                dot={true}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="mining"
                stroke="rgb(450, 0, 185)"
                strokeWidth={2}
                dot={true}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
