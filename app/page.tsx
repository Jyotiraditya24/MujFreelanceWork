"use client";

// import Typewriter from "typewriter-effect";
// import { ColourfulText } from "@/components/ui/colorful-text";
import { motion } from "framer-motion";
import { useRef } from "react";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCardsDemo";
// import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import CardGrid from "@/components/CardGrid";
import { HeroParallaxDemo } from "@/components/HeroParallaxDemo";

export default function Home() {
  const ref = useRef(null);

  return (
    // 1. Add `overflow-x-hidden` to clip any content that extends horizontally
    <div className="min-h-screen overflow-x-hidden">
      {/* 🚀 Hero Section */}
      <HeroParallaxDemo />

      {/* 🚀 Infinite Moving Cards Section */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col gap-y-8 items-center justify-center my-10 px-4"
      >
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="font-bold tracking-tight text-transparent bg-clip-text 
                     bg-gradient-to-r from-[#ffbd59] via-[#ff914d] to-[#ff6a00]
                     text-2xl sm:text-4xl md:text-5xl flex flex-wrap justify-center"
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
                    y: [20, -10, 0],
                    rotate: [0, 5, -5, 0],
                    filter: ["blur(5px)", "blur(0px)"],
                    color: ["#ffbd59", "#ff914d", "#ff6a00"],
                    textShadow: [
                      "0px 0px 10px rgba(255, 189, 89, 0.8)",
                      "0px 0px 5px rgba(255, 189, 89, 0.5)",
                      "none",
                    ],
                    transition: {
                      duration: 0.8,
                      ease: "easeOut",
                      delay: index * 0.05,
                    },
                  },
                }}
                className="whitespace-pre"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            )
          )}
        </motion.h1>
      </motion.div>

      <div className="px-4">
        <InfiniteMovingCardsDemo />
      </div>

      {/* Additional sections below */}
      <motion.div ref={ref} className="flex flex-col justify-center px-4">
        <div className="max-w-6xl mx-auto flex flex-col gap-y-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center font-bold leading-tight tracking-tight 
                       text-transparent bg-clip-text bg-gradient-to-r
                       from-[#ffbd59] via-[#ff914d] to-[#ff6a00]
                       text-2xl sm:text-4xl md:text-5xl"
          >
            Your College Journey, Simplified: Study, Eat & Chill
            <div className="text-center text-sm sm:text-base md:text-lg">
              We’ve Got You Covered!
            </div>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="font-medium text-base sm:text-xl md:text-2xl text-gray-900 text-center leading-loose max-w-5xl mx-auto"
          >
            <motion.span
              initial={{ filter: "blur(8px)", opacity: 0 }}
              whileInView={{ filter: "blur(0px)", opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="bg-gradient-to-r from-[#ffbd59] via-[#ff914d] to-[#ff6a00] bg-clip-text text-transparent font-extrabold"
            >
              College life is hectic,
            </motion.span>{" "}
            but we make it effortless.
            <motion.span
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
              className="text-[#ff6a00] font-semibold"
            >
              {" "}
              Whether you need toppers’ notes, PYQs, food delivery, or cab
              booking,
            </motion.span>{" "}
            we ensure you focus on what matters while we handle the rest.
            <motion.span
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.6 }}
              className="text-[#ff914d] font-bold italic"
            >
              {" "}
              Just study, relax, and enjoy your college life.
            </motion.span>
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="py-10 mb-24"
          id="material"
        >
          <CardGrid />
        </motion.div>
      </motion.div>

      {/* ADDITIONAL SECTION 1 - Get In Touch */}
      <motion.div
        className="py-16 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Get In Touch
          </motion.h2>
          <p className="text-base md:text-xl text-gray-700 mb-8">
            Have questions or need assistance? Reach out to us and we’ll be
            happy to help!
          </p>
          <motion.a
            href="mailto:contact@mujtoppers.com"
            className="inline-block px-6 py-3 bg-[#ff6a00] text-white font-bold rounded-lg shadow-lg hover:bg-[#ff914d] transition-all"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            Contact Us
          </motion.a>
        </div>
      </motion.div>

      {/* ADDITIONAL SECTION 2 - About Us */}
      <motion.div
        className="py-16 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto flex flex-col gap-8 md:flex-row items-center">
          <div className="md:w-1/2">
            <motion.img
              src="/AboutUsCards/5.png"
              alt="About Us"
              className="rounded-lg shadow-lg w-full"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              About Us
            </motion.h2>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
              We are a dedicated team on a mission to simplify college life by
              offering comprehensive resources, curated study materials, and a
              range of services designed to help students excel.
            </p>
          </div>
        </div>
      </motion.div>

      {/* ADDITIONAL SECTION 3 - Testimonials */}
      <motion.div
        className="py-16 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Testimonials
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <p className="text-gray-700 italic mb-4">
                This platform revolutionized my study routine and made exam prep
                so much easier!
              </p>
              <h4 className="text-xl font-bold text-gray-900">- Ananya</h4>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <p className="text-gray-700 italic mb-4">
                I found everything I needed in one place. Highly recommended for
                every student!
              </p>
              <h4 className="text-xl font-bold text-gray-900">- Rohit</h4>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ADDITIONAL SECTION 4 - Our Services */}
      <motion.div
        className="py-16 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">PYQs</h3>
              <p className="text-gray-600">
                Access previous years’ question papers quickly and easily.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">Toppers’ Notes</h3>
              <p className="text-gray-600">
                Quality notes curated by toppers to help you excel.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">Study Tips</h3>
              <p className="text-gray-600">
                Effective strategies and tips for successful studying.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
