"use client";
import React from "react";
import { SeverityStackedComponent } from "../charts/bar/SeverityOperatingSystem";
import { OsBar } from "../charts/bar/OperatingSystem";
import { OsPie } from "../charts/pie/OperatingSystem";
import { SeverityOsTable } from "../table/SeverityOs";
import { Badge } from "../ui/badge";

const OperatingSystem = () => {
  return (
    <div>
      <div>
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
          <main className="col-span-1 h-full">
            <OsBar />
          </main>
          <main className="col-span-1 h-full">
            <OsPie />
          </main>
        </div>
      </div>
      <div>
        <h3 className="text-stone-700 text-xl text-center font-serif my-6">
          Operating System Severity Vulnerability Report
        </h3>
        <SeverityOsTable />
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 my-4">
          <main className="col-span-2 h-full">
            <SeverityStackedComponent />
          </main>
        </div>
        <div className="my-4 text-sm">
          <div className="mb-6">
            <div>
              This report provides a detailed analysis of vulnerabilities in
              different operating systems. The dataset classifies
              vulnerabilities by severity levels:{" "}
              <Badge variant={"outline"}>CRITICAL</Badge>,{" "}
              <Badge variant={"outline"}>HIGH</Badge>,{" "}
              <Badge variant={"outline"}>MEDIUM</Badge>, and{" "}
              <Badge variant={"outline"}>LOW</Badge>. A high number of severe
              vulnerabilities indicates a potentially greater security risk to
              the operating system and its users.
            </div>
            <div className="mt-4">
              The report covers popular operating systems such as Windows,
              Android, Linux, Mac OS X, Solaris, HP-UX, FreeBSD, AIX, and
              cross-platform systems. The vulnerabilities of each operating
              system have been measured, and we observe that some systems, like
              Windows and Android, have high counts of severe vulnerabilities,
              while others, such as FreeBSD and AIX, show fewer vulnerabilities
              overall. Here’s a breakdown:
            </div>
            <div className="mt-4">
              <h3 className="text-stone-700 font-semibold text-base">
                Windows
              </h3>
              <p className="mt-4">
                Windows stands out with a high number of critical and
                high-severity vulnerabilities. The 424 high-severity
                vulnerabilities suggest that many of these issues could lead to
                significant security threats if exploited. Given the extensive
                use of Windows in both personal and enterprise environments,
                addressing these vulnerabilities is essential for security.
              </p>
            </div>

            <div className="mt-4">
              <h3 className="text-stone-700 font-semibold text-base">
                Android
              </h3>
              <p className="mt-4">
                Android ranks second in terms of vulnerabilities, with 35
                critical and 251 high-severity issues. This suggests that while
                Android is versatile and widely adopted, it faces substantial
                security risks, particularly at the higher levels of severity.
                These vulnerabilities could expose Android devices to attacks if
                not regularly patched.
              </p>
            </div>

            <div className="mt-4">
              <h3 className="text-stone-700 font-semibold text-base">Linux</h3>
              <p className="mt-4">
                Linux shows a balanced distribution with no critical
                vulnerabilities but a notable number of high and medium-severity
                issues. This is consistent with Linux’s reputation for security,
                though the high-severity vulnerabilities indicate that regular
                maintenance and patches are still necessary to ensure robust
                security.
              </p>
            </div>

            <div className="mt-4">
              <h3 className="text-stone-700 font-semibold text-base">
                Mac OS X
              </h3>
              <p className="mt-4">
                Mac OS X has no critical vulnerabilities, suggesting a stronger
                focus on security in its architecture. However, the 54
                high-severity and 95 medium-severity vulnerabilities indicate
                that Mac OS X users should still be cautious, as these
                vulnerabilities can lead to significant data breaches if left
                unaddressed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperatingSystem;
