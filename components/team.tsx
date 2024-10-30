"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Twitter, Github, Linkedin } from "lucide-react";

export function Team() {
  const team = [
    {
      name: "Alex Rivers",
      role: "Founder & Artist",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      socials: { twitter: "#", github: "#", linkedin: "#" }
    },
    {
      name: "Sarah Chen",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      socials: { twitter: "#", github: "#", linkedin: "#" }
    },
    {
      name: "Marcus Johnson",
      role: "Marketing Director",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      socials: { twitter: "#", github: "#", linkedin: "#" }
    }
  ];

  return (
    <section id="team" className="py-20 bg-black/90">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#ff8b00] to-orange-600 text-transparent bg-clip-text">
            Meet The Team
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The visionaries and creators behind Geez on Ape, bringing together art, technology, and culture.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="p-6 bg-black/40 border-orange-500/20 backdrop-blur-sm text-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="mb-4 relative w-32 h-32 mx-auto"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full border-2 border-[#ff8b00]"
                  />
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(255,139,0,0.2)",
                        "0 0 40px rgba(255,139,0,0.4)",
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
                <h3 className="text-xl font-bold text-[#ff8b00] mb-1">{member.name}</h3>
                <p className="text-gray-400 mb-4">{member.role}</p>
                <div className="flex justify-center space-x-4">
                  <a href={member.socials.twitter} className="text-gray-400 hover:text-[#ff8b00]">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href={member.socials.github} className="text-gray-400 hover:text-[#ff8b00]">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={member.socials.linkedin} className="text-gray-400 hover:text-[#ff8b00]">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}