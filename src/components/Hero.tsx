"use client";

import { motion, useMotionValue, useMotionTemplate, animate, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

const nodesData = [
  { left: "12%", top: "20%", mobileLeft: "22%", mobileTop: "15%", color: "oklch(0.56 0.20 255)", label: "Website", delay: 0 },
  { left: "78%", top: "14%", mobileLeft: "78%", mobileTop: "20%", color: "oklch(0.70 0.20 350)", label: "Social", delay: 0.4 },
  { left: "88%", top: "62%", mobileLeft: "82%", mobileTop: "75%", color: "oklch(0.62 0.24 25)", label: "Reels", delay: 0.8 },
  { left: "14%", top: "68%", mobileLeft: "18%", mobileTop: "72%", color: "oklch(0.78 0.14 210)", label: "CRM", delay: 1.2 },
  { left: "62%", top: "82%", mobileLeft: "65%", mobileTop: "90%", color: "oklch(0.72 0.18 55)", label: "Ads", delay: 1.6 },
  { left: "34%", top: "86%", mobileLeft: "35%", mobileTop: "92%", color: "oklch(0.56 0.20 255)", label: "Automation", delay: 2.0 },
  { left: "48%", top: "10%", mobileLeft: "50%", mobileTop: "8%", color: "oklch(0.70 0.20 350)", label: "AI", delay: 2.4 },
];

function NetworkNode({
  left,
  top,
  mobileLeft,
  mobileTop,
  color,
  label,
  delay,
  isHovered,
  onHover,
  onLeave,
  hoveredNode
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}: any) {
  const prefersReducedMotion = useReducedMotion();
  const y = useMotionValue(0);
  const x = useMotionValue(0);

  useEffect(() => {
    if (prefersReducedMotion) return;
    
    // Add randomness to float duration and range for organic feel
    const randomDurationY = 4 + Math.random() * 2;
    const randomDurationX = 5 + Math.random() * 2;
    const randomRangeY = 5 + Math.random() * 5;
    const randomRangeX = 3 + Math.random() * 4;

    const controlsY = animate(y, [0, -randomRangeY, 0, randomRangeY, 0], {
      duration: randomDurationY,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay,
    });
    const controlsX = animate(x, [0, randomRangeX, 0, -randomRangeX, 0], {
      duration: randomDurationX,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay + 0.5,
    });

    return () => {
      controlsY.stop();
      controlsX.stop();
    };
  }, [y, x, delay, prefersReducedMotion]);

  const isActive = isHovered;
  const isOthersHovered = hoveredNode !== null && !isActive;

  return (
    <>
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full z-0"
        aria-hidden="true"
      >
        {/* Desktop Line */}
        <motion.line
          className="hidden md:block"
          x1="50%"
          y1="50%"
          x2={left}
          y2={top}
          stroke="currentColor"
          initial={{ pathLength: 0, strokeOpacity: 0 }}
          animate={{
            pathLength: 1,
            strokeOpacity: isActive ? 0.4 : isOthersHovered ? 0.05 : 0.15,
            strokeWidth: isActive ? 2 : 1,
          }}
          transition={{
            pathLength: { duration: 1, delay: delay, ease: "easeOut" },
            strokeOpacity: { duration: 0.3 },
            strokeWidth: { duration: 0.3 },
          }}
        />
        {/* Mobile Line */}
        <motion.line
          className="md:hidden"
          x1="50%"
          y1="50%"
          x2={mobileLeft || left}
          y2={mobileTop || top}
          stroke="currentColor"
          initial={{ pathLength: 0, strokeOpacity: 0 }}
          animate={{
            pathLength: 1,
            strokeOpacity: isActive ? 0.4 : isOthersHovered ? 0.05 : 0.15,
            strokeWidth: isActive ? 2 : 1,
          }}
          transition={{
            pathLength: { duration: 1, delay: delay, ease: "easeOut" },
            strokeOpacity: { duration: 0.3 },
            strokeWidth: { duration: 0.3 },
          }}
        />
      </svg>
      <motion.div
        className="absolute z-10 -translate-x-1/2 -translate-y-1/2 max-md:left-[var(--mobile-left)] max-md:top-[var(--mobile-top)] md:left-[var(--desktop-left)] md:top-[var(--desktop-top)]"
        style={{ 
          "--desktop-left": left,
          "--desktop-top": top,
          "--mobile-left": mobileLeft || left,
          "--mobile-top": mobileTop || top,
          x, 
          y, 
          willChange: "transform, opacity" 
        } as any}
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: delay, duration: 0.5, type: "spring" }}
      >
        <motion.div
          className="flex items-center gap-2 rounded-xl bg-background px-3 py-2 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.2)] backdrop-blur cursor-default border border-transparent md:gap-3 md:rounded-2xl md:px-5 md:py-3"
          onMouseEnter={onHover}
          onMouseLeave={onLeave}
          onClick={() => isActive ? onLeave() : onHover()}
          animate={{
            scale: isActive ? 1.08 : 1,
            boxShadow: isActive 
              ? "0 25px 50px -12px rgba(0,0,0,0.25)" 
              : "0 20px 60px -20px rgba(0,0,0,0.2)",
            borderColor: isActive ? "rgba(0,0,0,0.05)" : "transparent",
            opacity: isOthersHovered ? 0.5 : 1,
          }}
          transition={{ duration: 0.3, type: "spring" }}
        >
          <span
            className="h-2.5 w-2.5 rounded-full"
            style={{ background: color }}
          ></span>
          <span className="text-sm font-semibold md:text-base">{label}</span>
        </motion.div>
      </motion.div>
    </>
  );
}

