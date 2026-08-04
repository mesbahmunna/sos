"use client";

import { motion } from "framer-motion";

export function SolutionTextSplit({ data }: { data: { heading: string; description: string } }) {
  return (
    <section className="py-16 md:py-32 bg-background relative overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground leading-[1.1]"
            >
              {data.heading}
            </motion.h2>
            <div className="mt-8 hidden lg:block w-20 h-1 bg-gradient-to-r from-[color:var(--color-brand-orange)] to-[color:var(--color-brand-pink)] rounded-full" />
          </div>

          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="prose prose-lg prose-invert max-w-none text-foreground/80 leading-relaxed space-y-6 text-xl"
            >
              {data.description.split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
