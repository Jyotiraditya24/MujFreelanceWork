"use client";
import Typewriter from "typewriter-effect";
import { CardHoverEffectDemo } from "@/components/CardHoverEffectDem";
import { ColourfulText } from "@/components/ui/colorful-text";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCardsDemo";

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen">
      {/* 🚀 Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="min-h-screen px-4 py-4 bg-[url('/heroImage.webp')] bg-cover bg-center flex flex-col justify-center items-center relative gap-y-14"
      >
        {/* Animated Heading */}
        <div className="z-10 flex flex-col gap-y-2 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[74px] font-bold leading-[84px] tracking-tight text-black"
          >
            <ColourfulText text="MUJ TOPPERS" />
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="text-[60px] font-bold leading-[84px] tracking-tight text-black"
          >
            MORE THAN NOTES, IT’S A LIFESTYLE
          </motion.h1>

          {/* Typewriter Effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="text-[70px] font-light leading-[84px] tracking-tight text-black"
          >
            <Typewriter
              options={{
                strings: [
                  "Welcome to MUJTOPPERS!",
                  "Notes, It’s a Lifestyle!",
                  "Updated PYQs",
                  "Exams",
                  "Lab Tips",
                  "Muj Topper has it all",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </motion.div>
        </div>

        {/* Animated Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
          className="max-w-[900px] text-lg leading-relaxed font-medium text-gray-800 text-center"
        >
          <p className="font-medium text-2xl text-center">
            MUJ toppers is built to make your college life easier—Access, PYQs,
            toppers’ notes, study tips, food delivery, and cab booking all in
            one place, powered by a passionate mix who have been through it. We
            ensure you have everything you need to excel—both inside and outside
            the classroom.
          </p>
        </motion.div>
      </motion.div>

      {/* 🚀 Infinite Moving Cards Section */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col items-center justify-center py-10 h-[700px]"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[42px] font-bold tracking-tight text-black text-transparent bg-clip-text text-center
          bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500"
        >
          More Than Just Notes – MUJ Life, Sorted!
        </motion.h1>
        <InfiniteMovingCardsDemo />
      </motion.div>

      {/* 🚀 3rd Section - "Your College Journey" */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col justify-center"
      >
        <div className="max-w-4xl mx-auto flex flex-col gap-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
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
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="font-medium text-2xl"
          >
            College life is hectic, but we make it effortless. Whether you need
            toppers’ notes, PYQs, food delivery, or cab booking, we ensure you
            focus on what matters while we handle the rest. Just study, relax,
            and enjoy your college life.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full flex justify-center"
        >
          <CardHoverEffectDemo />
        </motion.div>
      </motion.div>
    </div>
  );
}
