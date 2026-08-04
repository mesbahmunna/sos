export function MarqueeSection({ items }: { items?: string[] }) {
  const defaultItems = [
    "Strategy",
    "Branding",
    "Social Media",
    "Reels & Content",
    "Website",
    "SEO",
    "AEO",
    "Advertising",
    "CRM",
    "Automation",
    "AI",
  ];
  
  const displayItems = items || defaultItems;

  return (
    <section className="relative mt-24 overflow-hidden border-y border-foreground/10 bg-foreground py-4 text-background md:py-5">
      <div className="flex">
        {/* We duplicate the entire track multiple times to ensure the screen is always filled */}
        {[...Array(4)].map((_, trackIndex) => (
          <div key={trackIndex} className="animate-marquee-infinite flex shrink-0 whitespace-nowrap">
            {displayItems.map((item, index) => (
              <span
                key={`${trackIndex}-${index}`}
                className="flex items-center gap-8 pr-8 font-display text-2xl font-light tracking-wide md:text-3xl"
              >
                {item}
                <span className="text-[color:var(--color-brand-orange)]">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
