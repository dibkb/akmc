"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A bar chart";

const chartData = [
  { protocol: "HTTP", value: 530 },
  { protocol: "FTP", value: 120 },
  { protocol: "TCP", value: 79 },
  { protocol: "UDP", value: 30 },
  { protocol: "DNS", value: 29 },
];

const chartConfig = {
  value: {
    label: "Count",
    color: "#044080",
  },
} satisfies ChartConfig;

export function AffectedProtocolsBar() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Affected Protocols</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="max-h-[400px] w-full">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="protocol"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="value" fill="var(--color-value)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
