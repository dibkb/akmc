"use client";
import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { cn } from "@/lib/utils";
import logo from "../../img/logo.png";
interface AvatarProps {
  className?: string;
}
const OwnAvatar = ({ className }: AvatarProps) => {
  return (
    <Avatar className={cn("size-9", className)}>
      <AvatarImage
        src={
          "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
        }
      />
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
