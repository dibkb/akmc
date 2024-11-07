import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Card } from "../ui/card";
import { DescriptionResponse } from "@/src/store/authStore";

const Descriptiontable = ({
  chartData,
}: {
  chartData: DescriptionResponse;
}) => {
  console.log(Object.entries(chartData));
  return (
    <Card className="p-1 my-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className=" whitespace-nowrap">Column</TableHead>
            <TableHead className="text-right">Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Object.entries(chartData).map(([key, value], id) => {
            return (
              <TableRow key={id}>
                <TableCell className="whitespace-nowrap font-medium">
                  {key}
                </TableCell>
                <TableCell>{value === "NaN" ? "N/A" : value}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Card>
  );
};

export default Descriptiontable;
