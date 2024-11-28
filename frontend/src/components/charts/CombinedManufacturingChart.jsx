import React from "react";
import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Combined historical and prediction data
const data = [
  { year: 2012, gva: 1409986, type: "historical" },
  { year: 2013, gva: 1486873, type: "historical" },
  { year: 2014, gva: 1560709, type: "historical" },
  { year: 2015, gva: 1683938, type: "historical" },
  { year: 2017, gva: 1903850, type: "historical" },
  { year: 2018, gva: 2054764, type: "historical" },
  { year: 2019, gva: 2209428, type: "historical" },
  { year: 2020, gva: 2328992, type: "historical" },
  { year: 2021, gva: 2259706, type: "historical" },
  { year: 2022, gva: 2329160, type: "historical" },
  { year: 2023, gva: 2561083, type: "historical" },
  { year: 2024, gva: 2504663, type: "historical" },
  { year: 2025, gva: 2604179, type: "prediction" },
  { year: 2026, gva: 2703695, type: "prediction" },
  { year: 2027, gva: 2803211, type: "prediction" },
  { year: 2028, gva: 2902727, type: "prediction" },
  { year: 2029, gva: 3002243, type: "prediction" },
  { year: 2030, gva: 3101759, type: "prediction" },
  { year: 2031, gva: 3201275, type: "prediction" },
  { year: 2032, gva: 3300791, type: "prediction" },
  { year: 2033, gva: 3400307, type: "prediction" },
  { year: 2034, gva: 3499823, type: "prediction" },
];

const formatGVA = (value) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

export default function CombinedManufacturingChart() {
  return (
    <Card className="w-full max-w-5xl">
      <CardHeader>
        <CardTitle>Manufacturing Sector GVA Analysis & Prediction</CardTitle>
        <CardDescription className="text-muted-foreground">
          Historical data (2012-2024) and projected values (2025-2034)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[500px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                className="stroke-muted/20"
              />
              <XAxis
                dataKey="year"
                label={{ value: "Year", position: "insideBottom", offset: -10 }}
                className="text-xs"
                stroke="hsl(var(--muted-foreground))"
                tickMargin={10}
              />
              <YAxis
                tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
                label={{
                  value: "GVA (Millions USD)",
                  angle: -90,
                  position: "insideLeft",
                  offset: 0,
                }}
                className="text-xs"
                stroke="hsl(var(--muted-foreground))"
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload;
                    return (
                      <div className="bg-card border border-border p-2 rounded-md shadow-md">
                        <p className="font-semibold">Year: {data.year}</p>
                        <p>GVA: {formatGVA(data.gva)}</p>
                        <p className="text-xs text-muted-foreground">
                          {data.type === "historical"
                            ? "Historical Data"
                            : "Predicted Value"}
                        </p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <ReferenceLine
                x={2024}
                stroke="hsl(var(--muted-foreground))"
                strokeDasharray="3 3"
              />
              {/* Historical Line */}
              <Line
                type="monotone"
                data={data.filter((d) => d.type === "historical")}
                dataKey="gva"
                stroke="rgb(45, 185, 185)"
                strokeWidth={2}
                dot={{
                  r: 3,
                  fill: "white",
                  stroke: "rgb(45, 185, 185)",
                  strokeWidth: 2,
                }}
                activeDot={{
                  r: 6,
                  fill: "rgb(45, 185, 185)",
                  stroke: "white",
                  strokeWidth: 2,
                }}
              />
              {/* Prediction Line */}
              <Line
                type="monotone"
                data={data.filter((d) => d.type === "prediction")}
                dataKey="gva"
                stroke="rgb(45, 185, 185)"
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={{
                  r: 3,
                  fill: "white",
                  stroke: "rgb(45, 185, 185)",
                  strokeWidth: 2,
                }}
                activeDot={{
                  r: 6,
                  fill: "rgb(45, 185, 185)",
                  stroke: "white",
                  strokeWidth: 2,
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
