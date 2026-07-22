"use client";

import React from "react";
import Image from "next/image";
import { SITE_CONFIG } from "@/constants";
import { Mail, ArrowUp } from "lucide-react";

interface BrandIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const Github = ({ size = 16, ...props }: BrandIconProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const Linkedin = ({ size = 16, ...props }: BrandIconProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Instagram = ({ size = 16, ...props }: BrandIconProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width={size} height={size} rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    company: [
      { label: "About Us", href: "#about" },
      { label: "CEO Spotlight", href: "#ceo" },
      { label: "Research", href: "#research" },
    ],
    products: [
      { label: "Enterprise AI", href: "#products" },
      { label: "AI Assistants", href: "#products" },
      { label: "Automation Suites", href: "#products" },
      { label: "Decision Engine", href: "#products" },
    ],
    resources: [
      { label: "Documentation", href: "#home" },
      { label: "System Status", href: "#home" },
      { label: "API Reference", href: "#products" },
      { label: "Insights Blog", href: "#blog" },
    ],
    investors: [
      { label: "Investor Relations", href: "#investors" },
      { label: "Financial Reporting", href: "#investors" },
      { label: "Company Profile", href: "#investors" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#home" },
      { label: "Terms of Service", href: "#home" },
      { label: "Ethics Guideline", href: "#vision" },
    ],
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="section-frame relative bg-[#050816] border-t border-white/[0.05] pt-20 pb-12 overflow-hidden">
      
      {/* Decorative glows */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-[#00D4FF]/5 via-transparent to-transparent rounded-full blur-[100px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top Branding Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/[0.05]">
          
          {/* Logo & Slogan (5/12 width) */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <div className={"bg-white rounded-lg shadow-md transition-all duration-300 p-1"}>
                        <a href="#home" className="flex items-center gap-2 group focus:outline-none">
                          <Image
                            src="/logo.jpeg"
                            alt="DiSEC Solutions Logo"
                            width={160}
                            height={45}
                            priority
                            className="h-10 w-auto object-contain group-hover:scale-105 transition-all duration-300"
                          />
                        </a>
              </div>
            
            <p className="mt-6 text-xl font-bold font-space text-white/90 max-w-sm leading-snug">
              Building the Future of Artificial Intelligence.
            </p>
            
            <p className="mt-3 text-xs text-[#94A3B8] max-w-xs leading-relaxed">
              Accelerating global intelligence. We build custom neural weights, autonomic automation scripts, and low-latency cloud API hosting vectors.
            </p>

            {/* Social Icons row */}
            <div className="mt-8 flex gap-4">
              <a
                href={SITE_CONFIG.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/[0.02] border border-white/[0.08] hover:border-[#00D4FF]/40 hover:text-[#00D4FF] flex items-center justify-center text-[#94A3B8] transition-colors duration-200"
                aria-label="DiSEC LinkedIn profile"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={SITE_CONFIG.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/[0.02] border border-white/[0.08] hover:border-[#00D4FF]/40 hover:text-[#00D4FF] flex items-center justify-center text-[#94A3B8] transition-colors duration-200"
                aria-label="DiSEC GitHub repository"
              >
                <Github size={16} />
              </a>
              <a
                href={SITE_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/[0.02] border border-white/[0.08] hover:border-[#00D4FF]/40 hover:text-[#00D4FF] flex items-center justify-center text-[#94A3B8] transition-colors duration-200"
                aria-label="DiSEC Instagram profile"
              >
                <Instagram size={16} />
              </a>
              <a
                href={`mailto:${SITE_CONFIG.contactEmail}`}
                className="w-9 h-9 rounded-lg bg-white/[0.02] border border-white/[0.08] hover:border-[#00D4FF]/40 hover:text-[#00D4FF] flex items-center justify-center text-[#94A3B8] transition-colors duration-200"
                aria-label="Email DiSEC Solutions"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Links Columns (7/12 width) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-5 gap-8 text-left">
            
            {/* Column Company */}
            <div className="flex flex-col">
              <h4 className="text-xs font-manrope font-bold tracking-widest text-white uppercase mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-xs text-[#94A3B8] hover:text-white transition-colors duration-150">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column Products */}
            <div className="flex flex-col">
              <h4 className="text-xs font-manrope font-bold tracking-widest text-white uppercase mb-4">Products</h4>
              <ul className="space-y-3">
                {footerLinks.products.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-xs text-[#94A3B8] hover:text-white transition-colors duration-150">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column Resources */}
            <div className="flex flex-col">
              <h4 className="text-xs font-manrope font-bold tracking-widest text-white uppercase mb-4">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-xs text-[#94A3B8] hover:text-white transition-colors duration-150">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column Investors */}
            <div className="flex flex-col">
              <h4 className="text-xs font-manrope font-bold tracking-widest text-white uppercase mb-4">Investors</h4>
              <ul className="space-y-3">
                {footerLinks.investors.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-xs text-[#94A3B8] hover:text-white transition-colors duration-150">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column Legal */}
            <div className="flex flex-col">
              <h4 className="text-xs font-manrope font-bold tracking-widest text-white uppercase mb-4">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-xs text-[#94A3B8] hover:text-white transition-colors duration-150">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom copyright & Scroll top */}
        <div className="mt-12 pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs text-[#94A3B8]/60 font-manrope">
            © {currentYear} DiSEC Solutions. All rights reserved. Encrypted Connection.
          </p>

          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.01] border border-white/[0.08] hover:border-white/20 text-xs text-[#94A3B8] hover:text-white transition-all duration-200 focus:outline-none"
            aria-label="Scroll to top of the page"
          >
            Back to Top
            <ArrowUp size={12} className="group-hover:-translate-y-0.5 transition-transform duration-200" />
          </button>
        </div>

      </div>
    </footer>
  );
};
export default Footer;
