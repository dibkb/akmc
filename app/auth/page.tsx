/* eslint-disable @next/next/no-img-element */
"use client";
import logo from "../../img/logo.png";
import Button from "@/components/button/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Auth = () => {
  const router = useRouter();
  function onClick() {
    return router.push("/auth/login");
  }
  return (
    <div className="h-[100vh] flex items-center justify-center relative">
      <main className="flex flex-col gap-12 items-center justify-center">
        <img src={logo.src} alt="" className="size-16" />
        <div className="flex flex-col items-center justify-center gap-5">
          <h1 className="font-semibold text-stone-600 text-3xl text-center">
            Welcome to AKMC
          </h1>
          <p className="text-sm text-stone-700 font-medium text-center">
            Login with your account to continue
          </p>
          <Button onClick={onClick} className="w-28">
            Login
          </Button>
        </div>
      </main>
      <div className="absolute bottom-4 text-sm text-stone-600 font-medium flex items-center gap-2">
        <p>Don&apos;t have an account?</p>
        <Link
          href={"/auth/signup"}
          className="underline font-semibold underline-offset-3 text-stone-700"
        >
          Signup
        </Link>
      </div>
    </div>
  );
};
export default Auth;
