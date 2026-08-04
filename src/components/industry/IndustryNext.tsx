"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { industriesData } from "@/data/industries";
import { industries24Data } from "@/data/industries24";

export function IndustryNext({ currentSlug }: { currentSlug: string }) {
  const isIn24 = currentSlug in industries24Data;
  const slugs = isIn24 ? Object.keys(industries24Data) : Object.keys(industriesData);
  const dataMap = isIn24 ? industries24Data : industriesData;

  const currentIndex = slugs.indexOf(currentSlug);

  if (currentIndex === -1) return null;

  const prevIndex = currentIndex === 0 ? slugs.length - 1 : currentIndex - 1;
  const nextIndex = currentIndex === slugs.length - 1 ? 0 : currentIndex + 1;

  const prevSlug = slugs[prevIndex];
  const nextSlug = slugs[nextIndex];

  const prevIndustry = dataMap[prevSlug];
  const nextIndustry = dataMap[nextSlug];

  return (
    <section className="mx-auto my-20 max-w-[1400px] px-6 md:px-10 border-t border-foreground/10 pt-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-12">
        <Link href={`/industries/${prevSlug}`} className="group flex flex-col items-start gap-4 text-left transition-opacity hover:opacity-70">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-foreground/10 bg-foreground/[0.02] transition-colors group-hover:bg-foreground/[0.05]">
            <ArrowLeft className="h-5 w-5" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-foreground/50 mb-2">Previous Industry</div>
            <div className="font-display text-2xl md:text-3xl tracking-tight">{prevIndustry.hero.subheadline.replace('For ', '').replace('.', '')}</div>
          </div>
        </Link>
        <Link href={`/industries/${nextSlug}`} className="group flex flex-col items-end gap-4 text-right transition-opacity hover:opacity-70">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-foreground/10 bg-foreground/[0.02] transition-colors group-hover:bg-foreground/[0.05]">
            <ArrowRight className="h-5 w-5" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-foreground/50 mb-2">Next Industry</div>
            <div className="font-display text-2xl md:text-3xl tracking-tight">{nextIndustry.hero.subheadline.replace('For ', '').replace('.', '')}</div>
          </div>
        </Link>
      </div>
    </section>
  );
}
