"use client";

import { ProjectGrid } from "./ProjectGrid";
import { PORTFOLIO_PROJECTS } from "@/data/portfolioData";
import { MarqueeSection } from "@/components/MarqueeSection";

export function PortfolioContent() {
  const marqueeItems = [
    "Restaurants",
    "Healthcare",
    "Retail",
    "Real Estate",
    "Education",
    "Construction",
    "Home Services",
    "Beauty",
    "Professional",
    "Startups",
  ];

  const indianKeywords = [
    "jaipur",
    "udaipur",
    "mount abu",
    "surat",
    "ahmedabad",
    "delhi",
    "rajasthan",
    "vadodara",
    "mumbai",
    "bengaluru",
    "gandhinagar",
    "gujarat",
    "india"
  ];

  const indiaProjects = PORTFOLIO_PROJECTS.filter(project => {
    const clientLower = project.client.toLowerCase();
    return indianKeywords.some(keyword => clientLower.includes(keyword));
  });

  const globalProjects = PORTFOLIO_PROJECTS.filter(project => {
    const clientLower = project.client.toLowerCase();
    return !indianKeywords.some(keyword => clientLower.includes(keyword));
  });

  return (
    <>
      <MarqueeSection items={marqueeItems} />
      <div className="mt-16 md:mt-24">
        <ProjectGrid 
          projects={indiaProjects} 
          title="India Projects"
          subtitle="Success stories from businesses across India."
          className="mb-20 md:mb-28"
        />
        <ProjectGrid 
          projects={globalProjects} 
          title="Global Projects"
          subtitle="Globally connected. Trusted by businesses across diverse markets."
          className="mb-24 md:mb-32"
        />
      </div>
    </>
  );
}
