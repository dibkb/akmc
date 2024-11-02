/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import logo from "../../../img/logo.png";
import { Input } from "@/components/ui/input";
import Button from "@/components/button/Button";
import AuthSwitchpage from "@/components/AuthSwitchpage";
import GoogleButton from "@/components/button/GoogleButton";
import { Separator } from "@/components/ui/separator";
const Login = () => {
  return (
    <div className="h-[100vh] flex items-center justify-center">
      <main className="flex flex-col items-center gap-4">
        <img src={logo.src} alt="" className="size-12" />
        <h3 className="font-bold text-3xl text-stone-700">Welcome back</h3>
        <div className="flex flex-col gap-6">
          <Input placeholder="Email" className="w-80 h-12" type="email" />
          <Input placeholder="Password" className="w-80 h-12" type="password" />
          <Button onClick={() => {}} className="w-full h-12">
            Continue
          </Button>
          <AuthSwitchpage type="login" className="" />
        </div>
        <div className="flex items-center gap-3 justify-center w-full my-8">
          <Separator className="flex-1" />
          <p className="text-xs text-stone-400">OR</p>
          <Separator className="flex-1" />
        </div>
        <section className="w-full">
          <GoogleButton className="w-full text-sm font-medium hover:border-stone-900" />
        </section>
      </main>
    </div>
  );
};

export default Login;
