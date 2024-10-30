"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export function Roadmap() {
  const phases = [
    {
      phase: "Phase 1",
      title: "Launch & Community Building",
      items: [
        "Initial mint of 10,000 unique Geez on Apes",
        "Community Discord launch",
        "Marketing partnerships",
        "Listing on major NFT marketplaces"
      ]
    },
    {
      phase: "Phase 2",
      title: "Utility & Benefits",
      items: [
        "Exclusive merchandise store",
        "Community DAO formation",
        "Staking platform launch",
        "Holder-only events"
      ]
    },
    {
      phase: "Phase 3",
      title: "Expansion & Innovation",
      items: [
        "Metaverse integration",
        "Mobile app development",
        "Collaborative artist series",
        "Real-world events"
      ]
    }
  ];

  return (
    <section id="roadmap" className="py-20 bg-gradient-to-b from-black/90 to-orange-950/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#ff8b00] to-orange-600 text-transparent bg-clip-text">
            Roadmap
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our vision for the future of Geez on Ape, carefully planned to deliver maximum value to our community.
          </p>
        </motion.div>

        <div className="space-y-8">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="p-6 bg-black/40 border-orange-500/20 backdrop-blur-sm">
                <div className="flex items-center mb-4">
                  <span className="text-[#ff8b00] font-bold text-xl">{phase.phase}</span>
                  <div className="h-px bg-orange-500/20 flex-grow mx-4" />
                  <h3 className="text-xl font-bold text-white">{phase.title}</h3>
                </div>
                <ul className="space-y-2">
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-400 flex items-center">
                      <span className="w-2 h-2 bg-[#ff8b00] rounded-full mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}