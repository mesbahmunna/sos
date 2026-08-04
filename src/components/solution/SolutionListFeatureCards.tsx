"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Zap, Star, Target, BarChart, Rocket, Shield, Crown } from "lucide-react";

const ICONS = [Star, Target, Rocket, Zap, BarChart, Shield, Crown, CheckCircle2];

export function SolutionListFeatureCards({ data }: { data: { heading: string; description?: string; items: string[] } }) {
  return (
    <section className="py-20 md:py-24 bg-white text-foreground">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {data.items.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.1 }}
                className="group p-8 rounded-3xl bg-[#FAF9F7] hover:bg-white shadow-none hover:shadow-xl border border-transparent hover:border-foreground/10 transition-all flex items-start gap-4 h-full"
              >
                <div className="h-14 w-14 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 group-hover:-translate-y-1 transition-transform">
                  <Icon className="h-6 w-6 text-[color:var(--color-brand-cyan)]" strokeWidth={1.5} />
                </div>
                <div className="pt-2">
                  <h3 className="font-display text-xl leading-snug text-foreground">
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
