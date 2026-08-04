"use client";

import * as motion from "framer-motion/client";
import { SolutionData } from "@/data/solutions";

export function SolutionProcessTimeline({ data }: { data: SolutionData['process'] }) {
  return (
    <section className="py-24 md:py-32 bg-background relative">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        
        <div className="mb-16 md:mb-24 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground"
          >
            {data.heading}
          </motion.h2>
        </div>

        <div className="relative mt-20">
          {/* Horizontal Line Background (Desktop) */}
          <div className="hidden lg:block absolute top-[28px] left-[8.333%] right-[8.333%] h-0.5 bg-foreground/10" />
          
          {/* Animated Horizontal Line (Desktop) */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="hidden lg:block absolute top-[28px] left-[8.333%] right-[8.333%] h-0.5 bg-gradient-to-r from-[color:var(--color-brand-blue)] via-[color:var(--color-brand-purple)] to-[color:var(--color-brand-pink)] origin-left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-6 relative z-10">
            {data.steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative flex flex-col lg:items-center lg:text-center"
              >
                {/* Timeline Dot */}
                <div className="w-14 h-14 rounded-full bg-background border-4 border-background flex items-center justify-center mb-6 shadow-[0_0_0_2px_rgba(var(--foreground-rgb),0.1)] lg:shadow-none lg:bg-transparent lg:border-none relative">
                  
                  {/* Outer glowing ring for lg screens */}
                  <div className="hidden lg:flex absolute inset-0 rounded-full bg-background items-center justify-center">
                    <div className="w-14 h-14 rounded-full border-2 border-foreground/20 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[color:var(--color-brand-blue)] to-[color:var(--color-brand-purple)]" />
                    </div>
                  </div>

                  {/* Inner dot for smaller screens */}
                  <div className="lg:hidden w-4 h-4 rounded-full bg-gradient-to-r from-[color:var(--color-brand-blue)] to-[color:var(--color-brand-purple)]" />
                </div>

                <div className="text-sm font-bold text-[color:var(--color-brand-blue)] mb-2 tracking-widest uppercase">
                  Step 0{i + 1}
                </div>
                
                <h3 className="font-display text-xl text-foreground mb-2">
                  {step.title}
                </h3>
                
                <p className="text-foreground/60 text-sm leading-relaxed max-w-[200px] lg:mx-auto">
                  {step.description}
                </p>

                {/* Vertical line connector for mobile/tablet */}
                {i !== data.steps.length - 1 && (
                  <div className="lg:hidden absolute left-7 top-14 bottom-[-3rem] w-px bg-gradient-to-b from-foreground/20 to-foreground/5 -z-10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
