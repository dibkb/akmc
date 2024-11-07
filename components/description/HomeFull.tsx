"use client";
import React, { useEffect, useRef } from "react";
import { AkmcAvatar, OwnAvatar } from "../home/OwnAvatar";
import { Separator } from "../ui/separator";
import useAuthStore from "@/src/store/authStore";
import ChatinputDesc from "./Chatinput";
import Descriptiontable from "./Descriptiontable";

export const HomeFullDesc = () => {
  const { description, clearAll } = useAuthStore();
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [description]);
  return (
    <>
      <div className="h-full flex justify-center overflow-auto mb-4">
        <section className="max-w-[800px] md:w-[600px] py-4 px-4">
          <h3 className="font-serif text-center text-xl line-clamp-1">
            {description?.length && description[0]?.messageUser}
          </h3>

          <main className="mt-4">
            {description &&
              description.map((ele, id) => {
                if (ele.role === "user") {
                  return (
                    <main key={id + ele.role}>
                      <div className="flex items-start justify-start gap-3 py-4">
                        <OwnAvatar />
                        <p>{ele.messageUser}</p>
                      </div>
                    </main>
                  );
                } else {
                  return (
                    <main key={id + ele.role}>
                      <div className="flex items-start justify-start gap-3 py-4">
                        <AkmcAvatar />
                        {ele?.description && (
                          <Descriptiontable chartData={ele.description} />
                        )}
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
      <div className="flex flex-col md:flex-row gap-4 items-start justify-center">
        <ChatinputDesc />
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
