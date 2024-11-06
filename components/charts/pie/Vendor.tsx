"use client";

import { Pie, PieChart } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A donut chart";

const chartData = [
  {
    Vendor: "Microsoft",
    Count: 1135,
    Description:
      "Microsoft products are the most affected in this dataset, suggesting a high number of vulnerabilities. Due to its wide usage in both enterprise and consumer markets, vulnerabilities in Microsoft software can have extensive impact.",
    fill: "var(--color-Microsoft)",
  },
  {
    Vendor: "Oracle",
    Count: 665,
    Description:
      "Oracle ranks second in vulnerabilities. Its focus on database and enterprise software means that vulnerabilities here could affect critical infrastructure and data security.",
    fill: "var(--color-Oracle)",
  },
  {
    Vendor: "Cisco",
    Count: 460,
    Description:
      "Cisco, as a leading network equipment provider, has many vulnerabilities, which may impact network infrastructure security and reliability. This highlights the importance of network hardware security.",
    fill: "var(--color-Cisco)",
  },
  {
    Vendor: "IBM",
    Count: 391,
    Description:
      "IBM's vulnerabilities are often found in enterprise software and mainframe solutions, which are critical to many large organizations. This suggests a need for robust security measures in enterprise environments.",
    fill: "var(--color-IBM)",
  },
  {
    Vendor: "Apple",
    Count: 331,
    Description:
      "Apple’s vulnerabilities are fewer but significant due to its extensive consumer base. Security patches for Apple products are critical for both personal devices and enterprise settings where Apple products are deployed.",
    fill: "var(--color-Apple)",
  },
];

const chartConfig = {
  Microsoft: {
    label: "Microsoft",
    color: "hsl(var(--chart-1))",
  },
  Oracle: {
    label: "Oracle",
    color: "hsl(var(--chart-2))",
  },
  Cisco: {
    label: "Cisco",
    color: "hsl(var(--chart-3))",
  },
  IBM: {
    label: "IBM",
    color: "hsl(var(--chart-4))",
  },
  Apple: {
    label: "Apple",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function VendorPie() {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="items-center pb-0">
        <CardTitle>Companies most affected</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[400px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="Count"
              nameKey="Vendor"
              innerRadius={80}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
