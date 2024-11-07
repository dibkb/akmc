"use client";
import React from "react";

import { HomemptyDesc } from "@/components/description/Homeempty";
import { HomeFullDesc } from "@/components/description/HomeFull";
import useAuthStore from "@/src/store/authStore";
const Description = () => {
  const { description } = useAuthStore();
  return (
    <main className="h-[85vh] w-full">
      {description?.length ? <HomeFullDesc /> : <HomemptyDesc />}
    </main>
  );
};

export default Description;