export function Hero() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden pt-32 md:pt-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <motion.div
          animate={{
            rotate: [0, 5, -5, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, oklch(0.78 0.14 210 / 0.6), transparent)",
            willChange: "transform",
          }}
        ></motion.div>
        <motion.div
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[-10%] top-40 h-[400px] w-[400px] rounded-full opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, oklch(0.72 0.18 55 / 0.55), transparent)",
            willChange: "transform",
          }}
        ></motion.div>
        <motion.div
          animate={{
            x: [0, 40, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[-10%] top-80 h-[400px] w-[400px] rounded-full opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, oklch(0.70 0.20 350 / 0.55), transparent)",
            willChange: "transform",
          }}
        ></motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-[1400px] px-6 md:px-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-background/60 px-4 py-1.5 text-xs backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--color-brand-orange)] opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[color:var(--color-brand-orange)]"></span>
          </span>
          <span className="text-foreground/70">
            Not another marketing agency.
          </span>
        </motion.div>
        <h1 className="w-full md:max-w-[16ch] font-display text-[clamp(2.25rem,11vw,4rem)] md:text-[clamp(3rem,9vw,10rem)] leading-[0.85] md:leading-[0.9] tracking-[-0.045em] text-balance">
          Your partner in{" "}
          <span className="relative inline-block whitespace-nowrap">
            <span className="bg-gradient-to-r from-[color:var(--color-brand-blue)] via-[color:var(--color-brand-pink)] to-[color:var(--color-brand-orange)] bg-clip-text text-transparent">
              business growth
            </span>
            <svg
              viewBox="0 0 400 20"
              className="absolute -bottom-2 left-0 h-4 w-full"
              fill="none"
            >
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                d="M2 12 C 100 2, 300 2, 398 12"
                stroke="oklch(0.72 0.18 55)"
                strokeWidth="3"
                strokeLinecap="round"
              ></motion.path>
            </svg>
          </span>
          <span className="italic text-foreground/40">.</span>
        </h1>
        <div className="mt-10 grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-end">
          <p className="max-w-xl text-lg text-foreground/70 md:text-xl">
            We Combine Strategy, Creativity, Marketing and Technology so
            businesses don't just look good — they actually grow.
          </p>
          <div className="flex flex-wrap items-center gap-3 md:justify-end">
            <Link
              href="/book"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-4 text-sm font-medium text-background transition hover:bg-foreground/85"
            >
              Start Your Project
              <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-6 py-4 text-sm font-medium hover:bg-foreground/5"
            >
              Connect Now
            </Link>
          </div>
        </div>
        <div className="relative mt-20 md:mt-28">
          <div className="relative h-[480px] w-full overflow-hidden rounded-[2rem] border border-foreground/10 bg-gradient-to-br from-[oklch(0.98_0.005_90)] to-[oklch(0.94_0.02_220)] md:h-[560px]">
            <svg
              className="absolute inset-0 h-full w-full opacity-[0.07]"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="g"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M40 0H0V40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                  ></path>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#g)"></rect>
            </svg>
            
            {/* Center Animation and Rings */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
              <div className="relative flex h-40 w-40 items-center justify-center md:h-56 md:w-56 pointer-events-auto">
                {/* Rotating Dashed Rings */}
                <motion.div 
                  className="absolute inset-0 rounded-full border border-dashed border-foreground/20 pointer-events-none"
                  animate={{ rotate: prefersReducedMotion ? 0 : 360 }}
                  transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                  style={{ willChange: "transform" }}
                />
                <motion.div 
                  className="absolute inset-4 rounded-full border border-dashed border-foreground/10 pointer-events-none"
                  animate={{ rotate: prefersReducedMotion ? 0 : -360 }}
                  transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                  style={{ willChange: "transform" }}
                />
                
                {/* Expanding Ripple Rings */}
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="absolute inset-0 rounded-full border border-[color:var(--color-brand-orange)] pointer-events-none"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: [0, 0.15, 0], 
                      scale: [0.8, 1.2, 1.8] 
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 1.33,
                      ease: "easeOut",
                    }}
                  />
                ))}

                {/* Center Pulse */}
                <motion.div
                  animate={{ 
                    rotate: prefersReducedMotion ? 0 : 360,
                    scale: hoveredNode ? 1.05 : [1, 1.02, 1],
                    boxShadow: hoveredNode 
                      ? "0 0 40px rgba(255, 122, 0, 0.15), 0 25px 50px -12px rgba(0,0,0,0.25)" 
                      : "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
                  }}
                  transition={{ 
                    rotate: { duration: 18, repeat: Infinity, ease: "linear" },
                    scale: { duration: hoveredNode ? 0.3 : 3, repeat: hoveredNode ? 0 : Infinity, ease: "easeInOut" },
                    boxShadow: { duration: 0.3 }
                  }}
                  style={{ willChange: "transform" }}
                  className="flex h-24 w-24 items-center justify-center rounded-full bg-foreground text-background shadow-2xl md:h-32 md:w-32 z-10"
                >
                  <div className="text-center">
                    <div className="font-display text-2xl md:text-3xl">SoS</div>
                    <div className="text-[10px] uppercase tracking-widest opacity-60">
                      growth engine
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Network Nodes */}
            {nodesData.map((node) => (
              <NetworkNode
                key={node.label}
                {...node}
                isHovered={hoveredNode === node.label}
                hoveredNode={hoveredNode}
                onHover={() => setHoveredNode(node.label)}
                onLeave={() => setHoveredNode(null)}
              />
            ))}
            
          </div>
        </div>
      </motion.div>
    </section>
  );
}
