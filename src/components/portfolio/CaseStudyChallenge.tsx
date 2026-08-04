"use client";

import { motion } from "framer-motion";
import { Project, CaseStudyChallenge as ChallengeType } from "./types";
import { Briefcase, Target, AlertCircle, Compass } from "lucide-react";

export function CaseStudyChallenge({ 
  project, 
  content 
}: { 
  project: Project, 
  content: ChallengeType 
}) {
  const cards = [
    {
      title: "Business Background",
      icon: Briefcase,
      description: content.background,
      bg: "bg-[#18BFD3]"
    },
    {
      title: "Core Challenges",
      icon: Target,
      description: content.coreChallenges,
      bg: "bg-[#FF8A00]"
    },
    {
      title: "Customer Pain Points",
      icon: AlertCircle,
      description: content.painPoints,
      bg: "bg-[#E84FA5]"
    },
    {
      title: "Market Opportunity",
      icon: Compass,
      description: content.opportunity,
      bg: "bg-[#1F73D8]"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-stretch">
          
          {/* LEFT COLUMN (50%) */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-xs uppercase tracking-[0.25em] text-foreground/50 mb-6">
                The Challenge
              </div>
              <h2 className="font-display text-[clamp(2.25rem,4vw,3.25rem)] leading-[0.95] tracking-tight mb-6 md:mb-8 text-foreground text-balance max-w-2xl">
                Navigating a crowded <br className="hidden md:block" />
                market for <em 
                  className="italic" 
                  style={{ 
                    backgroundImage: "linear-gradient(90deg, #FF8A00 0%, #FF5E62 20%, #FF4FA3 40%, #9B5CF6 60%, #4F8DFF 80%, #22D3EE 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent"
                  }}
                >{project.client}</em>.
              </h2>
              <p className="text-xl text-foreground/70 font-light leading-relaxed max-w-2xl">
                Before implementing our growth framework, we needed to deeply understand the landscape, identify friction points, and uncover the true potential of the brand.
              </p>
            </motion.div>
          </div>

          {/* RIGHT COLUMN (50%) */}
          <div className="w-full lg:w-1/2">
            {/* 2x2 Grid of Premium Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 h-full">
              {cards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className={`group relative rounded-[2rem] p-6 md:p-8 overflow-hidden transition-all duration-300 shadow-lg hover:shadow-2xl hover:brightness-110 flex flex-col h-full ${card.bg}`}
                >
                  <div 
                    className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-white mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shrink-0"
                  >
                    <card.icon className="h-6 w-6" />
                  </div>
                  <h4 className="font-display text-lg md:text-xl mb-2 md:mb-3 text-white">{card.title}</h4>
                  <p className="text-white/90 leading-relaxed text-sm">{card.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
