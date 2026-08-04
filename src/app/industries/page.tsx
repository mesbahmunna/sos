import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CtaSection } from "@/components/CtaSection";
import * as motion from "framer-motion/client";
import { industriesCards } from "@/data/industriesCardsData";
import { IndustryCard } from "@/components/industry/IndustryCard";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve | Share On Social",
  description: "Explore our specialized digital marketing services across 24 unique industries. We build bespoke growth engines for your specific market.",
};
export default function IndustriesPage() {
  const industries = industriesCards;

  return (
    <div className="min-h-dvh">
      <Header />
      <main className="min-h-dvh">
        <section className="relative overflow-hidden pt-32 md:pt-44">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-32 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-40 blur-3xl" style={{ background: 'radial-gradient(closest-side, oklch(0.78 0.14 210 / 0.5), transparent)' }}>
            </div>
          </div>
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-xs uppercase tracking-[0.25em] text-foreground/50">
                INDUSTRIES WE SERVE
              </div>
              <h1 className="mt-6 max-w-5xl font-display text-[clamp(2.75rem,5vw,5rem)] leading-[0.9] tracking-[-0.02em]">
                Built Around Your Industry.
                <span className="block mt-4 text-[clamp(2rem,4.5vw,5rem)] text-foreground/80">Focused on Your Growth.</span>
              </h1>
              <p className="mt-8 max-w-2xl text-lg text-foreground/70 md:text-xl">
                Every industry has different customers, challenges and opportunities. We combine strategy, creative, technology and marketing systems to help your business attract attention, generate enquiries and grow with confidence.
              </p>

            </motion.div>
          </div>
        </section>

        <section id="industries" className="mx-auto mt-16 md:mt-32 max-w-[1400px] px-6 md:px-10 pb-16 md:pb-[72px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <IndustryCard key={industry.slug} industry={industry} index={index} />
            ))}
          </div>
        </section>

        <CtaSection 
          heading="Don’t See Your Industry?"
          description="Every business has a different customer journey, operational structure and growth challenge. We build strategies around how your organisation works rather than forcing it into a standard package."
          primaryBtnText="Discuss Your Business"
          secondaryBtnText="Book a Call"
          smallHeading={true}
          className="mx-auto max-w-[1400px] px-6 md:px-10 -mb-[56px]"
        />
      </main>
      <Footer />
    </div>
  );
}
