"use client";
import AffectedProtocols from "@/components/eda/AffectedProtocols";
import Ids from "@/components/eda/Ids";
import NetworkRequirements from "@/components/eda/NetworkRequirements";
import OperatingSystem from "@/components/eda/OperatingSystem";
import Severity from "@/components/eda/Severity";
import Software from "@/components/eda/Software";
import React from "react";

const EdaPage = () => {
  return (
    <div className="container mx-auto py-4 px-4">
      <Severity />
      <OperatingSystem />

      <Software />
      <Ids />
      <AffectedProtocols />
      <NetworkRequirements />
    </div>
  );
};

export default EdaPage;
