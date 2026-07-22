"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PRODUCT_ECOSYSTEM } from "@/data/siteData";
import { Brain, Cpu, Workflow, BarChart, Cloud, Layers, ArrowRight, Activity, CpuIcon, Network, ShieldCheck, Gauge } from "lucide-react";

const IconMap = {
  Brain, Cpu, Workflow, BarChart, Cloud, Layers
};

// Telemetry/operational mock data for a futuristic dashboard feel
interface ProductTelemetry {
  latency: string;
  load: string;
  reliability: string;
  statName: string;
  statValue: string;
  capabilities: string[];
}

const TELEMETRY_DATA: Record<string, ProductTelemetry> = {
  platform: {
    latency: "< 2 ms",
    load: "42% CPU / GPU",
    reliability: "99.999% SLA",
    statName: "Orchestrated Nodes",
    statValue: "1,240 Instances",
    capabilities: ["Autonomous routing gates", "Secure differential privacy loops", "Multi-region memory pools"]
  },
  assistants: {
    latency: "18 ms avg",
    load: "84% GPU Peak",
    reliability: "99.9% Uptime",
    statName: "Active Agent Clusters",
    statValue: "8,400 Units",
    capabilities: ["Hierarchical goal planning", "Dynamic short-term vector memory", "Human-in-the-loop gates"]
  },
  automation: {
    latency: "120 ms action",
    load: "15% Compute",
    reliability: "99.99% Success",
    statName: "Executions / Day",
    statValue: "1.2 Million",
    capabilities: ["Legacy terminal automation", "Self-healing action scripts", "Autonomic error state recovery"]
  },
  analytics: {
    latency: "5 ms query",
    load: "60% Memory Pool",
    reliability: "100% Consistent",
    statName: "Ingestion Speed",
    statValue: "12.4 GB / Sec",
    capabilities: ["pgvector similarity graphs", "Anomaly signal classification", "Real-time forecasting runs"]
  },
  apis: {
    latency: "12 ms latency",
    load: "28% GPU Clusters",
    reliability: "99.995% SLA",
    statName: "Inference Queries",
    statValue: "48K req / Sec",
    capabilities: ["Token optimization layers", "Fast image/text embeddings", "Speculative decoding grids"]
  },
  "custom-models": {
    latency: "24 ms avg",
    load: "95% TPU Cluster",
    reliability: "Air-Gapped",
    statName: "Model Parameters",
    statValue: "70 Billion",
    capabilities: ["Bespoke weight structures", "Air-gapped local checkpoints", "Synthesized training loop optimization"]
  }
};

