"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { INDUSTRIES } from "@/data/siteData";
import { HeartPulse, Factory, GraduationCap, Coins, Building, ShoppingBag, Truck, Trees, ShieldAlert } from "lucide-react";

const IconMap = {
  HeartPulse, Factory, GraduationCap, Coins, Building, ShoppingBag, Truck, Trees
};

export const Industries: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section 
      id="industries" 
      className="relative py-24 md:py-32 bg-[#050816] overflow-hidden"
    >
      {/* Background low-opacity typography */}
      <div 
        className="absolute top-1/2 left-0 text-[10rem] md:text-[14rem] font-bold font-space text-white/[0.005] pointer-events-none select-none tracking-tight -translate-y-1/2"
        aria-hidden="true"
      >
        VERTICAL INTEGRATIONS
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-xs font-manrope font-bold tracking-widest text-[#00D4FF] uppercase">
            Deployments
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold font-space tracking-tight text-gradient-primary">
            Sectors We Empower
          </h2>
          <p className="mt-4 text-[#94A3B8] font-sans">
            We adapt our cognitive architectures to serve high-stakes regulated industries and smart urban setups.
          </p>
        </div>

        {/* Interactive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES.map((industry) => {
            const IconComponent = IconMap[industry.iconName] || ShieldAlert;
            const isHovered = hoveredId === industry.id;

            return (
              <div
                key={industry.id}
                onMouseEnter={() => setHoveredId(industry.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="relative h-72 rounded-2xl overflow-hidden glass border-white/[0.05] p-6 flex flex-col justify-between cursor-pointer group transition-all duration-300"
              >
                {/* Underlay gradient that transitions in on hover */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-tr ${industry.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0`}
                  aria-hidden="true"
                />

                {/* Decorative glowing lines */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00D4FF]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-1" />

                {/* Icon wrapper */}
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.02] border border-white/[0.08] flex items-center justify-center text-[#94A3B8] group-hover:text-white group-hover:border-white/20 transition-all duration-300">
                    <IconComponent size={24} className="group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>

                {/* Content area: Name and description */}
                <div className="relative z-10 text-left">
                  <h3 className="text-xl font-bold font-space text-white group-hover:text-[#00D4FF] transition-colors duration-200">
                    {industry.name}
                  </h3>
                  
                  {/* Description container with sliding effect */}
                  <div className="h-20 overflow-hidden mt-2">
                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-xs text-[#94A3B8] leading-relaxed"
                    >
                      {industry.description}
                    </motion.p>
                    
                    {!isHovered && (
                      <motion.p
                        initial={{ opacity: 1 }}
                        animate={isHovered ? { opacity: 0 } : { opacity: 0.6 }}
                        className="text-xs text-[#94A3B8] font-manrope font-semibold tracking-wider uppercase mt-1"
                      >
                        Explore Integration →
                      </motion.p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
export default Industries;
