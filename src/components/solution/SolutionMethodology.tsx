"use client";

import * as motion from "framer-motion/client";
import { SolutionData } from "@/data/solutions";
import * as Icons from "lucide-react";

export function SolutionMethodology({ data }: { data: SolutionData['ourSolution'] }) {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        
        <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground"
          >
            {data.heading}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {data.cards.map((card, i) => {
            // @ts-ignore
            const Icon = Icons[card.icon] || Icons.CheckCircle;
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative p-8 md:p-10 rounded-[2rem] bg-card border border-foreground/5 hover:border-foreground/10 transition-all hover:-translate-y-1 hover:shadow-xl overflow-hidden"
              >
                {/* Large Background Number */}
                <div className="absolute top-5 right-5 text-[120px] font-display font-bold leading-none text-foreground/[0.03] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-12 pointer-events-none select-none">
                  {card.number}
                </div>

                <div className="relative z-10">
                  <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[color:var(--color-brand-orange)]/10 to-[color:var(--color-brand-pink)]/10 text-[color:var(--color-brand-orange)] group-hover:scale-110 transition-transform duration-500">
                    <Icon className="h-7 w-7" />
                  </div>
                  
                  <div className="flex items-baseline gap-4 mb-4">
                    <span className="text-sm font-bold text-foreground/30 tracking-wider">
                      {card.number}
                    </span>
                    <h3 className="font-display text-2xl text-foreground">
                      {card.title}
                    </h3>
                  </div>
                  
                  <p className="text-foreground/60 leading-relaxed text-base">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
