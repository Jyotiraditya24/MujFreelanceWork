"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export default function Experiment() {
  const [phoneNumber] = useState("9905604251");

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        {/* Overlay for better text visibility */}
        <video
          src="/video.mp4"
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 max-w-4xl">
          Divine Experience
          <span className="block mt-2 text-blue-400">For Everyone</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl">
          Eat at Divine - it's awesome and it's our sponsor
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
            View Menu <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            className="text-black border-white hover:bg-white hover:text-black px-8 py-6 text-lg"
            onClick={handleCallClick}
          >
            Call Divine <Phone className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative z-10 bg-blue-950 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Ready to elevate your dining experience?
        </h2>
        <Button className="bg-white text-blue-900 hover:bg-gray-200 px-8 py-6 text-lg">
          Explore Menu
        </Button>
      </div>
    </div>
  );
}
