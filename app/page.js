"use client";

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Treatments from "./components/Treatments";
import About from "./components/About";
import Choose from "./components/Choose";
import Form from "./components/Form";
import { useState } from "react";

export default function Home() {
  const [response, setResponse] = useState("");
  const [close, setClose] = useState(true);

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-betwee w-full bg-white text-[#1E1E1E] px-10">
      <div className="flex flex-col max-w-[1140px] gap-10">
        <NavBar />
        <div className="flex flex-col gap-20">
          <Hero />
          <Treatments />
          <About />
          <Choose />
          <Form setResponse={setResponse} setClose={setClose}/>
        </div>
      </div>

      {(response && close) ? (
        <div className="fixed right-2 bottom-2">
          <div
            class={`relative text-xl p-6 mb-4 ${
              response === "Error submitting form data"
                ? "text-red-800 dark:text-red-400 bg-red-50 rounded-lg "
                : "text-green-400 dark:text-green-700 bg-green-50 rounded-lg"
            } `}
            role="alert"
          >
            <span class="font-medium">
              {response === "Error submitting form data" ? "Error!" : "Done!"}
            </span>{" "}
            {response}
          </div>

          <span className="absolute top-2 right-2 font-bold text-red-800 text-lg" onClick={() => setClose(false)}>X</span>
        </div>
      ) : (
        <></>
      )}
    </main>
  );
}
