"use client";
import { baseUrl } from "@/axios/baseurl";
import useAuthStore from "@/src/store/authStore";
import React from "react";
interface CHatinputProps {
  onClick?: () => void;
}
const Chatinput = ({ onClick }: CHatinputProps) => {
  const { input, setInput, setLoading, setChats } = useAuthStore();
  async function sendQueryHandler() {
    if (onClick) onClick();
    setLoading(true);
    try {
      const res = await baseUrl.post("/query", {
        query: input,
      });
      const data = res.data;
      setChats({
        role: "user",
        message: input,
        rephrased: data.query,
      });
      setChats({
        role: "system",
        message: data.result,
      });
    } catch (error) {
      console.error("Error sending query:", error);
    } finally {
      setLoading(false);
      setInput("");
    }
  }
  return (
    <div className="flex flex-col sm:flex-row border max-w-full sm:max-w-[600px] w-full border-stone-200 rounded-lg px-4 py-2 shadow bg-white">
      <input
        className="bg-transparent flex-grow outline-none min-w-full sm:min-w-[450px] mb-2 sm:mb-0"
        placeholder="Enter your queries here...."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={sendQueryHandler}
        className="hover:bg-lime-300 cursor-pointer text-stone-800 text-xs font-semibold px-4 py-2 rounded-lg"
      >
        SEND
      </button>
    </div>
  );
};

export default Chatinput;
