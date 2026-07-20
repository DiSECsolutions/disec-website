"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Cpu } from "lucide-react";
import NeuralBackground from "@/components/NeuralBackground";
import GridBackground from "@/components/GridBackground";

export const Hero: React.FC = () => {
  const metrics = [
    { value: "20+", label: "AI Projects" },
    { value: "10+", label: "Products" },
    { value: "15+", label: "Research Initiatives" },
    { value: "24/7", label: "Infrastructure" },
  ];

  return (
    <section 
      id="home" 
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#050816] pt-32 pb-16 z-10"
    >
      {/* Background components */}
      <GridBackground />
      <NeuralBackground />

      {/* Decorative Radial glow behind main header */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[#00D4FF]/10 to-[#8B5CF6]/10 rounded-full blur-[120px] pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Floating AI Chips / Circuits decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Floating Chip 1 */}
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-[8%] hidden xl:flex items-center gap-3 p-4 rounded-2xl glass glow-primary border-white/[0.05]"
        >
          <Cpu className="text-[#00D4FF]" size={24} />
          <div className="text-left">
            <p className="text-[10px] text-[#94A3B8] font-manrope font-semibold tracking-widest uppercase">Process Engine</p>
            <p className="text-xs font-bold font-space text-white">TPU Cluster Node</p>
          </div>
        </motion.div>

        {/* Floating Chip 2 */}
        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/3 right-[8%] hidden xl:flex items-center gap-3 p-4 rounded-2xl glass glow-highlight border-white/[0.05]"
        >
          <Brain className="text-[#8B5CF6]" size={24} />
          <div className="text-left">
            <p className="text-[10px] text-[#94A3B8] font-manrope font-semibold tracking-widest uppercase">Neural Grid</p>
            <p className="text-xs font-bold font-space text-white">Autonomous Agent</p>
          </div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto w-full px-6 flex-1 flex flex-col justify-center text-center relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Tag */}
          <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00D4FF]/30 bg-[#00D4FF]/5 text-xs text-[#00D4FF] font-manrope font-semibold tracking-wide uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-ping" />
            Next-Generation AI Stack
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-space tracking-tight leading-tight max-w-4xl text-gradient-primary">
            Building AI That <br />
            <span className="text-gradient-neon">Solves Real Problems.</span>
          </h1>

          {/* Subheading */}
          <p className="mt-8 text-lg md:text-xl text-[#94A3B8] max-w-2xl font-sans leading-relaxed">
            DiSEC Solutions develops proprietary Artificial Intelligence products, enterprise software, and intelligent infrastructure for enterprises, startups, and governments.
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#00D4FF] to-[#3B82F6] text-black font-bold hover:opacity-95 transition-all duration-300 shadow-lg shadow-[#00D4FF]/20 hover:scale-[1.03]"
            >
              Explore Products
              <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl glass border-white/[0.08] text-white font-semibold hover:bg-white/5 transition-all duration-300 hover:scale-[1.03]"
            >
              Partner With Us
            </a>
            <a
              href="#investors"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-dashed border-white/20 text-[#94A3B8] hover:text-white transition-all duration-300 hover:scale-[1.03]"
            >
              Investor Relations
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer Metrics & Scroll Indicator */}
      <div className="max-w-7xl mx-auto w-full px-6 relative z-20">
        <div className="border-t border-white/[0.05] pt-12 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Animated Metrics */}
          <div className="grid grid-cols-2 md:flex md:items-center gap-8 md:gap-16 w-full md:w-auto text-left">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="flex flex-col"
              >
                <span className="text-3xl md:text-4xl font-bold font-space text-white tracking-tight">
                  {metric.value}
                </span>
                <span className="text-xs md:text-sm text-[#94A3B8] font-manrope tracking-wider mt-1 uppercase">
                  {metric.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <motion.a
            href="#about"
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center gap-2 group text-xs text-[#94A3B8] hover:text-white transition-colors duration-300 focus:outline-none"
            aria-label="Scroll down to About section"
          >
            <span className="font-manrope font-semibold tracking-widest uppercase">Scroll Down</span>
            <div className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center p-1.5">
              <motion.div className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]" />
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
};
export default Hero;
