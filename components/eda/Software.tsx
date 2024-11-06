"use client";
import React from "react";
import { SoftwareBar } from "../charts/bar/SoftwareComponent";

const Software = () => {
  return (
    <div>
      <main>
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
      </main>
      <div className="gird grid-cols-1">
        <SoftwareBar />
      </div>
    </div>
  );
};

export default Software;
