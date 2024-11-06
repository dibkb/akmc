"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import { CardContent } from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";

// Hypothetical data for the histogram

const histogramData = [
  { range: "0-1", frequency: 0 },
  { range: "1-2", frequency: 0 },
  { range: "2-3", frequency: 9 },
  { range: "3-4", frequency: 47 },
  { range: "4-5", frequency: 260 },
  { range: "5-6", frequency: 597 },
  { range: "6-7", frequency: 512 },
  { range: "7-8", frequency: 1104 },
  { range: "8-9", frequency: 303 },
  { range: "9-10", frequency: 189 },
];
const chartConfig = {
  frequency: {
    label: "Frequency",
    color: "hsl(var(--chart-2))",
  },
};

export default function Cvssv3Histogram() {
  return (
    <CardContent>
      <ChartContainer
        config={chartConfig}
        className="aspect-auto h-[450px] w-full"
      >
        <BarChart
          data={histogramData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="range" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="frequency" fill="var(--color-frequency)" radius={3} />
        </BarChart>
      </ChartContainer>
    </CardContent>
  );
}
