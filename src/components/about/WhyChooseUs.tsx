"use client";

import { motion } from "framer-motion";
import { Users, LayoutGrid, Target, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "One Partner",
    description: "Everything from strategy, websites, branding, marketing, AI, and automation under one experienced team."
  },
  {
    icon: LayoutGrid,
    title: "Five Growth Practices",
    description: "Our specialists work across branding, websites, content, marketing, and automation to create connected growth."
  },
  {
    icon: Target,
    title: "Strategy First",
    description: "We don't jump into execution. Every recommendation starts with understanding your business goals and customer journey."
  },
  {
    icon: TrendingUp,
    title: "Growth Focused",
    description: "Every project is built around measurable business outcomes, not just beautiful design or vanity metrics."
  }
];

export function WhyChooseUs() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-16 md:py-32">
      <div className="grid gap-12 lg:grid-cols-[1fr_2fr] items-start">
        {/* Left: Heading and Intro */}
        <div className="lg:sticky lg:top-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-4xl font-medium tracking-tight text-foreground md:text-5xl leading-[1.1]">
              Why Businesses Choose ShareOnSocial
            </h2>
            <p className="mt-6 text-lg text-foreground/70 leading-relaxed max-w-md">
              We eliminate the friction of managing multiple agencies and freelancers. One unified team, working towards one goal: your growth.
            </p>
          </motion.div>
        </div>

        {/* Right: 2x2 Grid of Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex h-full flex-col rounded-[24px] bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-black/[0.04] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-foreground/[0.03] text-foreground transition-colors duration-300 group-hover:bg-[#FF8A00] group-hover:text-white">
                  <Icon className="h-6 w-6 stroke-[1.5]" />
                </div>
                <h3 className="mb-3 text-xl font-semibold tracking-tight text-foreground">
                  {reason.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
