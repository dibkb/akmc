"use client";
import React from "react";
import { Badge } from "../ui/badge";
import { NetworkTable } from "../table/NetworkTable";

const NetworkRequirements = () => {
  return (
    <main>
      <h3 className="text-stone-700 py-4 text-2xl text-center font-serif">
        Network Requirements
      </h3>
      <div className="mb-4 text-sm">
        This report summarizes the distribution of network requirements based on
        the frequency of occurrences for each type. The data shows that
        different types of network requirements, such as{" "}
        <Badge variant={"secondary"}>remote </Badge>
        or <Badge variant={"secondary"}> local </Badge> have varying levels of
        impact on vulnerabilities, potentially influencing where resources
        should be allocated to mitigate risks.
      </div>
      <div>
        <h3 className="font-semibold text-sm">Key Findings</h3>
        <ul className="text-sm my-4">
          <li className="mb-2">
            <strong>High Risk from Remote Exploits</strong>: The majority of
            vulnerabilities (5803 instances) are exploitable remotely. This high
            count suggests that priority should be given to securing remote
            access, implementing strict authentication measures, and using
            firewalls to limit exposure to remote threats.
          </li>
          <li className="mb-2">
            <strong>Significant Local Vulnerabilities</strong>: With 1523
            instances requiring local access, these vulnerabilities indicate a
            potential risk from internal sources or physical access. To mitigate
            this, organizations should consider endpoint security solutions,
            enforce secure local access protocols, and implement robust access
            control policies.
          </li>
          <li className="mb-2">
            <strong>Need for User Awareness in Remote Interactions</strong>:
            While relatively lower in count (78 instances), the “user-assisted
            remote” category points to the importance of user education,
            particularly regarding phishing and social engineering attacks.
            Regular security awareness training can reduce the likelihood of
            these vulnerabilities being exploited.
          </li>
          <li className="mb-2">
            <strong>Importance of Network Segmentation</strong>: With 13
            instances of <Badge variant={"secondary"}> adjacent access </Badge>{" "}
            and 9 for <Badge variant={"secondary"}> adjacent </Badge>
            requirements, these vulnerabilities highlight the need for network
            segmentation. Segmentation helps contain potential attacks within
            specific network segments, reducing the risk of widespread
            exploitation across network boundaries.
          </li>
        </ul>
      </div>
      <NetworkTable />
    </main>
  );
};

export default NetworkRequirements;
