import React from "react";
import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const data = [
  { year: 2025, gva: 2604179.090909091 },
  { year: 2026, gva: 2703695.1818181816 },
  { year: 2027, gva: 2803211.2727272725 },
  { year: 2028, gva: 2902727.3636363633 },
  { year: 2029, gva: 3002243.454545454 },
  { year: 2030, gva: 3101759.545454545 },
  { year: 2031, gva: 3201275.636363636 },
  { year: 2032, gva: 3300791.7272727266 },
  { year: 2033, gva: 3400307.8181818174 },
  { year: 2034, gva: 3499823.9090909082 },
];

const formatGVA = (value) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

export default function GVAPredictionChart() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>GVA Prediction for Manufacturing Sector</CardTitle>
        <CardDescription className="text-muted-foreground">
          Projected Gross Value Added from 2025 to 2034
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[400px] w-full">
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
                    return (
                      <div className="bg-card border border-border p-2 rounded-md shadow-md">
                        <p className="font-semibold">
                          Year: {payload[0].payload.year}
                        </p>
                        <p>GVA: {formatGVA(payload[0].value)}</p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Line
                type="monotone"
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
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
