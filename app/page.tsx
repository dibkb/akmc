"use client";

import Homempty from "@/components/home/Homempty";
import { AppSidebar } from "@/components/sidebar/AppSidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
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
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="h-[90vh] w-full">
        <SidebarTrigger />
        <Homempty />
      </main>
    </SidebarProvider>
  );
}
