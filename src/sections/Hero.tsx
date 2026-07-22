"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowRight, Sparkles } from "lucide-react";
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
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#050816] pt-28 pb-10 md:pt-32 md:pb-16 z-10"
    >
      {/* Background components */}
      <GridBackground />
      <NeuralBackground />

      {/* Decorative Radial glow behind main header */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[#00D4FF]/10 to-[#8B5CF6]/10 rounded-full blur-[120px] pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto w-full px-6 flex-1 flex flex-col justify-center relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-20 items-center"
        >
          <div className="text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.75rem] font-bold font-space tracking-tight leading-[1.02] max-w-3xl text-gradient-primary">
              Building AI That <br />
              <span className="text-gradient-neon">Solves Real Problems.</span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-[#94A3B8] max-w-xl font-sans leading-relaxed">
              DiSEC Solutions develops proprietary Artificial Intelligence products, enterprise software, and intelligent infrastructure for enterprises, startups, and governments.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-[#00D4FF] to-[#3B82F6] text-black font-bold hover:opacity-95 transition-all duration-300 shadow-lg shadow-[#00D4FF]/20 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#00D4FF] focus:ring-offset-2 focus:ring-offset-[#050816]"
              >
                Explore Products
                <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl glass border-white/[0.08] text-white font-semibold hover:bg-white/5 transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#00D4FF]"
              >
                Partner With Us
              </a>
            </div>

            <a href="#investors" className="mt-6 inline-flex items-center gap-2 text-sm text-[#94A3B8] hover:text-white transition-colors duration-200 group">
              Investor Relations
              <ArrowDownRight size={15} className="text-[#8B5CF6] group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-[520px] lg:justify-self-end"
          >
            <div className="absolute -inset-6 bg-gradient-to-tr from-[#00D4FF]/10 via-[#3B82F6]/5 to-[#8B5CF6]/10 blur-3xl" />
            <div className="relative rounded-[2rem] border border-white/[0.1] bg-[#0F172A]/75 backdrop-blur-xl p-5 md:p-7 shadow-2xl shadow-black/30">
              <div className="flex items-center justify-between pb-5 border-b border-white/[0.08]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00D4FF]/20 to-[#3B82F6]/20 border border-[#00D4FF]/30 flex items-center justify-center">
                    <Sparkles size={19} className="text-[#00D4FF]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#94A3B8] font-manrope uppercase tracking-widest">DiSEC Core</p>
                    <p className="mt-1 text-sm font-semibold text-white">Intelligence in motion</p>
                  </div>
                </div>
                <span className="flex items-center gap-1.5 text-[10px] text-[#00D4FF] font-manrope uppercase tracking-widest"><span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]" /> Live</span>
              </div>

              <div className="py-6 grid grid-cols-2 gap-3">
                {metrics.map((metric, index) => (
                  <div key={metric.label} className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-4 hover:border-[#00D4FF]/30 transition-colors">
                    <p className="text-2xl md:text-3xl font-bold font-space text-white">{metric.value}</p>
                    <p className="mt-1 text-[10px] text-[#94A3B8] font-manrope tracking-widest uppercase">{metric.label}</p>
                    <div className="mt-4 h-1 rounded-full bg-white/[0.06] overflow-hidden"><div className={`h-full rounded-full bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] ${index === 0 ? "w-[86%]" : index === 1 ? "w-[68%]" : index === 2 ? "w-[74%]" : "w-[94%]"}`} /></div>
                  </div>
                ))}
              </div>

            </div>
          </motion.div>
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
