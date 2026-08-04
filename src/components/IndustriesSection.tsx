"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const industries = [
  {
    num: "01",
    title: "Restaurants & Hospitality",
    desc: "Bookings, delivery sales, loyalty and local visibility",
    tag: "Hospitality",
    slug: "restaurants-hospitality",
  },
  {
    num: "02",
    title: "Healthcare & Wellness",
    desc: "Patient enquiries, reputation and trusted digital presence",
    tag: "Health",
    slug: "healthcare-wellness",
  },
  {
    num: "03",
    title: "Retail & E-commerce",
    desc: "Online sales, foot traffic and repeat purchases",
    tag: "Retail",
    slug: "retail-ecommerce",
  },
  {
    num: "04",
    title: "Education & Training",
    desc: "Enrolments, course promotion and student engagement",
    tag: "Edu",
    slug: "education-training",
  },
  {
    num: "05",
    title: "Professional Services",
    desc: "Authority, qualified leads and client acquisition",
    tag: "Pro",
    slug: "professional-services",
  },
  {
    num: "06",
    title: "Real Estate & Property",
    desc: "Listings, buyer leads, seller enquiries and CRM",
    tag: "Property",
    slug: "real-estate",
  },
  {
    num: "07",
    title: "Construction & Trades",
    desc: "Local leads, project enquiries and trust-building content",
    tag: "Trades",
    slug: "construction-trades",
  },
  {
    num: "08",
    title: "Home Services",
    desc: "Calls, bookings, reviews and service-area visibility",
    tag: "Home",
    slug: "home-services",
  },
  {
    num: "09",
    title: "Beauty & Personal Care",
    desc: "Appointments, offers, reels and local discovery",
    tag: "Beauty",
    slug: "beauty-personal-care",
  },
  {
    num: "10",
    title: "Finance & Accounting",
    desc: "Credibility, lead generation and educational content",
    tag: "Finance",
    slug: "finance-accounting",
  },
  {
    num: "11",
    title: "Technology & Startups",
    desc: "Product launches, demand generation and scalable systems",
    tag: "Tech",
    slug: "technology-startups",
  },
  {
    num: "12",
    title: "Events & Entertainment",
    desc: "Registrations, ticket sales and audience engagement",
    tag: "Events",
    slug: "events-entertainment",
  },
];

export function IndustriesSection() {
  return (
    <section className="mx-auto mt-16 max-w-[1400px] px-6 md:mt-48 md:px-10">
      <div className="max-w-5xl">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-foreground/50">
          <span className="inline-block h-px w-8 bg-foreground/40"></span>
          Industries
        </div>
        <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,4.5rem)] leading-[0.95] tracking-[-0.03em]">
          Tailored growth strategies for your industry.
        </h2>
      </div>
      <div className="mt-14 divide-y divide-foreground/10 border-y border-foreground/10">
        {industries.map((industry, index) => (
          <Link href="/industries" key={industry.num} className="block cursor-pointer">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              style={{ willChange: "transform, opacity" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group grid grid-cols-[auto_1fr_auto] items-center gap-6 py-6 transition hover:bg-foreground/[0.02] md:grid-cols-[80px_1fr_auto_auto]"
            >
              <span className="font-mono text-xs text-foreground/40">
                {industry.num}
              </span>
              <div>
                <div className="font-display text-3xl tracking-tight md:text-5xl">
                  {industry.title}
                </div>
                <div className="mt-1 text-sm text-foreground/60">
                  {industry.desc}
                </div>
              </div>
              <span className="hidden rounded-full border border-foreground/10 px-3 py-1 text-xs text-foreground/60 md:inline-flex">
                {industry.tag}
              </span>
              <ArrowUpRight
                className="h-5 w-5 shrink-0 opacity-40 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                aria-hidden="true"
              />
            </motion.div>
          </Link>
        ))}
      </div>
      <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-5">
        <Link
          href="/book"
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-8 py-4 text-sm font-medium text-background transition-all hover:bg-foreground/85 hover:-translate-y-0.5 hover:shadow-lg w-full sm:w-auto"
        >
          Start Your Project
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
        </Link>
        <Link
          href="/contact"
          className="group inline-flex items-center justify-center gap-2 rounded-full border border-foreground px-8 py-4 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5 hover:bg-foreground/5 hover:shadow-lg w-full sm:w-auto"
        >
          Connect Now
        </Link>
      </div>
    </section>
  );
}
