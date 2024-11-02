/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";
import google from "../../img/Google icon.png";
import React from "react";
import { BACKEND_URL } from "@/config";
interface GoogleButtonProps {
  className?: string;
}
const GoogleButton = ({ className }: GoogleButtonProps) => {
  const handleGoogleLogin = async () => {
    try {
      window.location.href = `${BACKEND_URL}/auth/google`;
    } catch (err) {
      console.error("Google login error:", err);
    }
  };
  return (
    <button
      onClick={handleGoogleLogin}
      className={cn(
        "flex items-center gap-3 border border-stone-300 px-4 py-3 rounded-lg whitespace-nowrap",
        className
      )}
    >
      <img src={google.src} alt="" className="size-6" />
      <p>Continue with Google</p>
    </button>
  );
};

export default GoogleButton;
