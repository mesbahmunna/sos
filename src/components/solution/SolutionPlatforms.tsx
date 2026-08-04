"use client";

import { motion } from "framer-motion";
import { Users, Camera, Briefcase, Video, Play, MapPin, Share2 } from "lucide-react";

interface SolutionPlatformsProps {
  data: {
    heading: string;
    description?: string;
    items: string[];
  };
}

export function SolutionPlatforms({ data }: SolutionPlatformsProps) {
  // Map platform names to specific icons and descriptions
  const getPlatformDetails = (name: string) => {
    const lowerName = name.toLowerCase();
    if (lowerName.includes("facebook")) {
      return { icon: Users, desc: "Community building and targeted reach.", color: "group-hover:text-[color:var(--color-brand-blue)]" };
    }
    if (lowerName.includes("instagram")) {
      return { icon: Camera, desc: "Visual storytelling and brand aesthetics.", color: "group-hover:text-[color:var(--color-brand-pink)]" };
    }
    if (lowerName.includes("linkedin")) {
      return { icon: Briefcase, desc: "B2B networking and professional authority.", color: "group-hover:text-[color:var(--color-brand-blue)]" };
    }
    if (lowerName.includes("tiktok")) {
      return { icon: Video, desc: "Short-form video and viral potential.", color: "group-hover:text-[color:var(--color-brand-purple)]" };
    }
    if (lowerName.includes("youtube")) {
      return { icon: Play, desc: "Long-form education and search visibility.", color: "group-hover:text-[color:var(--color-brand-pink)]" };
    }
    if (lowerName.includes("google")) {
      return { icon: MapPin, desc: "Local search presence and customer reviews.", color: "group-hover:text-[color:var(--color-brand-cyan)]" };
    }
    return { icon: Share2, desc: "Engage your audience where they spend their time.", color: "group-hover:text-primary" };
  };

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold tracking-tighter mb-6"
          >
            {data.heading}
          </motion.h2>
          {data.description && (
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg md:text-xl text-foreground/70"
            >
              {data.description}
            </motion.p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.items.map((item, index) => {
            const { icon: Icon, desc, color } = getPlatformDetails(item);
            
            return (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col p-8 rounded-3xl bg-foreground/5 border border-foreground/10 overflow-hidden hover:bg-foreground/10 transition-colors duration-500 h-full"
              >
                {/* Gradient Accent */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className={`mb-6 p-4 rounded-2xl bg-background border border-foreground/10 inline-flex self-start transition-colors duration-500 ${color}`}>
                  <Icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-bold mb-3">{item}</h3>
                <p className="text-foreground/70 text-lg leading-relaxed flex-grow">
                  {desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
