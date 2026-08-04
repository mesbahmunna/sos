"use client";

import { useState } from "react";
import * as motion from "framer-motion/client";
import { Plus, Minus } from "lucide-react";
import { SolutionData } from "@/data/solutions";

export function SolutionFaq({ data }: { data: SolutionData['faq'] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-32 bg-background relative border-t border-foreground/5">
      <div className="mx-auto max-w-[1000px] px-6 md:px-10">
        
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

        <div className="space-y-4">
          {data.questions.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border border-foreground/10 rounded-2xl overflow-hidden bg-foreground/[0.01] transition-colors hover:bg-foreground/[0.03]"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full text-left px-6 py-6 md:px-8 md:py-8 flex items-center justify-between gap-4"
                >
                  <span className="font-display text-xl md:text-2xl text-foreground pr-8">
                    {item.question}
                  </span>
                  <div className={`shrink-0 h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-foreground text-background rotate-180' : 'bg-foreground/5 text-foreground'}`}>
                    {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                  </div>
                </button>
                
                <div 
                  className="overflow-hidden transition-all duration-500 ease-in-out"
                  style={{ maxHeight: isOpen ? '500px' : '0' }}
                >
                  <p className="px-6 pb-6 md:px-8 md:pb-8 text-foreground/60 leading-relaxed text-base md:text-lg">
                    {item.answer}
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
