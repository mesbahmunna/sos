"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ArticleHeroProps {
  title: string;
  category: string;
  introduction: string;
  image: string;
}

export function ArticleHero({ title, category, introduction, image }: ArticleHeroProps) {
  // Use a generic date for the "Published" field as it's not in our data model
  const publishedDate = "Aug 28, 2026"; 

  return (
    <section className="relative pt-32 pb-8 md:pt-40 md:pb-12 border-b border-foreground/10">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        
        {/* Main 2-Column Hero */}
        <div className="flex flex-col md:flex-row md:items-center gap-12 lg:gap-20">
          
          {/* Left: Content (45%) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-[45%] flex flex-col items-start"
          >
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-foreground/60 mb-8">
              <span className="font-semibold text-foreground">{category}</span>
            </div>
            
            <h1 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-[1.05] tracking-tight text-balance">
              {title}
            </h1>
            
            <p className="mt-8 text-lg leading-relaxed text-foreground/70 md:text-xl max-w-xl">
              {introduction}
            </p>
          </motion.div>

          {/* Right: Image (55%) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full md:w-[55%] relative"
          >
            {/* Subtle brand glow behind image */}
            <div 
              className="absolute top-1/2 left-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[100px] -z-10 pointer-events-none" 
              style={{ background: 'radial-gradient(closest-side, oklch(0.78 0.14 210), transparent)' }}
            />
            
            <div className="relative aspect-[4/3] lg:aspect-[16/10] w-full overflow-hidden rounded-[2rem] border border-foreground/10 bg-foreground/5 shadow-2xl">
              <Image 
                src={image} 
                alt={title} 
                fill 
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 55vw"
              />
            </div>
          </motion.div>

        </div>

        {/* Bottom Metadata Row */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 md:mt-24 pt-6 border-t border-foreground/5 flex flex-wrap gap-x-8 gap-y-4 text-xs uppercase tracking-[0.15em] text-foreground/50"
        >
          <div className="flex gap-2">
            <span className="font-medium text-foreground/40">Published</span>
            <span className="text-foreground/80">{publishedDate}</span>
          </div>
          <div className="flex gap-2">
            <span className="font-medium text-foreground/40">Category</span>
            <span className="text-foreground/80">{category}</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
