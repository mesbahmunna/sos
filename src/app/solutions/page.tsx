import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import * as motion from "framer-motion/client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { solutionsData } from "@/data/solutions_data";
import Image from "next/image";

const colors = [
  'oklch(0.72 0.18 55)',   // Orange/Red
  'oklch(0.56 0.20 255)',  // Blue
  'oklch(0.70 0.20 350)',  // Pink
  'oklch(0.62 0.24 25)',   // Deep Red
  'oklch(0.78 0.14 210)',  // Cyan
  'oklch(0.65 0.20 150)',  // Green
  'oklch(0.65 0.2 300)',   // Purple
  'oklch(0.75 0.18 75)',   // Gold/Yellow
];

const tagColors = [
  '#FF8A00', // Orange
  '#2563EB', // Blue
  '#EC4899', // Pink
  '#7C3AED', // Purple
  '#16A34A', // Green
  '#06B6D4'  // Cyan
];

export default function SolutionsPage() {
  const solutionsList = solutionsData;

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
                Solutions
              </div>
              <h1 className="mt-6 max-w-[16ch] font-display text-[clamp(2.75rem,8vw,8rem)] leading-[0.9] tracking-[-0.04em] text-balance">
                Every lever, <em className="italic text-[color:var(--brand-blue)]">pulled together</em>.
              </h1>
              <p className="mt-8 max-w-2xl text-lg text-foreground/70 md:text-xl">
                We combine strategy, creativity, marketing and technology into one integrated growth engine no silos, no handoffs, no dead ends.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto mt-16 md:mt-24 max-w-[1400px] px-6 md:px-10 mb-16 md:mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {solutionsList.map((solution, idx) => {
              const color = colors[idx % colors.length];

              return (
                <motion.div
                  key={solution.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group block relative rounded-[2rem] bg-background transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] md:hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] border border-foreground/5 hover:border-transparent"
                >
                  <Link href={`/solutions/${solution.slug}`} className="block p-4 md:p-5 h-full flex flex-col">
                    <div className="relative w-full aspect-[16/9] md:h-[250px] rounded-[20px] overflow-hidden mb-6 shrink-0">
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 mix-blend-overlay z-10"
                        style={{ backgroundColor: color }}
                      ></div>
                      <Image
                        src={solution.featuredImage}
                        alt={solution.title}
                        fill
                        className={`object-cover transition-transform duration-700 group-hover:scale-105 ${
                          solution.slug === 'branding' ? 'object-bottom' : 'object-center'
                        }`}
                      />
                    </div>
                    
                    <div className="px-1 relative flex-1 flex flex-col">
                      <div className="flex items-center gap-2 text-xs font-medium text-foreground/50 mb-3">
                        <span className="text-foreground/80">{solution.category.split(' •')[0]}</span>
                        <span className="h-1 w-1 rounded-full bg-foreground/20"></span>
                        <span>ShareOnSocial</span>
                      </div>
                      
                      <h4 className="font-display text-2xl leading-tight text-foreground mb-3 pr-12 group-hover:opacity-80 transition-opacity">
                        {solution.title}
                      </h4>
                      
                      <p className="text-[15px] leading-[1.6] text-foreground/60 mb-6 line-clamp-3 pr-4">
                        {solution.shortDescription}
                      </p>
                      
                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {solution.tags?.slice(0, 3).map((tag: string, i: number) => {
                            const tagBg = tagColors[i % tagColors.length];
                            return (
                              <span 
                                key={i} 
                                className="inline-flex items-center justify-center px-[14px] py-[8px] text-[12px] font-medium text-white rounded-full transition-all duration-300 hover:-translate-y-[2px] hover:brightness-105"
                                style={{ backgroundColor: tagBg }}
                              >
                                {tag}
                              </span>
                            );
                          })}
                          {solution.tags?.length > 3 && (
                            <span className="inline-flex items-center justify-center px-[14px] py-[8px] text-[12px] font-medium text-white rounded-full bg-foreground/20">
                              +{solution.tags.length - 3}
                            </span>
                          )}
                        </div>
                        
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-foreground/10 bg-background text-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:-rotate-45 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-[color:var(--color-brand-orange)] group-hover:via-[color:var(--color-brand-pink)] group-hover:to-[color:var(--color-brand-cyan)] group-hover:text-white group-hover:shadow-lg">
                          <ArrowUpRight className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book"
              className="group inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full bg-foreground px-7 py-4 text-sm font-medium text-background transition hover:bg-foreground/90"
            >
              Start Your Project
              <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full border border-foreground/25 px-7 py-4 text-sm font-medium text-foreground transition hover:bg-foreground/5"
            >
              Connect Now
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
