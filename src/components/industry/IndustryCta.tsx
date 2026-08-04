"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function IndustryCta({ data }: { data: any }) {
  // Split headline to highlight the last 2 words dynamically
  const words = data.headline.split(" ");
  const highlightCount = 2;
  const plainText = words.slice(0, -highlightCount).join(" ") + (words.length > highlightCount ? " " : "");
  const gradientText = words.slice(-highlightCount).join(" ");

  return (
    <section className="mx-auto my-16 max-w-[1400px] px-6 md:my-32 md:px-10">
      <div className="grain relative overflow-hidden rounded-[2.5rem] bg-foreground p-10 text-background md:p-20">
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
        <div className="relative">
          <div className="text-xs uppercase tracking-[0.3em] opacity-70">
            The next chapter
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 max-w-[20ch] font-display text-4xl sm:text-5xl md:text-6xl leading-[1.1] tracking-[-0.03em] text-balance pb-4"
          >
            {plainText}
            <span className="bg-gradient-to-r from-[color:var(--brand-orange)] via-[color:var(--brand-pink)] to-[color:var(--brand-cyan)] bg-clip-text text-transparent">
              {gradientText}
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 max-w-[50ch] text-lg md:text-xl text-background/80 text-balance leading-relaxed"
          >
            Turn your digital presence into consistent growth with a strategy built around your business, audience, and goals.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <Link
              href="/book"
              className="group inline-flex items-center gap-2 rounded-full bg-background px-7 py-4 text-sm font-medium text-foreground transition hover:bg-background/90"
            >
              Start Your Project
              <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-background/25 px-7 py-4 text-sm font-medium hover:bg-background/10 transition text-background"
            >
              Connect Now
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
