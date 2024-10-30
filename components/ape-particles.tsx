"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Particle = {
  id: number;
  x: number;
  y: number;
  scale: number;
  rotation: number;
};

export function ApeParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const particleCount = 20;
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      scale: 0.5 + Math.random() * 0.5,
      rotation: Math.random() * 360,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          initial={{
            x: `${particle.x}vw`,
            y: `${particle.y}vh`,
            scale: particle.scale,
            rotate: particle.rotation,
          }}
          animate={{
            x: [
              `${particle.x}vw`,
              `${particle.x + (Math.random() * 20 - 10)}vw`,
              `${particle.x}vw`,
            ],
            y: [
              `${particle.y}vh`,
              `${particle.y + (Math.random() * 20 - 10)}vh`,
              `${particle.y}vh`,
            ],
            rotate: [particle.rotation, particle.rotation + 360],
          }}
          transition={{
            duration: 10 + Math.random() * 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <span className="text-2xl opacity-20">🦍</span>
        </motion.div>
      ))}
    </div>
  );
}