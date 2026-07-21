"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_CONFIG } from "@/constants";
import { Send, Mail, Phone, CheckCircle2, ChevronRight } from "lucide-react";

export const Contact: React.FC = () => {
  const [formType, setFormType] = useState<"sales" | "partner" | "investor">("sales");
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);

    try {
      const payload = new URLSearchParams({
        "form-name": "disec-contact",
        inquiryType: formType,
        ...formData,
      });

      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: payload.toString(),
      });

      if (!response.ok) {
        throw new Error("Netlify form submission failed");
      }

      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", company: "", email: "", phone: "", message: "" });
    } catch {
      setIsSubmitting(false);
      setSubmitError(true);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
  };

  return (
    <section 
      id="contact" 
      className="section-frame relative py-24 md:py-32 bg-[#050816] overflow-hidden"
    >
      {/* Decorative glows */}
      <div 
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-[#00D4FF]/5 via-[#3B82F6]/5 to-transparent rounded-full blur-[120px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Heading & Info (5/12 width) */}
          <div className="lg:col-span-5 flex flex-col text-left">
            <span className="text-xs font-manrope font-bold tracking-widest text-[#00D4FF] uppercase">
              Get in Touch
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold font-space text-gradient-primary leading-tight">
              Let&apos;s Build <br />
              <span className="text-gradient-neon">Intelligence Together.</span>
            </h2>
            <p className="mt-6 text-[#94A3B8] font-sans leading-relaxed text-base">
              Whether you are an enterprise seeking custom models, a startup looking for automation suites, or an institutional investor wanting to discuss our roadmap, our team is ready.
            </p>

            {/* Office Coordinates details */}
            <div className="mt-12 space-y-6">
              {/* <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/[0.08] flex items-center justify-center text-[#00D4FF] flex-shrink-0">
                  <MapPin size={18} />
                </div>
                <div className="text-left">
                  <p className="text-xs font-manrope font-bold uppercase tracking-wider text-[#94A3B8]">Headquarters</p>
                  <p className="text-sm text-white mt-1 leading-relaxed">{SITE_CONFIG.address}</p>
                </div>
              </div> */}

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/[0.08] flex items-center justify-center text-[#3B82F6] flex-shrink-0">
                  <Mail size={18} />
                </div>
                <div className="text-left">
                  <p className="text-xs font-manrope font-bold uppercase tracking-wider text-[#94A3B8]">Partnerships</p>
                  <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="text-sm text-white hover:text-[#00D4FF] transition-colors duration-200 mt-1 block">
                    {SITE_CONFIG.contactEmail}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/[0.08] flex items-center justify-center text-[#8B5CF6] flex-shrink-0">
                  <Phone size={18} />
                </div>
                <div className="text-left">
                  <p className="text-xs font-manrope font-bold uppercase tracking-wider text-[#94A3B8]">Operations</p>
                  <p className="text-sm text-white mt-1">{SITE_CONFIG.contactPhone}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form Container (7/12 width) */}
          <div className="lg:col-span-7 w-full">
            <div className="glass-card border-white/[0.08] rounded-3xl p-8 md:p-10 relative overflow-hidden bg-slate-950/40">
              
              {/* Type Switcher Tabs */}
              <div className="flex border-b border-white/[0.05] mb-8 pb-1">
                {(["sales", "partner", "investor"] as const).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setFormType(type)}
                    className={`flex-1 pb-4 text-xs font-manrope font-bold tracking-widest uppercase transition-all duration-300 border-b-2 focus:outline-none ${
                      formType === type
                        ? "border-[#00D4FF] text-white"
                        : "border-transparent text-[#94A3B8] hover:text-white"
                    }`}
                  >
                    {type === "sales" ? "Contact Sales" : type === "partner" ? "Become Partner" : "Investor Relations"}
                  </button>
                ))}
              </div>

              {/* Animate Form States */}
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    name="disec-contact"
                    method="POST"
                    action="/__forms.html?success=true"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    className="space-y-6 text-left"
                  >
                    <input type="hidden" name="form-name" value="disec-contact" />
                    <input type="hidden" name="inquiryType" value={formType} />
                    <div className="hidden" aria-hidden="true">
                      <label htmlFor="bot-field">Don&apos;t fill this out if you&apos;re human</label>
                      <input id="bot-field" name="bot-field" tabIndex={-1} autoComplete="off" />
                    </div>

                    {/* Two column Name & Company */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col">
                        <label htmlFor="name" className="text-xs font-manrope font-semibold text-[#94A3B8] mb-2">Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Jane Doe"
                          className="px-4 py-3 rounded-xl bg-white/[0.02] border border-white/[0.08] focus:border-[#00D4FF] focus:bg-white/[0.04] text-white text-sm focus:outline-none transition-all duration-200"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label htmlFor="company" className="text-xs font-manrope font-semibold text-[#94A3B8] mb-2">Company / Organization *</label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Acme Corp"
                          className="px-4 py-3 rounded-xl bg-white/[0.02] border border-white/[0.08] focus:border-[#00D4FF] focus:bg-white/[0.04] text-white text-sm focus:outline-none transition-all duration-200"
                        />
                      </div>
                    </div>

                    {/* Two column Email & Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col">
                        <label htmlFor="email" className="text-xs font-manrope font-semibold text-[#94A3B8] mb-2">Corporate Email *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="jane@company.com"
                          className="px-4 py-3 rounded-xl bg-white/[0.02] border border-white/[0.08] focus:border-[#00D4FF] focus:bg-white/[0.04] text-white text-sm focus:outline-none transition-all duration-200"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label htmlFor="phone" className="text-xs font-manrope font-semibold text-[#94A3B8] mb-2">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (555) 000-0000"
                          className="px-4 py-3 rounded-xl bg-white/[0.02] border border-white/[0.08] focus:border-[#00D4FF] focus:bg-white/[0.04] text-white text-sm focus:outline-none transition-all duration-200"
                        />
                      </div>
                    </div>

                    {/* Message Area */}
                    <div className="flex flex-col">
                      <label htmlFor="message" className="text-xs font-manrope font-semibold text-[#94A3B8] mb-2">Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your requirements..."
                        className="px-4 py-3 rounded-xl bg-white/[0.02] border border-white/[0.08] focus:border-[#00D4FF] focus:bg-white/[0.04] text-white text-sm focus:outline-none transition-all duration-200 resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-[#00D4FF] to-[#3B82F6] text-black font-bold text-sm hover:opacity-95 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#00D4FF]/10"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 rounded-full border-2 border-black border-t-transparent animate-spin" />
                          Processing Inquiry...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Send Secure Request
                        </>
                      )}
                    </button>
                    {submitError && (
                      <p className="text-center text-xs text-[#FF8A8A]" role="alert">
                        We couldn&apos;t send your request. Please try again.
                      </p>
                    )}
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 flex flex-col items-center justify-center text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/30 flex items-center justify-center text-[#00D4FF] mb-6">
                      <CheckCircle2 size={32} className="animate-pulse" />
                    </div>
                    <h3 className="text-2xl font-bold font-space text-white">Request Received</h3>
                    <p className="mt-3 text-sm text-[#94A3B8] max-w-sm leading-relaxed">
                      Thank you. Your inquiry has been encrypted and routed to our {formType === "sales" ? "sales executives" : formType === "partner" ? "partnership managers" : "investor relations team"}. We will follow up within 24 hours.
                    </p>
                    <button
                      onClick={handleReset}
                      className="mt-8 inline-flex items-center gap-1.5 text-xs font-manrope font-bold text-[#00D4FF] hover:text-white transition-colors duration-200"
                    >
                      Submit Another Inquiry
                      <ChevronRight size={14} />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
export default Contact;
