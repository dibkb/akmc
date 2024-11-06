import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

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
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="mx-auto flex justify-center space-x-4 p-4">
          <Link
            href="/"
            className="px-3 py-2 rounded-md text-sm font-semibold text-stone-700 hover:text-red-600 hover:bg-red-200 hover:bg-opacity-20 transition duration-300"
          >
            Home
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
