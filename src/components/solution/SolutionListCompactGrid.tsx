"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Zap, Star, Target, BarChart, Rocket, Shield, Crown } from "lucide-react";

const ICONS = [Target, Zap, Star, BarChart, Rocket, Shield, Crown, CheckCircle2];

export function SolutionListCompactGrid({ data }: { data: { heading: string; description?: string; items: string[] } }) {
  return (
    <section className="py-20 md:py-24 bg-[#FAF9F7] text-foreground">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        
        <div className="max-w-3xl mb-12 md:mb-16">
          {data.heading && (
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4"
            >
              {data.heading}
            </motion.h2>
          )}
          {data.description && (
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-foreground/60 leading-relaxed"
            >
              {data.description}
            </motion.p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {data.items.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
                className="group p-6 rounded-2xl bg-white shadow-sm hover:shadow-md border border-foreground/5 hover:border-foreground/10 transition-all flex flex-col"
              >
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[color:var(--color-brand-blue)]/10 to-[color:var(--color-brand-purple)]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="h-5 w-5 text-[color:var(--color-brand-blue)]" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-lg leading-snug text-foreground group-hover:text-[color:var(--color-brand-blue)] transition-colors">
                  {item}
                </h3>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
