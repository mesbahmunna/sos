import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { InsightsSection } from "@/components/InsightsSection";
import { allInsights } from "@/data/insights-extended";
import * as motion from "framer-motion/client";

export default function InsightsPage() {
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
                Insights
              </div>
              <h1 className="mt-6 max-w-[16ch] font-display text-[clamp(2.75rem,8vw,8rem)] leading-[1.05] tracking-[-0.04em] text-balance pb-4">
                Field notes from the <em className="italic text-[color:var(--brand-red)]">growth desk</em>.
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-foreground/70 md:text-xl">
                Actionable insights, proven marketing tips, and practical growth strategies to help business owners scale smarter.
              </p>
            </motion.div>
          </div>
        </section>

        <InsightsSection insightsData={allInsights} hideIntro={true} />
      </main>
      <Footer />
    </div>
  );
}
