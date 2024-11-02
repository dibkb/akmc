"use client";
import { baseUrl } from "@/axios/baseurl";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const Verfy = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const email = searchParams.get("email");
  useEffect(() => {
    baseUrl.get(`/auth/user/${email}`).then((res) => {
      const data = res.data;
      console.log(data);
    });
  }, [email]);
  return <div className="container mx-auto mt-4 text-lg">Verifying....</div>;
};

export default Verfy;
