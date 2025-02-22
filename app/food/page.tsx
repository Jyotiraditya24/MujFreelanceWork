"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { WobbleCard } from "@/components/ui/wobble-card";

const sponsors = [
  {
    name: "Burger Blast",
    description: "The juiciest burgers in town with a modern twist.",
    image: "/sponsors/burger.jpg",
    link: "https://burgerblast.com",
  },
  {
    name: "Pasta Palace",
    description: "Authentic Italian pasta made fresh daily.",
    image: "/sponsors/pasta.jpg",
    link: "https://pastapalace.com",
  },
  {
    name: "Sushi Central",
    description: "Exquisite sushi experience for the true connoisseur.",
    image: "/sponsors/sushi.jpg",
    link: "https://sushicentral.com",
  },
  {
    name: "Vegan Vibes",
    description: "Healthy, sustainable, and delicious vegan meals.",
    image: "/sponsors/vegan.jpg",
    link: "https://veganvibes.com",
  },
  {
    name: "Pizza Planet",
    description: "Out-of-this-world pizzas with stellar flavors.",
    image: "/sponsors/pizza.jpg",
    link: "https://pizzaplanet.com",
  },
];

export default function FoodSponsorsPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 mt-24">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center mb-10 px-4"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900">
          Our Food Sponsors
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-700">
          Delicious food outlets fueling your journey.
        </p>
      </motion.div>

      {/* Sponsors Grid */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Wrap WobbleCard in a clickable container */}
              <div
                onClick={() => window.open(sponsor.link, "_blank")}
                className="cursor-pointer"
              >
                <WobbleCard containerClassName="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <div className="relative h-60">
                    <Image
                      src={sponsor.image}
                      alt={sponsor.name}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-2xl font-bold text-gray-900">
                      {sponsor.name}
                    </h2>
                    <p className="mt-2 text-gray-700">{sponsor.description}</p>
                  </div>
                </WobbleCard>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
