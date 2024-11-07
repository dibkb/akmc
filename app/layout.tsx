import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import { cn } from "@/lib/utils";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "AKMC",
  description: "Advanced Knowledge Management Cybershield",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  // Start of Selection
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://cdn.oaistatic.com/assets/favicon-32x32-p4ktpm1x.webp"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://cdn.oaistatic.com/assets/favicon-dark-32x32-gt5kfzyp.webp"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          type="image/svg+xml"
          sizes="32x32"
          href="https://cdn.oaistatic.com/assets/favicon-o20kmmos.svg"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="mx-auto flex justify-center space-x-4 p-4">
          <Link
            href="/"
            className={cn(
              "px-3 py-2 rounded-md text-sm font-semibold text-stone-700 hover:text-red-600 hover:bg-red-200 hover:bg-opacity-20 transition duration-300"
            )}
          >
            Query
          </Link>
          <Link
            href="/description"
            className="px-3 py-2 rounded-md text-sm font-semibold text-stone-700 hover:text-red-600 hover:bg-red-200 hover:bg-opacity-20 transition duration-300"
          >
            Description
          </Link>
          <Link
            href="/eda"
            className="px-3 py-2 rounded-md text-sm font-semibold text-stone-700 hover:text-red-600 hover:bg-red-200 hover:bg-opacity-20 transition duration-300"
          >
            Report
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
