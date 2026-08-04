"use client";

import { motion } from "framer-motion";
import { Activity, Bot, CheckCircle2, Heart, MessageCircle, Share2, TrendingUp, Users, MoreHorizontal, Music, Bookmark, Play, Bell, ArrowRight } from "lucide-react";
import Link from "next/link";
import { TechnologyEcosystem } from "./TechnologyEcosystem";
import { MarketingEcosystem } from "./MarketingEcosystem";
import { MarketingDashboard } from "./MarketingDashboard";

export function SolutionsSection() {
  return (
    <section className="mx-auto mt-16 max-w-[1400px] px-6 md:mt-32 md:px-10">
      <div className="w-full flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-foreground/50">
            <span className="inline-block h-px w-8 bg-foreground/40"></span>
            Growth Solutions
          </div>
          <h2 className="mt-6 font-display text-[clamp(2.25rem,5.5vw,5rem)] leading-[0.95] tracking-[-0.03em] text-balance">
            Five practices. One outcome.
          </h2>
        </div>
        <div>
          <Link
            href="/solutions"
            className="group inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-background px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:bg-foreground hover:text-background"
          >
            Explore Our Process
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
      <div className="mt-16 space-y-6">
        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          style={{ willChange: "transform, opacity" }}
          transition={{ duration: 0.5 }}
          className="grain group relative overflow-hidden rounded-[2rem] bg-[color:var(--color-brand-orange)] text-[oklch(0.18_0.02_260)] md:min-h-[520px] pt-8 px-0 pb-0 md:p-12"
        >
          <div className="font-mono text-xs opacity-40 mb-6 md:mb-8 px-6 md:px-0">01</div>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="flex flex-col justify-end px-6 md:px-0">
              <div>
                <h3 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-[-0.03em]">
                  Branding
                </h3>
                <ul className="mt-6 flex flex-wrap gap-2">
                  <li className="rounded-full border border-current/20 px-3 py-1 text-xs backdrop-blur">
                    Identity
                  </li>
                  <li className="rounded-full border border-current/20 px-3 py-1 text-xs backdrop-blur">
                    Naming
                  </li>
                  <li className="rounded-full border border-current/20 px-3 py-1 text-xs backdrop-blur">
                    Logo systems
                  </li>
                  <li className="rounded-full border border-current/20 px-3 py-1 text-xs backdrop-blur">
                    Guidelines
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative min-h-[280px] w-full flex items-center justify-center mt-8 md:mt-4 px-6 md:px-0 pb-6 md:pb-0">
              {/* Main Brand Book / Guidelines Card */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="relative z-10 w-full sm:w-[85%] max-w-[300px] rounded-2xl bg-white/20 p-6 shadow-xl backdrop-blur-md border border-white/30"
              >
                <div className="mb-5 flex items-center justify-between border-b border-current/10 pb-4">
                  <div className="font-display text-2xl tracking-tight">Brand Identity</div>
                  <div className="flex gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-current/20"></span>
                    <span className="h-2 w-2 rounded-full bg-current/20"></span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="mb-2 text-[10px] uppercase tracking-wider opacity-50">Primary Type</div>
                    <div className="font-display text-5xl">Aa</div>
                    <div className="mt-2 text-xs opacity-70">Outfit & Inter</div>
                  </div>
                  <div>
                    <div className="mb-2 text-[10px] uppercase tracking-wider opacity-50">Core Colors</div>
                    <div className="flex flex-wrap gap-2">
                      <div className="h-6 w-6 rounded-full bg-[#111827] border border-white/30 shadow-sm" />
                      <div className="h-6 w-6 rounded-full bg-white border border-white/30 shadow-sm" />
                      <div className="h-6 w-6 rounded-full bg-[#3B82F6] border border-white/30 shadow-sm" />
                      <div className="h-6 w-6 rounded-full bg-[#F43F5E] border border-white/30 shadow-sm" />
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Floating Logo Asset */}
              <motion.div 
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-[5%] top-[5%] z-20 flex h-24 w-24 items-center justify-center rounded-2xl bg-white/30 backdrop-blur-xl border border-white/40 shadow-xl"
              >
                <div className="font-display text-4xl font-bold italic">S<span className="opacity-50">/</span>S</div>
              </motion.div>

              {/* Floating Component Asset */}
              <motion.div 
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-[5%] bottom-[10%] z-20 flex items-center gap-3 rounded-full bg-[#111827] px-4 py-2 text-white shadow-xl"
              >
                <div className="h-2 w-2 rounded-full bg-[color:var(--color-brand-cyan)]" />
                <span className="text-xs font-medium tracking-wide">Primary Button</span>
              </motion.div>

              <div className="absolute right-[10%] bottom-[10%] spin-slow h-32 w-32 rounded-full border border-current/20 border-dashed" />
            </div>
          </div>
        </motion.article>
        <div className="grid gap-6 lg:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            style={{ willChange: "transform, opacity" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grain group relative overflow-hidden rounded-[2rem] bg-[oklch(0.14_0.02_260)] text-background md:min-h-[440px] pt-8 px-0 pb-0 md:p-12"
          >
            <div className="font-mono text-xs opacity-40 mb-6 md:mb-8 px-6 md:px-0">02</div>
            <div className="grid gap-8">
              <div className="flex flex-col justify-end px-6 md:px-0">
                <div>
                  <h3 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-[-0.03em]">
                    Digital
                  </h3>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    <li className="rounded-full border border-current/20 px-3 py-1 text-xs backdrop-blur">
                      Website
                    </li>
                    <li className="rounded-full border border-current/20 px-3 py-1 text-xs backdrop-blur">
                      Ecommerce
                    </li>
                    <li className="rounded-full border border-current/20 px-3 py-1 text-xs backdrop-blur">
                      Landing pages
                    </li>
                    <li className="rounded-full border border-current/20 px-3 py-1 text-xs backdrop-blur">
                      UX/UI
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative w-full mt-8 md:mt-10 px-6 md:px-0 pb-6 md:pb-0 flex justify-center">
                {/* Main Dashboard Window */}
                <div className="relative z-10 w-full overflow-hidden rounded-2xl border border-white/40 bg-white/95 backdrop-blur-md shadow-2xl flex flex-col">
                  {/* Browser/OS Header */}
                  <div className="flex h-10 items-center gap-2 border-b border-black/10 bg-black/5 px-4">
                    <div className="flex items-center gap-1.5 w-16">
                      <span className="h-2.5 w-2.5 rounded-full bg-black/20"></span>
                      <span className="h-2.5 w-2.5 rounded-full bg-black/20"></span>
                      <span className="h-2.5 w-2.5 rounded-full bg-black/20"></span>
                    </div>
                    {/* Breadcrumb/Title */}
                    <div className="flex-1 flex items-center gap-2">
                       <div className="h-6 rounded bg-black/5 px-3 flex items-center gap-2 border border-black/5">
                          <svg className="w-3 h-3 text-black/40" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                          <span className="text-[10px] font-medium text-black/50">Acme Corp / Analytics</span>
                       </div>
                       <div className="hidden sm:flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[color:var(--color-brand-cyan)]/10 border border-[color:var(--color-brand-cyan)]/20">
                         <div className="w-1.5 h-1.5 rounded-full bg-[color:var(--color-brand-cyan)] animate-pulse"></div>
                         <span className="text-[8px] font-medium text-[color:var(--color-brand-cyan)]">Active</span>
                       </div>
                    </div>
                    {/* Utility Icons & Profile */}
                    <div className="flex items-center gap-3 justify-end">
                       <svg className="w-3.5 h-3.5 text-black/40 hover:text-black/60 cursor-pointer transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                       <div className="relative cursor-pointer">
                         <svg className="w-3.5 h-3.5 text-black/40 hover:text-black/60 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                         <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-[color:var(--color-brand-orange)] rounded-full border border-white"></div>
                       </div>
                       <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-gray-200 to-gray-400 border border-black/10 cursor-pointer shadow-sm"></div>
                    </div>
                  </div>
                  
                  {/* Dashboard Content */}
                  <div className="flex flex-1 p-4 gap-4 bg-white">
                    {/* Left Sidebar */}
                    <div className="w-10 sm:w-14 hidden sm:flex flex-col gap-2 items-center border-r border-black/5 pr-2 py-2">
                      <div className="w-8 h-8 rounded-lg bg-[color:var(--color-brand-orange)]/10 text-[color:var(--color-brand-orange)] flex items-center justify-center shadow-sm border border-[color:var(--color-brand-orange)]/20 relative group cursor-pointer">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z" /></svg>
                        <div className="absolute left-full ml-2 px-2 py-1 bg-[#111827] text-white text-[8px] rounded opacity-0 group-hover:opacity-100 whitespace-nowrap pointer-events-none z-50 transition-opacity">Overview</div>
                      </div>
                      {[
                        { icon: "M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z", label: "Analytics" },
                        { icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z", label: "Audience" },
                        { icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9", label: "Campaigns" },
                        { icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z", label: "Settings" },
                        { icon: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12", label: "Export" }
                      ].map((item, i) => (
                        <div key={i} className="w-8 h-8 rounded-lg text-black/40 hover:bg-black/5 hover:text-black/70 flex items-center justify-center transition-colors relative group cursor-pointer">
                           <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} /></svg>
                           <div className="absolute left-full ml-2 px-2 py-1 bg-[#111827] text-white text-[8px] rounded opacity-0 group-hover:opacity-100 whitespace-nowrap pointer-events-none z-50 transition-opacity">{item.label}</div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Main Area */}
                    <div className="flex-1 flex flex-col gap-4">
                      {/* Top Cards (4 Grid) */}
                      <div className="grid grid-cols-4 gap-2 sm:gap-3">
                        {[
                          { title: "Total Visitors", val: "124.5K", change: "+12%", spark: "w-8 bg-[color:var(--color-brand-cyan)]/20" },
                          { title: "Leads", val: "8,240", change: "+8%", spark: "w-6 bg-[color:var(--color-brand-cyan)]/20" },
                          { title: "Conversion", val: "6.4%", change: "+2%", spark: "w-4 bg-[color:var(--color-brand-orange)]/20" },
                          { title: "Revenue", val: "$42.8K", change: "+15%", spark: "w-10 bg-[color:var(--color-brand-cyan)]/20" }
                        ].map((stat, i) => (
                          <div key={i} className="h-16 rounded-xl bg-white border border-black/5 shadow-sm p-2.5 flex flex-col justify-between hover:border-black/10 transition-colors">
                             <div className="flex justify-between items-start">
                                <span className="text-[8px] font-medium text-black/50 hidden sm:inline-block">{stat.title}</span>
                                <span className="text-[8px] font-medium text-black/50 sm:hidden">{stat.title.split(' ')[0]}</span>
                                <div className="text-[7px] font-bold text-[color:var(--color-brand-cyan)] bg-[color:var(--color-brand-cyan)]/10 px-1 py-0.5 rounded hidden sm:inline-block">{stat.change}</div>
                             </div>
                             <div className="flex items-end justify-between">
                                <span className="text-sm font-bold text-black/80">{stat.val}</span>
                                <div className={`h-2 ${stat.spark} rounded-sm hidden sm:block`}></div>
                             </div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Graph Area */}
                      <div className="flex-1 rounded-xl bg-black/[0.03] border border-black/5 p-2 sm:p-3 relative overflow-hidden min-h-[180px] flex items-center justify-center">
                        
                        {/* Empty Area Above Graph (Legend & Guides) */}
                        <div className="absolute top-2 left-3 right-3 flex justify-between items-start z-20 pointer-events-none">
                           <div className="flex flex-col gap-1">
                              <div className="flex gap-4 items-center">
                                 <span className="text-[9px] font-bold text-black/70 hidden sm:inline-block">Performance</span>
                                 <div className="flex gap-2">
                                    <div className="flex items-center gap-1">
                                       <div className="w-2 h-0.5 bg-[color:var(--color-brand-orange)]"></div>
                                       <span className="text-[7px] text-black/40 font-medium">Revenue</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                       <div className="w-2 h-0.5 bg-black/20"></div>
                                       <span className="text-[7px] text-black/40 font-medium">Growth</span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="flex items-center gap-1.5 pointer-events-auto">
                              <div className="h-5 px-2 rounded bg-white border border-black/10 text-[7px] font-medium text-black/60 flex items-center gap-1 shadow-sm cursor-pointer hover:bg-black/5 transition-colors hidden sm:flex">
                                 Last 6 Months
                                 <svg className="w-2 h-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                              </div>
                              <div className="h-5 w-5 rounded bg-white border border-black/10 flex items-center justify-center shadow-sm cursor-pointer hover:bg-black/5 transition-colors text-black/50">
                                 <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                              </div>
                           </div>
                        </div>

                        {/* Background Guide Lines & Y-Axis */}
                        <div className="absolute inset-x-2 top-9 bottom-12 flex flex-col justify-between pointer-events-none z-0">
                           {[ "100k", "75k", "50k", "0" ].map((val, i) => (
                              <div key={i} className="w-full border-b border-black/5 border-dashed relative">
                                 <span className="absolute right-0 -top-2.5 text-[6px] text-black/30 font-mono bg-transparent">{val}</span>
                              </div>
                           ))}
                        </div>
                        
                        {/* Highlight Current Month Line */}
                        <div className="absolute right-[15%] top-9 bottom-12 w-px border-r border-dashed border-[color:var(--color-brand-orange)]/30 z-0 pointer-events-none"></div>

                        {/* Floating Tooltip (Attached to right side of graph) */}
                        <div className="absolute right-[12%] top-[25%] bg-[#111827] text-white px-2 py-1 rounded shadow-lg text-[7px] font-medium hidden sm:flex flex-col gap-0.5 z-30 pointer-events-none">
                           <div className="flex items-center gap-1">
                             <div className="w-1 h-1 rounded-full bg-[color:var(--color-brand-orange)]"></div>
                             Rev: $42.8K
                           </div>
                           <div className="text-[5px] text-white/50 ml-2">May 14, 2024</div>
                        </div>

                        {/* Right Floating Notification */}
                        <div className="absolute right-2 top-[40%] bg-white/95 backdrop-blur-sm p-1.5 rounded-lg shadow-xl border border-black/10 hidden sm:flex flex-col gap-1 z-40 pointer-events-auto origin-right">
                           <div className="flex items-center gap-1 font-semibold text-black/80 text-[7px]">
                              <svg className="w-2.5 h-2.5 text-[color:var(--color-brand-cyan)]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                              Campaign Live
                           </div>
                           <div className="flex items-center gap-1 text-[6px] text-black/50 font-medium">
                              <div className="w-1 h-1 rounded-full bg-[color:var(--color-brand-orange)] animate-pulse"></div>
                              Automation Active
                           </div>
                        </div>

                        <svg viewBox="0 0 200 100" preserveAspectRatio="none" className="w-full h-full overflow-visible z-10 relative">
                             <defs>
                               <linearGradient id="digital-chart-grad" x1="0" x2="0" y1="0" y2="1">
                                 <stop offset="0" stopColor="var(--color-brand-orange)" stopOpacity="0.4"></stop>
                                 <stop offset="1" stopColor="var(--color-brand-orange)" stopOpacity="0"></stop>
                               </linearGradient>
                             </defs>
                             
                             <motion.path
                               animate={{ opacity: [0.5, 1, 0.5] }}
                               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                               d="M0 90 C 12.5 90, 12.5 82, 25 82 C 37.5 82, 37.5 86, 50 86 C 62.5 86, 62.5 65, 75 65 C 87.5 65, 87.5 70, 100 70 C 112.5 70, 112.5 48, 125 48 C 137.5 48, 137.5 28, 150 28 C 162.5 28, 162.5 35, 175 35 C 187.5 35, 187.5 10, 200 10 L 200 100 L 0 100 Z"
                               fill="url(#digital-chart-grad)"
                             />
                             
                             <path
                               d="M0 90 C 12.5 90, 12.5 82, 25 82 C 37.5 82, 37.5 86, 50 86 C 62.5 86, 62.5 65, 75 65 C 87.5 65, 87.5 70, 100 70 C 112.5 70, 112.5 48, 125 48 C 137.5 48, 137.5 28, 150 28 C 162.5 28, 162.5 35, 175 35 C 187.5 35, 187.5 10, 200 10"
                               fill="none"
                               stroke="var(--color-brand-orange)"
                               strokeWidth="2.5"
                               strokeLinecap="round"
                               className="opacity-30"
                             />
                             
                             <motion.path
                               initial={{ pathLength: 0.7, pathSpacing: 0.3, pathOffset: 0 }}
                               animate={{ pathOffset: 1 }}
                               transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                               d="M0 90 C 12.5 90, 12.5 82, 25 82 C 37.5 82, 37.5 86, 50 86 C 62.5 86, 62.5 65, 75 65 C 87.5 65, 87.5 70, 100 70 C 112.5 70, 112.5 48, 125 48 C 137.5 48, 137.5 28, 150 28 C 162.5 28, 162.5 35, 175 35 C 187.5 35, 187.5 10, 200 10"
                               fill="none"
                               stroke="var(--color-brand-orange)"
                               strokeWidth="2.5"
                               strokeLinecap="round"
                             />
                             
                             {/* Pulsing Data points */}
                             {[
                               { cx: 25, cy: 82 },
                               { cx: 50, cy: 86 },
                               { cx: 75, cy: 65 },
                               { cx: 100, cy: 70 },
                               { cx: 125, cy: 48 },
                               { cx: 150, cy: 28 },
                               { cx: 175, cy: 35 },
                             ].map((point, i) => (
                               <motion.circle
                                 key={i}
                                 initial={{ opacity: 0.4, scale: 1 }}
                                 animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.3, 1] }}
                                 transition={{ 
                                   duration: 2 + (i % 3) * 0.5, 
                                   repeat: Infinity, 
                                   ease: "easeInOut",
                                   delay: i * 0.2
                                 }}
                                 cx={point.cx}
                                 cy={point.cy}
                                 r="2.5"
                                 fill="white"
                                 stroke="var(--color-brand-orange)"
                                 strokeWidth="1.5"
                               />
                             ))}
                             
                             {/* Final Data Point with Stronger Breathing Glow */}
                             <motion.circle
                               animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.15, 1] }}
                               transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                               cx="200"
                               cy="10"
                               r="4.5"
                               fill="var(--color-brand-orange)"
                               stroke="white"
                               strokeWidth="1.5"
                             />
                             <motion.circle
                               animate={{ opacity: [0, 0.8, 0], scale: [1, 2.8, 2.8] }}
                               transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
                             />
                           </svg>
                           
                           {/* X-Axis Labels */}
                           <div className="absolute bottom-9 inset-x-3 border-t border-black/10 pt-1 flex justify-between text-[6px] text-black/30 font-mono z-10 pointer-events-none">
                              <span>JAN</span>
                              <span className="hidden sm:inline-block">FEB</span>
                              <span>MAR</span>
                              <span className="hidden sm:inline-block">APR</span>
                              <span className="text-[color:var(--color-brand-orange)] font-bold">MAY</span>
                              <span>JUN</span>
                           </div>

                           {/* Below Graph: Small summary cards */}
                           <div className="absolute bottom-1 inset-x-2 grid grid-cols-4 gap-2 z-20 pointer-events-auto">
                              {[
                                { title: "Goal Completion", val: "1,204" },
                                { title: "Conversion", val: "3.2%" },
                                { title: "Avg Session", val: "4m 12s" },
                                { title: "Bounce Rate", val: "24%" }
                              ].map((card, idx) => (
                                <div key={idx} className="bg-white border border-gray-100 rounded-[4px] p-1 flex flex-col items-center justify-center shadow-sm">
                                   <span className="text-[5px] text-gray-400 font-mono uppercase leading-tight hidden sm:block">{card.title}</span>
                                   <span className="text-[8px] font-bold text-gray-800 leading-tight">{card.val}</span>
                                </div>
                              ))}
                           </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </motion.article>
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            style={{ willChange: "transform, opacity" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grain group relative overflow-hidden rounded-[2rem] bg-[color:var(--color-brand-pink)] text-[oklch(0.18_0.02_260)] md:min-h-[440px] pt-8 px-0 pb-0 md:p-12"
          >
            <div className="font-mono text-xs opacity-40 mb-6 md:mb-8 px-6 md:px-0">03</div>
            <div className="grid gap-8">
              <div className="flex flex-col justify-end px-6 md:px-0">
                <div>
                  <h3 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-[-0.03em]">
                    Content
                  </h3>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    <li className="rounded-full border border-current/20 px-3 py-1 text-xs backdrop-blur">
                      Reels
                    </li>
                    <li className="rounded-full border border-current/20 px-3 py-1 text-xs backdrop-blur">
                      Storyboarding
                    </li>
                    <li className="rounded-full border border-current/20 px-3 py-1 text-xs backdrop-blur">
                      Video Editing
                    </li>
                    <li className="rounded-full border border-current/20 px-3 py-1 text-xs backdrop-blur">
                      AI Content
                    </li>
                    <li className="rounded-full border border-current/20 px-3 py-1 text-xs backdrop-blur">
                      Graphics Designing
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative min-h-[300px] w-full flex items-center justify-center mt-8 md:mt-4 px-6 md:px-0 pb-6 md:pb-0">
                <div className="relative flex items-center justify-center w-full max-w-[340px]">
                  {/* Phone 1 (Left - Background) */}
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute left-0 z-10 aspect-[9/19] w-28 overflow-hidden rounded-[20px] bg-white/90 shadow-2xl border border-white/40 backdrop-blur-md"
                    style={{ transform: "rotate(-12deg) scale(0.9) translateX(20px)" }}
                  >
                    {/* Header */}
                    <div className="absolute top-0 w-full px-2 py-2 flex items-center justify-between border-b border-black/5 bg-white/80 backdrop-blur-md z-20">
                       <div className="flex items-center gap-1.5">
                         <div className="h-4 w-4 rounded-full bg-gradient-to-tr from-[color:var(--color-brand-pink)] to-[color:var(--color-brand-orange)] p-[1px]">
                           <div className="h-full w-full rounded-full bg-white border border-white overflow-hidden">
                             <div className="w-full h-full bg-gray-200" />
                           </div>
                         </div>
                         <div className="h-1.5 w-10 rounded bg-black/60" />
                       </div>
                       <MoreHorizontal className="w-3 h-3 text-black/40" />
                    </div>
                    {/* Scrolling Content */}
                    <motion.div 
                      className="absolute inset-0 pt-8"
                      animate={{ y: [0, -30, 0] }}
                      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    >
                      {/* Post 1 */}
                      <div className="px-2 pt-2">
                        <div className="aspect-square rounded-md bg-gradient-to-br from-[color:var(--color-brand-blue)]/20 to-[color:var(--color-brand-pink)]/20 border border-black/5 relative overflow-hidden">
                          {/* Shimmer */}
                          <motion.div 
                            className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent"
                            animate={{ translateX: ['-100%', '200%'] }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                          />
                        </div>
                        <div className="flex items-center gap-1.5 mt-1.5 px-0.5">
                           <Heart className="w-3 h-3 text-[color:var(--color-brand-pink)]" fill="currentColor" />
                           <MessageCircle className="w-3 h-3 text-black/60" />
                           <Share2 className="w-3 h-3 text-black/60" />
                        </div>
                        <div className="mt-1 px-0.5 space-y-1">
                          <div className="h-1.5 w-14 rounded bg-black/70" />
                          <div className="h-1 w-20 rounded bg-black/40" />
                          <div className="h-1 w-12 rounded bg-black/30" />
                        </div>
                      </div>
                      <div className="w-full h-[1px] bg-black/5 my-2" />
                      {/* Post 2 */}
                      <div className="px-2">
                        <div className="flex items-center gap-1.5 mb-1.5">
                         <div className="h-4 w-4 rounded-full bg-gray-200" />
                         <div className="h-1.5 w-10 rounded bg-black/50" />
                        </div>
                        <div className="aspect-[4/3] rounded-md bg-gradient-to-tr from-gray-100 to-gray-200 border border-black/5" />
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Phone 2 (Center - Foreground) */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-30 aspect-[9/19] w-36 overflow-hidden rounded-[24px] bg-white shadow-2xl border border-white/50"
                  >
                    {/* Reel UI */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--color-brand-blue)]/30 to-[color:var(--color-brand-orange)]/30" />
                    
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                    />

                    {/* Floating Text blocks */}
                    <div className="absolute bottom-10 left-3 right-10 z-20">
                      <div className="flex items-center gap-1 mb-1">
                        <span className="text-[9px] font-bold text-white shadow-sm">@brand</span>
                        <CheckCircle2 className="w-2.5 h-2.5 text-[color:var(--color-brand-blue)]" fill="currentColor" />
                      </div>
                      <div className="text-[7.5px] text-white/90 leading-snug mb-2 drop-shadow-md">
                        The ultimate guide to scaling your brand in 2024. 🚀 #growth
                      </div>
                      <div className="flex gap-1">
                        <span className="px-1.5 py-0.5 rounded bg-white/20 backdrop-blur-md text-[6px] text-white flex items-center gap-0.5 shadow-sm">
                          <Music className="w-2 h-2" /> Original Audio
                        </span>
                      </div>
                    </div>

                    {/* Right Action Bar */}
                    <div className="absolute bottom-10 right-2 flex flex-col items-center gap-2.5 z-20">
                      <div className="flex flex-col items-center gap-0.5 relative group">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black/20 backdrop-blur-md shadow-sm border border-white/10">
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <Heart className="h-3 w-3 text-[color:var(--color-brand-pink)]" fill="currentColor" />
                          </motion.div>
                        </div>
                        <span className="text-[6px] font-medium text-white shadow-sm">
                           <motion.span animate={{ opacity: [1, 0.7, 1] }} transition={{ duration: 3, repeat: Infinity }}>12.4K</motion.span>
                        </span>
                        
                        {/* Floating heart */}
                        <motion.div 
                           className="absolute bottom-4 pointer-events-none"
                           animate={{ y: [0, -20], opacity: [0, 1, 0], scale: [0.5, 1, 0.8] }}
                           transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                        >
                           <Heart className="w-2.5 h-2.5 text-[color:var(--color-brand-pink)]" fill="currentColor" />
                        </motion.div>
                      </div>
                      <div className="flex flex-col items-center gap-0.5">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black/20 backdrop-blur-md shadow-sm border border-white/10">
                          <MessageCircle className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-[6px] font-medium text-white shadow-sm">342</span>
                      </div>
                      <div className="flex flex-col items-center gap-0.5">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black/20 backdrop-blur-md shadow-sm border border-white/10">
                          <Bookmark className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-[6px] font-medium text-white shadow-sm">1.2K</span>
                      </div>
                      <div className="flex flex-col items-center gap-0.5">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black/20 backdrop-blur-md shadow-sm border border-white/10">
                          <Share2 className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-[6px] font-medium text-white shadow-sm">Share</span>
                      </div>
                    </div>

                    {/* Progress bar */}
                    <div className="absolute bottom-2 left-2 right-2 h-0.5 bg-white/30 rounded-full overflow-hidden z-20">
                       <motion.div 
                         className="h-full bg-white rounded-full"
                         animate={{ width: ["0%", "100%"] }}
                         transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                       />
                    </div>
                  </motion.div>

                  {/* Phone 3 (Right - Background) */}
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute right-0 z-20 aspect-[9/19] w-28 overflow-hidden rounded-[20px] bg-white/90 shadow-2xl border border-white/40 backdrop-blur-md"
                    style={{ transform: "rotate(12deg) scale(0.9) translateX(-20px)" }}
                  >
                    {/* Header */}
                    <div className="absolute top-0 w-full px-2 py-2 flex items-center justify-between border-b border-black/5 bg-white/80 backdrop-blur-md z-20">
                       <div className="h-1.5 w-10 rounded bg-black/30" />
                       <div className="relative">
                          <Bell className="w-3 h-3 text-black/50" />
                          <motion.div 
                            className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-[color:var(--color-brand-pink)] rounded-full"
                            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.7, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                       </div>
                    </div>

                    {/* Carousel Style */}
                    <motion.div 
                      className="absolute inset-0 pt-8 px-2"
                      animate={{ y: [0, -35, 0] }}
                      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    >
                      {/* Profile info block */}
                      <div className="flex items-center gap-1.5 mb-1.5 p-1 bg-black/5 rounded-md border border-black/5">
                        <div className="w-5 h-5 rounded-full bg-gray-200 border border-white" />
                        <div>
                          <div className="h-1 w-10 rounded bg-black/60 mb-0.5" />
                          <div className="h-1 w-6 rounded bg-black/30" />
                        </div>
                      </div>

                      <div className="flex gap-1.5 overflow-hidden mb-1.5">
                        <motion.div 
                          className="aspect-[4/5] w-16 flex-shrink-0 rounded-md bg-gradient-to-br from-[color:var(--color-brand-orange)]/20 to-[color:var(--color-brand-pink)]/20 border border-black/5 relative overflow-hidden"
                          animate={{ x: [0, -70, 0] }}
                          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        >
                           <div className="absolute bottom-1 left-1 right-1 p-0.5 bg-white/60 backdrop-blur-sm rounded-sm">
                             <div className="h-0.5 w-8 bg-black/60 rounded" />
                           </div>
                        </motion.div>
                        <motion.div 
                          className="aspect-[4/5] w-16 flex-shrink-0 rounded-md bg-gradient-to-bl from-[color:var(--color-brand-blue)]/20 to-[color:var(--color-brand-cyan)]/20 border border-black/5 relative overflow-hidden"
                          animate={{ x: [0, -70, 0] }}
                          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        >
                           <div className="absolute inset-0 flex items-center justify-center">
                             <div className="w-4 h-4 rounded-full bg-white/60 backdrop-blur-sm flex items-center justify-center pl-0.5">
                               <Play className="w-1.5 h-1.5 text-black/70" fill="currentColor" />
                             </div>
                           </div>
                        </motion.div>
                      </div>

                      {/* CTA button */}
                      <div className="w-full py-1 rounded bg-[color:var(--color-brand-blue)] text-white text-[7px] font-medium text-center shadow-sm">
                        Learn More
                      </div>

                      {/* Comments preview */}
                      <div className="mt-1.5 p-1.5 rounded-md bg-black/5 space-y-1">
                        <div className="flex items-start gap-1">
                           <div className="w-2.5 h-2.5 rounded-full bg-gray-300 shrink-0" />
                           <div>
                             <div className="h-1 w-5 rounded bg-black/60 mb-0.5" />
                             <div className="h-1 w-12 rounded bg-black/30" />
                           </div>
                        </div>
                        <div className="flex items-start gap-1">
                           <div className="w-2.5 h-2.5 rounded-full bg-gray-300 shrink-0" />
                           <div>
                             <div className="h-1 w-7 rounded bg-black/60 mb-0.5" />
                             <div className="h-1 w-10 rounded bg-black/30" />
                           </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
                
                {/* Floating Notification */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                  className="absolute bottom-4 -left-4 z-40 flex items-center gap-2 rounded-full border border-white/50 bg-white px-3 py-2 shadow-xl backdrop-blur-md hidden md:flex"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[color:var(--color-brand-pink)] to-[color:var(--color-brand-orange)] text-white shadow-inner">
                    <Heart className="h-3.5 w-3.5" fill="currentColor" />
                  </div>
                  <span className="text-xs font-bold text-black">Viral Reach</span>
                </motion.div>
              </div>
            </div>
          </motion.article>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            style={{ willChange: "transform, opacity" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grain group relative overflow-hidden rounded-[2rem] bg-[oklch(0.96_0.01_90)] text-foreground md:min-h-[340px] pt-8 px-0 pb-0 md:p-12"
          >
            <div className="font-mono text-xs opacity-40 mb-6 md:mb-8 px-6 md:px-0">04</div>
            <div className="grid gap-8">
              <div className="flex flex-col justify-end px-6 md:px-0">
                <div>
                  <h3 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-[-0.03em]">
                    Marketing
                  </h3>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    <li className="rounded-full px-3 py-1 text-xs bg-[#1877F2] text-white transition-all duration-[250ms] hover:-translate-y-0.5 hover:brightness-90 cursor-default shadow-sm hover:shadow-md">
                      Meta Ads
                    </li>
                    <li className="rounded-full px-3 py-1 text-xs bg-[#34A853] text-white transition-all duration-[250ms] hover:-translate-y-0.5 hover:brightness-90 cursor-default shadow-sm hover:shadow-md">
                      Google Ads
                    </li>
                    <li className="rounded-full px-3 py-1 text-xs bg-[#7C3AED] text-white transition-all duration-[250ms] hover:-translate-y-0.5 hover:brightness-90 cursor-default shadow-sm hover:shadow-md">
                      SEO
                    </li>
                    <li className="rounded-full px-3 py-1 text-xs bg-[#FF7A00] text-white transition-all duration-[250ms] hover:-translate-y-0.5 hover:brightness-90 cursor-default shadow-sm hover:shadow-md">
                      AEO
                    </li>
                    <li className="rounded-full px-3 py-1 text-xs bg-[#EC4899] text-white transition-all duration-[250ms] hover:-translate-y-0.5 hover:brightness-90 cursor-default shadow-sm hover:shadow-md">
                      Social Media Management
                    </li>
                    <li className="rounded-full px-3 py-1 text-xs bg-[#0EA5E9] text-white transition-all duration-[250ms] hover:-translate-y-0.5 hover:brightness-90 cursor-default shadow-sm hover:shadow-md">
                      Email Marketing
                    </li>
                    <li className="rounded-full px-3 py-1 text-xs bg-[#F43F5E] text-white transition-all duration-[250ms] hover:-translate-y-0.5 hover:brightness-90 cursor-default shadow-sm hover:shadow-md">
                      Lead Generation
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative min-h-[250px] mt-8 md:mt-4 flex flex-col justify-end px-6 md:px-0">
                {/* Background ambient glow for the chart */}
                <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-[color:var(--color-brand-orange)]/10 blur-[40px]"></div>
                
                <div className="grid h-full grid-cols-2 items-center gap-6 relative z-10">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-foreground/50">
                      This quarter
                    </div>
                    <div className="mt-2 flex items-baseline gap-2">
                      <div className="font-display text-6xl tracking-tight md:text-7xl">
                        +312%
                      </div>
                      <TrendingUp className="h-6 w-6 text-[color:var(--color-brand-cyan)]" />
                    </div>
                    <div className="mt-1 text-sm text-foreground/60">
                      Avg. qualified pipeline
                    </div>
                  </div>
                  
                  <div className="relative h-32 w-full">
                    {/* Live indicator badge */}
                    <div className="absolute -top-4 right-0 flex items-center gap-2 rounded-full bg-white px-2 py-1 shadow-md border border-black/5">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[color:var(--color-brand-cyan)] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[color:var(--color-brand-cyan)]"></span>
                      </span>
                      <span className="text-[10px] font-medium uppercase tracking-wider text-black">Live ROI</span>
                    </div>

                    <svg viewBox="0 0 200 100" className="h-full w-full overflow-visible">
                      <defs>
                        <linearGradient id="s4" x1="0" x2="0" y1="0" y2="1">
                          <stop offset="0" stopColor="oklch(0.62 0.24 25)" stopOpacity="0.4"></stop>
                          <stop offset="1" stopColor="oklch(0.62 0.24 25)" stopOpacity="0"></stop>
                        </linearGradient>
                      </defs>
                      {/* Grid Lines */}
                      <line x1="0" y1="10" x2="200" y2="10" stroke="oklch(0.62 0.24 25)" strokeOpacity="0.15" strokeDasharray="4 4" />
                      <line x1="0" y1="36.6" x2="200" y2="36.6" stroke="oklch(0.62 0.24 25)" strokeOpacity="0.15" strokeDasharray="4 4" />
                      <line x1="0" y1="63.3" x2="200" y2="63.3" stroke="oklch(0.62 0.24 25)" strokeOpacity="0.15" strokeDasharray="4 4" />
                      <line x1="0" y1="90" x2="200" y2="90" stroke="oklch(0.62 0.24 25)" strokeOpacity="0.15" strokeDasharray="4 4" />
                      
                      <path
                        d="M0 90 C 12.5 90, 12.5 82, 25 82 C 37.5 82, 37.5 86, 50 86 C 62.5 86, 62.5 65, 75 65 C 87.5 65, 87.5 70, 100 70 C 112.5 70, 112.5 48, 125 48 C 137.5 48, 137.5 28, 150 28 C 162.5 28, 162.5 35, 175 35 C 187.5 35, 187.5 10, 200 10 L 200 100 L 0 100 Z"
                        fill="url(#s4)"
                      ></path>
                      <motion.path
                        d="M0 90 C 12.5 90, 12.5 82, 25 82 C 37.5 82, 37.5 86, 50 86 C 62.5 86, 62.5 65, 75 65 C 87.5 65, 87.5 70, 100 70 C 112.5 70, 112.5 48, 125 48 C 137.5 48, 137.5 28, 150 28 C 162.5 28, 162.5 35, 175 35 C 187.5 35, 187.5 10, 200 10"
                        fill="none"
                        stroke="oklch(0.62 0.24 25)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
                      ></motion.path>
                      {/* Data points */}
                      <circle cx="25" cy="82" r="2.5" fill="white" stroke="oklch(0.62 0.24 25)" strokeWidth="1.5" />
                      <circle cx="50" cy="86" r="2.5" fill="white" stroke="oklch(0.62 0.24 25)" strokeWidth="1.5" />
                      <circle cx="75" cy="65" r="2.5" fill="white" stroke="oklch(0.62 0.24 25)" strokeWidth="1.5" />
                      <circle cx="100" cy="70" r="2.5" fill="white" stroke="oklch(0.62 0.24 25)" strokeWidth="1.5" />
                      <circle cx="125" cy="48" r="2.5" fill="white" stroke="oklch(0.62 0.24 25)" strokeWidth="1.5" />
                      <circle cx="150" cy="28" r="2.5" fill="white" stroke="oklch(0.62 0.24 25)" strokeWidth="1.5" />
                      <circle cx="175" cy="35" r="2.5" fill="white" stroke="oklch(0.62 0.24 25)" strokeWidth="1.5" />
                      <circle cx="200" cy="10" r="5" fill="oklch(0.62 0.24 25)" className="shadow-lg" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <MarketingDashboard />
          </motion.article>
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            style={{ willChange: "transform, opacity" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grain group relative overflow-hidden rounded-[2rem] bg-[color:var(--color-brand-blue)] text-background md:min-h-[440px] pt-8 px-0 pb-0 md:p-12"
          >
            <div className="font-mono text-xs opacity-40 mb-6 md:mb-8 px-6 md:px-0">05</div>
            <div className="grid gap-8">
              <div className="flex flex-col justify-end px-6 md:px-0">
                <div>
                  <h3 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-[-0.03em]">
                    Technology
                  </h3>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    <li className="rounded-full border border-current/20 px-3 py-1 text-xs backdrop-blur">
                      CRM
                    </li>
                    <li className="rounded-full border border-current/20 px-3 py-1 text-xs backdrop-blur">
                      AI Agents
                    </li>
                    <li className="rounded-full border border-current/20 px-3 py-1 text-xs backdrop-blur">
                      Workflow Automation
                    </li>
                    <li className="rounded-full border border-current/20 px-3 py-1 text-xs backdrop-blur">
                      Integrations
                    </li>
                    <li className="rounded-full border border-current/20 px-3 py-1 text-xs backdrop-blur">
                      Customer Portals
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative min-h-[250px] w-full mt-8 md:mt-4 flex items-center px-6 md:px-0 pb-6 md:pb-0">
                {/* Automated Pipeline Visual */}
                <div className="relative w-full rounded-2xl bg-black/10 p-5 backdrop-blur-sm border border-white/10 shadow-inner">
                  {/* Connection Line */}
                  <div className="absolute left-[39px] top-8 bottom-8 w-[2px] bg-white/20"></div>

                  <div className="space-y-4 relative z-10">
                    {/* Node 1 */}
                    <div className="group flex items-center gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/20 border border-white/30 text-white shadow-lg backdrop-blur-md transition-transform group-hover:scale-110">
                        <Users className="h-5 w-5" />
                      </div>
                      <div className="flex-1 rounded-xl bg-white/10 px-4 py-2.5 backdrop-blur-sm border border-white/5 transition-colors group-hover:bg-white/20">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium opacity-90">Lead Capture</span>
                          <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider opacity-70 text-[color:var(--color-brand-cyan)]">
                            <motion.span
                              animate={{ opacity: [0.3, 1, 0.3] }}
                              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                              className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-brand-cyan)]"
                            />
                            Active
                          </span>
                        </div>
                        <div className="mt-0.5 text-xs opacity-60">Syncs to main CRM database</div>
                      </div>
                    </div>

                    {/* Node 2 */}
                    <div className="group flex items-center gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 border border-white/20 text-white shadow-lg backdrop-blur-md transition-transform group-hover:scale-110">
                        <Activity className="h-5 w-5 opacity-80" />
                      </div>
                      <div className="flex-1 rounded-xl bg-white/5 px-4 py-2.5 backdrop-blur-sm border border-white/5 transition-colors group-hover:bg-white/10">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium opacity-80">Smart Routing</span>
                        </div>
                        <div className="mt-0.5 flex items-center justify-between">
                          <span className="text-xs opacity-50">Tags & assigns to sales rep</span>
                          <div className="flex h-1 w-8 overflow-hidden rounded-full bg-white/10">
                            <motion.div
                              animate={{ x: ["-100%", "200%"] }}
                              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                              className="h-full w-1/2 bg-white/40"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Node 3 */}
                    <div className="group flex items-center gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 border border-white/20 text-white shadow-lg backdrop-blur-md transition-transform group-hover:scale-110">
                        <motion.div
                          animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <Bot className="h-5 w-5" />
                        </motion.div>
                      </div>
                      <div className="flex-1 rounded-xl bg-white/5 px-4 py-2.5 backdrop-blur-sm border border-white/5 transition-colors group-hover:bg-white/10">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium opacity-80">AI Assistant</span>
                        </div>
                        <div className="mt-0.5 text-xs opacity-50">Automates responses and qualifies leads.</div>
                      </div>
                    </div>

                    {/* Node 4 */}
                    <div className="group flex items-center gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 border border-white/20 text-white shadow-lg backdrop-blur-md transition-transform group-hover:scale-110">
                        <MessageCircle className="h-5 w-5 opacity-80" />
                      </div>
                      <div className="flex-1 rounded-xl bg-white/5 px-4 py-2.5 backdrop-blur-sm border border-white/5 transition-colors group-hover:bg-white/10">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium opacity-80">Instant WhatsApp</span>
                          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white/20 text-[8px]">&lt;1m</span>
                        </div>
                        <div className="mt-1 h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                          <motion.div 
                            initial={{ width: "0%" }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="h-full bg-white" 
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <TechnologyEcosystem />
            </div>
          </motion.article>
        </div>
      </div>
      <div className="mt-10 mb-10 w-full flex justify-center px-6 md:px-0">
        <MarketingEcosystem />
      </div>
    </section>
  );
}
