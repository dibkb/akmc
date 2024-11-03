import React from "react";

const Chatinput = () => {
  return (
    <div className="flex border max-w-[600px] border-stone-200 rounded-lg px-4 py-2 shadow bg-white">
      <input
        className="bg-transparent flex-grow outline-none min-w-[450px]"
        placeholder="Enter your queries here...."
      />
      <button className="hover:bg-lime-300 text-stone-800 text-xs font-semibold px-4 py-2 rounded-lg">
        SEND
      </button>
    </div>
  );
};

export default Chatinput;
