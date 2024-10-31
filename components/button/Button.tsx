import { cn } from "@/lib/utils";
import React from "react";
interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}
const Button = ({ onClick, children, className }: ButtonProps) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "cursor-pointer bg-lime-300 hover:bg-lime-400 rounded-lg px-4 py-2 flex items-center justify-center text-center w-min whitespace-nowrap font-medium",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Button;
