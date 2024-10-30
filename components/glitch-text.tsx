"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function GlitchText({ text, className }: { text: string; className?: string }) {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 100);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const letters = Array.from(text);

  return (
    <div className={className}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          animate={isGlitching ? {
            x: [0, -2, 4, -4, 2, 0],
            y: [0, 2, -4, 4, -2, 0],
            color: ["#ff8b00", "#fff", "#ff8b00"],
            textShadow: [
              "0 0 8px #ff8b00",
              "2px 2px #ff0000",
              "-2px -2px #0000ff",
              "0 0 8px #ff8b00"
            ]
          } : {}}
          transition={{ duration: 0.1 }}
          className="inline-block"
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
}