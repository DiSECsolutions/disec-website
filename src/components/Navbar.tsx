"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Industries", href: "#industries" },
    { label: "Investors", href: "#investors" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "h-16 bg-[#050816]/75 backdrop-blur-md border-b border-white/[0.08]" 
            : "h-20 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between gap-8">
          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-manrope font-semibold text-[#94A3B8] hover:text-white transition-colors duration-200 relative py-2 focus:outline-none focus:text-white uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#00D4FF] via-[#3B82F6] to-[#8B5CF6] text-black font-bold text-sm hover:opacity-90 transition-all duration-300 shadow-lg shadow-[#00D4FF]/20 hover:-translate-y-0.5"
            >
              Partner With Us
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#94A3B8] hover:text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 z-40 lg:hidden bg-[#050816]/95 backdrop-blur-lg border-b border-white/[0.08] overflow-y-auto px-6 py-8 flex flex-col gap-6"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-manrope font-semibold text-[#94A3B8] hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <hr className="border-white/[0.08] my-2" />
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-gradient-to-r from-[#00D4FF] to-[#3B82F6] text-black font-bold hover:opacity-90 transition-opacity duration-300"
            >
              Partner With Us
              <ArrowRight size={18} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default Navbar;
