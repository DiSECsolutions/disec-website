"use client";

import React from "react";
import { motion } from "framer-motion";
import { RESEARCH_TIMELINE } from "@/data/siteData";

export const Research: React.FC = () => {
  return (
    <section 
      id="research" 
      className="section-frame relative py-24 md:py-32 bg-[#050816] overflow-hidden"
    >
      {/* Decorative radial glows */}
      <div 
        className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-[#8B5CF6]/5 to-transparent rounded-full blur-[120px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-l from-[#00D4FF]/5 to-transparent rounded-full blur-[100px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
          <span className="text-xs font-manrope font-bold tracking-widest text-[#00D4FF] uppercase">
            R&D Pipeline
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold font-space tracking-tight text-gradient-primary">
            Scientific Deployment Timeline
          </h2>
          <p className="mt-4 text-[#94A3B8] font-sans">
            How we translate theoretical cognitive research into production-grade enterprise software.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto flex flex-col items-center">
          
          {/* Vertical Connecting Line */}
          <div 
            className="absolute left-[17px] md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/[0.05]" 
            aria-hidden="true"
          >
            {/* Animated neon glowing line overlay */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 4, ease: "easeInOut" }}
              className="w-full bg-gradient-to-b from-[#00D4FF] via-[#3B82F6] to-[#8B5CF6]"
            />
          </div>

          {/* Timeline Items */}
          <div className="w-full flex flex-col gap-16">
            {RESEARCH_TIMELINE.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={step.phase}
                  className={`w-full flex flex-col md:flex-row items-stretch ${isEven ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Left/Right Card Slot (50% width on desktop) */}
                  <div className={`w-full md:w-1/2 flex justify-start pl-12 pr-4 ${isEven ? "md:justify-start md:pl-8 md:pr-0" : "md:justify-end md:pl-0 md:pr-8"}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className={`w-full max-w-md p-6 rounded-2xl glass-card border-white/[0.05] hover:border-[#00D4FF]/20 transition-colors duration-300 text-left`}
                    >
                      {/* Timeline Card Phase Label */}
                      <span className="text-[10px] font-manrope font-bold tracking-widest text-[#00D4FF] uppercase bg-[#00D4FF]/10 border border-[#00D4FF]/20 px-2 py-0.5 rounded">
                        {step.phase}
                      </span>
                      
                      {/* Timeline Card Title */}
                      <h3 className="mt-4 text-xl font-bold font-space text-white">
                        {step.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="mt-2.5 text-sm text-[#94A3B8] leading-relaxed">
                        {step.description}
                      </p>

                      {/* Detail Bullet Points */}
                      <ul className="mt-4 space-y-2 border-t border-white/[0.05] pt-4">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-[#94A3B8]/95 font-sans">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] mt-1.5 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  {/* Node Circle Overlay */}
                  <div className="absolute left-[17px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#050816] border-2 border-[#00D4FF] z-10 flex items-center justify-center mt-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-ping" />
                  </div>

                  {/* Empty Slot opposite to Card (50% width on desktop) */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
export default Research;
