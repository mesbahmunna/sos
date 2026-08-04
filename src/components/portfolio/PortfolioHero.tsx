"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, TrendingUp, Users, Target, Activity } from "lucide-react";

const kpis = [
  { icon: TrendingUp, label: "Revenue", value: "+145%", color: "var(--brand-orange)" },
  { icon: Users, label: "Traffic", value: "2M+", color: "var(--brand-cyan)" },
  { icon: Target, label: "Conversion", value: "8.4%", color: "var(--brand-pink)" },
  { icon: Activity, label: "Engagement", value: "5x", color: "var(--brand-blue)" },
];

export function PortfolioHero() {
  return (
    <section className="relative overflow-hidden pt-32 md:pt-44 pb-20">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div 
          className="absolute -top-32 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-40 blur-3xl" 
          style={{ background: 'radial-gradient(closest-side, oklch(0.78 0.14 210 / 0.5), transparent)' }}
        ></div>
      </div>
      
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-xs uppercase tracking-[0.25em] text-foreground/50 mb-6">
              Our Work
            </div>
            <h1 className="font-display text-[clamp(3rem,8vw,7.5rem)] leading-[0.9] tracking-[-0.04em] text-balance">
              Made to <br />
              <em className="italic text-[color:var(--brand-orange)]">move</em> metrics.
            </h1>
            <p className="mt-8 max-w-lg text-lg text-foreground/70 md:text-xl">
              Explore our portfolio of category-defining work across restaurants, healthcare, retail, and real estate. Real businesses, real results.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href="/book"
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-foreground px-7 py-4 text-sm font-medium text-background transition hover:bg-foreground/85"
              >
                Start Your Project
                <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-foreground/15 px-7 py-4 text-sm font-medium hover:bg-foreground/5"
              >
                Connect Now
              </Link>
            </div>
          </motion.div>
          
          <div className="relative h-[400px] lg:h-[600px] w-full hidden md:block">
            {kpis.map((kpi, index) => {
              const Icon = kpi.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
                  transition={{
                    opacity: { duration: 0.6, delay: 0.2 + index * 0.1 },
                    scale: { duration: 0.6, delay: 0.2 + index * 0.1, type: "spring", stiffness: 100 },
                    y: { duration: 4 + index, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="absolute p-6 rounded-3xl bg-card border border-foreground/10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] backdrop-blur-xl flex flex-col gap-4"
                  style={{
                    top: `${15 + (index * 20)}%`,
                    left: `${index % 2 === 0 ? 10 : 50}%`,
                    zIndex: 10 - index,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div 
                      className="flex h-10 w-10 items-center justify-center rounded-full"
                      style={{ backgroundColor: `color-mix(in srgb, ${kpi.color} 15%, transparent)`, color: kpi.color }}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-medium text-foreground/60">{kpi.label}</span>
                  </div>
                  <div className="font-display text-4xl tracking-tight">{kpi.value}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
