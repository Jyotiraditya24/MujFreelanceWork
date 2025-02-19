"use client";
import Typewriter from "typewriter-effect";
import { ColourfulText } from "@/components/ui/colorful-text";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCardsDemo";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import CardGrid from "@/components/CardGrid";
import Footer from "@/components/Footer";

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
            <TextGenerateEffect
              words="MORE THAN NOTES, IT’S A LIFESTYLE"
              className="text-[60px] font-bold leading-[84px] tracking-tight text-black"
            />
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
        className="flex flex-col gap-y-10 items-center justify-center h-[400px] my-10"
      >
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[42px] font-bold tracking-tight text-black text-transparent bg-clip-text 
    bg-gradient-to-r from-[#ffbd59] via-[#ff914d] to-[#ff6a00] flex"
        >
          {Array.from("More Than Just Notes – MUJ Life, Sorted!").map(
            (letter, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 20,
                    rotate: -10,
                    filter: "blur(5px)",
                  },
                  visible: {
                    opacity: 1,
                    y: [20, -10, 0], // Bounce effect
                    rotate: [0, 5, -5, 0], // Slight rotation
                    filter: ["blur(5px)", "blur(0px)"], // Blur in effect
                    color: ["#ffbd59", "#ff914d", "#ff6a00"], // Color shift
                    textShadow: [
                      "0px 0px 10px rgba(255, 189, 89, 0.8)",
                      "0px 0px 5px rgba(255, 189, 89, 0.5)",
                      "none",
                    ], // Glow effect
                    transition: {
                      duration: 0.8,
                      ease: "easeOut",
                      delay: index * 0.05, // Stagger effect for each letter
                    },
                  },
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            )
          )}
        </motion.h1>
        <InfiniteMovingCardsDemo />
      </motion.div>

      <motion.div ref={ref} className="flex flex-col justify-center">
        <div className="max-w-6xl mx-auto flex flex-col gap-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl font-bold leading-[50px] tracking-tight text-transparent bg-clip-text 
  bg-gradient-to-r from-[#ffbd59] via-[#ff914d] to-[#ff6a00] text-center"
          >
            Your College Journey, Simplified: Study, Eat & Chill
            <div className="text-center">We’ve Got You Covered!</div>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
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
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ duration: 1, ease: "easeOut" }}
          className="py-10 mb-24"
        >
          <CardGrid /> {/* card grid used here */}
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  );
}
