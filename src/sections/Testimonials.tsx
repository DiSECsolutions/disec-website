"use client";

import React from "react";
import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/data/siteData";
import { Quote, Star } from "lucide-react";

export const Testimonials: React.FC = () => {
  // Helper to extract initials for avatar placeholder
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <section 
      id="testimonials" 
      className="relative py-24 bg-[#050816] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-xs font-manrope font-bold tracking-widest text-[#8B5CF6] uppercase">
            Validation
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold font-space tracking-tight text-gradient-primary">
            Trusted by Innovators
          </h2>
          <p className="mt-4 text-[#94A3B8] font-sans">
            Hear from leading operators scaling enterprise systems using our cognitive integrations.
          </p>
        </div>

        {/* Testimonials Masonry/Grid (3 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {TESTIMONIALS.map((item, index) => {
            const initials = getInitials(item.author);

            return (
              <motion.div
                key={item.author}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative p-8 rounded-3xl glass border-white/[0.05] hover:border-[#00D4FF]/25 bg-slate-950/20 flex flex-col justify-between group transition-colors duration-300"
              >
                {/* Floating quote decoration */}
                <div className="absolute top-6 right-8 text-white/[0.02] group-hover:text-[#00D4FF]/10 transition-colors duration-300 pointer-events-none">
                  <Quote size={56} />
                </div>

                <div>
                  {/* Glowing micro-stars */}
                  <div className="flex gap-1 text-[#00D4FF] mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="#00D4FF" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-base text-white/90 leading-relaxed font-sans italic">
                    &quot;{item.quote}&quot;
                  </p>
                </div>

                {/* Author Info */}
                <div className="mt-8 pt-6 border-t border-white/[0.05] flex items-center gap-4">
                  
                  {/* Initial Fallback Avatar */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#00D4FF] via-[#3B82F6] to-[#8B5CF6] flex items-center justify-center text-black font-extrabold text-sm font-space tracking-wider shadow-md shadow-[#00D4FF]/10">
                    {initials}
                  </div>

                  <div className="text-left">
                    <p className="text-sm font-bold font-space text-white">{item.author}</p>
                    <p className="text-xs text-[#94A3B8] font-manrope mt-0.5">
                      {item.position}, <span className="text-[#00D4FF] font-semibold">{item.company}</span>
                    </p>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
export default Testimonials;
