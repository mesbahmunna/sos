"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ProjectGrid } from "@/components/portfolio/ProjectGrid";
import { Project } from "@/components/portfolio/types";
import { PORTFOLIO_PROJECTS } from "@/data/portfolioData";

const SERVICE_MAPPING: Record<string, string[]> = {
  "social-media-management": ["Social Media", "Content"],
  "branding-media-management": ["Branding", "Content"],
  "website-development": ["Website", "Web Design"],
  "seo-aeo": ["SEO", "AEO", "Search"],
  "paid-advertising": ["Google Ads", "Meta Ads", "Paid Ads", "Lead Gen"],
  "content-creation": ["Content", "Social Media"],
  "crm-automation": ["CRM", "Automation", "Email", "Lead Management"],
  "ai-business-solutions": ["Automation", "Analytics", "CRM"],
  "ecommerce": ["E-commerce", "Sales"],
};

export function SolutionRelatedWork({ slug }: { slug: string }) {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    // 1. Get relevant services for this solution
    const relevantServices = SERVICE_MAPPING[slug] || [];
    
    // 2. Filter pool of projects that match the services
    let pool = PORTFOLIO_PROJECTS.filter((project) => 
      project.services.some((service) => 
        relevantServices.some((keyword) => 
          service.toLowerCase().includes(keyword.toLowerCase())
        )
      )
    );

    // Fallback if none match: just use all
    if (pool.length === 0) pool = [...PORTFOLIO_PROJECTS];

    // 3. Shuffle array to rotate them dynamically
    const shuffled = pool.sort(() => 0.5 - Math.random());
    
    // 4. Set to state (using exactly 3)
    setProjects(shuffled.slice(0, 3));
  }, [slug]);

  return (
    <section className="py-24 md:py-32 bg-background border-t border-foreground/5">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="text-xs uppercase tracking-[0.25em] text-foreground/50 mb-4">
            See the Impact
          </div>
          <h2 className="font-display text-4xl md:text-5xl tracking-tight text-foreground">
            Related Case Studies.
          </h2>
        </motion.div>

        {/* Reuse the exact ProjectGrid component from Portfolio for consistency */}
        <ProjectGrid projects={projects} />
      </div>
    </section>
  );
}
