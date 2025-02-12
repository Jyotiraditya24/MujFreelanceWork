"use client";
import Navbar from "@/components/Navbar";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { CardHoverEffectDemo } from "@/components/CardHoverEffectDem";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Container */}
      <div className="min-h-screen px-4 py-4 bg-[url('/heroImage.webp')] bg-cover bg-center flex flex-col justify-center items-center relative gap-y-14">
        {/* 🎨 Animated Gradient Background */}
        <div className="absolute inset-0 flex justify-center items-center">
          <motion.div
            className="relative left-[120px] w-[500px] h-[500px] rounded-full blur-3xl opacity-90 mix-blend-overlay"
            animate={{
              background: [
                "radial-gradient(circle, rgba(255,0,0,0.6), rgba(0,255,0,0.6), rgba(0,0,255,0.6))",
                "radial-gradient(circle, rgba(255,165,0,0.6), rgba(0,191,255,0.6), rgba(75,0,130,0.6))",
                "radial-gradient(circle, rgba(255,215,0,0.6), rgba(30,144,255,0.6), rgba(138,43,226,0.6))",
              ],
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          ></motion.div>
        </div>

        {/* Heading & Content */}
        <div className="z-10 flex flex-col gap-y-2 text-center">
          {/* ✅ Normal Text (No Gradient) */}
          <h1 className="text-[70px] font-bold leading-[84px] font-sans tracking-tight text-black">
            MUJTOPPERS - MORE THAN
          </h1>

          <h1 className="text-[70px] font-light leading-[84px] font-serif italic tracking-tight text-black">
            NOTES, IT’S A LIFESTYLE
          </h1>

          {/* Typewriter Effect (No Gradient) */}
          <div className="text-[70px] font-light leading-[84px] font-serif italic tracking-tight text-black">
            <Typewriter
              options={{
                strings: [
                  "Hello World!",
                  "Welcome to MUJTOPPERS!",
                  "Notes, It’s a Lifestyle!",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </div>
        </div>

        <div className="max-w-[800px] text-lg leading-relaxed font-medium text-gray-800 text-center">
          <p>
            MUJ toppers is built to make your college life easier—Axis, PYQs,
            toppers’ notes, study tips, food delivery, and cab booking all in
            one place, powered by a passionate mix who have been through it. We
            ensure you have everything you need to excel—both inside and outside
            the classroom.
          </p>
        </div>
      </div>

      {/* Extra space */}
      <div>
        <CardHoverEffectDemo />
      </div>
    </div>
  );
}
