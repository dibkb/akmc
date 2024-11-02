"use client";
import { baseUrl } from "@/axios/baseurl";
import useAuthStore, { UserInfo } from "@/src/store/authStore";
import { redirect, useSearchParams } from "next/navigation";

import React, { Suspense, useEffect } from "react";

const Verfy = () => {
  const { setJwtAccessToken, setUserInfo } = useAuthStore();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const email = searchParams.get("email");
  useEffect(() => {
    baseUrl.get(`/auth/user/${email}`).then((res) => {
      if (res.status === 200) {
        const data = res.data as UserInfo;
        setUserInfo(data);
        setJwtAccessToken(token);
        return redirect("/");
      }
    });
  }, [email, setUserInfo, setJwtAccessToken, token]);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="container mx-auto mt-4 text-lg">Verifying....</div>
    </Suspense>
  );
};

export default Verfy;
