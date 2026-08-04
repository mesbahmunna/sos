"use client";

import { motion } from "framer-motion";
import { AlertCircle, Target, XOctagon, Search, TrendingDown, Users } from "lucide-react";
import type { IndustryData } from "@/data/industries";

const icons = [AlertCircle, Target, XOctagon, Search, TrendingDown, Users];

export function IndustryChallenges({ data }: { data: IndustryData['challenges'] }) {
  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-24 lg:py-32">
      {/* Background Enhancements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Subtle mesh gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[color:var(--color-brand-blue)]/10 via-background to-background" />
        {/* Floating gradient blobs */}
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -left-32 top-32 h-[500px] w-[500px] rounded-full bg-[color:var(--color-brand-cyan)]/20 blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute right-0 top-1/2 h-[600px] w-[600px] rounded-full bg-[color:var(--color-brand-pink)]/15 blur-[150px]"
        />
        {/* Dotted texture */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L3N2Zz4=')] opacity-50" />
      </div>

      <div className="mx-auto max-w-[1400px] px-6 relative z-10 md:px-10">
        
        {/* Centered Header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-4 md:mb-6 inline-flex items-center gap-2 rounded-full border border-[color:var(--color-brand-cyan)]/30 bg-[color:var(--color-brand-cyan)]/10 px-5 py-2 text-sm font-medium text-[color:var(--color-brand-cyan)] backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-current"></span>
            </span>
            {data.listHeadline || "Marketing Challenges"}
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="mx-auto font-display text-2xl leading-[1.2] md:text-[clamp(28px,4.5vw,48px)] md:leading-[1.1] tracking-[-0.02em] text-balance text-foreground"
          >
            {data.headline}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-4 md:mt-6 max-w-[40ch] md:max-w-[65ch] text-base md:text-lg text-foreground/70 text-balance leading-relaxed"
          >
            {data.description}
          </motion.p>
        </div>

        {/* 3-Column Feature Grid */}
        <div className="mt-12 md:mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.items.map((item, index) => {
            const Icon = icons[index % icons.length];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative"
              >
                {/* Premium Animated Gradient Border */}
                <div className="absolute -inset-[1px] rounded-[24px] bg-gradient-to-br from-[color:var(--color-brand-cyan)]/40 via-transparent to-[color:var(--color-brand-pink)]/40 opacity-0 blur-[2px] transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute -inset-[1px] rounded-[24px] bg-gradient-to-br from-foreground/10 to-foreground/5" />
                
                {/* Card Body */}
                <div className="relative flex h-full min-h-[140px] flex-col justify-center rounded-[24px] bg-background/60 p-8 shadow-sm backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:bg-background/80 group-hover:shadow-2xl group-hover:shadow-[color:var(--color-brand-blue)]/10">
                  
                  {/* Internal Glow Effect */}
                  <div className="absolute inset-0 rounded-[24px] bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  
                  {/* Premium Gradient Icon */}
                  <div className="relative mb-5 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-foreground/5 to-foreground/10 transition-transform duration-500 group-hover:scale-110">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[color:var(--color-brand-blue)]/20 to-[color:var(--color-brand-pink)]/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <Icon className="relative z-10 h-6 w-6 text-foreground/70 transition-colors duration-500 group-hover:text-foreground" />
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-lg font-medium leading-snug text-foreground/90 transition-colors group-hover:text-foreground">
                      {item}
                    </h3>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
