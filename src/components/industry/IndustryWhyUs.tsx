"use client";

import { motion } from "framer-motion";
import { Check, Star, ShieldCheck, Zap } from "lucide-react";
import type { IndustryData } from "@/data/industries";

const benefitIcons = [Star, ShieldCheck, Zap, Check];

import { IndustryWhyUsIllustration } from "./IndustryWhyUsIllustration";

export function IndustryWhyUs({ data, slug }: { data: IndustryData['whyUs'], slug: string }) {
  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid gap-16 lg:grid-cols-2">
          
          {/* Left: Sticky Abstract Visual & Header */}
          <div className="relative">
            <div className="sticky top-32">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="max-w-[15ch] font-display text-4xl sm:text-5xl md:text-6xl leading-[1.1] tracking-[-0.02em] text-balance"
              >
                {data.headline}
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mt-6 max-w-[55ch] text-lg text-foreground/70 text-balance"
              >
                {data.description}
              </motion.p>

              {/* Premium Dashboard Illustration */}
              <IndustryWhyUsIllustration slug={slug} />
            </div>
          </div>

          {/* Right: Staggered Benefit Cards */}
          <div className="flex flex-col gap-6 lg:pt-32">
            {data.items.map((item, index) => {
              const Icon = benefitIcons[index % benefitIcons.length];
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group relative flex min-h-[160px] md:h-auto md:min-h-[120px] items-center md:items-start gap-4 md:gap-6 rounded-3xl border border-foreground/10 bg-background p-5 md:p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-[color:var(--color-brand-blue)]/5 z-10"
                >
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[color:var(--color-brand-cyan)]/0 to-[color:var(--color-brand-cyan)]/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  
                  <div className="relative flex h-10 w-10 md:h-12 md:w-12 shrink-0 items-center justify-center rounded-full bg-foreground/[0.03] text-foreground/80 transition-colors group-hover:bg-[color:var(--color-brand-blue)]/10 group-hover:text-[color:var(--color-brand-blue)]">
                    <Icon className="h-5 w-5 md:h-6 md:w-6" />
                  </div>
                  
                  <div className="relative flex-1">
                    <h3 className="text-base md:text-xl font-medium leading-snug text-foreground/90 group-hover:text-foreground">
                      {item}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
