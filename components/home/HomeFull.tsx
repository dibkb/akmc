"use client";
import React, { useEffect, useRef } from "react";
import Chatinput from "./Chatinput";
import { AkmcAvatar, OwnAvatar } from "./OwnAvatar";
import { Separator } from "../ui/separator";
import useAuthStore from "@/src/store/authStore";

const HomeFull = () => {
  const { chats, clearAll } = useAuthStore();
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chats]);
  return (
    <>
      <div className="h-full flex justify-center overflow-auto mb-4">
        <section className="max-w-[800px] md:w-[600px] py-4 px-4">
          <h3 className="font-serif text-center text-xl">
            Teaching Strategies for Multiplication
          </h3>

          <main className="mt-4">
            {chats &&
              chats.map((ele, id) => {
                if (ele.role === "user") {
                  return (
                    <main key={id + ele.message}>
                      <div className="flex items-center justify-start gap-3 py-4">
                        <OwnAvatar />
                        <p>{ele.message}</p>
                      </div>
                      <p className="mb-2 font-serif text-stone-500 italic">
                        Rephrased Query:{" "}
                        {ele?.rephrased?.split("Rephrased Query:")[1]}
                      </p>
                    </main>
                  );
                } else {
                  return (
                    <main key={id + ele.message}>
                      <div className="flex items-center justify-start gap-3 py-4">
                        <AkmcAvatar />
                        <p>{ele.message}</p>
                      </div>
                      <Separator />
                    </main>
                  );
                }
              })}
            <div ref={chatEndRef} />
          </main>
        </section>
      </div>
      <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
        <Chatinput />
        <button
          onClick={clearAll}
          className="px-4 py-2 rounded-md text-sm bg-stone-100 hover:bg-red-500 hover:text-white"
        >
          Clear Chat
        </button>
      </div>
    </>
  );
};

export default HomeFull;
