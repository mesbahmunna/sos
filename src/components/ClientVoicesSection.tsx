"use client";

import { motion } from "framer-motion";
import { Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";

export function ClientVoicesSection() {
  const baseTestimonials = [
    {
      quote:
        "They rebuilt our brand, our website and our funnel in 4 weeks. Revenue followed.",
      author: "Amelia R.",
      role: "Founder, Casa Nova",
      bgColor: "bg-[color:var(--brand-orange)]",
      textColor: "text-[oklch(0.18_0.02_260)]",
      translateY: "",
    },
    {
      quote:
        "Feels like having a CMO, a design studio and an ad team in one Slack channel.",
      author: "Marcus D.",
      role: "CEO, Vertex Health",
      bgColor: "bg-[oklch(0.14_0.02_260)]",
      textColor: "text-background",
      translateY: "md:translate-y-6",
    },
    {
      quote:
        "The kind of partner you'd want in the room when you're planning the next five years.",
      author: "Priya S.",
      role: "Director, Halo Tutors",
      bgColor: "bg-[color:var(--brand-cyan)]",
      textColor: "text-[oklch(0.18_0.02_260)]",
      translateY: "",
    },
  ];

  // We duplicate the testimonials so the carousel can continuously scroll
  // and visibly demonstrate the dynamic behavior on desktop where 3 fit perfectly.
  const testimonials = [...baseTestimonials, ...baseTestimonials, ...baseTestimonials];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const scroll = useCallback((direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      // Calculate how much to scroll based on responsive width (approximate card width)
      const cardWidth = clientWidth >= 1024 ? clientWidth / 3 : clientWidth >= 768 ? clientWidth / 2 : clientWidth;
      
      let newScroll = scrollLeft + (direction === "right" ? cardWidth : -cardWidth);
      
      // Infinite-like looping fallback
      if (direction === "right" && scrollLeft + clientWidth >= scrollWidth - 10) {
        newScroll = 0; // jump to start
      } else if (direction === "left" && scrollLeft <= 10) {
        newScroll = scrollWidth; // jump to end
      }

      scrollRef.current.scrollTo({
        left: newScroll,
        behavior: "smooth",
      });
    }
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      scroll("right");
    }, 5000); // 5 seconds per slide
    return () => clearInterval(interval);
  }, [isPaused, scroll]);

  return (
    <section className="mx-auto mt-16 max-w-[1400px] px-6 md:mt-48 md:px-10">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-foreground/50">
            <span className="inline-block h-px w-8 bg-foreground/40"></span>
            Client Voices
          </div>
          <h2 className="mt-6 font-display text-[clamp(2.25rem,5.5vw,5rem)] leading-[0.95] tracking-[-0.03em] text-balance">
            Trust, in their words.
          </h2>
        </div>
        
        {/* Navigation Controls */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => scroll("left")}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-foreground/10 transition-colors hover:bg-foreground/[0.03]"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button 
            onClick={() => scroll("right")}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-foreground/10 transition-colors hover:bg-foreground/[0.03]"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div 
        className="relative mt-14"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-10 pt-2 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {testimonials.map((testimonial, index) => (
            <motion.figure
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              className={`snap-start shrink-0 w-[85vw] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] grain relative flex min-h-[360px] flex-col justify-between rounded-[1.75rem] p-8 ${testimonial.bgColor} ${testimonial.textColor} ${testimonial.translateY}`}
            >
              <div className="font-display text-5xl leading-[0.85] tracking-tight opacity-30">
                &quot;
              </div>
              <blockquote className="text-xl leading-snug md:text-2xl">
                {testimonial.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center justify-between text-sm opacity-80">
                <span>
                  <div className="font-medium">{testimonial.author}</div>
                  <div className="opacity-70">{testimonial.role}</div>
                </span>
                <Sparkles className="h-4 w-4 opacity-60" />
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
