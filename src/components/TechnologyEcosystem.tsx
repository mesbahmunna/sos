"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Database, Globe, Bot, Mail, MessageSquare, Zap, BarChart3 } from 'lucide-react';

const nodes = [
  { id: 'website', label: 'Website', icon: Globe, x: 0, y: 0 },
  { id: 'database', label: 'Database', icon: Database, x: 33.33, y: 0 },
  { id: 'crm', label: 'CRM', icon: Bot, isAi: true, x: 66.66, y: 0 },
  { id: 'automation', label: 'Automation', icon: Zap, x: 100, y: 0 },
  { id: 'analytics', label: 'Analytics', icon: BarChart3, x: 83.33, y: 100 },
  { id: 'chat', label: 'Chat', icon: MessageSquare, x: 50, y: 100 },
  { id: 'email', label: 'Email', icon: Mail, x: 16.66, y: 100 },
];

export function TechnologyEcosystem() {
  const pathData = "M 0 0 L 33.33 0 L 66.66 0 L 100 0 L 83.33 100 L 50 100 L 16.66 100";

  return (
    <div className="relative w-full mt-3 md:mt-5 pt-6 pb-8 md:pb-10 flex flex-col items-center justify-center">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[120px] bg-[color:var(--color-brand-cyan)]/10 blur-[40px] rounded-full pointer-events-none z-0"></div>

      <div className="relative w-full max-w-[280px] md:max-w-[400px] h-[85px] md:h-[110px] z-10">
        
        {/* Connection Lines (SVG) */}
        <svg 
          className="absolute inset-0 w-full h-full overflow-visible pointer-events-none" 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none"
        >
          {/* Base dashed line */}
          <path 
            d={pathData}
            fill="none" 
            stroke="rgba(255,255,255,0.15)" 
            strokeWidth="1.5" 
            strokeDasharray="4 4"
            vectorEffect="non-scaling-stroke" 
          />
          
          {/* Animated packets */}
          <circle r="1.5" fill="var(--color-brand-cyan)" filter="drop-shadow(0 0 4px var(--color-brand-cyan))">
             <animateMotion dur="5s" repeatCount="indefinite" path={pathData} calcMode="paced" />
             <animate attributeName="opacity" values="0;1;1;1;1;1;0" keyTimes="0;0.05;0.3;0.5;0.7;0.95;1" dur="5s" repeatCount="indefinite" />
          </circle>
          <circle r="1.5" fill="var(--color-brand-cyan)" filter="drop-shadow(0 0 4px var(--color-brand-cyan))">
             <animateMotion dur="5s" begin="1.66s" repeatCount="indefinite" path={pathData} calcMode="paced" />
             <animate attributeName="opacity" values="0;1;1;1;1;1;0" keyTimes="0;0.05;0.3;0.5;0.7;0.95;1" dur="5s" repeatCount="indefinite" />
          </circle>
          <circle r="1.5" fill="var(--color-brand-cyan)" filter="drop-shadow(0 0 4px var(--color-brand-cyan))">
             <animateMotion dur="5s" begin="3.33s" repeatCount="indefinite" path={pathData} calcMode="paced" />
             <animate attributeName="opacity" values="0;1;1;1;1;1;0" keyTimes="0;0.05;0.3;0.5;0.7;0.95;1" dur="5s" repeatCount="indefinite" />
          </circle>
        </svg>

        {/* Nodes */}
        {nodes.map((node, i) => (
          <div
            key={node.id}
            className="absolute z-20"
            style={{ 
              top: `${node.y}%`, 
              left: `${node.x}%`,
              transform: 'translate(-50%, -50%)'
            }}
          >
            <motion.div
              className="group flex flex-col items-center flex-shrink-0"
              animate={{ y: [0, -4, 0] }}
              transition={{
                duration: 3 + (i % 2),
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            >
              <div
                className={`relative flex items-center justify-center p-2.5 md:p-3 rounded-xl backdrop-blur-md border shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 
                  ${
                    node.isAi
                      ? "bg-[color:var(--color-brand-cyan)]/20 border-[color:var(--color-brand-cyan)]/50 shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                      : "bg-white/10 border-white/20 group-hover:bg-white/20 hover:border-white/30"
                  }
                `}
              >
                <node.icon className={`w-4 h-4 md:w-5 md:h-5 ${node.isAi ? "text-[color:var(--color-brand-cyan)]" : "text-white"}`} />
                {node.isAi && (
                  <div className="absolute inset-0 rounded-xl bg-[color:var(--color-brand-cyan)]/20 animate-pulse pointer-events-none"></div>
                )}
                
                {/* Node Connection Glow on Hover */}
                <div className="absolute inset-0 rounded-xl bg-white/0 group-hover:bg-white/5 transition-colors duration-300 pointer-events-none"></div>
              </div>
              
              {/* Label */}
              <span className="absolute top-[115%] left-1/2 -translate-x-1/2 pt-1 text-[10px] md:text-xs text-white/90 font-medium whitespace-nowrap tracking-wide">
                {node.label}
              </span>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
