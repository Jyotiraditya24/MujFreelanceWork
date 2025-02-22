"use client";
import { motion } from "framer-motion";

export default function AnimatedHeader({ title }: { title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="my-2"
    >
      <h1 className="text-center text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-[#ffbd59] via-[#ff914d] to-[#ff6a00] text-transparent bg-clip-text tracking-tight">
        Explore {title} Year Branches
      </h1>
      <p className="mt-2 text-center text-gray-700 max-w-2xl mx-auto">
        Pick your specialization and dive into curated study resources, notes,
        and more.
      </p>
    </motion.div>
  );
}
