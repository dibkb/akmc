import React from "react";
import Chatinput from "./Chatinput";
import { AkmcAvatar, OwnAvatar } from "./OwnAvatar";
import { Separator } from "../ui/separator";
const messages = [
  {
    role: "user",
    body: "full stak ai project ideas using movies data set /knowledge graph/ message  brokers etc",
  },
  {
    role: "system",
    body: "Here are some AI-focused full stack project ideas using movie datasets, knowledge graphs, and message brokers that align with cutting-edge technologies:",
  },
];
const HomeFull = () => {
  return (
    <>
      <div className="h-full flex justify-center">
        <section className="max-w-[800px] py-4">
          <h3 className="font-serif text-center text-xl">
            Teaching Strategies for Multiplication
          </h3>

          <main className="mt-4">
            {messages.map((ele, id) => {
              if (ele.role === "user") {
                return (
                  <main key={id + ele.body}>
                    <div className="flex items-center justify-start gap-3 py-4">
                      <OwnAvatar />
                      <p>{ele.body}</p>
                    </div>
                    <Separator />
                  </main>
                );
              } else {
                return (
                  <main key={id + ele.body}>
                    <div
                      key={id + ele.body}
                      className="flex items-center justify-start gap-3 py-4"
                    >
                      <AkmcAvatar />
                      <p>{ele.body}</p>
                    </div>
                    <Separator />
                  </main>
                );
              }
            })}
          </main>
        </section>
      </div>
      <div className="flex items-center justify-center">
        <Chatinput />
      </div>
    </>
  );
};

export default HomeFull;
