"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/constants";
import { Award, ExternalLink } from "lucide-react";

interface CustomIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const Linkedin = ({ size = 16, ...props }: CustomIconProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Youtube = ({ size = 16, ...props }: CustomIconProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

export const CEO: React.FC = () => {
  const badges = [
    "Founder",
    "AI Product Architect",
    "Software Engineer",
    "Technology Visionary",
  ];

  return (
    <section 
      id="ceo" 
      className="relative py-24 md:py-32 bg-[#050816] overflow-hidden"
    >
      {/* CEO Background Animated Gradients / Glows */}
      <div 
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-[#8B5CF6]/5 via-[#3B82F6]/5 to-transparent rounded-full blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-bl from-[#00D4FF]/5 via-[#3B82F6]/5 to-transparent rounded-full blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Large background watermark typography */}
        <div 
          className="absolute -top-16 right-0 text-[10rem] md:text-[14rem] font-bold font-space text-white/[0.007] pointer-events-none select-none tracking-tight"
          aria-hidden="true"
        >
          LEADERSHIP
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: CEO Portrait (5/12 width) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            {/* Animated underlying gradient glow */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#00D4FF] via-[#3B82F6] to-[#8B5CF6] opacity-15 blur-2xl animate-pulse-slow" />
            
            {/* Portrait Frame with Floating Animation */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-full max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden glass p-2 border-white/[0.08] shadow-2xl shadow-black/80"
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="/ceo_photo.jpg"
                  alt="Gautham Krishna P - Founder & CEO of DiSEC Solutions"
                  fill
                  sizes="(max-w-768px) 100vw, 400px"
                  priority
                  className="object-cover"
                />
                
                {/* Visual overlays inside the frame */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent pointer-events-none" />
                
                {/* Floating bottom identity tag */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass border-white/[0.05] backdrop-blur-md">
                  <p className="text-lg font-bold font-space text-white">{SITE_CONFIG.founderName}</p>
                  <p className="text-xs text-[#00D4FF] font-manrope font-semibold uppercase tracking-wider mt-0.5">{SITE_CONFIG.founderTitle}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Biography & Details (7/12 width) */}
          <div className="lg:col-span-7 flex flex-col text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-manrope font-bold tracking-widest text-[#00D4FF] uppercase">
                CEO Spotlight
              </span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold font-space text-gradient-primary">
                Meet Our Founder
              </h2>
            </motion.div>

            {/* Large Quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-8 relative pl-6 border-l-2 border-[#00D4FF]"
            >
              <p className="text-xl md:text-2xl font-medium text-white/90 leading-relaxed italic">
                &quot;Artificial Intelligence is not simply about automation—it is about amplifying human potential.&quot;
              </p>
            </motion.blockquote>

            {/* Biography */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-[#94A3B8] font-sans leading-relaxed text-base"
            >
              Gautham Krishna founded DiSEC Solutions with a vision to build practical, highly interactive Artificial Intelligence systems and enterprise integrations. As a creative developer and technologist, his work focuses on sculpting high-performance software, cloud-native frameworks, AI integrations, and interactive digital workspaces.
            </motion.p>

            {/* Achievement Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {badges.map((badge) => (
                <div
                  key={badge}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-manrope text-[#94A3B8]"
                >
                  <Award size={12} className="text-[#8B5CF6]" />
                  {badge}
                </div>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href={SITE_CONFIG.founderPortfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-bold text-sm hover:bg-white/90 transition-all duration-200"
              >
                Visit Personal Website
                <ExternalLink size={14} />
              </a>

              <a
                href={SITE_CONFIG.founderLinkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border-white/[0.08] text-white hover:bg-white/5 font-semibold text-sm transition-all duration-200"
              >
                <Linkedin size={14} className="text-[#3B82F6]" />
                LinkedIn
              </a>
              <a
                href={SITE_CONFIG.founderYoutubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border-white/[0.08] text-white hover:bg-white/5 font-semibold text-sm transition-all duration-200"
              >
                <Youtube size={14} className="text-[#FF0000]" />
                YouTube Channel
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
export default CEO;
