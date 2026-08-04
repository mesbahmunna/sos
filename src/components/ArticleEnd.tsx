"use client";

import { Share2, ArrowLeft } from "lucide-react";
import Link from "next/link";

export function ArticleEnd() {
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

  return (
    <section className="mx-auto max-w-[1200px] px-6 md:px-10 mt-20 mb-32">
      <div className="flex flex-col md:flex-row items-center justify-between py-10 border-y border-foreground/10 gap-8">
        
        {/* Left: Share */}
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium uppercase tracking-[0.1em] text-foreground/50">Share this insight</span>
          <button 
            onClick={handleShare}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-foreground/10 hover:bg-foreground/5 transition-colors"
            aria-label="Share article"
          >
            <Share2 className="h-5 w-5 text-foreground/80" />
          </button>
        </div>

        {/* Right: Back */}
        <Link 
          href="/insights" 
          className="flex items-center gap-2 text-sm font-medium uppercase tracking-[0.1em] text-foreground/80 hover:text-foreground transition-colors group"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Insights
        </Link>
        
      </div>
    </section>
  );
}
