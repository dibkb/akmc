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
  {
    Network_Requirement: "Remote",
    Count: 5803,
    Description:
      "The vulnerability can be exploited remotely, making it highly accessible and potentially more dangerous without stringent remote protections.",
  },
  {
    Network_Requirement: "Local",
    Count: 1523,
    Description:
      "Local access is required to exploit the vulnerability, typically reducing the risk of widespread attacks but increasing internal threat risks.",
  },
  {
    Network_Requirement: "User-assisted Remote",
    Count: 78,
    Description:
      "Exploitation requires user interaction remotely, often through social engineering (e.g., phishing), indicating a need for user awareness and training.",
  },
  {
    Network_Requirement: "Adjacent Access",
    Count: 13,
    Description:
      "The vulnerability can be exploited by attackers within the same network segment or subnet, often associated with network partitioning.",
  },
  {
    Network_Requirement: "Adjacent",
    Count: 9,
    Description:
      "Similar to adjacent access, this involves exploitation within a nearby network, highlighting the importance of network segmentation.",
  },
];

export function NetworkTable() {
  return (
    <Card className="p-1">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="whitespace-nowrap">
              Network Requirement
            </TableHead>
            <TableHead className="whitespace-nowrap">Count</TableHead>
            <TableHead className="text-right">Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {chartData.map((c, id) => (
            <TableRow key={id}>
              <TableCell className="whitespace-nowrap">
                {c.Network_Requirement}
              </TableCell>
              <TableCell>{c.Count}</TableCell>
              <TableCell className="text-right">{c.Description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
