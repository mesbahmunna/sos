"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Box, Layers, Zap, Shield, Sparkles } from "lucide-react";
import type { IndustryData } from "@/data/industries";

const gridIcons = [Box, Layers, Zap, Shield, Sparkles, CheckCircle2];

export function IndustryIncluded({ data }: { data: IndustryData['included'] }) {
  return (
    <section className="relative overflow-hidden bg-foreground py-16 md:py-24 text-background lg:py-32">
      {/* Abstract dotted background pattern */}
      <svg className="absolute inset-0 h-full w-full opacity-10" aria-hidden="true">
        <defs>
          <pattern id="included-pattern" width="32" height="32" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="currentColor"></circle>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#included-pattern)"></rect>
      </svg>
      
      {/* Soft gradient glow */}
      <div className="absolute left-1/2 top-0 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-[color:var(--color-brand-cyan)]/10 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-[1400px] px-6 relative z-10 md:px-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-6 mx-auto inline-flex items-center gap-2 rounded-full border border-background/20 bg-background/10 px-4 py-1.5 text-xs backdrop-blur-md"
          >
            <Sparkles className="h-3 w-3 text-[color:var(--color-brand-cyan)]" />
            <span className="text-background/80 uppercase tracking-widest">What's Included</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-[20ch] font-display text-4xl sm:text-5xl md:text-6xl leading-[1.1] tracking-[-0.02em] text-balance text-background"
          >
            {data.headline}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-[65ch] text-lg text-background/70 text-balance"
          >
            {data.description}
          </motion.p>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.items.map((item, index) => {
            const Icon = gridIcons[index % gridIcons.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative overflow-hidden rounded-3xl border border-background/10 bg-background/5 p-8 backdrop-blur-sm transition-all hover:bg-background/10"
              >
                {/* Top Corner Gradient Accent */}
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[color:var(--color-brand-cyan)]/20 blur-3xl transition-opacity group-hover:opacity-100 opacity-0" />
                
                <div className="relative z-10 flex flex-col min-h-[140px]">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-background/10 text-background transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-7 w-7" />
                  </div>
                  
                  <h3 className="text-xl font-medium leading-snug text-background mt-auto">
                    {item}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
