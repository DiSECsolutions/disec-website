"use client";

import React from "react";
import { motion } from "framer-motion";
import { TECH_STACK } from "@/data/siteData";
import { Terminal, Database, Code2, Cpu } from "lucide-react";

export const TechStack: React.FC = () => {
  // Category to Icon mapping
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Languages & Frameworks":
        return <Code2 size={16} className="text-[#00D4FF]" />;
      case "Data & Infrastructure":
        return <Database size={16} className="text-[#3B82F6]" />;
      case "AI & ML":
        return <Cpu size={16} className="text-[#8B5CF6]" />;
      default:
        return <Terminal size={16} className="text-[#94A3B8]" />;
    }
  };

  return (
    <section 
      id="tech-stack" 
      className="section-frame relative py-24 bg-[#050816] overflow-hidden"
    >
      {/* Decorative glows */}
      <div 
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#00D4FF]/5 to-transparent rounded-full blur-[100px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-xs font-manrope font-bold tracking-widest text-[#00D4FF] uppercase">
            Engineering Base
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold font-space tracking-tight text-gradient-primary">
            Our Technology Stack
          </h2>
          <p className="mt-4 text-[#94A3B8] font-sans">
            Built on robust, open, and accelerated technologies to handle billions of parameters and sub-millisecond execution loops.
          </p>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {TECH_STACK.map((tech, index) => {
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative p-6 rounded-2xl glass-card border-white/[0.04] hover:border-[#00D4FF]/30 transition-all duration-300 flex flex-col justify-between text-left hover:-translate-y-1 h-44 overflow-hidden"
              >
                {/* Visual hover indicator */}
                <div className="absolute top-0 left-0 w-[3px] h-0 bg-gradient-to-b from-[#00D4FF] to-[#3B82F6] group-hover:h-full transition-all duration-300" />
                
                <div>
                  {/* Card Top Category & Icon */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-white/[0.06] to-white/[0.01] border border-white/[0.1] flex items-center justify-center group-hover:border-[#00D4FF]/40 group-hover:bg-[#00D4FF]/10 transition-all duration-300">
                      {React.cloneElement(getCategoryIcon(tech.category), { size: 20 })}
                    </div>
                    <span className="pt-1 text-right text-[10px] font-manrope font-bold tracking-wider text-[#94A3B8]/60 uppercase">
                      {tech.category}
                    </span>
                  </div>

                  {/* Technology Name */}
                  <h3 className="mt-5 text-xl font-bold font-space text-white group-hover:text-gradient-neon transition-all duration-300">
                    {tech.name}
                  </h3>
                </div>

                {/* Hover Reveal Description */}
                <div className="relative mt-4 h-12 overflow-hidden">
                  <p className="text-xs text-[#94A3B8] leading-relaxed group-hover:text-white/90 transition-colors duration-200">
                    {tech.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
export default TechStack;
