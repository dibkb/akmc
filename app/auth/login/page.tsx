/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import logo from "../../../img/logo.png";
import { Input } from "@/components/ui/input";
import Button from "@/components/button/Button";
import AuthSwitchpage from "@/components/AuthSwitchpage";
import GoogleButton from "@/components/button/GoogleButton";
import { Separator } from "@/components/ui/separator";
import { isValidEmail } from "@/utils/validate";
import { toast } from "@/hooks/use-toast";
import { baseUrl } from "@/axios/baseurl";
import useAuthStore from "@/src/store/authStore";
import { LoginResponse } from "@/types/response";
import { useRouter } from "next/navigation";

interface InputField {
  email: string;
  password: string;
}

const Login = () => {
  const { setJwtAccessToken, setUserInfo } = useAuthStore();
  const [input, setInput] = useState<InputField>({
    email: "",
    password: "",
  });
  const router = useRouter();
  const loginRegister = () => {
    if (isValidEmail(input.email)) {
      if (input.password.length) {
        // Proceed with registration
        baseUrl
          .post("/auth/login", input)
          .then((res) => {
            // Handle successful login
            if (res.status === 200) {
              const data = res.data as LoginResponse;
              setJwtAccessToken(data.access_token);

              setUserInfo({
                email: data.email,
              });

              return router.push("/");
            }
          })
          .catch((error) => {
            // Handle registration error
            console.log(error);
            toast({
              variant: "destructive",
              title: "Login Failed",
              description: "There was a problem with your registration.",
            });
          });
      }
    } else {
      // Invalid email
      toast({
        variant: "destructive",
        title: "Invalid Email",
        description: "Please enter a valid email address.",
      });
    }
  };
  return (
    <div className="h-[100vh] flex items-center justify-center">
      <main className="flex flex-col items-center gap-4">
        <img src={logo.src} alt="" className="size-12" />
        <h3 className="font-bold text-3xl text-stone-700">Welcome back</h3>
        <div className="flex flex-col gap-6">
          <Input
            placeholder="Email"
            className="w-80 h-12"
            type="email"
            value={input.email}
            onChange={(e) => {
              setInput((prev) => ({ ...prev, email: e.target.value }));
            }}
          />
          <Input
            placeholder="Password"
            className="w-80 h-12"
            type="password"
            value={input.password}
            onChange={(e) => {
              setInput((prev) => ({ ...prev, password: e.target.value }));
            }}
          />
          <Button onClick={loginRegister} className="w-full h-12">
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
