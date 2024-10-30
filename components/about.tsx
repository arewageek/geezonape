"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Sparkles, Zap, Shield } from "lucide-react";

export function About() {
  const features = [
    {
      icon: <Sparkles className="w-8 h-8 text-[#ff8b00]" />,
      title: "Unique Art Style",
      description: "Each Geez on Ape is crafted with meticulous attention to detail, featuring a distinctive blend of urban culture and primate aesthetics."
    },
    {
      icon: <Zap className="w-8 h-8 text-[#ff8b00]" />,
      title: "Community Driven",
      description: "Join an exclusive community of collectors and enthusiasts who share a passion for innovative NFT art and culture."
    },
    {
      icon: <Shield className="w-8 h-8 text-[#ff8b00]" />,
      title: "Verified Smart Contract",
      description: "Our smart contract has been audited by leading security firms to ensure the safety of your investment."
    }
  ];

  return (
    <section id="about" className="py-20 bg-black/90">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#ff8b00] to-orange-600 text-transparent bg-clip-text">
            About The Project
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Geez on Ape is more than just an NFT collection - it's a movement that celebrates the fusion of street culture and digital art through unique primate-inspired masterpieces.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="p-6 bg-black/40 border-orange-500/20 backdrop-blur-sm hover:border-orange-500/40 transition-colors">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-[#ff8b00]">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}