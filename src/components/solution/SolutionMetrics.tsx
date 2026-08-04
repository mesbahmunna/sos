"use client";

import * as motion from "framer-motion/client";
import { SolutionData } from "@/data/solutions";

export function SolutionMetrics({ data }: { data: SolutionData['outcomes'] }) {
  return (
    <section className="py-24 md:py-32 bg-[#FAF9F7] text-foreground relative overflow-hidden">
      
      {/* Background Graphic */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[color:var(--color-brand-blue)] via-transparent to-transparent opacity-10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-[1400px] px-6 md:px-10 relative z-10">
        
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground"
          >
            {data.heading}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {data.metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-8 rounded-3xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-foreground/5"
            >
              <div className="font-display text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-br from-[color:var(--color-brand-blue)] to-[color:var(--color-brand-purple)] bg-clip-text text-transparent mb-4">
                {metric.value}
              </div>
              <div className="text-sm md:text-base font-medium text-foreground/60 uppercase tracking-widest">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
