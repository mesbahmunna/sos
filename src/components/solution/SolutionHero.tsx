"use client";

import * as motion from "framer-motion/client";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import { SolutionData } from "@/data/solutions";

export function SolutionHero({ data }: { data: SolutionData['hero'] }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-background">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[color:var(--color-brand-cyan)]/10 to-transparent rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[color:var(--color-brand-blue)]/10 to-transparent rounded-full blur-[80px] translate-y-1/2 -translate-x-1/3" />
      </div>

      <div className="mx-auto max-w-[1400px] px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-foreground mb-6">
                {data.headline}
              </h1>
              <p className="text-lg md:text-xl text-foreground/70 leading-relaxed mb-10 max-w-xl">
                {data.valueProp}
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <Link 
                  href="/book"
                  className="inline-flex h-14 items-center justify-center rounded-full bg-foreground px-8 text-sm font-medium text-background transition-transform hover:scale-105"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link 
                  href="/contact"
                  className="inline-flex h-14 items-center justify-center rounded-full border border-foreground/10 bg-background px-8 text-sm font-medium text-foreground transition-all hover:bg-foreground/5 hover:border-foreground/20"
                >
                  Connect Now
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src={data.image} 
                alt={data.headline} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
