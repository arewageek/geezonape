"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export function Ape() {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      while (true) {
        await controls.start({
          scale: [1, 1.05, 1],
          rotateZ: [0, -1, 1, -1, 0],
          transition: {
            duration: 2,
            ease: "easeInOut",
          },
        });
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    };
    sequence();
  }, [controls]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-b from-black via-orange-950/20 to-black"
      />
      
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          duration: 0.8
        }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <motion.div
          animate={controls}
          className="relative w-[800px] h-[800px]"
        >
          <motion.div
            animate={{
              filter: [
                "hue-rotate(0deg) brightness(1)",
                "hue-rotate(45deg) brightness(1.2)",
                "hue-rotate(0deg) brightness(1)",
              ],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1682686581362-796145f0e123?q=80&w=2940&auto=format&fit=crop"
              alt="Geez on Ape"
              className="w-full h-full object-cover rounded-full mix-blend-luminosity opacity-50"
            />
          </motion.div>

          <motion.div
            animate={{
              background: [
                "radial-gradient(circle at center, rgba(255,139,0,0.2) 0%, transparent 50%)",
                "radial-gradient(circle at center, rgba(255,139,0,0.4) 0%, transparent 50%)",
                "radial-gradient(circle at center, rgba(255,139,0,0.2) 0%, transparent 50%)"
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="absolute inset-0 rounded-full"
          />

          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              boxShadow: [
                "0 0 20px rgba(255,139,0,0.2)",
                "0 0 60px rgba(255,139,0,0.4)",
                "0 0 20px rgba(255,139,0,0.2)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[url('/noise.png')] mix-blend-overlay"
      />

      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 30% 30%, rgba(255,139,0,0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 70% 70%, rgba(255,139,0,0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </>
  );
}