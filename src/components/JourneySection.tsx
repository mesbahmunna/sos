"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Link2, TrendingUp, ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface JourneySectionProps {
  className?: string;
}

const stages = [
  {
    num: "01",
    eyebrow: "Stage 01",
    title: "Discover",
    desc: "Audits, positioning, opportunity mapping.",
    color: "var(--brand-cyan)",
    glow: "oklch(78% 0.14 210 / 0.15)",
    icon: Search,
  },
  {
    num: "02",
    eyebrow: "Stage 02",
    title: "Create",
    desc: "Brand, product, content and website.",
    color: "var(--brand-pink)",
    glow: "oklch(70% 0.2 350 / 0.15)",
    icon: PenTool,
  },
  {
    num: "03",
    eyebrow: "Stage 03",
    title: "Connect",
    desc: "Ads, SEO, CRM and automation wired.",
    color: "var(--brand-orange)",
    glow: "oklch(72% 0.18 55 / 0.15)",
    icon: Link2,
  },
  {
    num: "04",
    eyebrow: "Stage 04",
    title: "Grow",
    desc: "Compound results, measured monthly.",
    color: "var(--brand-blue)",
    glow: "oklch(56% 0.2 255 / 0.15)",
    icon: TrendingUp,
  },
];

export function JourneySection({ className = "" }: JourneySectionProps) {
  return (
    <section className={`mx-auto max-w-[1400px] px-6 md:px-10 py-16 md:py-32 ${className}`}>
      
      {/* Top-left aligned headers */}
      <div className="w-full mb-16 md:mb-32">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-foreground/50">
          <span className="inline-block h-px w-8 bg-foreground/40"></span>
          Growth Journey
        </div>
        <h2 className="mt-6 font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1] tracking-[-0.03em] text-balance">
          Four stages.<br />One trajectory.
        </h2>
      </div>

      {/* Main content container */}
      <div className="relative w-full">
        
        {/* Central Vertical Divider - Hidden on mobile, visible on md+ */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-foreground/10 -translate-x-1/2"></div>
        {/* Left Vertical Divider - Visible only on mobile */}
        <div className="md:hidden absolute left-[39px] top-0 bottom-0 w-px bg-foreground/10"></div>

        {/* Large vertical spacing between rows */}
        <div className="flex flex-col gap-16 md:gap-48 relative z-10">
          {stages.map((stage, i) => {
            const isContentLeft = i % 2 === 0;
            const Icon = stage.icon;
            
            return (
              <div key={stage.num} className="flex flex-row md:grid md:grid-cols-2 gap-8 md:gap-24 items-center group relative">
                
                {/* LEFT COLUMN */}
                <div className={`flex w-full justify-start ${isContentLeft ? 'md:justify-end' : 'md:justify-center'}`}>
                  {isContentLeft ? (
                    /* Content on Left (Desktop) / Always Right (Mobile) */
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.7 }}
                      className="hidden md:flex flex-col items-start text-left pr-0 md:pr-12 md:max-w-[320px]"
                    >
                      <div className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/40 mb-4">
                        {stage.eyebrow}
                      </div>
                      <h3 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4 text-foreground/90">{stage.title}</h3>
                      <p className="text-lg md:text-xl text-foreground/60 max-w-[280px] leading-relaxed">{stage.desc}</p>
                    </motion.div>
                  ) : (
                    /* Icon on Left (Desktop) / Always Left (Mobile) */
                    <motion.div 
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="relative z-10 flex shrink-0 h-20 w-20 md:h-32 md:w-32 items-center justify-center rounded-full border-[1.5px] bg-background transition-all duration-500"
                      style={{ 
                        borderColor: stage.color, 
                        boxShadow: `0 0 60px 10px ${stage.glow}`,
                      }}
                    >
                      <Icon className="h-8 w-8 md:h-10 md:w-10 text-foreground" strokeWidth={1.5} />
                    </motion.div>
                  )}
                  {/* On Mobile: Always show Icon first (if isContentLeft, we manually render icon here for mobile) */}
                  {isContentLeft && (
                    <motion.div 
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="md:hidden relative z-10 flex shrink-0 h-20 w-20 items-center justify-center rounded-full border-[1.5px] bg-background transition-all duration-500"
                      style={{ 
                        borderColor: stage.color, 
                        boxShadow: `0 0 60px 10px ${stage.glow}`,
                      }}
                    >
                      <Icon className="h-8 w-8 text-foreground" strokeWidth={1.5} />
                    </motion.div>
                  )}
                </div>

                {/* RIGHT COLUMN */}
                <div className={`flex w-full justify-start ${!isContentLeft ? 'md:justify-start' : 'md:justify-center'}`}>
                  {!isContentLeft ? (
                    /* Content on Right (Desktop) / Always Right (Mobile) */
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.7 }}
                      className="w-full md:w-auto flex flex-col items-start text-left pl-0 md:pl-12 md:max-w-[320px]"
                    >
                      <div className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/40 mb-2 md:mb-4">
                        {stage.eyebrow}
                      </div>
                      <h3 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2 md:mb-4 text-foreground/90">{stage.title}</h3>
                      <p className="text-base sm:text-lg md:text-xl text-foreground/60 max-w-[280px] leading-relaxed">{stage.desc}</p>
                    </motion.div>
                  ) : (
                    /* Icon on Right (Desktop) / Hidden on Mobile (already rendered on left) */
                    <>
                      <motion.div 
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="hidden md:flex relative z-10 shrink-0 h-24 w-24 md:h-32 md:w-32 items-center justify-center rounded-full border-[1.5px] bg-background transition-all duration-500"
                        style={{ 
                          borderColor: stage.color, 
                          boxShadow: `0 0 60px 10px ${stage.glow}`,
                        }}
                      >
                        <Icon className="h-8 w-8 md:h-10 md:w-10 text-foreground" strokeWidth={1.5} />
                      </motion.div>
                      {/* Mobile Content (Since Desktop Content was on the left) */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                        className="md:hidden w-full flex flex-col items-start text-left pl-0"
                      >
                        <div className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/40 mb-2">
                          {stage.eyebrow}
                        </div>
                        <h3 className="font-display text-3xl sm:text-4xl mb-2 text-foreground/90">{stage.title}</h3>
                        <p className="text-base sm:text-lg text-foreground/60 max-w-[280px] leading-relaxed">{stage.desc}</p>
                      </motion.div>
                    </>
                  )}
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Buttons */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-16 md:mt-24 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-5"
      >
        <Link
          href="/book"
          className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-4 text-sm font-medium text-background transition hover:bg-foreground/85 w-full md:w-auto justify-center"
        >
          Start Your Project
          <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-6 py-4 text-sm font-medium hover:bg-foreground/5 w-full md:w-auto justify-center"
        >
          Connect Now
        </Link>
      </motion.div>
    </section>
  );
}
