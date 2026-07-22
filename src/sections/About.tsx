"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ABOUT_FEATURES } from "@/data/siteData";
import { Brain, Cpu, Shield, Globe, Award, Zap, Terminal, Workflow, Database, Cloud, BarChart, Users, Share2, Layers } from "lucide-react";

const IconMap = {
  Brain, Cpu, Shield, Globe, Award, Zap, Terminal, Workflow, Database, Cloud, BarChart, Users, Share2, Layers
};

export const About: React.FC = () => {
  return (
    <section 
      id="about" 
      className="section-frame relative py-24 md:py-32 bg-[#050816] overflow-hidden"
    >
      {/* Decorative background glow */}
      <div 
        className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-[#00D4FF]/5 to-[#3B82F6]/5 rounded-full blur-[100px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Image Representation */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:justify-start"
          >
            {/* Background Glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#00D4FF] via-[#3B82F6] to-[#8B5CF6] rounded-3xl opacity-20 blur-xl animate-pulse-slow" />
            
            {/* Image Container */}
            <div className="relative w-full max-w-[500px] aspect-square rounded-3xl overflow-hidden glass p-2 border-white/[0.08] shadow-2xl shadow-black">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="/ai_engineering.png"
                  alt="Futuristic AI Engineering and Neural Processing Center"
                  fill
                  sizes="(max-w-768px) 100vw, 500px"
                  priority
                  className="object-cover transform hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/70 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Copy & Feature Grid */}
          <div className="flex flex-col text-left">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              {/* Section Label */}
              <span className="text-xs font-manrope font-bold tracking-widest text-[#00D4FF] uppercase">
                Who We Are
              </span>
              
              {/* Headline */}
              <h2 className="mt-4 text-4xl md:text-5xl font-bold font-space tracking-tight text-gradient-primary">
                Engineering Intelligence.
              </h2>
              
              {/* Description */}
              <p className="mt-6 text-[#94A3B8] font-sans leading-relaxed text-lg">
                DiSEC Solutions is an AI-first technology company dedicated to building proprietary AI products, intelligent software platforms, enterprise automation systems, and cloud-native technologies. We bridge the gap between complex research and tangible enterprise results.
              </p>
            </motion.div>

            {/* Feature Cards Grid */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {ABOUT_FEATURES.map((feature, index) => {
                const IconComponent = IconMap[feature.iconName] || Brain;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-6 rounded-2xl glass-card border-white/[0.05] hover:border-[#00D4FF]/30 transition-all duration-300 group hover:translate-y-[-4px]"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00D4FF]/10 to-[#3B82F6]/10 flex items-center justify-center border border-[#00D4FF]/20 group-hover:border-[#00D4FF]/40 transition-colors duration-300">
                      <IconComponent size={20} className="text-[#00D4FF]" />
                    </div>
                    <h3 className="mt-4 text-lg font-bold font-space text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#94A3B8] leading-relaxed">
                      {feature.description}
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
export default About;
