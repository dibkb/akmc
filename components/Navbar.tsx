"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useEffect, useState } from "react";
const Navbar = () => {
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);
  return (
    <nav className="mx-auto flex justify-center space-x-4 p-4">
      <Link
        href="/"
        className={cn(
          "px-3 py-2 rounded-md text-sm font-semibold text-stone-700 hover:text-red-600 hover:bg-red-200 hover:bg-opacity-20 transition duration-300",
          currentPath === "/"
            ? "text-red-600 bg-red-200 bg-opacity-20"
            : "text-stone-700 hover:text-red-600 hover:bg-red-200 hover:bg-opacity-20 transition duration-300"
        )}
      >
        Query
      </Link>
      <Link
        href="/description"
        className={cn(
          "px-3 py-2 rounded-md text-sm font-semibold text-stone-700 hover:text-red-600 hover:bg-red-200 hover:bg-opacity-20 transition duration-300",
          currentPath === "/description"
            ? "text-red-600 bg-red-200 bg-opacity-20"
            : "text-stone-700 hover:text-red-600 hover:bg-red-200 hover:bg-opacity-20 transition duration-300"
        )}
      >
        Description
      </Link>
      <Link
        href="/eda"
        className={cn(
          "px-3 py-2 rounded-md text-sm font-semibold text-stone-700 hover:text-red-600 hover:bg-red-200 hover:bg-opacity-20 transition duration-300",
          currentPath === "/eda"
            ? "text-red-600 bg-red-200 bg-opacity-20"
            : "text-stone-700 hover:text-red-600 hover:bg-red-200 hover:bg-opacity-20 transition duration-300"
        )}
      >
        Report
      </Link>
    </nav>
  );
};

export default Navbar;
