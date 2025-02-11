"use client";
import Navbar from "@/components/Navbar";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <Navbar />
      {/* Main Container */}
      <div className="min-h-screen px-4 py-4 bg-[url('/heroImage.webp')] bg-cover bg-center  flex justify-center items-center">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-[70px] font-bold leading-[84px] font-sans tracking-tight">
            MUJTOPPERS-MORE THAN
          </h1>
          <h1 className="text-[70px] font-light leading-[84px] font-serif italic tracking-tighPt">
            NOTES, IT’S A LIFESTYLE
          </h1>
          <div className="text-[70px] font-light leading-[84px] font-serif italic tracking-tighPt">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Hello World!")
                  .pauseFor(1000)
                  .deleteAll()
                  .start();

                typewriter
                  .typeString("Hello World 2!")
                  .pauseFor(1000)
                  .deleteAll()
                  .start();
              }}
              options={{
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          ;
        </div>
      </div>
      <div className="h-[2000px]"></div>
    </div>
  );
}
