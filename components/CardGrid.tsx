import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const cards = [
  { title: "1st Year", link: "/branch/first", image: "/first_year.png" },
  { title: "2nd Year", link: "/branch/fourth", image: "/fourth_year.png" },
  { title: "3rd Year", link: "/branch/third", image: "/third_year.png" },
  { title: "4th Year", link: "/branch/second", image: "/second_year.png" },
];

const CardGrid = () => {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 2 }}
      className="py-20 min-h-screen"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 max-w-6xl mx-auto">
        {cards.map((card, index) => {
          // Define animation direction based on position
          let initialX = 0,
            initialY = 0;
          if (index === 0) initialX = -100; // Left entrance for top-left card
          if (index === 1) initialX = 100; // Right entrance for top-right card
          if (index > 1) initialY = 100; // Bottom entrance for bottom two cards

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: initialX, y: initialY, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, ease: "easeOut", delay: index * 0.3 }}
              className="relative h-72 rounded-xl overflow-hidden bg-cover bg-center shadow-lg cursor-pointer hover:shadow-xl transition-all"
              style={{ backgroundImage: `url(${card.image})` }}
              onClick={() => router.push(card.link)}
            >
              {/* Subtle dark gradient overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>

              {/* Card Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.4, duration: 0.6 }}
                  className="text-3xl font-medium tracking-wide"
                >
                  {card.title}
                </motion.h2>

                <motion.button
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.5, duration: 0.5 }}
                  className="mt-4 px-6 py-3 text-gray-900 font-bold rounded-lg bg-white hover:bg-gray-100 transition-all shadow-md"
                >
                  Enter
                </motion.button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default CardGrid;
