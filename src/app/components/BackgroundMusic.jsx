"use client";

import { backgroundMusic } from "@/data";
import { useEffect, useRef } from "react";

export default function BackgroundMusic({ shouldPlay }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (shouldPlay && audioRef.current) {
      audioRef.current.volume = 0.6;
      audioRef.current.play().catch(console.error);
    }
  }, [shouldPlay]);

  return (
    <audio ref={audioRef} loop preload="auto" className="hidden">
      <source src={backgroundMusic} type="audio/wav" />
    </audio>
  );
}
