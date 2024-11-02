/* eslint-disable @next/next/no-img-element */
"use client";
import { baseUrl } from "@/axios/baseurl";
import logo from "../../../img/logo.png";
import AuthSwitchpage from "@/components/AuthSwitchpage";
import Button from "@/components/button/Button";
import GoogleButton from "@/components/button/GoogleButton";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import React, { useState } from "react";
import { isValidEmail } from "@/utils/validate";
import { toast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useRouter } from "next/navigation";

interface InputField {
  email: string;
  password: string;
  confirmPassword: string;
}
const Signup = () => {
  const [input, setInput] = useState<InputField>({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const router = useRouter();
  const registerHandler = () => {
    if (isValidEmail(input.email)) {
      if (input.password === input.confirmPassword && input.password.length) {
        // Proceed with registration
        baseUrl
          .post("/auth/register", input)
          .then(() => {
            // Handle successful registration
            toast({
              variant: "default",
              title: "Registration Successful",
              description: "You have been registered successfully.",
              action: (
                <ToastAction
                  altText="Try again"
                  onClick={() => {
                    router.push("/auth/login");
                  }}
                >
                  Login
                </ToastAction>
              ),
            });
          })
          .catch(() => {
            // Handle registration error
            toast({
              variant: "destructive",
              title: "Registration Failed",
              description: "There was a problem with your registration.",
            });
          });
      } else {
        // Passwords do not match
        toast({
          variant: "destructive",
          title: "Password Mismatch",
          description: "Passwords do not match.",
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
        <h3 className="font-bold text-3xl text-stone-700">Welcome to AKMC</h3>
        <h6 className="text-sm text-stone-500">
          Advanced Knowledge Management Cybershield
        </h6>
        <div className="flex flex-col gap-6">
          <Input
            placeholder="Email"
            className="w-80 h-12"
            value={input.email}
            onChange={(e) => {
              setInput((prev) => ({
                ...prev,
                email: e.target.value,
              }));
            }}
          />
          <Input
            placeholder="Password"
            className="w-80 h-12"
            type="password"
            value={input.password}
            onChange={(e) => {
              setInput((prev) => ({
                ...prev,
                password: e.target.value,
              }));
            }}
          />
          <Input
            placeholder="Confirm Password"
            className="w-80 h-12"
            type="password"
            value={input.confirmPassword}
            onChange={(e) => {
              setInput((prev) => ({
                ...prev,
                confirmPassword: e.target.value,
              }));
            }}
          />
          <Button onClick={registerHandler} className="w-full h-12">
            Continue
          </Button>
          <AuthSwitchpage type="signup" className="" />
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

export default Signup;
