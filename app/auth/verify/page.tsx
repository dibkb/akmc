"use client";
import { baseUrl } from "@/axios/baseurl";
import useAuthStore, { UserInfo } from "@/src/store/authStore";
import { useSearchParams } from "next/navigation";

import React, { useEffect } from "react";

const Verfy = () => {
  const { setJwtAccessToken, setUserInfo } = useAuthStore();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const email = searchParams.get("email");
  useEffect(() => {
    baseUrl.get(`/auth/user/${email}`).then((res) => {
      const data = res.data as UserInfo;
      setUserInfo(data);
      setJwtAccessToken(token);
    });
  }, [email, setUserInfo, setJwtAccessToken, token]);
  return <div className="container mx-auto mt-4 text-lg">Verifying....</div>;
};

export default Verfy;
