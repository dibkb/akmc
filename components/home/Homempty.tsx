/* eslint-disable @next/next/no-img-element */
import React from "react";
import Chatinput from "./Chatinput";
import logo from "../../img/logo.png";
const Homempty = () => {
  return (
    <section className="w-full h-full flex items-center justify-center">
      <main className="flex flex-col gap-12 items-center justify-center">
        <img src={logo.src} alt="" className="size-16 rotate" />
        <div className="flex flex-col items-center justify-center gap-5">
          <h1 className="font-semibold text-stone-600 text-3xl text-center">
            Welcome to AKMC
          </h1>
          <p className="text-sm">Advanced Knowledge Management Cybershield</p>
        </div>
        <Chatinput />
      </main>
    </section>
  );
};

export default Homempty;
