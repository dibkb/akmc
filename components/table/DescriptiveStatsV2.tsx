"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "../ui/card";

const chartData = [
  { metric: "Minimum", value: "0.0" },
  { metric: "25th Percentile", value: "4.6" },
  { metric: "Median (50th Percentile)", value: "6.2" },
  { metric: "75th Percentile", value: "7.5" },
  { metric: "Maximum", value: "10.0" },
  { metric: "Mean", value: "6.14" },
  { metric: "Standard Deviation", value: "2.20" },
  { metric: "Count", value: "11498" },
];
export function DescriptiveV2Table() {
  return (
    <Card className="p-1">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] whitespace-nowrap">
              Metric
            </TableHead>
            <TableHead className="text-right">Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {chartData.map((c, id) => (
            <TableRow key={id}>
              <TableCell className="whitespace-nowrap font-semibold">
                {c.metric}
              </TableCell>
              <TableCell className="text-right">{c.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
