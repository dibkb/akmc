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
  { metric: "Minimum", value: "2.3" },
  { metric: "25th Percentile", value: "5.5" },
  { metric: "Median (50th Percentile)", value: "7.1" },
  { metric: "75th Percentile", value: "7.8" },
  { metric: "Maximum", value: "10.0" },
  { metric: "Mean", value: "6.88" },
  { metric: "Standard Deviation", value: "1.50" },
  { metric: "Count", value: "3027" },
];
export function DescriptiveV3Table() {
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
