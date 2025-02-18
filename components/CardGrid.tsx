import React from "react";
import { useRouter } from "next/navigation";

const cards = [
  { title: "1st Year", link: "/branch/first", image: "/CCE_Branch.png" },
  { title: "2nd Year", link: "/branch/second", image: "/CCE_Branch.png" },
  { title: "3rd Year", link: "/branch/third", image: "/CCE_Branch.png" },
  { title: "4th Year", link: "/branch/fourth", image: "/CCE_Branch.png" },
];

const CardGrid = () => {
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-8 max-w-6xl mx-auto">
      {cards.map((card, index) => (
        <div
          key={index}
          className="relative h-48 rounded-lg overflow-hidden bg-cover bg-center shadow-md cursor-pointer"
          style={{ backgroundImage: `url(${card.image})` }}
          onClick={() => router.push(card.link)}
        >
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white">
            <h2 className="text-lg font-semibold">{card.title}</h2>
            <button className="mt-3 px-4 py-2 bg-white text-black font-medium rounded-md hover:bg-gray-200 transition">
              Explore
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
