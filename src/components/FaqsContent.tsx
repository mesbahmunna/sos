"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { CtaSection } from "@/components/CtaSection";

const faqs = [
  {
    question: "What services does ShareOnSocial provide?",
    answer: "ShareOnSocial offers complete digital marketing and business growth solutions, including Social Media Management, Branding, Website Development, SEO & AEO, Paid Advertising, Content Creation, CRM & Automation, AI Business Solutions, and Outdoor Marketing."
  },
  {
    question: "What types of businesses do you work with?",
    answer: "We work with startups, small businesses, established brands, and multi-location companies across industries such as hospitality, healthcare, retail, real estate, education, finance, professional services, construction, e-commerce, and more."
  },
  {
    question: "Can you create a customised marketing strategy for my business?",
    answer: "Yes. We take the time to understand your business, audience, goals, competition, and current challenges before recommending a tailored strategy. Our solutions are designed around your specific needs rather than using a one-size-fits-all approach."
  },
  {
    question: "Do you manage both organic social media and paid advertising?",
    answer: "Yes. We can manage your organic social media presence through strategic content creation, posting, branding, and audience engagement. We also create and manage paid advertising campaigns focused on generating awareness, enquiries, leads, or sales."
  },
  {
    question: "How long does it take to see results?",
    answer: "The timeframe depends on your goals, industry, competition, selected services, and current digital presence. Paid advertising may generate responses sooner, while organic social media, SEO, branding, and website improvements usually build stronger results over time."
  },
  {
    question: "How can I get started with ShareOnSocial?",
    answer: "Simply contact our team and tell us about your business, goals, and marketing requirements. We will review your needs, recommend the most suitable solutions, and explain the next steps for starting your project."
  }
];

export function FaqsContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 md:pt-44 pb-16">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
           <div className="absolute -top-32 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-40 blur-3xl" style={{ background: 'radial-gradient(closest-side, rgba(255,138,0,0.15), transparent)' }} />
        </div>
        
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center max-w-3xl mx-auto"
          >
            <div className="text-xs uppercase tracking-[0.25em] text-[color:var(--brand-orange)] font-semibold mb-6">
              FAQs
            </div>
            <h1 className="font-display text-[clamp(2.75rem,5vw,5.5rem)] leading-[1.05] tracking-[-0.02em] text-balance">
              Frequently Asked <em className="italic text-[color:var(--brand-orange)] not-italic font-medium">Questions</em>
            </h1>
            <p className="mt-8 text-lg text-foreground/70 md:text-xl">
              Find answers to the most common questions about our services, process, and how we help businesses grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="mx-auto max-w-3xl px-6 md:px-10 mb-16 md:mb-32">
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl border border-[rgba(0,0,0,0.08)] bg-white overflow-hidden transition-colors hover:border-[rgba(0,0,0,0.12)]"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between p-6 text-left transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-foreground/90">{faq.question}</span>
                  <ChevronDown 
                    className={`h-5 w-5 shrink-0 text-[#FF8A00] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} 
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-foreground/70 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <div className="pb-16 md:pb-24">
         <CtaSection 
           heading="Ready to Grow Your Business?"
           description="Let's discuss your goals and build a strategy that delivers measurable growth."
           primaryBtnText="Book a Call"
           secondaryBtnText="Contact Us"
         />
      </div>
    </>
  );
}
