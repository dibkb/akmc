"use client";
import React from "react";
import { SeverityBar } from "../charts/bar/Severity";
import { SeverityPie } from "../charts/pie/Severity";

const Severity = () => {
  return (
    <div>
      <h3 className="text-stone-700 py-4 text-2xl text-center font-serif">
        Severity
      </h3>
      <div className="mb-6 text-sm">
        <ul className="list-disc list-inside text-stone-600">
          <li>
            <strong>Medium and High Severity Dominance:</strong> With 5,275 and
            5,240 vulnerabilities respectively, most issues pose a moderate to
            significant risk, indicating a focus on impactful vulnerabilities.
          </li>
          <li>
            <strong>Fewer Low and Critical Severities:</strong> The dataset
            contains only 788 low and 195 critical vulnerabilities, implying a
            focus on more severe issues.
          </li>
          <li>
            <strong>Prioritization Insights:</strong> Given the high count of
            medium and high severity vulnerabilities, it’s recommended to focus
            mitigation efforts on these categories while addressing critical
            vulnerabilities urgently.
          </li>
        </ul>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        <main className="col-span-1 h-full">
          <SeverityBar />
        </main>
        <main className="col-span-1 h-full">
          <SeverityPie />
        </main>
      </div>
    </div>
  );
};

export default Severity;
