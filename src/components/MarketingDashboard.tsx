"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Eye, MousePointerClick, UserPlus, TrendingUp, CircleDollarSign, BarChart3, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const metrics = [
  { 
    id: 1, 
    label: "Total Reach", 
    value: "2.4M", 
    trend: "+12.5%", 
    trendUp: true, 
    icon: Eye, 
    color: "var(--color-brand-cyan)" 
  },
  { 
    id: 2, 
    label: "Website Clicks", 
    value: "145K", 
    trend: "+8.2%", 
    trendUp: true, 
    icon: MousePointerClick, 
    color: "var(--color-brand-blue)" 
  },
  { 
    id: 3, 
    label: "Leads Gen", 
    value: "8,240", 
    trend: "+15.3%", 
    trendUp: true, 
    icon: UserPlus, 
    color: "var(--color-brand-purple)" 
  },
  { 
    id: 4, 
    label: "Conv. Rate", 
    value: "4.8%", 
    trend: "+1.2%", 
    trendUp: true, 
    icon: TrendingUp, 
    color: "var(--color-brand-pink)" 
  },
  { 
    id: 5, 
    label: "Cost per Lead", 
    value: "$12.40", 
    trend: "-5.4%", 
    trendUp: true, // Decreasing cost is positive
    icon: CircleDollarSign, 
    color: "var(--color-brand-orange)" 
  },
  { 
    id: 6, 
    label: "ROAS", 
    value: "3.2x", 
    trend: "+0.8x", 
    trendUp: true, 
    icon: BarChart3, 
    color: "var(--color-brand-cyan)" 
  }
];

export function MarketingDashboard() {
  return (
    <div className="relative w-full pt-6 md:pt-8 mt-4 md:mt-6 border-t border-black/5 z-10 px-6 md:px-0">
      
      {/* Background glow to unify the section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-gradient-to-tr from-[color:var(--color-brand-cyan)]/5 via-[color:var(--color-brand-purple)]/5 to-[color:var(--color-brand-orange)]/5 blur-[40px] rounded-full pointer-events-none z-0"></div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 relative z-10">
        {metrics.map((metric, i) => (
          <motion.div
            key={metric.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
            className="group flex flex-col justify-between p-2.5 sm:p-3 rounded-2xl bg-white/60 backdrop-blur-md border border-white/60 shadow-[0_2px_15px_rgba(0,0,0,0.02)] hover:bg-white hover:shadow-[0_8px_25px_rgba(0,0,0,0.06)] hover:border-black/5 transition-all duration-300 cursor-default"
          >
            {/* Top row: Icon & Trend */}
            <div className="flex items-start justify-between mb-2">
              <div 
                className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-[10px] bg-white shadow-sm border border-black/5 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
                style={{ color: metric.color }}
              >
                <metric.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div className={`flex items-center gap-0.5 text-[9px] sm:text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-white border border-black/5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] ${metric.trendUp ? 'text-emerald-600' : 'text-rose-600'}`}>
                {metric.trendUp ? <ArrowUpRight className="w-2.5 h-2.5" /> : <ArrowDownRight className="w-2.5 h-2.5" />}
                {metric.trend}
              </div>
            </div>

            {/* Bottom row: Value & Label */}
            <div className="flex flex-col">
              <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-black/40 mb-0.5 truncate">
                {metric.label}
              </span>
              <span className="text-sm sm:text-base font-bold text-gray-900 tracking-tight group-hover:text-black transition-colors">
                {metric.value}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
