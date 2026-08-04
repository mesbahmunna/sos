"use client";

import * as motion from "framer-motion/client";
import { PenTool, Monitor, FileText, TrendingUp, Cpu } from "lucide-react";

const services = [
  {
    title: "Branding",
    description: "We create clear and memorable brand identities that communicate who you are and why customers should choose you.",
    items: ["Brand Strategy", "Logo Design", "Visual Identity", "Brand Guidelines"],
    icon: PenTool,
  },
  {
    title: "Digital",
    description: "We build professional digital experiences designed to improve credibility, engagement and conversions.",
    items: ["Websites", "Ecommerce", "Landing Pages", "UX and UI"],
    icon: Monitor,
  },
  {
    title: "Content",
    description: "We create consistent and engaging content that keeps your brand visible, relevant and connected with its audience.",
    items: ["Social Media Content", "Graphic Design", "Copywriting", "Video Editing"],
    icon: FileText,
  },
  {
    title: "Marketing",
    description: "We help businesses reach the right audience, generate enquiries and create measurable growth opportunities.",
    items: ["Social Media", "Paid Advertising", "SEO", "AEO", "Lead Generation"],
    icon: TrendingUp,
  },
  {
    title: "Technology",
    description: "We connect systems, automation and AI solutions to help businesses work more efficiently and improve customer experiences.",
    items: ["CRM", "Workflow Automation", "AI Solutions", "Integrations"],
    icon: Cpu,
  },
];

export function AboutWhatWeDoSection() {
  return (
    <section className="relative overflow-hidden py-32 md:py-44 px-6 md:px-10">
      {/* Background glow effects */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[120px]" style={{ background: 'radial-gradient(closest-side, oklch(0.78 0.14 210 / 0.5), transparent)' }}></div>
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
            OUR GROWTH ECOSYSTEM
          </div>
          <h2 className="mx-auto mt-6 max-w-3xl font-display text-[clamp(2.25rem,4vw,4rem)] leading-[1.1] tracking-[-0.03em]">
            Everything your business needs, <span className="italic text-[color:var(--brand-blue)]">connected.</span>
          </h2>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            // On large screens: first 3 items take 2/6 cols (3 per row), last 2 items take 3/6 cols (2 per row)
            const lgSpanClass = index < 3 ? "lg:col-span-2" : "lg:col-span-3";
            return (
              <motion.div
                key={service.title}
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
                  {service.title}
                </h3>
                <p className="mt-4 text-lg text-foreground/75 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-auto pt-8">
                  <div className="text-sm font-medium text-foreground/90 uppercase tracking-wider mb-4">
                    Services
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {service.items.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center rounded-full border border-foreground/10 bg-foreground/[0.02] px-3 py-1 text-sm text-foreground/80 transition-colors group-hover:border-foreground/20 group-hover:bg-foreground/[0.04]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
