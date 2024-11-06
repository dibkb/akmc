"use client";

import { Bar, BarChart, XAxis, YAxis } from "recharts";

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
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A horizontal bar chart";

const chartData = [
  { month: "Windows", count: 678 },
  { month: "Android", count: 502 },
  { month: "Linux", count: 252 },
  { month: "Mac OS X", count: 164 },
  { month: "Solaris", count: 48 },
];

const chartConfig = {
  count: {
    label: "Count",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function OsBar() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Operating System most affected</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="">
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: -20,
            }}
          >
            <XAxis type="number" dataKey="count" hide />
            <YAxis
              dataKey="month"
              type="category"
              tickLine={false}
              tickMargin={20}
              className="font-medium"
              axisLine={false}
              width={100}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="count" fill="var(--color-count)" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm"></CardFooter>
    </Card>
  );
}
