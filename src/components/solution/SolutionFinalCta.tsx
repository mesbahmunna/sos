"use client";

import * as motion from "framer-motion/client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SolutionData } from "@/data/solutions";

export function SolutionFinalCta({ data }: { data: SolutionData['cta'] }) {
  return (
    <section className="py-16 md:py-32 bg-background relative overflow-hidden">
      
      {/* Container Background */}
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="relative rounded-[40px] overflow-hidden bg-[#0B1018] text-white py-16 px-6 md:py-24 md:px-24 text-center shadow-2xl flex flex-col items-center justify-center">
          
          {/* Decorative Gradients */}
          <div className="absolute inset-0 pointer-events-none opacity-60 mix-blend-screen">
            {/* Soft pink glow in top-left */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[color:var(--color-brand-pink)]/20 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/4" />
            
            {/* Subtle warm orange glow near bottom-center */}
            <div className="absolute bottom-0 left-1/2 w-[600px] h-[600px] bg-[color:var(--color-brand-orange)]/15 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
            
            {/* Soft blue glow on right side */}
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[color:var(--color-brand-blue)]/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#C8CDD4] text-sm font-semibold tracking-[0.2em] uppercase mb-6 block"
            >
              Ready to Start
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight mb-8 text-white max-w-3xl"
            >
              {data.heading}
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-[#C8CDD4] leading-relaxed mb-12 max-w-2xl"
            >
              {data.description}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
            >
              <Link 
                href="/book"
                className="w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-full bg-white px-8 text-sm font-medium text-black transition-transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link 
                href="/contact"
                className="w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-full border border-white/20 bg-transparent px-8 text-sm font-medium text-white transition-all hover:bg-white/10 hover:border-white/40 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]"
              >
                Connect Now
              </Link>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
