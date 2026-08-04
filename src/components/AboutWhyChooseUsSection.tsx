"use client";

import * as motion from "framer-motion/client";
import { Layers, Target, Globe, Handshake, Sliders, TrendingUp } from "lucide-react";

const reasons = [
  {
    title: "Everything Under One Roof",
    description: "Branding, digital, content, marketing and technology are managed through one connected team.",
    icon: Layers,
  },
  {
    title: "Strategy Before Execution",
    description: "Every project begins with a clear understanding of your business, audience and objectives.",
    icon: Target,
  },
  {
    title: "Global Perspective",
    description: "Our Indian operations and international presence allow us to support businesses across different markets.",
    icon: Globe,
  },
  {
    title: "Partnership Approach",
    description: "We work as an extension of your team rather than simply acting as another service provider.",
    icon: Handshake,
  },
  {
    title: "Flexible Solutions",
    description: "Our services can support startups, small businesses, established companies and growing global brands.",
    icon: Sliders,
  },
  {
    title: "Long-Term Focus",
    description: "We create strategies, systems and experiences designed to deliver sustainable business value.",
    icon: TrendingUp,
  },
];

export function AboutWhyChooseUsSection() {
  return (
    <section className="relative overflow-hidden py-32 md:py-44 px-6 md:px-10">
      {/* Subtle Background Glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full opacity-10 blur-[100px]" style={{ background: 'radial-gradient(closest-side, oklch(0.78 0.14 210 / 0.8), transparent)' }}></div>
      </div>

      <div className="mx-auto max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="text-xs uppercase tracking-[0.25em] text-foreground/50">
            WHY CHOOSE US
          </div>
          <h2 className="mx-auto mt-6 max-w-3xl font-display text-[clamp(2.25rem,4vw,4rem)] leading-[1.1] tracking-[-0.03em]">
            One team. One strategy. <span className="italic text-[color:var(--brand-blue)]">Better growth.</span>
          </h2>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col rounded-[24px] border border-foreground/5 bg-gradient-to-b from-foreground/[0.02] to-transparent p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-foreground/[0.04]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-foreground/5 text-foreground/80 transition-all duration-500 group-hover:scale-110 group-hover:bg-[color:var(--brand-blue)] group-hover:text-background group-hover:shadow-[0_0_20px_rgba(var(--brand-blue-rgb),0.3)]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-8 text-2xl font-medium tracking-tight text-foreground">
                  {reason.title}
                </h3>
                <p className="mt-4 text-lg text-foreground/75 leading-relaxed">
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
