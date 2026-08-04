"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { IndustryData } from "@/data/industries";
import { IndustryIllustration } from "./IndustryIllustration";

export function IndustryHero({ data, slug }: { data: IndustryData['hero'], slug: string }) {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-36 lg:pt-40 min-h-[85vh] flex items-center">
      {/* Background Gradients */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          animate={{
            rotate: [0, 5, -5, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
          style={{
            background: "radial-gradient(closest-side, oklch(0.78 0.14 210 / 0.6), transparent)",
            willChange: "transform",
          }}
        />
        <motion.div
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[-10%] top-40 h-[400px] w-[400px] rounded-full opacity-40 blur-3xl"
          style={{
            background: "radial-gradient(closest-side, oklch(0.72 0.18 55 / 0.55), transparent)",
            willChange: "transform",
          }}
        />
      </div>

      <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[65%_35%] items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col pr-8 lg:pr-12"
          >
            {/* Badge */}
            <div className="mb-8 inline-flex self-start items-center gap-2 rounded-full border border-foreground/10 bg-background/60 px-4 py-1.5 text-xs backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--color-brand-orange)] opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[color:var(--color-brand-orange)]"></span>
              </span>
              <span className="text-foreground/70 uppercase tracking-widest">{data.subheadline}</span>
            </div>

            {/* Headline */}
            <h1 className="max-w-[900px] font-display text-[clamp(28px,4vw,42px)] leading-none tracking-[-0.03em] text-foreground">
              {data.headline}
            </h1>

            {/* Description - Split into blocks without changing text */}
            <div className="mt-5 max-w-[600px] space-y-4 text-[18px] leading-[1.7] text-foreground/70">
              {data.description.split(/(?<=\.)\s+/).map((sentence, idx) => (
                <p key={idx}>{sentence}</p>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link
                href="/book"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 text-sm font-medium text-background transition hover:bg-foreground/85"
              >
                {data.ctaPrimary}
                <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-8 py-4 text-sm font-medium hover:bg-foreground/5"
              >
                {data.ctaSecondary}
              </Link>
            </div>
          </motion.div>

          {/* Unique Visual Element based on slug */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative w-full"
          >
            <IndustryIllustration slug={slug} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
