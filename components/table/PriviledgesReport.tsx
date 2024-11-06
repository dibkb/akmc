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

const privilegesReport = [
  {
    PrivilegeLevel: "System Execution Privileges",
    Description:
      "Vulnerabilities requiring system execution privileges can lead to full system compromise. These are the most critical and demand tight access control and regular auditing.",
    Count: 108,
  },
  {
    PrivilegeLevel: "User Execution Privileges",
    Description:
      "Vulnerabilities that require user execution privileges typically involve actions initiated by the user, such as opening a malicious file. These can lead to moderate damage but are preventable with proper user access management.",
    Count: 94,
  },
  {
    PrivilegeLevel: "User",
    Description:
      "Vulnerabilities that exploit standard user-level access may lead to unauthorized actions, like accessing sensitive data. These require strong password policies and timely software updates to mitigate.",
    Count: 54,
  },
  {
    PrivilegeLevel: "Privileged User",
    Description:
      "Privileged user vulnerabilities involve accounts with more rights than a standard user, allowing greater access to system features. These require role-based access controls (RBAC) to minimize risk.",
    Count: 51,
  },
  {
    PrivilegeLevel: "No Additional Execution Privileges Needed",
    Description:
      "These vulnerabilities can be exploited with minimal access, making them easier to exploit. Implementing strong access restrictions and proactive patching is crucial.",
    Count: 46,
  },
  {
    PrivilegeLevel: "System Execution",
    Description:
      "Similar to system execution privileges, these vulnerabilities allow attackers to execute malicious actions at the system level, resulting in complete compromise. Regular patching and endpoint security are essential.",
    Count: 45,
  },
  {
    PrivilegeLevel: "Root",
    Description:
      "Root privileges provide full control over the system. Vulnerabilities requiring root access can have catastrophic impacts, necessitating tight control over administrative access and system hardening.",
    Count: 30,
  },
  {
    PrivilegeLevel: "User Level",
    Description:
      "User level vulnerabilities require standard user access, typically leading to less severe consequences but still significant. Tightening user access controls and ensuring a secure environment are key to mitigation.",
    Count: 26,
  },
  {
    PrivilegeLevel: "User Execution",
    Description:
      "Exploitation of user execution vulnerabilities typically involves social engineering, such as phishing. User awareness training is essential for reducing the risk of exploitation.",
    Count: 12,
  },
  {
    PrivilegeLevel: "Privileged Process Compromise",
    Description:
      "This involves attacking processes with elevated permissions, which can lead to privilege escalation. Securing privileged processes through coding practices and runtime protection is necessary.",
    Count: 9,
  },
];

export function PriviledgesTable() {
  return (
    <Card className="p-1 my-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] whitespace-nowrap">
              Privilege Level
            </TableHead>
            <TableHead className=" whitespace-nowrap">Count</TableHead>
            <TableHead className="text-right"> Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {privilegesReport.map((c, id) => (
            <TableRow key={id}>
              <TableCell className="whitespace-nowrap font-medium">
                {c.PrivilegeLevel}
              </TableCell>
              <TableCell>{c.Count}</TableCell>
              <TableCell className="text-left">{c.Description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
