"use client";

import * as motion from "framer-motion/client";
import { Users, Lightbulb, Search, ShieldCheck, TrendingUp } from "lucide-react";

const values = [
  {
    title: "Partnership",
    description: "We treat every client’s business, goals and challenges with genuine care and responsibility.",
    icon: Users,
  },
  {
    title: "Innovation",
    description: "We combine creative thinking, technology and new ideas to build better solutions.",
    icon: Lightbulb,
  },
  {
    title: "Clarity",
    description: "We keep communication, strategy and execution straightforward and transparent.",
    icon: Search,
  },
  {
    title: "Reliability",
    description: "We value consistency, accountability and delivering what we promise.",
    icon: ShieldCheck,
  },
  {
    title: "Growth",
    description: "We focus on meaningful outcomes that help businesses move forward.",
    icon: TrendingUp,
  },
];

export function AboutOurValuesSection() {
  return (
    <section className="relative overflow-hidden py-32 md:py-44 px-6 md:px-10 bg-foreground/[0.01]">
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="text-xs uppercase tracking-[0.25em] text-foreground/50">
            OUR VALUES
          </div>
          <h2 className="mx-auto mt-6 max-w-3xl font-display text-[clamp(2.25rem,4vw,4rem)] leading-[1.1] tracking-[-0.03em]">
            The principles behind every <span className="italic text-[color:var(--brand-blue)]">partnership.</span>
          </h2>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            // On large screens: first 3 items take 2/6 cols (3 per row), last 2 items take 3/6 cols (2 per row)
            const lgSpanClass = index < 3 ? "lg:col-span-2" : "lg:col-span-3";
            
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative flex flex-col rounded-[24px] border border-foreground/5 bg-gradient-to-br from-background/80 to-background/20 backdrop-blur-md p-8 shadow-[0_8px_30px_rgb(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-foreground/10 ${lgSpanClass}`}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[color:var(--brand-blue)]/10 text-[color:var(--brand-blue)] transition-transform duration-500 group-hover:scale-110">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-8 text-2xl font-medium tracking-tight text-foreground">
                  {value.title}
                </h3>
                <p className="mt-4 text-lg text-foreground/75 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
