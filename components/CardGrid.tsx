import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const cards = [
  { link: "/branch/first", image: "/first_year.png" },
  { link: "/branch/second", image: "/second_year.png" },
  { link: "/branch/third", image: "/third_year.png" },
  { link: "/branch/fourth", image: "/fourth_year.png" },
];

const CardGrid = () => {
  const router = useRouter();

  return (
    <div className="py-20 min-h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 max-w-6xl mx-auto"
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.15 }}
            whileHover={{
              scale: 1.07, // Faster scaling effect
              rotateX: 8, // More noticeable tilt
              rotateY: 8,
              boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.3)", // Stronger shadow
              transition: { duration: 0.2, type: "spring", stiffness: 200 }, // Faster response
            }}
            className="relative h-72 rounded-xl overflow-hidden bg-cover bg-center shadow-lg cursor-pointer transition-all"
            style={{ backgroundImage: `url(${card.image})` }}
            onClick={() => router.push(card.link)}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CardGrid;
