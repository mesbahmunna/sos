"use client";

import { motion } from "framer-motion";
import React from 'react';

interface Heading {
  id: string;
  text: string;
  top: number;
}

export function TableOfContents() {
  const [headings, setHeadings] = React.useState<Heading[]>([]);
  const [activeId, setActiveId] = React.useState<string>("");

  React.useEffect(() => {
    // Find all H2s in the article content
    const article = document.querySelector('article');
    if (!article) return;

    const h2Elements = Array.from(article.querySelectorAll('h2'));
    const parsedHeadings = h2Elements.map((h2, index) => {
      // Add id to the heading if it doesn't have one
      const id = h2.id || `section-${index}`;
      h2.id = id;
      return {
        id,
        text: h2.textContent || "",
        top: h2.offsetTop
      };
    });

    // eslint-disable-next-line react-hooks/set-state-in-effect
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
      { rootMargin: "0px 0px -80% 0px" } // trigger when heading is near top
    );

    h2Elements.forEach((h2) => observer.observe(h2));

    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) return null;

  return (
    <nav className="sticky top-32 hidden md:block w-64 shrink-0 pr-8">
      <div className="text-xs uppercase tracking-[0.2em] text-foreground/50 mb-6">
        In this article
      </div>
      <ul className="space-y-4">
        {headings.map((heading) => (
          <li key={heading.id}>
            <button
              onClick={() => {
                document.getElementById(heading.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className={`text-sm text-left transition-colors duration-300 ${
                activeId === heading.id 
                  ? 'text-foreground font-medium' 
                  : 'text-foreground/50 hover:text-foreground/80'
              }`}
            >
              {heading.text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
