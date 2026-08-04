"use client";

import { motion } from "framer-motion";

const metrics = [
  { value: "550+", label: "Businesses Served", description: "Across multiple industries in India" },
  { value: "5K+", label: "Projects Delivered", description: "Websites, branding, marketing & automation" },
  { value: "98%", label: "Client Satisfaction", description: "Built on long-term relationships" },
];

export function ImpactMetrics() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 md:px-10 mb-16 md:mb-32">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-[#F5F3EE] text-foreground p-8 md:p-20 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)]">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div
            className="absolute -left-20 -top-20 h-96 w-96 rounded-full opacity-10 blur-3xl"
            style={{
              background:
                "radial-gradient(closest-side, oklch(0.62 0.24 25 / 0.7), transparent)",
            }}
          ></div>
        </div>
        
        <div className="relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <div className="text-xs uppercase tracking-[0.25em] opacity-70 mb-6 text-foreground/70">
                The Impact
              </div>
              <h2 className="max-w-[18ch] font-display text-[clamp(2.5rem,4.5vw,4rem)] leading-[1.05] tracking-tight">
                Numbers that speak for themselves.
              </h2>
            </div>
            <p className="max-w-xs text-foreground/70">
              We measure our success entirely by the measurable growth of the businesses we partner with.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 pt-10 border-t border-foreground/10">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="font-display text-[clamp(3rem,6vw,5rem)] tracking-tight mb-2 text-transparent bg-clip-text bg-gradient-to-br from-[color:var(--color-brand-orange)] to-[color:var(--color-brand-pink)]">
                  {metric.value}
                </div>
                <div className="text-lg font-medium mb-2">{metric.label}</div>
                <div className="text-sm text-foreground/60 leading-relaxed max-w-[250px]">
                  {metric.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
