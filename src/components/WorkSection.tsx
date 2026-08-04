"use client";

import React, { useRef, useEffect } from "react";
import { motion, useInView, animate } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Calendar, CheckCircle, Clock, Camera, Briefcase, MessageSquare } from "lucide-react";

function CountUp({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && ref.current) {
      const controls = animate(0, value, {
        duration: 1.5,
        ease: "easeOut",
        onUpdate: (v) => {
          if (ref.current) {
            const formatted = value % 1 !== 0 ? v.toFixed(1) : Math.round(v);
            ref.current.textContent = `${prefix}${formatted}${suffix}`;
          }
        },
      });
      return controls.stop;
    }
  }, [isInView, value, prefix, suffix]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}

export function WorkSection() {
  return (
    <section className="mx-auto mt-32 max-w-[1400px] px-6 md:mt-48 md:px-10">
      <div className="flex items-end justify-between gap-6">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-foreground/50">
            <span className="inline-block h-px w-8 bg-foreground/40"></span>
            OUR SOLUTIONS
          </div>
          <h2 className="mt-6 font-display text-[clamp(2.25rem,5.5vw,5rem)] leading-[0.95] tracking-[-0.03em] text-balance">
            Made to{" "}
            <em className="italic text-[color:var(--color-brand-red)]">move</em>{" "}
            metrics.
          </h2>
        </div>
        <Link
          href="/portfolio"
          className="hidden shrink-0 items-center gap-2 rounded-full border border-foreground/15 px-5 py-3 text-sm hover:bg-foreground/5 md:inline-flex"
        >
          View all <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
      <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:grid-rows-[repeat(3,minmax(0,1fr))]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          style={{ willChange: "transform, opacity" }}
          transition={{ duration: 0.5 }}
          className="group relative overflow-hidden rounded-[1.75rem] bg-[color:var(--color-brand-orange)] text-white lg:row-span-2 min-h-[500px] md:min-h-[580px]"
        >
          <div className="relative flex h-full flex-col justify-between md:justify-start p-6 md:p-8">
            <div className="text-xs uppercase tracking-[0.25em] opacity-70">
              SOCIAL
            </div>
            
            <div className="mt-auto mb-[260px] md:mb-0 md:mt-24 pt-8 relative z-10">
              <div className="font-display text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.05] tracking-[-0.03em] mb-4">
                Social Media<br />Management
              </div>
              <p className="mt-1 text-sm opacity-80 max-w-[90%] leading-relaxed">
                Build a consistent social presence with strategic content, smart scheduling, and ongoing management.
              </p>
              
              <div className="mt-6 text-[11px] font-medium uppercase tracking-[0.1em] opacity-90 w-full">
                Strategy • Content • Scheduling
              </div>
            </div>

            {/* Analytics Dashboard - Card 1 (Social Media Management) */}
            <div className="absolute bottom-5 left-5 right-5 h-[240px] bg-[#FAFAFA] rounded-2xl shadow-xl border border-[#EAEAEA] pointer-events-none flex flex-col overflow-hidden">
              
              {/* Header / Summary */}
              <div className="flex items-center justify-between p-3 border-b border-[#EAEAEA]/80 bg-white relative z-20 shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="h-7 w-7 rounded-full bg-[#FF7A00]/10 flex items-center justify-center text-[#FF7A00]">
                    <Calendar className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <div className="text-[9px] uppercase tracking-wider text-black/50 font-bold">Content Calendar</div>
                    <div className="text-xs font-bold text-black leading-none mt-0.5">April 2026</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="text-right">
                    <div className="text-[8px] uppercase tracking-wider text-black/50 font-bold">Scheduled</div>
                    <div className="text-xs font-bold text-black leading-none mt-0.5">24</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[8px] uppercase tracking-wider text-black/50 font-bold">Pending</div>
                    <div className="text-xs font-bold text-[#FF7A00] leading-none mt-0.5">3</div>
                  </div>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="flex flex-grow p-3 gap-3 relative z-20 overflow-hidden">
                
                {/* Upcoming Posts Timeline */}
                <div className="flex-1 flex flex-col gap-2">
                  <div className="text-[8px] uppercase tracking-wider text-black/40 font-bold mb-0.5">Upcoming Posts</div>
                  
                  {/* Post 1 */}
                  <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} viewport={{ once: true }} className="flex items-center gap-2 bg-white border border-[#EAEAEA] p-1.5 rounded-lg shadow-sm">
                    <div className="h-6 w-6 rounded-md bg-gradient-to-tr from-[color:var(--color-brand-purple)] to-[color:var(--color-brand-pink)] flex items-center justify-center shrink-0">
                      <Camera className="h-3 w-3 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] font-bold text-black truncate">Product Launch Teaser</div>
                      <div className="text-[8px] text-black/50 flex items-center gap-1 mt-0.5">
                        <Clock className="h-2 w-2" /> Today, 2:00 PM
                      </div>
                    </div>
                    <div className="h-4 px-1.5 bg-[color:var(--color-brand-cyan)] text-[color:var(--color-brand-cyan)] rounded text-[8px] font-bold flex items-center gap-1 shrink-0">
                      <CheckCircle className="h-2 w-2" /> Ready
                    </div>
                  </motion.div>

                  {/* Post 2 */}
                  <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} viewport={{ once: true }} className="flex items-center gap-2 bg-white border border-[#EAEAEA] p-1.5 rounded-lg shadow-sm">
                    <div className="h-6 w-6 rounded-md bg-[#0077b5] flex items-center justify-center shrink-0">
                      <Briefcase className="h-3 w-3 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] font-bold text-black truncate">Industry Insights Q2</div>
                      <div className="text-[8px] text-black/50 flex items-center gap-1 mt-0.5">
                        <Clock className="h-2 w-2" /> Tomorrow, 9:00 AM
                      </div>
                    </div>
                    <div className="h-4 px-1.5 bg-[color:var(--color-brand-orange)] text-[color:var(--color-brand-orange)] rounded text-[8px] font-bold flex items-center gap-1 shrink-0">
                      Review
                    </div>
                  </motion.div>
                </div>

                {/* Right Side: Mini Analytics */}
                <div className="w-[100px] shrink-0 flex flex-col justify-between">
                  <div>
                    <div className="text-[8px] uppercase tracking-wider text-black/40 font-bold mb-1.5">Community</div>
                    <div className="bg-white border border-[#EAEAEA] p-1.5 rounded-lg shadow-sm">
                      <div className="flex items-center justify-between mb-0.5">
                        <MessageSquare className="h-3 w-3 text-[#FF7A00]" />
                        <span className="text-[8px] font-bold text-[color:var(--color-brand-cyan)]">+14%</span>
                      </div>
                      <div className="text-[11px] font-bold text-black">
                        <CountUp value={842} />
                      </div>
                      <div className="text-[7px] text-black/50 uppercase tracking-wide mt-0.5">Mentions</div>
                    </div>
                  </div>
                  
                  <div className="relative h-10 w-full mt-1.5 bg-white border border-[#EAEAEA] rounded-lg shadow-sm overflow-hidden flex items-end">
                    <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="w-full h-full opacity-60">
                      <path d="M 0 40 C 20 40, 30 20, 50 25 C 70 30, 80 10, 100 15 L 100 40 Z" fill="#FF7A00" fillOpacity="0.15" />
                      <path d="M 0 40 C 20 40, 30 20, 50 25 C 70 30, 80 10, 100 15" fill="none" stroke="#FF7A00" strokeWidth="2" />
                    </svg>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          style={{ willChange: "transform, opacity" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="group relative overflow-hidden rounded-[1.75rem] bg-[color:var(--color-brand-blue)] text-background min-h-[320px] md:min-h-[380px]"
        >
          <div className="relative flex h-full flex-col justify-between p-6 md:p-8">
            <div className="text-xs uppercase tracking-[0.25em] opacity-70">
              CONTENT
            </div>
            
            <div className="mt-auto pt-8">
              <div className="font-display text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.05] tracking-[-0.03em] mb-4">
                Content<br />Creation
              </div>
              <p className="mt-1 text-sm opacity-80 max-w-[90%] leading-relaxed">
                Creative, on-brand content designed to capture attention, engage audiences, and keep your brand memorable.
              </p>
              
              <div className="mt-6 text-[11px] font-medium uppercase tracking-[0.1em] opacity-90 w-full">
                Copywriting • Graphics • Engagement
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          style={{ willChange: "transform, opacity" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="group relative overflow-hidden rounded-[1.75rem] bg-[color:var(--color-brand-pink)] text-white min-h-[320px] md:min-h-[380px]"
        >
          <div className="relative flex h-full flex-col justify-between p-6 md:p-8">
            <div className="text-xs uppercase tracking-[0.25em] opacity-70">
              PAID ADS
            </div>
            
            <div className="mt-auto pt-8">
              <div className="font-display text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.05] tracking-[-0.03em] mb-4">
                Paid<br />Advertising
              </div>
              <p className="mt-1 text-sm opacity-80 max-w-[90%] leading-relaxed">
                Targeted campaigns built to reach the right audience, generate quality leads, and drive more conversions.
              </p>
              
              <div className="mt-6 text-[11px] font-medium uppercase tracking-[0.1em] opacity-90 w-full">
                Targeting • Campaigns • Optimization
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          style={{ willChange: "transform, opacity" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="group relative overflow-hidden rounded-[1.75rem] bg-[oklch(0.96_0.01_90)] text-foreground lg:row-span-2 min-h-[500px] md:min-h-[580px]"
        >
          <div className="relative flex h-full flex-col justify-between md:justify-start p-6 md:p-8">
            <div className="text-xs uppercase tracking-[0.25em] opacity-70">
              GROWTH
            </div>
            
            <div className="mt-auto mb-[260px] md:mb-0 md:mt-24 pt-8 relative z-10">
              <div className="font-display text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.05] tracking-[-0.03em] mb-4">
                Social Media<br />Growth
              </div>
              <p className="mt-1 text-sm opacity-80 max-w-[90%] leading-relaxed">
                Turn your social presence into a powerful growth channel with strategies focused on reach and engagement.
              </p>
              
              <div className="mt-6 text-[11px] font-medium uppercase tracking-[0.1em] opacity-90 w-full">
                Strategy • Reach • Engagement
              </div>
            </div>

            {/* Analytics Dashboard - Card 4 (Social Media Growth) */}
            <div className="absolute bottom-5 left-5 right-5 h-[240px] bg-[#FAFAFA] rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-[#EAEAEA] pointer-events-none flex flex-col overflow-hidden">
              <div className="grid grid-cols-4 gap-1.5 sm:gap-2 p-4 pb-0 relative z-20">
                {[
                  { label: "Audience", value: 12.4, suffix: "k", trend: "+18%" },
                  { label: "Reach", value: 1.8, suffix: "m", trend: "+24%" },
                  { label: "Engage", value: 5.4, suffix: "%", trend: "+12%" },
                  { label: "Impress", value: 4.2, suffix: "m", trend: "+32%" }
                ].map((kpi, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + idx * 0.1 }}
                    className="bg-white border border-[#EAEAEA] rounded-xl p-2 shadow-sm flex flex-col justify-between"
                  >
                    <div className="text-[9px] uppercase tracking-wider text-black/60 font-semibold truncate">
                      {kpi.label}
                    </div>
                    <div className="flex items-end justify-between mt-1.5">
                      <div className="font-display font-bold text-sm sm:text-base text-black leading-none">
                        <CountUp value={kpi.value} suffix={kpi.suffix} />
                      </div>
                      <div className="text-[9px] font-bold text-[color:var(--color-brand-cyan)] leading-none mb-0.5">
                        {kpi.trend}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Chart Area */}
              <div className="relative flex-grow w-full mt-4">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.8 }}
                  className="absolute right-3 -top-2 rounded-lg bg-gray-900 px-2.5 py-1.5 shadow-lg border border-gray-700 z-10"
                >
                  <div className="flex flex-col gap-0.5">
                    <div className="flex items-center gap-1.5">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D97706] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#D97706]"></span>
                      </span>
                      <span className="text-[10px] font-bold text-white">Monthly Growth</span>
                    </div>
                    <span className="text-[8px] text-gray-400 pl-3">+18% Follower Trend</span>
                  </div>
                </motion.div>

                <svg viewBox="0 0 400 130" preserveAspectRatio="none" className="h-full w-full overflow-visible">
                  <defs>
                    <linearGradient id="gradient-card4" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0" stopColor="#D97706" stopOpacity="0.4" />
                      <stop offset="1" stopColor="#D97706" stopOpacity="0.05" />
                    </linearGradient>
                  </defs>
                  
                  {/* Grid lines */}
                  <line x1="0" y1="20" x2="400" y2="20" stroke="#000" strokeOpacity="0.1" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="0" y1="65" x2="400" y2="65" stroke="#000" strokeOpacity="0.1" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="0" y1="110" x2="400" y2="110" stroke="#000" strokeOpacity="0.1" strokeWidth="1" strokeDasharray="3 3" />
                  
                  <motion.path
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    d="M 0 75 C 40 75, 60 95, 100 95 C 150 95, 150 55, 200 55 C 250 55, 250 20, 300 20 C 350 20, 360 0, 400 0 L 400 130 L 0 130 Z"
                    fill="url(#gradient-card4)"
                  />
                  
                  <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                    d="M 0 75 C 40 75, 60 95, 100 95 C 150 95, 150 55, 200 55 C 250 55, 250 20, 300 20 C 350 20, 360 0, 400 0"
                    fill="none"
                    stroke="#D97706"
                    strokeWidth="3.5"
                  />
                  
                  <motion.circle initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }} cx="100" cy="95" r="4.5" fill="white" stroke="#D97706" strokeWidth="2.5" />
                  <motion.circle initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.9 }} cx="200" cy="55" r="4.5" fill="white" stroke="#D97706" strokeWidth="2.5" />
                  <motion.circle initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 1.2 }} cx="300" cy="20" r="4.5" fill="white" stroke="#D97706" strokeWidth="2.5" />
                  
                  <motion.circle initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 1.5 }} cx="400" cy="0" r="5.5" fill="white" stroke="#D97706" strokeWidth="2.5" />
                  <motion.circle initial={{ opacity: 0 }} whileInView={{ opacity: [0, 0.4, 0], scale: [1, 2.5, 2.5] }} viewport={{ once: true }} transition={{ duration: 2, repeat: Infinity, delay: 1.5 }} cx="400" cy="0" r="5.5" fill="#D97706" />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          style={{ willChange: "transform, opacity" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="group relative overflow-hidden rounded-[1.75rem] bg-[color:var(--color-brand-cyan)] text-[oklch(0.18_0.02_260)] min-h-[320px] md:min-h-[380px]"
        >
          <div className="relative flex h-full flex-col justify-between p-6 md:p-8">
            <div className="text-xs uppercase tracking-[0.25em] opacity-70">
              BRAND
            </div>
            
            <div className="mt-auto pt-8">
              <div className="font-display text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.05] tracking-[-0.03em] mb-4">
                Brand<br />Presence
              </div>
              <p className="mt-1 text-sm opacity-80 max-w-[90%] leading-relaxed">
                Create a stronger and more consistent digital presence that keeps your business visible and recognizable.
              </p>
              
              <div className="mt-6 text-[11px] font-medium uppercase tracking-[0.1em] opacity-90 w-full">
                Content • Consistency • Visibility
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          style={{ willChange: "transform, opacity" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="group relative overflow-hidden rounded-[1.75rem] bg-[oklch(0.14_0.02_260)] text-background min-h-[320px] md:min-h-[380px]"
        >
          <div className="relative flex h-full flex-col justify-between p-6 md:p-8">
            <div className="text-xs uppercase tracking-[0.25em] opacity-70">
              RETARGET
            </div>
            
            <div className="mt-auto pt-8">
              <div className="font-display text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.05] tracking-[-0.03em] mb-4">
                Retargeting<br />Campaigns
              </div>
              <p className="mt-1 text-sm opacity-80 max-w-[90%] leading-relaxed">
                Reconnect with people who already know your brand and turn their interest into meaningful action.
              </p>
              
              <div className="mt-6 text-[11px] font-medium uppercase tracking-[0.1em] opacity-90 w-full">
                Audiences • Ads • Conversions
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
