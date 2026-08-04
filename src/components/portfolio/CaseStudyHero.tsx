"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Project } from "./types";

export function CaseStudyHero({ project }: { project: Project }) {
  return (
    <section className="relative overflow-hidden pt-32 md:pt-44 pb-20">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div 
          className="absolute -top-32 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-30 blur-3xl" 
          style={{ background: `radial-gradient(closest-side, ${project.color}, transparent)` }}
        ></div>
      </div>
      
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 text-xs font-medium text-foreground/50 mb-6 uppercase tracking-[0.2em]">
              <span className="text-foreground/80">{project.industry.split(' &')[0]}</span>
              <span className="h-1 w-1 rounded-full bg-foreground/20"></span>
              <span>{project.client}</span>
            </div>
            
            <h1 className="font-display text-[clamp(2rem,3.5vw,3rem)] leading-[0.9] tracking-tight text-balance max-w-3xl">
              {project.title}
            </h1>
            
            <p className="mt-8 max-w-lg text-lg text-foreground/70 md:text-xl mb-12">
              {project.summary}
            </p>

            <hr className="border-foreground/10 mb-8" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm md:text-base">
              <div>
                <div className="font-semibold text-foreground mb-1">Client:</div>
                <div className="text-foreground/70">{project.client}</div>
              </div>
              
              <div>
                <div className="font-semibold text-foreground mb-1">Industry:</div>
                <div className="text-foreground/70">{project.industry}</div>
              </div>
              
              <div className={!project.privacyNote ? "md:col-span-2" : ""}>
                <div className="font-semibold text-foreground mb-1">Services:</div>
                <div className="text-foreground/70">{project.services.join(', ')}</div>
              </div>
              
              {project.privacyNote && (
                <div>
                  <div className="font-semibold text-foreground mb-1">Privacy Note:</div>
                  <div className="text-foreground/70">{project.privacyNote}</div>
                </div>
              )}
            </div>
            
            <hr className="border-foreground/10 mt-8" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] w-full rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* KPI Cards Overlay */}
            <div className="relative mt-6 md:mt-0 md:absolute md:-bottom-8 md:-left-8 md:right-8 grid grid-cols-2 gap-4 z-20">
              {project.outcomes.map((outcome, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + (i * 0.1), duration: 0.5 }}
                  className="bg-background/90 backdrop-blur-xl border border-foreground/5 rounded-2xl p-6 shadow-xl"
                >
                  <div className="font-display text-4xl text-foreground mb-1">{outcome.value}</div>
                  <div className="text-xs font-medium text-foreground/60 uppercase tracking-wider">{outcome.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
