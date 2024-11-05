"use client";
import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { cn } from "@/lib/utils";
import useAuthStore from "@/src/store/authStore";
import logo from "../../img/logo.png";
interface AvatarProps {
  className?: string;
}
const OwnAvatar = ({ className }: AvatarProps) => {
  const { userInfo } = useAuthStore();
  return (
    <Avatar className={cn("size-9", className)}>
      <AvatarImage src={userInfo?.profilePic} />
      <AvatarFallback>AK</AvatarFallback>
    </Avatar>
  );
};

export { OwnAvatar };

const AkmcAvatar = ({ className }: AvatarProps) => {
  return (
    <Avatar className={cn("size-9 border-red-600", className)}>
      <AvatarImage src={logo.src} />
      <AvatarFallback>AK</AvatarFallback>
    </Avatar>
  );
};

export { AkmcAvatar };
