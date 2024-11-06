"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import { CardContent } from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";

// Hypothetical data for the histogram

const histogramData = [
  { range: "0-1", frequency: 2 },
  { range: "1-2", frequency: 144 },
  { range: "2-3", frequency: 782 },
  { range: "3-4", frequency: 361 },
  { range: "4-5", frequency: 2195 },
  { range: "5-6", frequency: 2172 },
  { range: "6-7", frequency: 1051 },
  { range: "7-8", frequency: 2893 },
  { range: "8-9", frequency: 30 },
  { range: "9-10", frequency: 961 },
];
const chartConfig = {
  frequency: {
    label: "Frequency",
    color: "hsl(var(--chart-1))",
  },
};

export default function Cvssv2Histogram() {
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
