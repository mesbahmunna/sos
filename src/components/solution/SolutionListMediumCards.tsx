"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Zap, Star, Target, BarChart, Rocket, Shield, Crown } from "lucide-react";

const ICONS = [Zap, CheckCircle2, Rocket, Star, BarChart, Shield, Crown, Target];

export function SolutionListMediumCards({ data }: { data: { heading: string; description?: string; items: string[] } }) {
  return (
    <section className="py-20 md:py-24 bg-[#F8F6F2] text-foreground">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {data.items.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.1 }}
                className="group p-8 rounded-2xl bg-white shadow-sm hover:shadow-lg border border-foreground/5 hover:border-transparent transition-all flex flex-col h-full"
              >
                <div className="h-12 w-12 rounded-xl bg-[color:var(--color-brand-orange)]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:bg-[color:var(--color-brand-orange)]">
                  <Icon className="h-6 w-6 text-[color:var(--color-brand-orange)] group-hover:text-white transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl leading-snug text-foreground group-hover:text-[color:var(--color-brand-orange)] transition-colors">
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
