"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, FileDown, CalendarDays } from "lucide-react";

export const Investors: React.FC = () => {
  const highlights = [
    { title: "AI-First Company", desc: "Engineered from inception around proprietary cognitive model weights." },
    { title: "Proprietary Products", desc: "Full intellectual property ownership across all system architectures." },
    { title: "Strong R&D Stack", desc: "Joint theoretical research partnerships driving next-gen capabilities." },
    { title: "Enterprise SaaS Model", desc: "Scalable license structure securing compounding long-term value." },
    { title: "Technical Leadership", desc: "Led by engineers with deep specializations in distributed system networks." },
    { title: "Long-Term Innovation", desc: "A robust product roadmap built to serve AI requirements for decades." },
  ];

  return (
    <section 
      id="investors" 
      className="section-frame relative py-24 md:py-32 bg-[#050816] overflow-hidden"
    >
      {/* Premium animated gradient background circle */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 45, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#00D4FF]/5 via-[#8B5CF6]/5 to-transparent rounded-full blur-[160px] pointer-events-none z-0"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Border grid wrapper */}
        <div className="relative p-8 md:p-16 rounded-3xl glass border-white/[0.08] bg-slate-950/30 overflow-hidden text-left">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Heading & Buttons (5/12 width) */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <span className="text-xs font-manrope font-bold tracking-widest text-[#00D4FF] uppercase">
                Investor Relations
              </span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold font-space text-white leading-tight">
                Investing in the <span className="text-gradient-neon">Future of AI</span>
              </h2>
              <p className="mt-6 text-[#94A3B8] font-sans leading-relaxed text-sm">
                DiSEC Solutions is built for scale. By marrying cutting-edge neural architectures with enterprise-grade architectures, we establish robust operational models.
              </p>

              {/* Action Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#00D4FF] to-[#3B82F6] text-black font-bold text-sm hover:opacity-90 transition-all duration-200"
                >
                  <CalendarDays size={16} />
                  Schedule Meeting
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl glass border-white/[0.08] text-white hover:bg-white/5 font-semibold text-sm transition-all duration-200"
                >
                  <FileDown size={16} className="text-[#00D4FF]" />
                  Company Profile (PDF)
                </a>
              </div>
            </div>

            {/* Right Column: Key Growth Highlights Grid (7/12 width) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((h, index) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  className="p-5 rounded-xl bg-white/[0.01] border border-white/[0.04] hover:border-[#00D4FF]/25 hover:bg-white/[0.02] transition-all duration-300 group"
                >
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-[#00D4FF] group-hover:scale-110 transition-transform duration-200" />
                    <h3 className="font-bold font-space text-white text-base">
                      {h.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-xs text-[#94A3B8] leading-relaxed">
                    {h.desc}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
export default Investors;
