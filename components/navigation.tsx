"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Wallet2 } from "lucide-react";

export function Navigation() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-orange-500/20"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-8">
            <span className="text-2xl font-bold text-[#ff8b00]">GOA</span>
            <div className="hidden md:flex space-x-6">
              <a href="#about" className="text-gray-300 hover:text-[#ff8b00] transition-colors">About</a>
              <a href="#roadmap" className="text-gray-300 hover:text-[#ff8b00] transition-colors">Roadmap</a>
              <a href="#team" className="text-gray-300 hover:text-[#ff8b00] transition-colors">Team</a>
              <a href="#faq" className="text-gray-300 hover:text-[#ff8b00] transition-colors">FAQ</a>
            </div>
          </div>
          
          <Button className="bg-[#ff8b00] hover:bg-orange-600 text-white rounded-full">
            <Wallet2 className="mr-2 h-4 w-4" />
            Connect Wallet
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}