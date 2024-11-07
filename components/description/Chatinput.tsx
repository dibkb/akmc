"use client";
import { baseUrl } from "@/axios/baseurl";
import useAuthStore, { DescriptionResponse } from "@/src/store/authStore";
import React from "react";
import { Textarea } from "../ui/textarea";
interface CHatinputProps {
  onClick?: () => void;
}
const ChatinputDesc = ({ onClick }: CHatinputProps) => {
  const { input, setInput, setLoading, setDescription } = useAuthStore();
  async function sendQueryHandler() {
    if (onClick) onClick();
    setLoading(true);
    try {
      const res = await baseUrl.post("/description", {
        query: input,
      });
      const data = (await res.data) as DescriptionResponse;
      setDescription({
        role: "user",
        messageUser: input,
      });
      setDescription({
        role: "system",
        description: { ...data },
      });
    } catch (error) {
      console.error("Error sending query:", error);
    } finally {
      setLoading(false);
      setInput("");
    }
  }
  return (
    <div className="flex flex-col sm:flex-col gap-4 max-w-full sm:max-w-[600px] w-ful">
      <Textarea
        className="bg-transparent flex-grow outline-none min-w-full sm:min-w-[450px] mb-2 sm:mb-0"
        placeholder="Enter your description here...."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={sendQueryHandler}
        className="hover:bg-lime-300 cursor-pointer text-stone-800 text-xs font-semibold px-4 py-4 rounded-lg"
      >
        SEND
      </button>
    </div>
  );
};

export default ChatinputDesc;
