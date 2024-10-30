"use client";

import { motion } from "framer-motion";

export function LogoAnimation() {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
      className="absolute top-4 left-4 w-16 h-16 z-50"
    >
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: {
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          },
          scale: {
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }
        }}
        className="relative w-full h-full"
      >
        <img
          src="https://pbs.twimg.com/profile_images/1850844696261595136/8T5s1HnV_400x400.jpg"
          alt="Geez on Ape Logo"
          className="w-full h-full object-cover rounded-full border-2 border-[#ff8b00] shadow-[0_0_30px_rgba(255,139,0,0.6)]"
        />
        <motion.div
          animate={{
            background: [
              "conic-gradient(from 0deg, #ff8b00, transparent 60%)",
              "conic-gradient(from 360deg, #ff8b00, transparent 60%)",
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute inset-0 rounded-full mix-blend-overlay"
        />
      </motion.div>
    </motion.div>
  );
}