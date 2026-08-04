"use client";

import * as motion from "framer-motion/client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AboutCtaSection() {
  return (
    <section className="relative overflow-hidden py-32 md:py-48 px-6 md:px-10">
      {/* Background Glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-[120px]" style={{ background: 'radial-gradient(closest-side, oklch(0.78 0.14 210 / 0.5), transparent)' }}></div>
      </div>

      <div className="mx-auto max-w-[1000px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[32px] border border-foreground/10 bg-background/50 backdrop-blur-xl p-10 md:p-20 text-center shadow-[0_20px_60px_rgba(0,0,0,0.05)]"
        >
          <div className="text-sm font-medium uppercase tracking-[0.2em] text-foreground/60 mb-6">
            LET’S BUILD WHAT’S NEXT
          </div>
          
          <h2 className="mx-auto max-w-2xl font-display text-[clamp(2.5rem,5vw,5rem)] leading-[1.05] tracking-[-0.03em] text-balance">
            Ready to grow with one <span className="italic text-[color:var(--brand-blue)]">connected team?</span>
          </h2>
          
          <p className="mx-auto mt-8 max-w-2xl text-lg md:text-xl text-foreground/75 leading-relaxed">
            Whether you need a stronger brand, a better website, consistent marketing, more qualified leads or smarter business systems, ShareOnSocial brings everything together through one global growth team.
          </p>

          <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-foreground/[0.03] px-6 py-2 text-sm font-medium text-foreground/80 border border-foreground/5">
            <span className="h-2 w-2 rounded-full bg-[color:var(--brand-blue)] animate-pulse" />
            Built in India. Growing businesses worldwide.
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book"
              className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-foreground px-8 py-4 text-base font-medium text-background transition-all hover:scale-105 hover:bg-foreground/90 hover:shadow-lg hover:shadow-foreground/20"
            >
              Start Your Growth Journey
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="flex w-full sm:w-auto items-center justify-center rounded-full border border-foreground/15 bg-transparent px-8 py-4 text-base font-medium text-foreground transition-all hover:bg-foreground/5 hover:border-foreground/30"
            >
              Connect With Our Team
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
