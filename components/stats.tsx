"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export function Stats() {
  const stats = [
    { label: "Total Items", value: "10,000" },
    { label: "Owners", value: "3.2K" },
    { label: "Floor Price", value: "2.8 ETH" },
    { label: "Volume Traded", value: "8.5K ETH" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-orange-950/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 text-center bg-black/40 border-orange-500/20 backdrop-blur-sm">
                <h3 className="text-4xl font-bold text-[#ff8b00] mb-2">{stat.value}</h3>
                <p className="text-gray-400">{stat.label}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}