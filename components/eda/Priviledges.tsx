import React from "react";
import { PriviledgesTable } from "../table/PriviledgesReport";
import { PriviledgesBar } from "../charts/bar/Priviledges";

const Priviledges = () => {
  return (
    <div>
      <main>
        <h3 className="text-stone-700 text-xl text-center font-serif my-6">
          Privileges Required Vulnerability
        </h3>
        <PriviledgesTable />
        <div className="mb-6">
          <ul className="text-sm my-4">
            <li className="mb-2">
              <strong>High-Risk: System Execution Privileges</strong>:
              Vulnerabilities requiring system execution privileges (108
              instances) are the highest in count and pose the greatest risk.
              These can lead to complete system compromise. It is essential to
              implement tight access control, regular auditing, and
              least-privilege policies to prevent exploitation.
            </li>
            <li className="mb-2">
              <strong>Moderate Risk: User Execution and User Privileges</strong>
              : Vulnerabilities requiring user execution privileges (94
              instances) or user-level access (54 instances) highlight the
              importance of securing user accounts. Proper user access
              management, strong password policies, and ensuring timely software
              updates can reduce the potential impact of these vulnerabilities.
            </li>
            <li className="mb-2">
              <strong>
                Elevated Access: Privileged User and Root Privileges
              </strong>
              : Vulnerabilities requiring privileged user access (51 instances)
              or root access (30 instances) are more severe, as these give
              attackers significant control over the system. Organizations
              should enforce role-based access controls (RBAC) and adopt a
              zero-trust security model to limit the risk from elevated
              privilege vulnerabilities.
            </li>
            <li className="mb-2">
              <strong>
                Easier Exploits: No Additional Execution Privileges Needed
              </strong>
              : The vulnerabilities in the &quot;No additional execution
              privileges needed&quot; category (46 instances) indicate that the
              exploit can be triggered with minimal access, making them
              relatively easier to exploit. This suggests the need for strong
              access restrictions and more proactive patching practices.
            </li>
            <li className="mb-2">
              <strong>Compromise of Privileged Processes</strong>: The 9
              instances of privileged process compromise highlight the risk of
              attacks targeting processes with elevated permissions. Protecting
              these processes through secure coding practices, runtime
              application self-protection (RASP), and monitoring is crucial.
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
      <PriviledgesBar />
    </div>
  );
};

export default Priviledges;
