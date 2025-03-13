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

/**
 * Props:
 * - subjectName: string (name of the subject to display)
 * - subjectImage: string (URL to the subject image)
 * - pyqLink: string
 * - notesLink: string
 * - playlistLink: string
 */
export default function CardWithSelect({
  subjectName,
  subjectImage,
  pyqLink,
  notesLink,
  playlistLink,
  roadmap
}: {
  subjectName: string;
  subjectImage: string;
  pyqLink: string;
  notesLink: string;
  playlistLink: string;
  roadmap: string;
}) {
  const [selectedValue, setSelectedValue] = React.useState<string | null>(null);

  const handleSelection = (value: string) => {
    const links: Record<string, string> = {
      pyq: pyqLink,
      notes: notesLink,
      playlist: playlistLink,
      roadmap: roadmap
    };
    if (links[value]) {
      window.open(links[value], "_blank");
      setSelectedValue(null); // Reset selection so user can select the same option again
    }
  };

  return (
    <div className="group relative w-72 cursor-pointer border border-gray-300 rounded-xl bg-white p-4 shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-[1.02]">
      {/* Subject Name Header with Animated Underline triggered on card hover */}
      <h2
        className="
          text-center text-xl font-semibold mb-3 text-gray-800 
          relative inline-block
          after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-black after:w-full 
          after:scale-x-0 after:origin-right after:transition-transform after:duration-300
          group-hover:after:scale-x-100 group-hover:after:origin-left
        "
      >
        {subjectName}
      </h2>

      {/* Image Section (Rounded + Border) */}
      <div className="relative w-full h-40 mb-4 rounded-xl border border-gray-300 shadow-sm overflow-hidden">
        <Image
          src={subjectImage}
          alt={subjectName}
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>

      {/* Resource Selector */}
      <Select
        onValueChange={(value) => handleSelection(value)}
        value={selectedValue ?? ""}
      >
        <SelectTrigger className="w-full border border-gray-300 rounded-md bg-gray-50 shadow-sm hover:bg-gray-100 focus:ring-2 focus:ring-blue-500">
          <SelectValue placeholder="📚 Select a Resource" />
        </SelectTrigger>
        <SelectContent className="bg-white border border-gray-200 rounded-md shadow-lg">
          <SelectGroup className="hover:cursor-pointer">
            <SelectItem value="pyq" className="hover:cursor-pointer">📜 PYQ (Past Year Papers)</SelectItem>
            <SelectItem value="notes" className="hover:cursor-pointer">📖 Toppers Notes</SelectItem>
            <SelectItem value="playlist" className="hover:cursor-pointer">🎥 Video Playlist</SelectItem>
            <SelectItem value="roadmap" className="hover:cursor-pointer">🛣️ Road Map</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
