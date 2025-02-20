"use client";
import * as React from "react";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CardWithSelect() {
  const handleSelection = (value: string) => {
    if (value === "apple") {
      window.open(
        "https://drive.google.com/file/d/1kGeEDFDuECsxvdYFg221sVJfbDcg9psb/view?usp=sharing"
      );
    }
  };

  return (
    <div className="w-72 bg-white shadow-xl rounded-2xl p-5 flex flex-col items-center border border-gray-200">
      {/* Title Section */}
      <h2 className="text-xl font-bold text-gray-800 text-center">
        Physics Cycle
      </h2>
      <div className="w-16 border-b-2 border-gray-300 mt-1 mb-3"></div>

      {/* Image Section */}
      <div className="w-full h-40 relative overflow-hidden rounded-lg shadow-sm">
        <Image
          src="/Physics_Cycle.png"
          alt="Card Image"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      {/* Select Option */}
      <div className="mt-4 w-full">
        <Select onValueChange={handleSelection}>
          <SelectTrigger className="w-full border-gray-300 rounded-lg shadow-sm">
            <SelectValue placeholder="Select an Option" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Resources</SelectLabel>
              <SelectItem value="apple">PYQ</SelectItem>
              <SelectItem value="banana">Toppers Note</SelectItem>
              <SelectItem value="blueberry">PlayList</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