export const Products: React.FC = () => {
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [selectedNodeId, setSelectedNodeId] = useState<string>("platform");

  const activeNodeId = hoveredNodeId || selectedNodeId;
  const activeNode = PRODUCT_ECOSYSTEM.find(n => n.id === activeNodeId) || PRODUCT_ECOSYSTEM[0];
  const telemetry = TELEMETRY_DATA[activeNode.id] || TELEMETRY_DATA.platform;

  // Orbit node coordinates mapped mathematically to fit 0-100 viewBox
  const orbitCoordinates: Record<string, { x: number; y: number }> = {
    platform: { x: 50, y: 50 }, // Center Hub
    assistants: { x: 50 + 38 * Math.cos(0), y: 50 + 38 * Math.sin(0) }, // 88, 50
    automation: { x: 50 + 38 * Math.cos(1.25), y: 50 + 38 * Math.sin(1.25) }, // 62.1, 86.1
    analytics: { x: 50 + 38 * Math.cos(2.51), y: 50 + 38 * Math.sin(2.51) }, // 19.3, 72.4
    apis: { x: 50 + 38 * Math.cos(3.77), y: 50 + 38 * Math.sin(3.77) }, // 19.3, 27.6
    "custom-models": { x: 50 + 38 * Math.cos(5.02), y: 50 + 38 * Math.sin(5.02) }, // 62.1, 13.9
  };

  const getCoordinates = (id: string) => {
    return orbitCoordinates[id] || { x: 50, y: 50 };
  };

  const isLineActive = (node1Id: string, node2Id: string) => {
    return activeNodeId === node1Id || activeNodeId === node2Id;
  };

  return (
    <section 
      id="products" 
      className="section-frame relative py-24 md:py-32 bg-[#050816] overflow-hidden"
    >
      {/* Decorative center glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#00D4FF]/5 via-[#8B5CF6]/5 to-transparent rounded-full blur-[160px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-left max-w-3xl mb-16 md:mb-20">
          <span className="text-xs font-manrope font-bold tracking-widest text-[#00D4FF] uppercase">
            Ecosystem Core
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold font-space tracking-tight text-gradient-primary">
            The DiSEC AI Ecosystem
          </h2>
          <p className="mt-4 text-[#94A3B8] font-sans text-lg">
            Our products operate as an interconnected neural stack. Hover over nodes to explore real-time integrations and data feedback lines.
          </p>
        </div>

        {/* Dashboard grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* LEFT: Dashboard Control Panel (5 columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 md:p-8 rounded-3xl glass border-white/[0.08] bg-slate-950/40 backdrop-blur-xl relative overflow-hidden text-left shadow-2xl shadow-black/50">
            {/* Top diagnostic panel headers */}
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#00D4FF]/40 to-transparent" />
            <div className="flex items-center justify-between border-b border-white/[0.05] pb-4 mb-6">
              <span className="text-[10px] font-manrope font-bold tracking-widest text-[#00D4FF] uppercase flex items-center gap-1.5">
                <Activity size={12} className="animate-pulse" />
                SELECTED MODULE
              </span>
              <span className="text-[10px] font-manrope text-[#94A3B8]/60 uppercase">
                ID: {activeNode.id.toUpperCase()}
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeNode.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="flex-1 flex flex-col justify-between"
              >
                {/* Node Title & Icon */}
                <div>
                  <div className="flex items-center gap-3">
                    <span className="p-3 rounded-2xl bg-[#00D4FF]/10 border border-[#00D4FF]/25 text-[#00D4FF] shadow-lg shadow-[#00D4FF]/10">
                      {React.createElement(IconMap[activeNode.iconName] || Brain, { size: 24 })}
                    </span>
                    <div>
                      <h3 className="text-2xl font-bold font-space text-white tracking-tight">{activeNode.name}</h3>
                      <p className="text-xs text-[#00D4FF] font-manrope font-semibold uppercase tracking-wider mt-0.5">Core Module</p>
                    </div>
                  </div>

                  {/* Node description */}
                  <p className="mt-6 text-sm text-[#94A3B8] leading-relaxed">
                    {activeNode.description}
                  </p>

                  {/* Telemetry Metrics Panel */}
                  <div className="mt-8 grid grid-cols-2 gap-4 border-y border-white/[0.05] py-6">
                    <div className="text-left">
                      <p className="text-[10px] font-manrope font-bold uppercase tracking-wider text-[#94A3B8]/60 flex items-center gap-1">
                        <Gauge size={10} />
                        Response Latency
                      </p>
                      <p className="text-lg font-bold font-space text-white mt-1">{telemetry.latency}</p>
                    </div>
                    <div className="text-left">
                      <p className="text-[10px] font-manrope font-bold uppercase tracking-wider text-[#94A3B8]/60 flex items-center gap-1">
                        <CpuIcon size={10} />
                        Compute Load
                      </p>
                      <p className="text-lg font-bold font-space text-white mt-1">{telemetry.load}</p>
                    </div>
                    <div className="text-left mt-2">
                      <p className="text-[10px] font-manrope font-bold uppercase tracking-wider text-[#94A3B8]/60 flex items-center gap-1">
                        <ShieldCheck size={10} />
                        Security State
                      </p>
                      <p className="text-lg font-bold font-space text-[#00D4FF] mt-1">{telemetry.reliability}</p>
                    </div>
                    <div className="text-left mt-2">
                      <p className="text-[10px] font-manrope font-bold uppercase tracking-wider text-[#94A3B8]/60 flex items-center gap-1">
                        <Network size={10} />
                        {telemetry.statName}
                      </p>
                      <p className="text-lg font-bold font-space text-white mt-1">{telemetry.statValue}</p>
                    </div>
                  </div>

                  {/* Capabilities Bullet points */}
                  <div className="mt-6">
                    <h4 className="text-[10px] font-manrope font-bold uppercase tracking-widest text-[#8B5CF6] mb-3">Capabilities</h4>
                    <ul className="space-y-2">
                      {telemetry.capabilities.map((cap, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-[#94A3B8]">
                          <span className="w-1 h-1 rounded-full bg-[#00D4FF]" />
                          {cap}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Inquire Action Button */}
                <div className="mt-8 pt-6 border-t border-white/[0.05]">
                  <a
                    href="#contact"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl border border-[#00D4FF]/30 text-white font-semibold text-sm hover:bg-[#00D4FF]/5 transition-all duration-200"
                  >
                    Integrate {activeNode.name}
                    <ArrowRight size={14} />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT: Orbit Visual Interactive Canvas (7 columns) */}
          <div className="lg:col-span-7 relative h-[520px] md:h-[580px] rounded-3xl glass border-white/[0.08] bg-[#070b19]/30 overflow-hidden shadow-2xl">
            <div className="absolute top-5 left-6 right-6 z-20 flex items-center justify-between pointer-events-none">
              <span className="text-[10px] font-manrope font-bold tracking-widest uppercase text-white/60">Product map</span>
              <span className="text-[10px] font-manrope tracking-widest uppercase text-[#94A3B8]/50">01 — 06</span>
            </div>
            
            {/* SVG Connecting Lines Canvas */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none z-0" 
              viewBox="0 0 100 100" 
              preserveAspectRatio="none"
            >
              {/* Outer Orbit Guideline Rings to add tech layout complexity */}
              <circle cx="50" cy="50" r="38" fill="none" stroke="rgba(255,255,255,0.015)" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="38" fill="none" stroke="rgba(0,212,255,0.02)" strokeWidth="0.3" strokeDasharray="1 2" />

              {(() => {
                const renderedPairs = new Set<string>();

                return PRODUCT_ECOSYSTEM.flatMap((node) => {
                  const coordStart = getCoordinates(node.id);
                  
                  return node.connections.map((connId) => {
                    const targetNode = PRODUCT_ECOSYSTEM.find(n => n.id === connId);
                    if (!targetNode) return null;

                    // Ensure unique pair key to prevent duplicate lines
                    const pairKey = [node.id, targetNode.id].sort().join("-");
                    if (renderedPairs.has(pairKey)) return null;
                    renderedPairs.add(pairKey);

                    const coordEnd = getCoordinates(targetNode.id);
                    const active = isLineActive(node.id, targetNode.id);

                    return (
                      <g key={pairKey}>
                        {/* Interactive Connecting Line */}
                        <motion.line
                          x1={coordStart.x}
                          y1={coordStart.y}
                          x2={coordEnd.x}
                          y2={coordEnd.y}
                          stroke={active ? "url(#neon-gradient-orbit)" : "rgba(255, 255, 255, 0.04)"}
                          strokeWidth={active ? 0.45 : 0.08}
                          className="transition-all duration-300"
                        />
                        {/* Animated moving pulse dots along active lines */}
                        {active && (
                          (() => {
                            const isEndCenter = targetNode.id === "platform";
                            const animStartX = isEndCenter ? coordEnd.x : coordStart.x;
                            const animStartY = isEndCenter ? coordEnd.y : coordStart.y;
                            const animEndX = isEndCenter ? coordStart.x : coordEnd.x;
                            const animEndY = isEndCenter ? coordStart.y : coordEnd.y;

                            return (
                              <motion.circle
                                cx={animStartX}
                                cy={animStartY}
                                r="0.7"
                                fill="#00D4FF"
                                className="glow-primary"
                                animate={{
                                  cx: [animStartX, animEndX],
                                  cy: [animStartY, animEndY],
                                }}
                                transition={{
                                  duration: 2.5,
                                  repeat: Infinity,
                                  ease: "linear",
                                }}
                              />
                            );
                          })()
                        )}
                      </g>
                    );
                  });
                });
              })()}
              
              {/* Gradients */}
              <defs>
                <linearGradient id="neon-gradient-orbit" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#00D4FF" />
                  <stop offset="50%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>
            </svg>

            {/* Interactive HTML Nodes overlay */}
            {PRODUCT_ECOSYSTEM.map((node) => {
              const NodeIcon = IconMap[node.iconName] || Brain;
              const coords = getCoordinates(node.id);
              const isActive = activeNodeId === node.id;
              const isCenter = node.id === "platform";

              return (
                <div
                  key={node.id}
                  style={{
                    position: "absolute",
                    left: `${coords.x}%`,
                    top: `${coords.y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  className="z-10 flex flex-col items-center"
                >
                  {/* Expanding ring wave under active nodes */}
                  {isActive && (
                    <span 
                      className={`absolute inset-0 rounded-full animate-ping pointer-events-none opacity-20 border-2 ${
                        isCenter ? "border-[#8B5CF6]" : "border-[#00D4FF]"
                      }`}
                    />
                  )}

                  <motion.button
                    onClick={() => setSelectedNodeId(node.id)}
                    onMouseEnter={() => setHoveredNodeId(node.id)}
                    onMouseLeave={() => setHoveredNodeId(null)}
                    className={`relative rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none cursor-pointer ${
                      isCenter 
                        ? `w-20 h-20 bg-slate-900 border-2 ${isActive ? "border-[#8B5CF6] scale-105 shadow-lg shadow-[#8B5CF6]/30" : "border-white/10"}` 
                        : `w-14 h-14 bg-slate-950/90 border ${isActive ? "border-[#00D4FF] scale-110 shadow-lg shadow-[#00D4FF]/20" : "border-white/5 hover:border-white/20"}`
                    }`}
                  >
                    <NodeIcon 
                      size={isCenter ? 28 : 20} 
                      className={`transition-colors duration-300 ${
                        isActive 
                          ? (isCenter ? "text-[#8B5CF6]" : "text-[#00D4FF]") 
                          : "text-[#94A3B8]"
                      }`} 
                    />
                  </motion.button>

                  {/* Small absolute node details tag */}
                  <span 
                    className={`mt-2 px-2 py-0.5 rounded text-[10px] font-space font-bold transition-all duration-300 select-none ${
                      isActive
                        ? "bg-white/10 text-white border border-white/10"
                        : "bg-black/40 text-[#94A3B8] border border-transparent"
                    }`}
                  >
                    {node.name}
                  </span>
                </div>
              );
            })}

            {/* Instruction Banner overlay */}
            <div className="absolute bottom-5 left-6 flex items-center gap-2 text-[10px] font-manrope text-[#94A3B8]/60 bg-black/30 px-3 py-1.5 rounded-full border border-white/[0.03]">
              <Network size={12} className="text-[#00D4FF] animate-pulse" />
              <span>Hover nodes to route analytics data</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
export default Products;
