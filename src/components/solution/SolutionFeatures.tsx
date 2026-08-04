"use client";

import * as motion from "framer-motion/client";
import { SolutionData } from "@/data/solutions";
import * as Icons from "lucide-react";

export function SolutionFeatures({ data }: { data: SolutionData['included'] }) {
  return (
    <section className="py-24 md:py-32 bg-background border-t border-foreground/5 relative">
      {/* Subtle Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] max-w-[1000px] bg-gradient-to-r from-[color:var(--color-brand-cyan)]/5 via-[color:var(--color-brand-blue)]/5 to-[color:var(--color-brand-pink)]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-[1400px] px-6 md:px-10 relative z-10">
        
        <div className="mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground max-w-3xl"
          >
            {data.heading}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {data.features.map((feature, i) => {
            // @ts-ignore
            const Icon = Icons[feature.icon] || Icons.Star;
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group flex flex-col p-8 rounded-3xl bg-foreground/[0.02] border border-foreground/5 hover:bg-background hover:shadow-lg hover:-translate-y-1 hover:border-foreground/10 transition-all duration-300"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-foreground/5 to-foreground/10 text-foreground transition-all duration-300 group-hover:scale-110 group-hover:bg-foreground group-hover:text-background">
                  <Icon className="h-6 w-6" />
                </div>
                
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-foreground/60 leading-relaxed text-sm flex-1">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
