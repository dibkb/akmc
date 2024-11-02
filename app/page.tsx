"use client";

import useAuthStore from "@/src/store/authStore";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [isClient, setIsClient] = useState<boolean>(false);
  const { jwtAccessToken } = useAuthStore();

  useEffect(() => {
    setIsClient(true);
  }, []);
  useEffect(() => {
    if (isClient && !jwtAccessToken) {
      return redirect("/auth");
    }
  }, [jwtAccessToken, isClient]);
  return <div className=""></div>;
}
