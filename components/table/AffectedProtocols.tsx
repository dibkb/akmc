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
    Protocol: "HTTP",
    Description: "Cross-Site Scripting (XSS), Authentication Weaknesses",
    CWE_IDs: "CWE-79, CWE-287, CWE-352",
  },
  {
    Protocol: "FTP",
    Description:
      "Weak encryption, Man-in-the-Middle attacks, Brute-force password attacks",
    CWE_IDs: "CWE-522, CWE-319",
  },
  {
    Protocol: "TCP",
    Description:
      "Denial of Service (DoS), Replay attacks, Connection Hijacking",
    CWE_IDs: "CWE-400, CWE-294, CWE-362",
  },
  {
    Protocol: "UDP",
    Description: "Spoofing, Amplification attacks, Data Forgery",
    CWE_IDs: "CWE-406, CWE-290",
  },
  {
    Protocol: "DNS",
    Description: "Cache Poisoning, Spoofing, Man-in-the-Middle attacks",
    CWE_IDs: "CWE-346, CWE-350, CWE-916",
  },
];

export function AffectedprotocolsTable() {
  return (
    <Card className="p-1 my-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] whitespace-nowrap">
              Protocol
            </TableHead>
            <TableHead className=" whitespace-nowrap">
              Vulnerability Description
            </TableHead>
            <TableHead className="text-right"> Common CWE IDs</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {chartData.map((c, id) => (
            <TableRow key={id}>
              <TableCell className="whitespace-nowrap font-medium">
                {c.Protocol}
              </TableCell>
              <TableCell>{c.Description}</TableCell>
              <TableCell className="text-right">{c.CWE_IDs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
