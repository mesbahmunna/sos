"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "./types";

import { useState } from "react";

const UNIVERSAL_FALLBACK = "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2938&auto=format&fit=crop";

function ImageWithFallback({ 
  src, 
  alt, 
  color,
}: { 
  src: string; 
  alt: string; 
  color: string;
  industry: string;
}) {
  const [error, setError] = useState(false);

  return (
    <>
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 mix-blend-overlay z-10"
        style={{ backgroundColor: color }}
      ></div>
      <Image
        src={!error ? src : UNIVERSAL_FALLBACK}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        onError={() => setError(true)}
      />
    </>
  );
}

export function ProjectGrid({ 
  projects,
  title = "More Projects",
  subtitle,
  className = "mb-24 md:mb-32"
}: { 
  projects: Project[];
  title?: string;
  subtitle?: string;
  className?: string;
}) {
  if (projects.length === 0) {
    return (
      <div className={`mx-auto max-w-[1400px] px-6 md:px-10 text-center py-20 border border-foreground/10 rounded-[2rem] ${className}`}>
        <p className="text-foreground/60">No projects found for this category.</p>
      </div>
    );
  }

  return (
    <section className={`mx-auto max-w-[1400px] px-6 md:px-10 ${className}`}>
      <div className="mb-10">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-foreground/50 mb-3">
          <span className="inline-block h-px w-8 bg-foreground/40"></span>
          {title}
        </div>
        {subtitle && (
          <p className="text-base md:text-lg text-foreground/60 max-w-2xl pl-11">
            {subtitle}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px 400px 0px" }}
            transition={{ duration: 0.3, delay: (index % 3) * 0.05 }}
            className="group block relative rounded-[2rem] bg-background transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] md:hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)]"
          >
            <Link href={`/portfolio/${project.id}`} className="block p-4 md:p-5">
              <div className="relative aspect-[4/3] rounded-[1.5rem] overflow-hidden mb-6">
                <ImageWithFallback src={project.image} alt={project.title} color={project.color} industry={project.industry} />
              </div>
              
              <div className="px-1 relative">
                <div className="flex items-center gap-2 text-xs font-medium text-foreground/50 mb-3">
                  <span className="text-foreground/80">{project.industry.split(' &')[0]}</span>
                  <span className="h-1 w-1 rounded-full bg-foreground/20"></span>
                  <span>{project.client}</span>
                </div>
                
                <h4 className="font-display text-2xl leading-tight text-foreground mb-6 pr-12 group-hover:opacity-80 transition-opacity">
                  {project.title}
                </h4>
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.services.slice(0, 3).map((service, i) => (
                      <span key={i} className="px-3 py-1.5 text-[11px] font-medium uppercase tracking-wider rounded-lg border border-foreground/10 text-foreground/70 bg-foreground/[0.02]">
                        {service}
                      </span>
                    ))}
                    {project.services.length > 3 && (
                      <span className="px-3 py-1.5 text-[11px] font-medium rounded-lg text-foreground/50 bg-foreground/5">
                        +{project.services.length - 3}
                      </span>
                    )}
                  </div>
                  
                  {/* Arrow Icon in bottom right */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-foreground/10 bg-background text-foreground transition-all duration-300 group-hover:bg-foreground group-hover:text-background group-hover:-rotate-45">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
