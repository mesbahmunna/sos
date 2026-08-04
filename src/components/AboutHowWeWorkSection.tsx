"use client";

import * as motion from "framer-motion/client";

const stages = [
  {
    num: "01",
    title: "Discover",
    description: "We learn about your business, customers, challenges, competitors and goals.",
  },
  {
    num: "02",
    title: "Create",
    description: "We develop the brand, content, campaigns and digital experiences needed to support your strategy.",
  },
  {
    num: "03",
    title: "Connect",
    description: "We connect your marketing channels, platforms, systems and customer journey.",
  },
  {
    num: "04",
    title: "Grow",
    description: "We measure performance, improve what works and identify new opportunities for growth.",
  },
];

export function AboutHowWeWorkSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-36 px-6 md:px-10 bg-foreground/[0.01]">
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-xs uppercase tracking-[0.25em] text-foreground/50">
            OUR PROCESS
          </div>
          <h2 className="mt-6 max-w-3xl font-display text-[clamp(2.25rem,4vw,4rem)] leading-[1.1] tracking-[-0.03em]">
            A clear path from ideas to <span className="italic text-[color:var(--brand-blue)]">growth.</span>
          </h2>
        </motion.div>

        <div className="mt-20 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[60px] left-0 w-full h-[1px] bg-foreground/10" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {stages.map((stage, index) => (
              <motion.div
                key={stage.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative group"
              >
                {/* Node for Timeline */}
                <div className="hidden lg:flex absolute -top-[1px] left-0 w-full h-[2px]">
                  <div className="h-full bg-[color:var(--brand-blue)] w-0 group-hover:w-full transition-all duration-700 ease-out" />
                </div>
                
                <div className="mb-6 lg:mt-[40px] flex items-center lg:items-start gap-6 lg:gap-4 lg:flex-col">
                  <div className="flex h-16 w-16 lg:h-20 lg:w-20 shrink-0 items-center justify-center rounded-full border border-foreground/10 bg-background text-2xl lg:text-3xl font-display text-[color:var(--brand-blue)] shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:border-[color:var(--brand-blue)]/30 group-hover:shadow-[0_0_20px_rgba(var(--brand-blue-rgb),0.1)]">
                    {stage.num}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-medium tracking-tight text-foreground">
                    {stage.title}
                  </h3>
                </div>
                
                <p className="text-lg text-foreground/75 leading-relaxed lg:mt-6">
                  {stage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
