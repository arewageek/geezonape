"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Ape } from "@/components/ape";
import { Navigation } from "@/components/navigation";
import { Stats } from "@/components/stats";
import { About } from "@/components/about";
import { Roadmap } from "@/components/roadmap";
import { Team } from "@/components/team";
import { Mint } from "@/components/mint";
import { GlitchText } from "@/components/glitch-text";
import { LogoAnimation } from "@/components/logo-animation";
import { ApeParticles } from "@/components/ape-particles";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <ApeParticles />
      <Navigation />
      <LogoAnimation />
      
      <section className="relative h-screen flex items-center justify-center">
        <motion.div style={{ opacity, scale }} className="absolute inset-0">
          <div className="absolute inset-0 bg-grid opacity-20" />
          <motion.div
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute inset-0 bg-gradient-radial from-orange-500/20 via-transparent to-transparent opacity-50"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 text-center z-10"
        >
          <motion.div
            animate={{
              filter: [
                "hue-rotate(0deg)",
                "hue-rotate(360deg)",
              ],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="mb-6 relative"
          >
            <GlitchText
              text="Geez on Ape"
              className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-[#ff8b00] to-orange-600 text-transparent bg-clip-text"
            />
            <motion.div
              animate={{
                opacity: [0.4, 0.8, 0.4],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute inset-0 blur-3xl bg-gradient-to-r from-[#ff8b00] to-orange-600 opacity-40 -z-10"
            />
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto"
          >
            A revolutionary NFT collection featuring unique ape artwork with a twist of attitude
          </motion.p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="bg-[#ff8b00] hover:bg-orange-600 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 relative overflow-hidden group"
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-orange-600 to-[#ff8b00]"
                animate={{
                  transform: ["translateX(-100%)", "translateX(100%)"],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              />
              <span className="relative z-10 flex items-center">
                <motion.span
                  animate={{
                    rotateY: [0, 360],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="mr-2 text-xl"
                >
                  🦍
                </motion.span>
                Connect Wallet
              </span>
            </Button>
          </motion.div>
        </motion.div>
        
        <Ape />
      </section>

      <Stats />
      <About />
      <Roadmap />
      <Team />
      <Mint />

      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-[#ff8b00] p-4 rounded-full cursor-pointer shadow-lg shadow-orange-500/20"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            🦍
          </motion.div>
        </motion.div>
      </motion.div>
    </main>
  );
}