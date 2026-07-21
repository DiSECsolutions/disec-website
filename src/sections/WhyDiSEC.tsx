"use client";

import React from "react";
import { motion } from "framer-motion";
import { WHY_DISEC } from "@/data/siteData";
import { Brain, Cpu, Shield, Globe, Award, Zap, Terminal, Workflow, Database, Cloud, BarChart, Users, Share2, Layers } from "lucide-react";

const IconMap = {
  Brain, Cpu, Shield, Globe, Award, Zap, Terminal, Workflow, Database, Cloud, BarChart, Users, Share2, Layers
};

export const WhyDiSEC: React.FC = () => {
  return (
    <section 
      id="why-disec" 
      className="section-frame relative py-24 md:py-32 bg-[#050816] overflow-hidden"
    >
      {/* Decorative background glow */}
      <div 
        className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-gradient-to-tr from-[#3B82F6]/5 via-[#8B5CF6]/5 to-transparent rounded-full blur-[110px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-xs font-manrope font-bold tracking-widest text-[#8B5CF6] uppercase">
            Core Philosophy
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold font-space tracking-tight text-gradient-primary">
            Why Enterprise Partners Choose DiSEC
          </h2>
          <p className="mt-4 text-[#94A3B8] font-sans">
            We deliver state-of-the-art cognitive products backed by rigorous scientific research, extreme compliance standards, and cloud-native resilience.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_DISEC.map((item, index) => {
            const IconComponent = IconMap[item.iconName] || Brain;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative p-6 rounded-2xl glass-card border-white/[0.04] hover:border-[#00D4FF]/20 transition-all duration-300 flex flex-col justify-between text-left hover:-translate-y-1 overflow-hidden"
              >
                {/* Visual hover background beam */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/[0.08] flex items-center justify-center text-[#94A3B8] group-hover:text-[#00D4FF] group-hover:border-[#00D4FF]/30 transition-all duration-300">
                    <IconComponent size={20} />
                  </div>
                  <h3 className="mt-5 text-lg font-bold font-space text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#94A3B8] leading-relaxed">
                    {item.description}
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
export default WhyDiSEC;
