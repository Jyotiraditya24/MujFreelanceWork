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
    <div className="w-72 bg-white shadow-lg rounded-xl p-4 flex flex-col items-center border">
      {/* Image Section */}
      <div className="w-full h-40 relative">
        <Image
          src="/Physics_Cycle.png" // Replace with your actual image path
          alt="Card Image"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      {/* Select Option */}
      <div className="mt-4 w-full">
        <Select onValueChange={handleSelection}>
          <SelectTrigger className="w-full border-gray-300">
            <SelectValue placeholder="Select an Option" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
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
