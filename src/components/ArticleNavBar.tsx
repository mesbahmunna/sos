"use client";

import React from 'react';
import { Share2 } from "lucide-react";

interface Heading {
  id: string;
  text: string;
  top: number;
}

export function ArticleNavBar() {
  const [headings, setHeadings] = React.useState<Heading[]>([]);
  const [activeId, setActiveId] = React.useState<string>("");

  React.useEffect(() => {
    // Find all H2s inside the article content
    const article = document.querySelector('article');
    if (!article) return;

    const h2Elements = Array.from(article.querySelectorAll('h2'));
    const parsedHeadings = h2Elements.map((h2, index) => {
      const id = h2.id || `section-${index}`;
      h2.id = id;
      return {
        id,
        text: h2.textContent || "",
        top: h2.offsetTop
      };
    });

    setHeadings(parsedHeadings);

    // Set up intersection observer for scroll spy
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" } // trigger when heading reaches upper portion of screen
    );

    h2Elements.forEach((h2) => observer.observe(h2));

    return () => observer.disconnect();
  }, []);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: document.title,
        url: window.location.href,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  if (headings.length === 0) return null;

  return (
    <div className="sticky top-0 z-40 hidden md:flex items-center justify-between w-full border-b border-foreground/10 bg-background/80 backdrop-blur-xl px-10 h-16">
      
      {/* Left */}
      <div className="text-xs uppercase tracking-[0.2em] text-foreground/50 font-medium">
        In this article
      </div>

      {/* Center - Headings */}
      <nav className="flex items-center gap-8">
        {headings.map((heading) => (
          <button
            key={heading.id}
            onClick={() => {
              document.getElementById(heading.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className={`text-sm transition-colors duration-300 ${
              activeId === heading.id 
                ? 'text-foreground font-semibold' 
                : 'text-foreground/50 hover:text-foreground/80'
            }`}
          >
            {heading.text}
          </button>
        ))}
      </nav>

      {/* Right - Share */}
      <button 
        onClick={handleShare}
        className="flex items-center gap-2 text-xs uppercase tracking-[0.1em] text-foreground/50 hover:text-foreground transition-colors"
      >
        <Share2 className="h-4 w-4" />
        <span>Share</span>
      </button>

    </div>
  );
}
