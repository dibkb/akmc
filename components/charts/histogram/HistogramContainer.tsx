"use client";

import * as React from "react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Cvssv2Histogram from "./CVSSV2";
import Cvssv3Histogram from "./CVSSV3";

export const description = "An interactive bar chart";

export function HistogramComponent() {
  const [activeChart, setActiveChart] = React.useState<"CVSS-V2" | "CVSS-V3">(
    "CVSS-V2"
  );

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Histogram - Interactive</CardTitle>
          <CardDescription>
            Showing total distribution of CVSS-V2 Score and CVSS-V3 Score
          </CardDescription>
        </div>
        <div className="flex">
          {["CVSS-V2", "CVSS-V3"].map((key) => {
            return (
              <button
                key={key}
                data-active={activeChart === key}
                className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(key as "CVSS-V2" | "CVSS-V3")}
              >
                <span className="text-xs font-bold">{key}</span>
              </button>
            );
          })}
        </div>
      </CardHeader>
      {activeChart === "CVSS-V2" ? <Cvssv2Histogram /> : <Cvssv3Histogram />}
    </Card>
  );
}
