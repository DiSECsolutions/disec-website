"use client";

import React from "react";
import { motion } from "framer-motion";
import { BLOG_POSTS } from "@/data/siteData";
import { Calendar, Clock, ArrowUpRight } from "lucide-react";

export const Blog: React.FC = () => {
  // Category colors map
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Research":
        return "text-[#8B5CF6] border-[#8B5CF6]/30 bg-[#8B5CF6]/5";
      case "Engineering":
        return "text-[#00D4FF] border-[#00D4FF]/30 bg-[#00D4FF]/5";
      case "Updates":
        return "text-[#3B82F6] border-[#3B82F6]/30 bg-[#3B82F6]/5";
      default:
        return "text-[#94A3B8] border-white/[0.08] bg-white/[0.02]";
    }
  };

  return (
    <section 
      id="blog" 
      className="relative py-24 bg-[#050816] overflow-hidden"
    >
      {/* Decorative center glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#00D4FF]/3 via-[#3B82F6]/3 to-transparent rounded-full blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-xs font-manrope font-bold tracking-widest text-[#00D4FF] uppercase">
            Publications
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold font-space tracking-tight text-gradient-primary">
            Research & Insights
          </h2>
          <p className="mt-4 text-[#94A3B8] font-sans">
            Read the latest technical write-ups and announcements from the DiSEC engineering and research groups.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {BLOG_POSTS.map((post, index) => {
            return (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative p-6 rounded-3xl glass border-white/[0.05] hover:border-[#00D4FF]/25 bg-slate-950/20 hover:bg-slate-950/40 transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Category Tag */}
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-manrope font-bold tracking-widest uppercase px-2.5 py-1 rounded border ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </span>
                    <span className="text-white/20 group-hover:text-[#00D4FF] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 text-xl font-bold font-space text-white leading-snug group-hover:text-gradient-neon transition-all duration-300">
                    {post.title}
                  </h3>

                  {/* Snippet */}
                  <p className="mt-3 text-sm text-[#94A3B8] leading-relaxed">
                    {post.snippet}
                  </p>
                </div>

                {/* Metadata Row */}
                <div className="mt-8 pt-5 border-t border-white/[0.05] flex items-center justify-between text-xs text-[#94A3B8]/60">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>
                  <span className="font-manrope font-bold text-[#94A3B8]/90">
                    By {post.author}
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
export default Blog;
