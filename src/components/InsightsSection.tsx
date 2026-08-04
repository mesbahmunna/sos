"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { insights, Insight } from "@/data/insights";

export function InsightsSection({ insightsData = insights, hideIntro = false }: { insightsData?: Insight[], hideIntro?: boolean }) {
  return (
    <section className={`mx-auto max-w-[1400px] px-6 md:px-10 ${hideIntro ? 'mt-8 md:mt-12' : 'mt-16 md:mt-32'}`}>
      <div className={`flex items-end ${hideIntro ? 'justify-end' : 'justify-between'} gap-6`}>
        {!hideIntro && (
          <div className="max-w-3xl">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-foreground/50">
            <span className="inline-block h-px w-8 bg-foreground/40"></span>
            Insights
          </div>
          <h2 className="mt-6 font-display text-[clamp(2.25rem,5.5vw,5rem)] leading-[1.05] tracking-[-0.03em] text-balance pb-3">
            Field notes from the growth desk.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-foreground/70 md:text-xl">
            Actionable insights, proven marketing tips, and practical growth strategies to help business owners scale smarter.
          </p>
        </div>
        )}
        <Link
          href="/insights"
          className="hidden shrink-0 rounded-full border border-foreground/15 px-5 py-3 text-sm hover:bg-foreground/5 md:inline-flex"
        >
          All insights →
        </Link>
      </div>
      <div className={`${hideIntro ? 'mt-6' : 'mt-14'} grid gap-6 md:grid-cols-2 lg:grid-cols-3`}>
        {insightsData.map((insight, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            style={{ willChange: "transform, opacity" }}
            className={`group relative flex min-h-[380px] flex-col overflow-hidden rounded-[1.75rem] border border-black/5 p-8 transition hover:-translate-y-1 hover:shadow-2xl hover:brightness-[1.1] ${insight.bgColor}`}
          >
            <div className="relative mb-6 aspect-[4/3] w-full overflow-hidden rounded-2xl bg-foreground/5">
              <Image
                src={insight.image}
                alt={insight.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/80">
              <span>{insight.category}</span>
            </div>
            <h3 className="mt-3 font-display text-2xl leading-tight tracking-tight text-white md:text-[26px]">
              <Link href={`/insights/${insight.slug}`} className="before:absolute before:inset-0 z-10">
                {insight.title}
              </Link>
            </h3>
            <div className="mt-auto flex items-center justify-between pt-6 text-sm font-medium text-white">
              <span>Read essay</span>
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 transition group-hover:rotate-45 group-hover:bg-white/10 text-white">
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
