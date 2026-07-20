"use client";

import React from "react";
import { motion } from "framer-motion";
import { CAREERS } from "@/data/siteData";
import { MapPin, Clock, ArrowRight } from "lucide-react";

export const Careers: React.FC = () => {
  return (
    <section 
      id="careers" 
      className="relative py-24 md:py-32 bg-[#050816] overflow-hidden"
    >
      {/* Decorative gradient glow */}
      <div 
        className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-[#8B5CF6]/5 to-transparent rounded-full blur-[120px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-xs font-manrope font-bold tracking-widest text-[#00D4FF] uppercase">
            Careers
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold font-space tracking-tight text-gradient-primary">
            Join Our Mission
          </h2>
          <p className="mt-4 text-[#94A3B8] font-sans">
            Help us democratize Artificial Intelligence. We&apos;re looking for researchers, software architects, and designers to build ethical, scalable products.
          </p>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {CAREERS.map((job, index) => {
            return (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative p-6 rounded-2xl glass-card border-white/[0.04] hover:border-[#00D4FF]/25 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Department Tag */}
                  <span className="text-[10px] font-manrope font-bold tracking-widest text-[#8B5CF6] uppercase">
                    {job.department}
                  </span>
                  
                  {/* Job Title */}
                  <h3 className="mt-3 text-lg font-bold font-space text-white group-hover:text-[#00D4FF] transition-colors duration-200">
                    {job.title}
                  </h3>

                  {/* Metadata Row */}
                  <div className="mt-5 flex flex-wrap gap-4 text-[#94A3B8] text-xs">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={12} className="text-[#3B82F6]" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={12} className="text-[#00D4FF]" />
                      {job.type}
                    </span>
                  </div>
                </div>

                {/* Card Bottom CTA */}
                <div className="mt-8 pt-4 border-t border-white/[0.05] flex items-center justify-between">
                  <span className="text-xs font-manrope text-[#94A3B8]/60">
                    Req: {job.experience}
                  </span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-xs font-manrope font-bold text-[#00D4FF] group-hover:text-white transition-colors duration-200"
                  >
                    Apply Now
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Global CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-black font-bold text-sm hover:bg-white/90 transition-all duration-200 shadow-xl"
          >
            View Open Positions (12)
            <ArrowRight size={16} />
          </a>
        </motion.div>

      </div>
    </section>
  );
};
export default Careers;
