"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Insight } from "@/data/insights";

interface KeepReadingProps {
  insights: Insight[];
}

export function KeepReading({ insights }: KeepReadingProps) {
  if (insights.length < 2) return null;
  return (
    <section className="mx-auto mt-32 max-w-[1400px] px-6 pb-20 md:mt-40 md:px-10">
      <div className="mb-16 border-b border-foreground/10 pb-6">
        <h2 className="font-display text-4xl tracking-tight md:text-5xl">NEXT INSIGHTS</h2>
        <p className="mt-2 text-foreground/50 uppercase tracking-[0.2em] text-sm">Keep exploring.</p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 md:gap-8">
        {insights.slice(0, 2).map((insight, index) => (
          <motion.article
            key={insight.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className={`group relative flex min-h-[500px] flex-col overflow-hidden rounded-[2.5rem] border border-black/5 p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] hover:brightness-[1.1] ${insight.bgColor}`}
          >
            <div className="relative mb-10 aspect-[16/9] w-full overflow-hidden rounded-[1.5rem] bg-foreground/5 shadow-lg">
              <Image
                src={insight.image}
                alt={insight.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/80 mb-4">
              <span className="font-medium">{insight.category}</span>
            </div>
            <h3 className="font-display text-3xl md:text-4xl leading-[1.1] tracking-tight text-white text-balance">
              <Link href={`/insights/${insight.slug}`} className="before:absolute before:inset-0 z-10">
                {insight.title}
              </Link>
            </h3>
            <div className="mt-auto flex items-center justify-between pt-12 text-sm font-medium text-white/80 group-hover:text-white transition-colors">
              <span>Read essay</span>
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-transform duration-500 group-hover:rotate-45 group-hover:scale-110">
                <ArrowUpRight className="h-5 w-5" />
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
