"use client";
import React from "react";
import { VendorPie } from "../charts/pie/Vendor";
import { VendorRadar } from "../charts/radar/Vendor";

const Vendor = () => {
  return (
    <div>
      <h3 className="text-stone-700 py-4 text-2xl text-center font-serif">
        Vendor Vulnerability
      </h3>
      <p className="my-4 text-sm text-stone-600">
        This report provides a detailed analysis of the top vendors based on the
        number of recorded vulnerabilities. Each vendor&apos;s security
        challenges are unique to the nature of its products and the sectors it
        serves. Understanding these vulnerabilities helps inform targeted
        security measures and underscores the importance of timely patching and
        risk management across widely used software and hardware solutions.
      </p>
      <div className="mb-6 text-sm">
        <ul className="list-disc list-inside text-stone-600 my-2">
          <p className="font-bold text-base">Microsoft</p>
          <li>
            <strong>Vulnerabilities Count: 1135</strong>
          </li>
          <li>
            Description: As the most affected vendor in this dataset,
            Microsoft’s vulnerabilities span a variety of products, from
            operating systems like Windows to applications within the Office
            suite and Azure cloud services. Given the pervasive use of Microsoft
            software in both consumer and enterprise environments,
            vulnerabilities can have widespread and impactful consequences.
            These include potential disruptions in business operations, exposure
            of sensitive data, and risk of cyber-espionage. Regular patching,
            along with robust endpoint security practices, is critical to
            managing the risks associated with Microsoft’s software ecosystem.
          </li>
        </ul>

        <ul className="list-disc list-inside text-stone-600 my-2">
          <p className="font-bold text-base">Oracle</p>
          <li>
            <strong>Vulnerabilities Count: 665</strong>
          </li>
          <li>
            Description: Oracle ranks second in terms of vulnerabilities. Its
            focus on database and enterprise software means that vulnerabilities
            here could affect critical infrastructure and data security.
            Organizations relying on Oracle products should prioritize regular
            patch management, secure database configurations, and access
            controls to minimize the impact of these vulnerabilities.
          </li>
        </ul>

        <ul className="list-disc list-inside text-stone-600 my-2">
          <p className="font-bold text-base">Cisco</p>
          <li>
            <strong>Vulnerabilities Count: 460</strong>
          </li>
          <li>
            Description: Cisco, as a leading provider of networking hardware and
            telecommunication solutions, has a significant number of
            vulnerabilities. These could affect network infrastructure, leading
            to disruptions, unauthorized access, or loss of data. Strong network
            security measures, such as firmware updates, proper configuration,
            and secure access policies, are essential to mitigate risks
            associated with Cisco products.
          </li>
        </ul>

        <ul className="list-disc list-inside text-stone-600 my-2">
          <p className="font-bold text-base">IBM</p>
          <li>
            <strong>Vulnerabilities Count: 391</strong>
          </li>
          <li>
            Description: IBM’s vulnerabilities are primarily found in enterprise
            software and legacy systems, such as mainframes. These systems are
            critical to many large organizations and governments, meaning their
            vulnerabilities can have significant operational and security
            implications. IBM product users should ensure robust patch
            management practices, security audits, and encryption to protect
            sensitive data and mission-critical applications.
          </li>
        </ul>

        <ul className="list-disc list-inside text-stone-600 my-2">
          <p className="font-bold text-base">Apple</p>
          <li>
            <strong>Vulnerabilities Count: 331</strong>
          </li>
          <li>
            Description: Apple’s vulnerabilities, though fewer in number
            compared to other vendors, are still noteworthy. Apple’s ecosystem,
            including macOS, iOS, and other products, is widely used in both
            consumer and enterprise settings. To protect against exploits, it is
            crucial for both personal users and businesses to apply updates
            promptly and maintain strong security practices.
          </li>
        </ul>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        <main className="col-span-1 h-full">
          <VendorPie />
        </main>
        <main className="col-span-1 h-full">
          <VendorRadar />
        </main>
      </div>
    </div>
  );
};

export default Vendor;
