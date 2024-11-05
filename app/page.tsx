"use client";
import HomeFull from "@/components/home/HomeFull";
import Homempty from "@/components/home/Homempty";
import useAuthStore from "@/src/store/authStore";
export default function Home() {
  const { chats } = useAuthStore();
  return (
    <main className="h-[85vh] w-full">
      {chats ? <HomeFull /> : <Homempty />}
    </main>
  );
}
