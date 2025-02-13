"use client";

import { motion } from "framer-motion";

export default function AnimatedHeader({ title }: { title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="font-extrabold text-4xl text-center text-blue-600">
        Select one of the branches: {title}
      </h1>
    </motion.div>
  );
}
