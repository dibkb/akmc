"use client";
import { OsBar } from "@/components/charts/bar/OperatingSystem";
import { SeverityBar } from "@/components/charts/bar/Severity";
import { SoftwareBar } from "@/components/charts/bar/SoftwareComponent";
import { OsPie } from "@/components/charts/pie/OperatingSystem";
import { SeverityPie } from "@/components/charts/pie/Severity";
import React from "react";

const EdaPage = () => {
  return (
    <div className="container mx-auto py-4 px-4">
      {/* severity */}
      <>
        <h3 className="text-stone-700 py-4 text-2xl text-center font-serif">
          Severity
        </h3>
        <div className="mb-6 text-sm">
          <ul className="list-disc list-inside text-stone-600">
            <li>
              <strong>Medium and High Severity Dominance:</strong> With 5,275
              and 5,240 vulnerabilities respectively, most issues pose a
              moderate to significant risk, indicating a focus on impactful
              vulnerabilities.
            </li>
            <li>
              <strong>Fewer Low and Critical Severities:</strong> The dataset
              contains only 788 low and 195 critical vulnerabilities, implying a
              focus on more severe issues.
            </li>
            <li>
              <strong>Prioritization Insights:</strong> Given the high count of
              medium and high severity vulnerabilities, it’s recommended to
              focus mitigation efforts on these categories while addressing
              critical vulnerabilities urgently.
            </li>
          </ul>
        </div>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          <main className="col-span-1">
            <SeverityBar />
          </main>
          <main className="col-span-1">
            <SeverityPie />
          </main>
        </div>
      </>
      <>
        <h3 className="text-stone-700 text-xl text-center font-serif my-6">
          Operating System Vulnerability Report
        </h3>

        <div className="mb-4 text-sm">
          <div className="mb-6">
            <ul className="list-disc list-inside text-stone-600 text-sm">
              <li>
                <strong>Windows:</strong> Highest vulnerability count,
                suggesting greater exposure or wider user base.
              </li>
              <li>
                <strong>Android:</strong> Significant vulnerability presence,
                potentially due to widespread mobile usage.
              </li>
              <li>
                <strong>Linux:</strong> Moderate vulnerability count; could
                reflect both server and personal device threats.
              </li>
              <li>
                <strong>Mac OS X:</strong> Noticeable vulnerabilities, though
                fewer compared to other operating systems.
              </li>
              <li>
                <strong>Solaris:</strong> Fewest vulnerabilities recorded,
                indicating limited exposure or fewer targeted exploits.
              </li>
            </ul>
          </div>

          <div className=" pt-4 my-4">
            <p className="text-stone-600 text-sm">
              The above distribution highlights operating system-specific risks,
              aiding in the prioritization of security measures based on
              platform usage.
            </p>
          </div>
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          <main className="col-span-1">
            <OsBar />
          </main>
          <main className="col-span-1">
            <OsPie />
          </main>
        </div>
      </>
      {/* Operating System */}

      <>
        <h3 className="text-stone-700 text-xl text-center font-serif my-6">
          Software Component Vulnerability Report
        </h3>
        <div className="mb-6">
          <ul className="list-disc list-inside text-stone-600 text-sm">
            <li>
              <strong>Android:</strong> Highest vulnerability count, indicating
              significant risks due to wide mobile usage.
            </li>
            <li>
              <strong>Microsoft Internet Explorer:</strong> Noteworthy
              vulnerability count, potentially impacting legacy systems.
            </li>
            <li>
              <strong>Linux kernel:</strong> Reflects vulnerabilities in core
              components, with potential widespread implications.
            </li>
            <li>
              <strong>WebKit:</strong> Known for browser engine vulnerabilities,
              affects multiple platforms and devices.
            </li>
            <li>
              <strong>Microsoft Edge:</strong> Newer Microsoft browser with
              several recorded vulnerabilities.
            </li>
            <li>
              <strong>Oracle Java SE:</strong> Moderate vulnerability count,
              impacting server and client-side applications.
            </li>
            <li>
              <strong>Adobe Flash Player:</strong> Historical security risks,
              especially due to multimedia vulnerabilities.
            </li>
            <li>
              <strong>MySQL Server:</strong> Database vulnerabilities with
              potential impacts on data security.
            </li>
            <li>
              <strong>Java Runtime Environment (JRE):</strong> Important for
              cross-platform applications, facing security issues.
            </li>
            <li>
              <strong>Microsoft Excel:</strong> Notable vulnerabilities, with
              implications for document security.
            </li>
          </ul>
        </div>

        <div className="pt-4 my-4">
          <p className="text-stone-600 text-sm">
            This report summarizes vulnerability distribution across widely used
            software components, assisting in targeting security enhancements
            where they are needed most.
          </p>
        </div>
      </>
      <div className="gird grid-cols-1">
        <SoftwareBar />
      </div>
    </div>
  );
};

export default EdaPage;
