"use client";
import * as React from "react";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CardWithSelect({
  subjectName,
  subjectImage,
  pyqLink,
  notesLink,
  playlistLink,
}: {
  subjectName: string;
  subjectImage: string;
  pyqLink: string;
  notesLink: string;
  playlistLink: string;
}) {
  const handleSelection = (value: string) => {
    const links: Record<string, string> = {
      pyq: pyqLink,
      notes: notesLink,
      playlist: playlistLink,
    };
    if (links[value]) window.open(links[value], "_blank");
  };

  return (
    <div className="w-80 bg-white shadow-lg rounded-xl p-6 flex flex-col items-center border border-gray-300 transition-transform transform hover:scale-105 duration-200">
      {/* Image Section with Overlay */}
      <div className="w-full h-44 relative overflow-hidden rounded-xl shadow-md mb-4">
        <Image
          src={subjectImage}
          alt={subjectName}
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 rounded-xl">
          <h2 className="text-lg font-semibold text-white text-center">
            {subjectName}
          </h2>
        </div>
      </div>

      {/* Select Option */}
      <Select onValueChange={handleSelection}>
        <SelectTrigger className="w-full border-gray-300 rounded-lg bg-gray-50 shadow-sm hover:bg-gray-100 focus:ring-2 focus:ring-blue-500">
          <SelectValue placeholder="📚 Select a Resource" />
        </SelectTrigger>
        <SelectContent className="bg-white border border-gray-200 rounded-lg shadow-md">
          <SelectGroup>
            <SelectItem value="pyq">📜 PYQ (Past Year Papers)</SelectItem>
            <SelectItem value="notes">📖 Toppers Notes</SelectItem>
            <SelectItem value="playlist">🎥 Video Playlist</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
