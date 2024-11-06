"use client";
import React from "react";
import { DescriptiveV2Table } from "../table/DescriptiveStatsV2";
import { DescriptiveV3Table } from "../table/DescriptiveStatsV3";
import { HistogramComponent } from "../charts/histogram/HistogramContainer";

const Ids = () => {
  return (
    <main>
      <h3 className="text-stone-700 text-xl text-center font-serif my-6">
        Report on CVSS Characteristics and CWE Dataset Descriptive Statistics
      </h3>
      <div className="grid gap-4 grid-cols-1">
        <div className="text-sm text-stone-600">
          <p>
            The <strong>Common Vulnerability Scoring System (CVSS)</strong> is a
            widely used framework for assessing and quantifying the severity of
            software vulnerabilities. With versions
            <strong>(CVSS v2)</strong> and <strong>(CVSS v3)</strong>, the
            system has evolved to provide more precise and flexible
            vulnerability scoring. Below, we examine the characteristics of both
            versions, followed by descriptive statistics from a CWE dataset to
            explore the distributions of CVSS scores in these versions.
          </p>
          <h3 className="font-semibold mt-3">
            CVSS v2 uses a scoring scale of 0 to 10, focusing on three main
            metric groups:
          </h3>
          <ul className="list-disc list-inside">
            <li>
              Base Metrics: Describe the fundamental traits of a vulnerability
              that don’t change over time, such as access requirements and
              potential impacts on confidentiality, integrity, and availability.
            </li>
            <li>
              Temporal Metrics: Capture the exploitability and availability of
              remediation measures over time.
            </li>
            <li>
              Environmental Metrics: Allow scoring adjustments to reflect an
              organization’s specific environment, adjusting factors like
              potential collateral damage and security requirements.
            </li>
          </ul>
          <h3 className="font-semibold mt-3">
            CVSS v3 enhances and expands upon CVSS v2, aiming to provide a more
            accurate reflection of a vulnerability&apos;s severity in different
            contexts:
          </h3>
          <ul className="list-disc list-inside">
            <li>
              Base Metrics: Expanded to include Scope (assessing whether
              exploitation of a vulnerability affects resources beyond its
              origin) and clearer definitions of Attack Vector, Attack
              Complexity, and Privileges Required.
            </li>
            <li>
              Temporal Metrics: Remain similar to v2, accounting for evolving
              aspects of a vulnerability.
            </li>
            <li>
              Environmental Metrics: Include finer customization options for
              organizations to adjust the base score based on their specific
              assets and contexts.
            </li>
          </ul>
          <p className="my-3">
            The changes in CVSS v3 enhance clarity and precision, addressing
            several limitations found in <strong>CVSS v2</strong> . Notably,
            <strong>v3</strong> captures a wider range of attack conditions,
            provides a more consistent approach to cross-environment impacts,
            and allows for more granular privilege assessments.
          </p>
          <h4 className="font-semibold">
            Descriptive Statistics of CVSS Scores in the CWE Dataset
          </h4>
        </div>
        <main className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <p className="text-xs my-4 text-center font-medium">
              {" "}
              CVSS v2 Descriptive Statistics
            </p>
            <DescriptiveV2Table />
          </div>
          <div className="col-span-1">
            <p className="text-xs my-4 text-center font-medium">
              {" "}
              CVSS v3 Descriptive Statistics
            </p>
            <DescriptiveV3Table />
          </div>
        </main>
        <main className="col-span-1">
          <HistogramComponent />
        </main>
      </div>
    </main>
  );
};

export default Ids;
