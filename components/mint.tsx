"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

export function Mint() {
  const [quantity, setQuantity] = useState(1);

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto"
        >
          <Card className="p-8 bg-black/40 border-orange-500/20 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-[#ff8b00] to-orange-600 text-transparent bg-clip-text">
              Mint Your Ape
            </h2>
            
            <div className="flex items-center justify-center space-x-4 mb-8">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="border-orange-500/20 hover:bg-orange-500/20"
              >
                <Minus className="h-4 w-4" />
              </Button>
              
              <Input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                min="1"
                max="10"
                className="w-20 text-center bg-black/40 border-orange-500/20"
              />
              
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(Math.min(10, quantity + 1))}
                className="border-orange-500/20 hover:bg-orange-500/20"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>

            <div className="text-center mb-8">
              <p className="text-gray-400 mb-2">Price per NFT</p>
              <p className="text-2xl font-bold text-[#ff8b00]">2.5 ETH</p>
            </div>

            <Button
              className="w-full bg-[#ff8b00] hover:bg-orange-600 text-white py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Mint Now
            </Button>
            
            <p className="text-center text-gray-400 mt-4">
              {10000 - 8654} / 10000 remaining
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}