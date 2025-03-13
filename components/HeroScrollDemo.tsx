"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Enjoy Your Life At <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Manipal University Jaipur
              </span>
            </h1>
          </>
        }
      >
        <video
          src="https://res.cloudinary.com/dndyofbi8/video/upload/v1741888947/h7dgqeyut8ooxeqwgak7.mp4"
          className="mx-auto w-full h-auto max-h-[720px] rounded-2xl object-cover"
          draggable={false}
          autoPlay
          loop
          muted
          playsInline
        />
      </ContainerScroll>
    </div>
  );
}
