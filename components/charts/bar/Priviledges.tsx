"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A bar chart";

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

const chartConfig = {
  Count: {
    label: "Count",
    color: "#0dace0",
  },
} satisfies ChartConfig;

export function PriviledgesBar() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Privileges Required</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="max-h-[1000px] w-full">
          <BarChart
            accessibilityLayer
            data={privilegesReport} // Significantly increased bottom margin
            layout="vertical" // Changed to vertical layout
          >
            <CartesianGrid horizontal={false} />
            <XAxis type="number" /> {/* XAxis now shows the Count */}
            <YAxis
              dataKey="PrivilegeLevel"
              type="category"
              width={150} // Increased width for labels
              tickMargin={10}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              dataKey="Count"
              fill="var(--color-Count)"
              radius={[0, 8, 8, 0]} // Adjusted for horizontal bars
              barSize={90} // Explicitly set bar size
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
