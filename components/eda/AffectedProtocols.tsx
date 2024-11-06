"use client";
import React from "react";
import { AffectedProtocolsBar } from "../charts/bar/AffectedProtocols";
import { AffectedprotocolsTable } from "../table/AffectedProtocols";

const AffectedProtocols = () => {
  return (
    <main>
      <h3 className="text-stone-700 py-4 text-2xl text-center font-serif">
        Protocol Vulnerability
      </h3>
      <div className="mb-6 text-sm">
        The protocols listed above can be associated with significant
        vulnerabilities. Due to their design and usage characteristics, each
        protocol requires specific security measures to mitigate these issues.
        For example, HTTP vulnerabilities are often addressed with secure
        headers and proper input validation, whereas FTP security is improved by
        enforcing strong password policies and secure data transfer channels
        (e.g., FTPS).
      </div>
      <AffectedprotocolsTable />
      <div className="grid gap-4 grid-cols-1">
        <main className="col-span-1 h-full">
          <AffectedProtocolsBar />
        </main>
      </div>
    </main>
  );
};

export default AffectedProtocols;
