"use client";

import { motion } from "framer-motion";

type Props = {
  industries: { label: string; value: string }[];
  activeIndustry: string;
  onSelect: (industry: string) => void;
};

export function IndustryFilter({ industries, activeIndustry, onSelect }: Props) {
  return (
    <section className="mx-auto max-w-[1400px] px-6 md:px-10 mt-12 mb-20">
      <div className="flex items-center gap-4 overflow-x-auto pb-4 scrollbar-hide w-full justify-between">
        {industries.map((industry) => (
          <button
            key={industry.value}
            onClick={() => onSelect(industry.value)}
            className={`relative z-0 shrink-0 rounded-full px-6 py-3 text-sm font-medium transition-colors ${
              activeIndustry === industry.value
                ? "text-background"
                : "text-foreground hover:bg-foreground/5"
            }`}
          >
            {activeIndustry === industry.value && (
              <motion.div
                layoutId="activeIndustry"
                className="absolute inset-0 -z-10 rounded-full bg-foreground"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            {industry.label}
          </button>
        ))}
      </div>
    </section>
  );
}
