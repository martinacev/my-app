"use client";
import React from "react";
import { WavyBackground } from "@/components/ui/wavy-background";

export default function WavyBackgroundDemo() {
  const colors = [
    "#0051a2", 
    "#1b75be", 
    "#408ee0"
  ];

  return (
    <WavyBackground 
      className="max-w-4xl mx-auto pb-40" 
      containerClassName="mt-[30px]" 
      waveBaseline={0.5}
      colors={colors}
    >
    </WavyBackground>
  );
}
