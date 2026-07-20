"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface CounterProps {
  value: number;
  duration?: number;
  suffix?: string;
}

export const Counter: React.FC<CounterProps> = ({ value, duration = 1.5, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    if (start === end) return;

    const totalMiliseconds = duration * 1000;
    const incrementTime = 30; // Interval frequency
    const totalSteps = totalMiliseconds / incrementTime;
    const stepIncrement = (end - start) / totalSteps;

    const timer = setInterval(() => {
      start += stepIncrement;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        // If it's a decimal (like 99.9), handle float values
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  const isFloat = value % 1 !== 0;
  const displayCount = isFloat ? count.toFixed(1) : Math.floor(count).toString();

  return (
    <span ref={ref} className="font-space">
      {displayCount}
      {suffix}
    </span>
  );
};

export const Stats: React.FC = () => {
  // Statistics as required: Products Built, Enterprise Clients, AI Models, Research Initiatives, Countries Served
  const statsList = [
    { value: 10, suffix: "+", label: "Products Built" },
    { value: 45, suffix: "+", label: "Enterprise Clients" },
    { value: 120, suffix: "+", label: "AI Models Trained" },
    { value: 15, suffix: "+", label: "Research Initiatives" },
    { value: 30, suffix: "+", label: "Countries Served" },
  ];

  return (
    <section 
      id="stats" 
      className="relative py-24 bg-[#0F172A]/40 border-y border-white/[0.05] overflow-hidden"
    >
      {/* Decorative center glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#00D4FF]/5 via-[#8B5CF6]/5 to-transparent rounded-full blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 justify-center">
          {statsList.map((stat, index) => {
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex flex-col text-center"
              >
                {/* Numeric animated counter */}
                <span className="text-4xl md:text-5xl lg:text-6xl font-bold font-space text-gradient-neon tracking-tight">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </span>
                
                {/* Description Label */}
                <span className="mt-3 text-xs md:text-sm font-manrope font-bold tracking-wider text-[#94A3B8] uppercase">
                  {stat.label}
                </span>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
export default Stats;
