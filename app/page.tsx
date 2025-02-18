"use client";
import Typewriter from "typewriter-effect";
import { CardHoverEffectDemo } from "@/components/CardHoverEffectDem";
import { ColourfulText } from "@/components/ui/colorful-text";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HeroParallaxDemo } from "@/components/HeroParallaxDemo";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCardsDemo";

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <div className="min-h-screen">
      {/* Main Container */}
      <div className="min-h-screen px-4 py-4 bg-[url('/heroImage.webp')] bg-cover bg-center flex flex-col justify-center items-center relative gap-y-14">
        {/* Heading & Content */}
        <div className="z-10 flex flex-col gap-y-2 text-center">
          {/* ✅ Normal Text (No Gradient) */}
          <h1 className="text-[70px] font-bold leading-[84px] font-sans tracking-tight text-black">
            <ColourfulText text="MUJ TOPPERS" /> MORE THAN
          </h1>

          <h1 className="text-[70px] font-light leading-[84px] font-serif tracking-tight text-black">
            NOTES, IT’S A LIFESTYLE
          </h1>

          {/* Typewriter Effect (No Gradient) */}
          <div className="text-[70px] font-light leading-[84px] font-serif tracking-tight text-black">
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
          <p className="font-medium text-2xl nunito-className">
            MUJ toppers is built to make your college life easier—Axis, PYQs,
            toppers’ notes, study tips, food delivery, and cab booking all in
            one place, powered by a passionate mix who have been through it. We
            ensure you have everything you need to excel—both inside and outside
            the classroom.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center py-10 h-[600px]">
        <h1 className="text-[32px] font-light font-serif tracking-tight text-black">
          More Than Just Notes – MUJ Life, Sorted!
        </h1>
        <InfiniteMovingCardsDemo />
      </div>

      {/* 2nd Main */}
      <div ref={ref} className="flex flex-col justify-center">
        <div className="max-w-4xl mx-auto flex flex-col gap-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl font-light leading-[50px] font-serif italic tracking-tight 
            text-transparent bg-clip-text text-center
            bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500"
          >
            Your College Journey, Simplified: Study, Eat & Chill
            <div className="text-center">We’ve Got You Covered!</div>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="font-medium text-2xl"
          >
            College life is hectic, but we make it effortless. Whether you need
            toppers’ notes, PYQs, food delivery, or cab booking, we ensure you
            focus on what matters while we handle the rest. Just study, relax,
            and enjoy your college life
          </motion.p>
        </div>
        <div className="w-full flex justify-center">
          <CardHoverEffectDemo />
        </div>
      </div>
    </div>
  );
}
