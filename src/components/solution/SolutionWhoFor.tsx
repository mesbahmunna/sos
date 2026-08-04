"use client";

import * as motion from "framer-motion/client";
import { SolutionData } from "@/data/solutions";
import * as Icons from "lucide-react";

export function SolutionWhoFor({ data }: { data: SolutionData['whoFor'] }) {
  return (
    <section className="py-24 md:py-32 bg-background border-t border-foreground/5">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        
        {/* Header - 2 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-16 md:mb-24">
          <div className="md:col-span-5 lg:col-span-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl md:text-5xl tracking-tight text-foreground"
            >
              {data.heading}
            </motion.h2>
          </div>
          <div className="md:col-span-7 lg:col-span-6 lg:col-start-6 flex items-center">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-foreground/70 leading-relaxed"
            >
              {data.introduction}
            </motion.p>
          </div>
        </div>

        {/* 4 Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.cards.map((card, i) => {
            // @ts-ignore
            const Icon = Icons[card.icon] || Icons.Briefcase;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative rounded-3xl bg-foreground/[0.02] border border-foreground/5 p-8 transition-all hover:bg-background hover:shadow-xl hover:border-transparent hover:-translate-y-1"
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[color:var(--color-brand-blue)]/10 to-[color:var(--color-brand-cyan)]/10 text-[color:var(--color-brand-blue)] transition-transform group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </div>
                
                <h3 className="font-display text-xl text-foreground mb-3">
                  {card.title}
                </h3>
                
                <p className="text-foreground/60 leading-relaxed text-sm">
                  {card.description}
                </p>
                
                {/* Decorative hover gradient border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[color:var(--color-brand-blue)] to-[color:var(--color-brand-pink)] opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-10 -z-10" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
