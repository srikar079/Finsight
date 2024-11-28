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
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const PredictionChart = ({ query, data }) => {
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const baseValue =
        data?.predictions[0]?.[`predicted_${query.toLowerCase()}`];
      const currentValue = payload[0].value;
      const growthPercentage = baseValue
        ? (((currentValue - baseValue) / baseValue) * 100).toFixed(1)
        : 0;

      return (
        <div className="bg-white p-4 border rounded-lg shadow-lg">
          <p className="font-semibold text-gray-800">Year: {label}</p>
          <p className="text-emerald-600">
            {query}: ${currentValue.toFixed(2)}M
          </p>
          <p className="text-sm text-gray-500 mt-1">
            {growthPercentage}% growth from 2025
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="w-full">
      {!data && (
        <CardHeader>
          <CardTitle>No Record</CardTitle>
        </CardHeader>
      )}
      {data && (
        <>
          <CardHeader>
            <CardTitle>{`Predicted ${query} for ${data?.industry} Industry (2025-2034)`}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-96 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={data?.predictions}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 10,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                  <XAxis
                    dataKey="year"
                    label={{ value: "Year", position: "bottom", offset: 0 }}
                  />
                  <YAxis
                    label={{
                      value: `Predicted ${query} (Millions $)`,
                      angle: -90,
                      position: "insideLeft",
                    }}
                    domain={["auto", "auto"]}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey={`predicted_${query?.toLowerCase()}`}
                    stroke="#059669"
                    strokeWidth={3}
                    dot={{
                      fill: "#059669",
                      stroke: "#ffffff",
                      strokeWidth: 2,
                      r: 4,
                    }}
                    activeDot={{
                      r: 6,
                      stroke: "#059669",
                      strokeWidth: 2,
                      fill: "#ffffff",
                    }}
                    name={`Predicted ${query}`}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </>
      )}
    </Card>
  );
};

export default PredictionChart;
