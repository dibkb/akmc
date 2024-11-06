"use client";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A stacked bar chart with a legend";

const chartData = [
  { software: "Windows", CRITICAL: 7, HIGH: 424, LOW: 17, MEDIUM: 230 },
  { software: "Android", CRITICAL: 35, HIGH: 251, LOW: 4, MEDIUM: 212 },
  { software: "Linux", CRITICAL: 0, HIGH: 98, LOW: 57, MEDIUM: 97 },
  { software: "Mac OS X", CRITICAL: 0, HIGH: 54, LOW: 15, MEDIUM: 95 },
  { software: "Solaris", CRITICAL: 0, HIGH: 32, LOW: 6, MEDIUM: 10 },
  { software: "HP-UX", CRITICAL: 0, HIGH: 18, LOW: 5, MEDIUM: 18 },
  { software: "FreeBSD", CRITICAL: 0, HIGH: 10, LOW: 10, MEDIUM: 12 },
  { software: "AIX", CRITICAL: 0, HIGH: 20, LOW: 3, MEDIUM: 8 },
  {
    software: "Windows, OS X, Linux",
    CRITICAL: 0,
    HIGH: 30,
    LOW: 0,
    MEDIUM: 1,
  },
  { software: "Sun Solaris", CRITICAL: 0, HIGH: 5, LOW: 4, MEDIUM: 16 },
];

const chartConfig = {
  CRITICAL: {
    label: "CRITICAL",
    color: "hsl(var(--chart-1))",
  },
  HIGH: {
    label: "HIGH",
    color: "hsl(var(--chart-2))",
  },
  LOW: {
    label: "LOW",
    color: "hsl(var(--chart-3))",
  },
  MEDIUM: {
    label: "MEDIUM",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig;

export function SeverityStackedComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Operating Systems affected by severity level</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="software"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="CRITICAL"
              stackId="a"
              fill="var(--color-CRITICAL)"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="HIGH"
              stackId="a"
              fill="var(--color-HIGH)"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="LOW"
              stackId="a"
              fill="var(--color-LOW)"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="MEDIUM"
              stackId="a"
              fill="var(--color-MEDIUM)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm"></CardFooter>
    </Card>
  );
}
