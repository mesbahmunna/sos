"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ArticleCTA() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 mt-12 mb-16 md:mt-32 md:mb-40 md:px-10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        transition={{ duration: 0.8 }}
        className="grain relative overflow-hidden rounded-[2.5rem] bg-foreground p-8 text-background md:p-24 shadow-2xl flex flex-col items-center justify-center text-center"
      >
        {/* Glow Effects from Home Page CTA */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div
            className="absolute -left-20 -top-20 h-96 w-96 rounded-full opacity-60 blur-3xl"
            style={{
              background:
                "radial-gradient(closest-side, oklch(0.62 0.24 25 / 0.7), transparent)",
            }}
          ></div>
          <div
            className="absolute -bottom-24 right-0 h-[520px] w-[520px] rounded-full opacity-60 blur-3xl"
            style={{
              background:
                "radial-gradient(closest-side, oklch(0.56 0.2 255 / 0.7), transparent)",
            }}
          ></div>
          <div
            className="absolute left-1/3 top-1/2 h-72 w-72 rounded-full opacity-40 blur-3xl"
            style={{
              background:
                "radial-gradient(closest-side, oklch(0.72 0.18 55 / 0.8), transparent)",
            }}
          ></div>
        </div>

        <div className="relative z-10 w-full max-w-5xl">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] tracking-tight text-balance leading-[1.05]">
            Turn what you learned into<br className="hidden md:block" />{" "}
            <span className="bg-gradient-to-r from-[color:var(--brand-orange)] via-[color:var(--brand-pink)] to-[color:var(--brand-cyan)] bg-clip-text text-transparent">
              measurable growth
            </span>
            .
          </h2>
          
          <p className="mx-auto mt-8 md:mt-12 max-w-2xl text-xl text-background/70 md:text-2xl leading-relaxed">
            Strategy is only the beginning. Let&#x27;s build the system that puts it into action.
          </p>
          
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Link 
              href="/book" 
              className="inline-flex h-16 w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-background px-10 text-base font-medium text-foreground transition-all hover:bg-background/90 hover:scale-105 active:scale-95"
            >
              Start Your Project <ArrowRight className="h-5 w-5" />
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex h-16 w-full sm:w-auto items-center justify-center gap-3 rounded-full border border-background/25 bg-transparent px-10 text-base font-medium text-background transition-all hover:bg-background/10 hover:scale-105 active:scale-95"
            >
              Connect Now
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
