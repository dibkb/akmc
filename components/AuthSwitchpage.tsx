import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
interface AuthSwitchpageProps {
  type: "login" | "signup";
  className?: string;
}
const AuthSwitchpage = ({ type, className }: AuthSwitchpageProps) => {
  let text;
  if (type === "login") {
    text = `Don't have an account ?`;
  } else {
    text = `Already have an account ?`;
  }
  const content = (
    <div
      className={cn(
        "text-sm text-stone-600 font-medium flex items-center justify-center gap-2",
        className
      )}
    >
      <p>{text}</p>
      <Link
        href={`/auth/${type === "login" ? "signup" : "login"}`}
        className="underline font-semibold underline-offset-3 text-stone-700"
      >
        {type === "login" ? "Signup" : "Login"}
      </Link>
    </div>
  );

  return content;
};

export default AuthSwitchpage;
