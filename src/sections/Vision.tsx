"use client";

import React from "react";
import { motion } from "framer-motion";
import { VISION_MISSION } from "@/data/siteData";
import { Compass, ShieldCheck, Zap, Activity } from "lucide-react";

export const Vision: React.FC = () => {
  const missionIcons = [Compass, Zap, ShieldCheck, Activity];

  return (
    <section 
      id="vision" 
      className="section-frame relative py-24 bg-[#050816] overflow-hidden"
    >
      {/* Decorative gradient glow */}
      <div 
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-[#8B5CF6]/5 to-[#3B82F6]/5 rounded-full blur-[120px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Large low-opacity background typography */}
        <div 
          className="absolute -top-12 left-6 text-[8rem] md:text-[12rem] font-bold font-space text-white/[0.01] pointer-events-none select-none tracking-tight leading-none"
          aria-hidden="true"
        >
          FUTURE
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Side: Vision Card (40% width on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex"
          >
            <div className="relative w-full rounded-3xl overflow-hidden glass p-8 md:p-12 border-white/[0.08] shadow-2xl flex flex-col justify-between group hover:border-[#00D4FF]/30 transition-all duration-300">
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#00D4FF]/5 to-[#8B5CF6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div>
                <span className="text-xs font-manrope font-bold tracking-widest text-[#00D4FF] uppercase">
                  Our Outlook
                </span>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold font-space text-white">
                  {VISION_MISSION.vision.title}
                </h2>
                <p className="mt-8 text-xl md:text-2xl text-[#94A3B8] font-sans font-medium leading-relaxed">
                  &quot;{VISION_MISSION.vision.text}&quot;
                </p>
              </div>

              <div className="mt-12 flex items-center gap-4 text-[#00D4FF]">
                <div className="w-12 h-12 rounded-2xl bg-[#00D4FF]/10 flex items-center justify-center border border-[#00D4FF]/20">
                  <Compass size={24} className="animate-spin-slow" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-manrope font-bold uppercase tracking-wider text-white">Ethical Alignment</p>
                  <p className="text-xs text-[#94A3B8]">Guided by Human-Centric Safety</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Mission Pillars (60% width on desktop) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="text-left mb-8">
              <span className="text-xs font-manrope font-bold tracking-widest text-[#8B5CF6] uppercase">
                Our Action Plan
              </span>
              <h2 className="mt-2 text-3xl font-bold font-space text-white">
                The Mission We Execute Daily
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {VISION_MISSION.mission.map((pillar, index) => {
                const Icon = missionIcons[index % missionIcons.length];
                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-6 rounded-2xl glass-card border-white/[0.05] hover:border-[#8B5CF6]/30 transition-all duration-300 group text-left"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#8B5CF6]/10 flex items-center justify-center border border-[#8B5CF6]/20 text-[#8B5CF6]">
                        <Icon size={16} />
                      </div>
                      <h3 className="text-base font-bold font-space text-white">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-sm text-[#94A3B8] leading-relaxed">
                      {pillar.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
export default Vision;
