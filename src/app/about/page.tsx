import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import * as motion from "framer-motion/client";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Globe } from "lucide-react";
import { AboutWhatWeDoSection } from "@/components/AboutWhatWeDoSection";
import { AboutHowWeWorkSection } from "@/components/AboutHowWeWorkSection";
import { AboutWhyChooseUsSection } from "@/components/AboutWhyChooseUsSection";
import { AboutOurValuesSection } from "@/components/AboutOurValuesSection";
import { AboutCtaSection } from "@/components/AboutCtaSection";

export default function AboutPage() {
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
      ABOUT SHAREONSOCIAL
    </div>
    <h1 className="mt-6 max-w-[16ch] font-display text-[clamp(2.75rem,8vw,8rem)] leading-[0.9] tracking-[-0.04em] text-balance">
      Built in India.<br />
      <span className="italic text-[color:var(--brand-blue)]">
        Growing businesses worldwide.
      </span>
    </h1>
    <p className="mt-8 max-w-2xl text-lg text-foreground/70 md:text-xl">
      ShareOnSocial is a global growth company bringing strategy,
      creativity, marketing and technology together to help businesses
      build stronger brands, attract more customers and grow with
      confidence.
    </p>
    <div className="mt-10 flex flex-col gap-4 md:flex-row">
      <Link
        href="/book"
        className="inline-flex items-center justify-center rounded-full bg-foreground px-8 py-4 text-sm font-medium text-background transition-opacity hover:opacity-90"
      >
        Start Your Growth Journey
      </Link>
      <Link
        href="/solutions"
        className="inline-flex items-center justify-center rounded-full border border-foreground/10 bg-background px-8 py-4 text-sm font-medium text-foreground transition-opacity hover:opacity-90"
      >
        Explore Our Solutions
      </Link>
    </div>
  </motion.div>
          </div>
        </section>
        <section className="mx-auto mt-32 max-w-[1400px] px-6 md:mt-48 md:px-10">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col justify-center lg:col-span-7">
              <div className="text-xs uppercase tracking-[0.25em] text-foreground/50">
                WHO WE ARE
              </div>
              <h2 className="mt-6 max-w-3xl font-display text-[clamp(2rem,3.2vw,3.25rem)] leading-[1.1] tracking-[-0.03em]">
                More than an agency.<br />
                <span className="italic text-[color:var(--brand-blue)] lg:whitespace-nowrap">
                  Your complete growth partner.
                </span>
              </h2>
              <div className="mt-8 space-y-6 text-lg text-foreground/75 md:text-xl">
                <p>
                  Growing a business often means managing different providers for branding,
                  websites, social media, advertising and technology. This can lead to
                  disconnected strategies, inconsistent communication and slower results.
                </p>
                <p>
                  ShareOnSocial brings everything together through one coordinated team.
                  We work as an extension of your business, connecting ideas,
                  creativity, marketing and technology through one clear growth strategy.
                </p>
                <p>
                  Our focus is not simply to complete tasks. We aim to understand your
                  business, identify opportunities and build solutions that create long-term
                  value.
                </p>
              </div>
            </div>
            <div className="relative min-h-[350px] lg:min-h-full w-full overflow-hidden rounded-[24px] shadow-lg border border-foreground/5 bg-foreground/5 lg:col-span-5">
              <Image
                src="/images/about-growth-laptop.jpg"
                alt="Who We Are - Your complete growth partner"
                fill
                className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                sizes="(min-width: 1024px) 45vw, 100vw"
                priority
              />
            </div>
          </motion.div>
        </section>
        
        <section className="mx-auto mt-32 max-w-[1400px] px-6 md:mt-48 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-xs uppercase tracking-[0.25em] text-foreground/50">
              WHAT DRIVES US
            </div>
            <h2 className="mt-6 max-w-3xl font-display text-[clamp(2.25rem,4.5vw,4.5rem)] leading-[1.1] tracking-[-0.03em]">
              A clear purpose.<br />
              <span className="italic text-[color:var(--brand-blue)]">
                A global vision.
              </span>
            </h2>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="group rounded-[24px] border border-foreground/5 bg-foreground/[0.02] p-8 md:p-12 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-md hover:bg-foreground/[0.03]">
                <h3 className="text-xl font-medium tracking-tight text-foreground md:text-2xl">
                  Our Mission
                </h3>
                <p className="mt-6 text-lg leading-relaxed text-foreground/75">
                  To help businesses grow by bringing strategy, creativity, marketing and technology together through one reliable and connected team.
                </p>
              </div>
              <div className="group rounded-[24px] border border-foreground/5 bg-foreground/[0.02] p-8 md:p-12 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-md hover:bg-foreground/[0.03]">
                <h3 className="text-xl font-medium tracking-tight text-foreground md:text-2xl">
                  Our Vision
                </h3>
                <p className="mt-6 text-lg leading-relaxed text-foreground/75">
                  To become a trusted global growth partner that connects India's talent, creativity and innovation with ambitious businesses around the world.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="relative overflow-hidden py-36 md:py-44 px-6 md:px-10">
          {/* Subtle Premium Background */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
            <div className="absolute top-1/4 left-1/4 h-[400px] w-[400px] rounded-full opacity-20 blur-[100px]" style={{ background: 'radial-gradient(closest-side, oklch(0.78 0.14 210 / 0.4), transparent)' }}></div>
            <div className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] rounded-full opacity-25 blur-[120px]" style={{ background: 'radial-gradient(closest-side, oklch(0.78 0.14 210 / 0.3), transparent)' }}></div>
          </div>
          
          <div className="mx-auto max-w-[1400px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
              
              {/* Left Column */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-xs uppercase tracking-[0.25em] text-foreground/50">
                    GLOBAL THINKING. INDIAN OPERATIONS.
                  </div>
                  <h2 className="mt-6 max-w-3xl font-display text-[clamp(2.25rem,4.5vw,4.5rem)] leading-[1.1] tracking-[-0.03em]">
                    Strong roots.<br />
                    <span className="italic text-[color:var(--brand-blue)]">
                      Global reach.
                    </span>
                  </h2>
                </motion.div>
                
                <div className="mt-10 space-y-6 text-lg text-foreground/75 md:text-xl">
                  {[
                    "Our operational foundation in India gives us access to experienced strategists, designers, developers, marketers and technology specialists working together under one connected system.",
                    "With a growing presence across international markets, we combine the efficiency and innovation of our Indian operations with a broader global perspective.",
                    "This allows us to support businesses across different industries, locations and stages of growth while maintaining consistent communication, quality and execution."
                  ].map((text, i) => (
                    <motion.p
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
                    >
                      {text}
                    </motion.p>
                  ))}
                </div>
              </div>
              
              {/* Right Column - Premium Feature Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:col-span-6 w-full lg:mt-6">
                
                {/* Card 1 */}
                <motion.div
                  className="group relative rounded-[24px] border border-foreground/5 bg-gradient-to-br from-background/60 to-background/10 backdrop-blur-md p-8 shadow-[0_8px_30px_rgb(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-foreground/10"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--brand-blue)]/10 text-[color:var(--brand-blue)] transition-transform duration-500 group-hover:scale-110">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-medium tracking-tight text-foreground md:text-2xl">
                      India Operations
                    </h3>
                  </div>
                  <ul className="mt-8 space-y-4 text-foreground/75">
                    {["Gandhinagar", "Ahmedabad", "Vadodara", "Jaipur", "Delhi", "Mumbai", "Mount Abu"].map((city) => (
                      <li key={city} className="flex items-center gap-3 text-[17px] transition-colors duration-300 hover:text-foreground">
                        <span className="h-2 w-2 rounded-full bg-[color:var(--brand-blue)]/40 transition-transform duration-300 group-hover:scale-125" />
                        {city}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Card 2 */}
                <motion.div
                  className="group relative rounded-[24px] border border-foreground/5 bg-gradient-to-br from-background/60 to-background/10 backdrop-blur-md p-8 shadow-[0_8px_30px_rgb(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-foreground/10"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--brand-blue)]/10 text-[color:var(--brand-blue)] transition-transform duration-500 group-hover:scale-110">
                      <Globe className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-medium tracking-tight text-foreground md:text-2xl">
                      Global Presence
                    </h3>
                  </div>
                  <ul className="mt-8 space-y-4 text-foreground/75">
                    {["United States", "United Kingdom", "Canada", "New Zealand"].map((country) => (
                      <li key={country} className="flex items-center gap-3 text-[17px] transition-colors duration-300 hover:text-foreground">
                        <span className="h-2 w-2 rounded-full bg-[color:var(--brand-blue)]/40 transition-transform duration-300 group-hover:scale-125" />
                        {country}
                      </li>
                    ))}
                  </ul>
                </motion.div>
                
              </div>
            </div>

            {/* Redesigned Highlight Banner */}
            <motion.div
              className="mt-20 overflow-hidden rounded-[24px] border border-foreground/5 bg-gradient-to-r from-background/60 via-background/40 to-background/10 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.03)] transition-all duration-500 hover:shadow-[0_15px_35px_rgba(0,0,0,0.05)] hover:border-foreground/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-foreground/5 py-8 text-center items-center">
                <div className="py-4 md:py-2 flex items-center justify-center gap-3 text-lg font-medium tracking-tight text-foreground/90 transition-transform duration-300 hover:scale-105">
                  <span className="text-2xl">🌏</span> Built in India
                </div>
                <div className="py-4 md:py-2 flex items-center justify-center gap-3 text-lg font-medium tracking-tight text-foreground/90 transition-transform duration-300 hover:scale-105">
                  <span className="text-2xl">🌐</span> Connected globally
                </div>
                <div className="py-4 md:py-2 flex items-center justify-center gap-3 text-lg font-medium tracking-tight text-foreground/90 transition-transform duration-300 hover:scale-105">
                  <span className="text-2xl">📈</span> Focused on growth
                </div>
              </div>
            </motion.div>
            
          </div>
        </section>

        <AboutWhatWeDoSection />
        <AboutHowWeWorkSection />
        <AboutWhyChooseUsSection />
        <AboutOurValuesSection />
        <AboutCtaSection />
      </main>
      <Footer />
    </div>
  );
}
