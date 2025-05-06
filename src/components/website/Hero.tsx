"use client";
 
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import LottieAnimation from "../LottieAnimations";
import { Particles } from "../magicui/Particles";
import { TextFlip } from "../ui/text-flip";

export default function Hero() {
    const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");
 
  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);
  return (
    <section>
      <div className="relative z-10 overflow-hidden">
        <Particles
          quantity={100}
          ease={80}
          color={color}
          refresh
          className="absolute inset-0 -z-10"
        />
        <div className="container">
          <div className="grid grid-cols-2 gap-x-5 gap-y-8 items-center">
            <div>
              <span className="block font-sans md:text-[35px] text-xl leading-tigth">
                Hello, my name is
              </span>
              <h1 className="lg:text-[60px] text-[40px] font-bold leading-tight my-2">
                Ahmed Raza
              </h1>
              <div className="flex items-center gap-2">
                <span className="block md:text-[30px] text-xl leading-tigth font-medium">
                  And I'm
                </span>
                <TextFlip />
              </div>
            </div>
            <LottieAnimation animationPath="/animations/1745958043915.json" />
          </div>
        </div>
      </div>
    </section>
  );
}
