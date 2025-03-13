"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

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
        <Image
          src={`/heroImage.webp`}
          unoptimized
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-full h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
