export interface Insight {
  slug: string;
  category: string;
  readTime: string;
  title: string;
  image: string;
  bgColor: string;
  introduction: string;
  content: string;
  seoTitle?: string;
  seoDescription?: string;
}

export const insights: Insight[] = [
  {
    slug: "why-aeo-is-the-new-seo",
    category: "Search",
    readTime: "6 min",
    title: "Why AEO is the new SEO and what to do this quarter.",
    image: "/images/optimized/insight_aeo.png",
    bgColor: "bg-[color:var(--color-brand-blue)] text-background",
    introduction:
      "Search is evolving rapidly. With AI-generated summaries pushing traditional blue links further down the page, traditional Search Engine Optimization (SEO) is no longer enough. Enter Answer Engine Optimization (AEO).",
    content: `
      <section class="editorial-intro">
        <div class="intro-statement">
          "Winning in search today isn't about ranking highest. It's about being the definitive answer."
        </div>
        <div class="intro-body">
          <p>For decades, the goal of search engines was to provide a list of relevant links for a user to click. Today, engines like Google (with AI Overviews), Perplexity, and ChatGPT are focused on providing direct answers without requiring the user to ever leave the search results page (SERP).</p>
          <p>If your digital strategy is solely focused on winning clicks through organic rankings, you are optimizing for a fading paradigm. AEO focuses on optimizing your content to be the source of the answers that AI generates.</p>
        </div>
      </section>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-20">
        
        <!-- Card 01 -->
        <div class="group relative flex flex-col justify-between rounded-[2rem] bg-[color:var(--color-brand-cyan)] text-foreground p-8 md:p-12 transition-all duration-500 hover:-translate-y-2 border border-transparent shadow-sm hover:shadow-xl hover:brightness-[1.03]">
          <div class="flex items-start justify-between">
            <div class="font-display text-5xl md:text-6xl opacity-40 transition-all duration-500 group-hover:opacity-60 group-hover:scale-105 origin-top-left">01</div>
            <svg class="h-6 w-6 opacity-40 transition-all duration-500 group-hover:opacity-100 group-hover:-translate-y-2 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </div>
          <div class="mt-20">
            <h2 class="font-display text-3xl md:text-4xl mb-4 leading-tight">The Shift from Links to Answers</h2>
            <p class="text-lg opacity-80 mb-4">Traditional SEO relies on keyword density and backlink profiles to signal authority. AEO relies on structure, clarity, and direct value to signal relevance to an AI model.</p>
            <p class="text-lg opacity-80">AI models are incredibly lazy. They look for the path of least resistance to answer a user's prompt. If your content buries the answer under five paragraphs of fluff, the AI will pull from a competitor who provided a direct, bolded answer at the top of their page.</p>
          </div>
        </div>

        <!-- Card 02 -->
        <div class="group relative flex flex-col justify-between rounded-[2rem] bg-[color:var(--color-brand-orange)] text-white p-8 md:p-12 transition-all duration-500 hover:-translate-y-2 border border-transparent shadow-sm hover:shadow-xl hover:brightness-[1.03]">
          <div class="flex items-start justify-between">
            <div class="font-display text-5xl md:text-6xl opacity-40 transition-all duration-500 group-hover:opacity-60 group-hover:scale-105 origin-top-left">02</div>
            <svg class="h-6 w-6 opacity-40 transition-all duration-500 group-hover:opacity-100 group-hover:-translate-y-2 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </div>
          <div class="mt-20">
            <h2 class="font-display text-3xl md:text-4xl mb-4 leading-tight">Core Principles of AEO</h2>
            <p class="text-lg opacity-80 mb-6">To win in the era of Answer Engines, your content strategy needs to adapt immediately:</p>
            <ul class="list-disc pl-5 space-y-3 opacity-80 text-lg">
              <li><strong>Direct, concise answers:</strong> AI models prefer content that explicitly answers the "Who, What, Where, When, and Why" early in the text.</li>
              <li><strong>Structured data:</strong> Schema markup is more important than ever. It provides unambiguous signals to AI about the nature of your content.</li>
              <li><strong>Entity optimization:</strong> Focus on becoming the authoritative entity for specific topics in your niche, rather than just chasing high-volume keywords.</li>
            </ul>
          </div>
        </div>

        <!-- Card 03 -->
        <div class="group relative flex flex-col justify-between rounded-[2rem] bg-[color:var(--color-brand-pink)] text-foreground p-8 md:p-12 transition-all duration-500 hover:-translate-y-2 border border-transparent shadow-sm hover:shadow-xl hover:brightness-[1.03]">
          <div class="flex items-start justify-between">
            <div class="font-display text-5xl md:text-6xl opacity-40 transition-all duration-500 group-hover:opacity-60 group-hover:scale-105 origin-top-left">03</div>
            <svg class="h-6 w-6 opacity-40 transition-all duration-500 group-hover:opacity-100 group-hover:-translate-y-2 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </div>
          <div class="mt-12">
            <h2 class="font-display text-3xl md:text-4xl mb-8 leading-tight">Key Takeaway</h2>
            <div class="mb-4 font-display text-[6rem] md:text-[8rem] leading-none tracking-tighter text-background drop-shadow-sm">70%</div>
            <p class="text-xl font-semibold mb-4 leading-snug">Of complex queries are expected to be answered natively on the SERP by 2026.</p>
            <p class="text-lg opacity-80">Modern search engines are becoming answer engines. Optimize for being the source of answers, not just a link on a page.</p>
          </div>
        </div>

        <!-- Card 04 -->
        <div class="group relative flex flex-col justify-between rounded-[2rem] bg-[color:var(--color-brand-blue)] text-background p-8 md:p-12 transition-all duration-500 hover:-translate-y-2 border border-transparent shadow-sm hover:shadow-xl hover:brightness-[1.1]">
          <div class="flex items-start justify-between">
            <div class="font-display text-5xl md:text-6xl opacity-40 transition-all duration-500 group-hover:opacity-60 group-hover:scale-105 origin-top-left">04</div>
            <svg class="h-6 w-6 opacity-40 transition-all duration-500 group-hover:opacity-100 group-hover:-translate-y-2 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </div>
          <div class="mt-16">
            <h2 class="font-display text-3xl md:text-4xl mb-6 leading-tight">What to do this quarter</h2>
            <ul class="space-y-4 opacity-90 mb-10 list-none text-lg">
              <li class="flex gap-3"><span>•</span> Auditing top-performing pages</li>
              <li class="flex gap-3"><span>•</span> Adding Key Takeaways / Quick Answers</li>
              <li class="flex gap-3"><span>•</span> FAQ Schema</li>
              <li class="flex gap-3"><span>•</span> Building authority</li>
            </ul>
            <div class="bg-background/10 rounded-xl p-6 border border-background/20 backdrop-blur-sm">
              <span class="block text-[10px] font-bold uppercase tracking-[0.2em] opacity-70 mb-3">ACTION ITEM</span>
              <p class="text-base md:text-lg font-medium">Audit your top 10 traffic pages and add explicit "Quick Answer" modules at the top.</p>
            </div>
          </div>
        </div>
      </div>
    `,
  },
  {
    slug: "ad-creative-that-converts",
    category: "Advertising",
    readTime: "8 min",
    title: "Ad creative that converts: the four-hook framework.",
    image: "/images/optimized/insight_ad_creative.png",
    bgColor: "bg-[color:var(--color-brand-orange)] text-[oklch(0.18_0.02_260)]",
    introduction:
      "In a crowded feed, you have less than three seconds to capture attention. If your ad creative doesn't hook the user immediately, your targeting and bidding strategies are irrelevant. We use the four-hook framework to guarantee performance.",
    content: `
      <section class="editorial-intro">
        <div class="intro-statement">
          "If your ad creative doesn't hook the user in the first three seconds, your targeting strategies are entirely irrelevant."
        </div>
        <div class="intro-body">
          <p>Modern consumers scroll through hundreds of feet of content every single day. Their brains are wired to ignore anything that looks like an ad.</p>
          <p>To break through the noise, your creative needs to disrupt their scroll pattern and immediately deliver value or intrigue. This is where the four-hook framework comes in.</p>
        </div>
      </section>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-20">
        
        <!-- Card 01 -->
        <div class="group relative flex flex-col justify-between rounded-[2rem] bg-[color:var(--color-brand-cyan)] text-foreground p-8 md:p-12 transition-all duration-500 hover:-translate-y-2 border border-transparent shadow-sm hover:shadow-xl hover:brightness-[1.03]">
          <div class="flex items-start justify-between">
            <div class="font-display text-5xl md:text-6xl opacity-40 transition-all duration-500 group-hover:opacity-60 group-hover:scale-105 origin-top-left">01</div>
            <svg class="h-6 w-6 opacity-40 transition-all duration-500 group-hover:opacity-100 group-hover:-translate-y-2 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </div>
          <div class="mt-20">
            <h2 class="font-display text-3xl md:text-4xl mb-4 leading-tight">The Creative Problem</h2>
            <p class="text-lg opacity-80 mb-4">Modern consumers scroll through hundreds of feet of content every single day. Their brains are wired to ignore anything that looks like an ad.</p>
            <p class="text-lg opacity-80">To break through the noise, your creative needs to disrupt their scroll pattern and immediately deliver value or intrigue. If your ad creative doesn't hook the user immediately, your targeting and bidding strategies are irrelevant.</p>
          </div>
        </div>

        <!-- Card 02 -->
        <div class="group relative flex flex-col justify-between rounded-[2rem] bg-[color:var(--color-brand-orange)] text-white p-8 md:p-12 transition-all duration-500 hover:-translate-y-2 border border-transparent shadow-sm hover:shadow-xl hover:brightness-[1.03]">
          <div class="flex items-start justify-between">
            <div class="font-display text-5xl md:text-6xl opacity-40 transition-all duration-500 group-hover:opacity-60 group-hover:scale-105 origin-top-left">02</div>
            <svg class="h-6 w-6 opacity-40 transition-all duration-500 group-hover:opacity-100 group-hover:-translate-y-2 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </div>
          <div class="mt-16">
            <h2 class="font-display text-3xl md:text-4xl mb-6 leading-tight">The Four-Hook Framework</h2>
            <ul class="space-y-4 opacity-90 text-base md:text-lg">
              <li><strong>1. Pain-Point Hook:</strong> Acknowledge a specific problem to build instant empathy.</li>
              <li><strong>2. Educational Hook:</strong> Offer immediate, actionable value.</li>
              <li><strong>3. Social Proof Hook:</strong> Leverage FOMO with reviews or statistics.</li>
              <li><strong>4. Contrarian Hook:</strong> Challenge a widely held belief to create a curiosity gap.</li>
            </ul>
          </div>
        </div>

        <!-- Card 03 -->
        <div class="group relative flex flex-col justify-between rounded-[2rem] bg-[color:var(--color-brand-pink)] text-foreground p-8 md:p-12 transition-all duration-500 hover:-translate-y-2 border border-transparent shadow-sm hover:shadow-xl hover:brightness-[1.03]">
          <div class="flex items-start justify-between">
            <div class="font-display text-5xl md:text-6xl opacity-40 transition-all duration-500 group-hover:opacity-60 group-hover:scale-105 origin-top-left">03</div>
            <svg class="h-6 w-6 opacity-40 transition-all duration-500 group-hover:opacity-100 group-hover:-translate-y-2 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </div>
          <div class="mt-12">
            <h2 class="font-display text-3xl md:text-4xl mb-8 leading-tight">What Makes a Hook Convert</h2>
            <div class="mb-4 font-display text-[5rem] md:text-[6rem] leading-none tracking-tighter text-background drop-shadow-sm">3 Secs</div>
            <p class="text-xl font-semibold mb-4 leading-snug">The maximum time you have to stop the scroll before the impression is wasted.</p>
            <p class="text-lg opacity-80">Value and empathy always outperform aggressive sales pitches. The first 3 seconds dictate 90% of your ad's overall performance.</p>
          </div>
        </div>

        <!-- Card 04 -->
        <div class="group relative flex flex-col justify-between rounded-[2rem] bg-[color:var(--color-brand-blue)] text-background p-8 md:p-12 transition-all duration-500 hover:-translate-y-2 border border-transparent shadow-sm hover:shadow-xl hover:brightness-[1.1]">
          <div class="flex items-start justify-between">
            <div class="font-display text-5xl md:text-6xl opacity-40 transition-all duration-500 group-hover:opacity-60 group-hover:scale-105 origin-top-left">04</div>
            <svg class="h-6 w-6 opacity-40 transition-all duration-500 group-hover:opacity-100 group-hover:-translate-y-2 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </div>
          <div class="mt-16">
            <h2 class="font-display text-3xl md:text-4xl mb-6 leading-tight">What to Do This Quarter</h2>
            <ul class="space-y-4 opacity-90 mb-10 list-none text-lg">
              <li class="flex gap-3"><span>•</span> Stop relying on a single hook for all audiences.</li>
              <li class="flex gap-3"><span>•</span> Implement the four-hook framework into production.</li>
              <li class="flex gap-3"><span>•</span> Test educational vs contrarian hooks.</li>
            </ul>
            <div class="bg-background/10 rounded-xl p-6 border border-background/20 backdrop-blur-sm">
              <span class="block text-[10px] font-bold uppercase tracking-[0.2em] opacity-70 mb-3">ACTION ITEM</span>
              <p class="text-base md:text-lg font-medium">Never rely on a single hook. Test all four framework hooks against your primary audience.</p>
            </div>
          </div>
        </div>
      </div>
    `,
  },
  {
    slug: "ecom-growth-loops",
    category: "Ecommerce",
    readTime: "12 min",
    title: "Ecom growth loops: from first click to lifetime value.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=75&w=800",
    bgColor: "bg-[color:var(--color-brand-cyan)] text-[oklch(0.18_0.02_260)]",
    introduction:
      "Traditional ecommerce funnels are linear: you pay for traffic, convert a percentage, and hope they come back. A growth loop, however, is a closed system where the inputs generate outputs that can be reinvested to acquire more users automatically.",
    content: `
      <section class="editorial-intro">
        <div class="intro-statement">
          "Growth doesn't always come from putting more people into the top of the funnel. It comes from closing the loop."
        </div>
        <div class="intro-body">
          <p>Funnels are expensive to maintain. If you stop pouring money into the top of the funnel (paid ads, influencer sponsorships), the bottom dries up.</p>
          <p>As Customer Acquisition Costs (CAC) continue to rise across all platforms, relying solely on linear acquisition is a race to the bottom of your margins. Enter the Growth Loop.</p>
        </div>
      </section>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-20">
        
        <!-- Card 01 -->
        <div class="group relative flex flex-col justify-between rounded-[2rem] bg-[color:var(--color-brand-cyan)] text-foreground p-8 md:p-12 transition-all duration-500 hover:-translate-y-2 border border-transparent shadow-sm hover:shadow-xl hover:brightness-[1.03]">
          <div class="flex items-start justify-between">
            <div class="font-display text-5xl md:text-6xl opacity-40 transition-all duration-500 group-hover:opacity-60 group-hover:scale-105 origin-top-left">01</div>
            <svg class="h-6 w-6 opacity-40 transition-all duration-500 group-hover:opacity-100 group-hover:-translate-y-2 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </div>
          <div class="mt-20">
            <h2 class="font-display text-3xl md:text-4xl mb-4 leading-tight">The Problem with Linear Funnels</h2>
            <p class="text-lg opacity-80 mb-4">Funnels are expensive to maintain. If you stop pouring money into the top of the funnel (paid ads, influencer sponsorships), the bottom dries up.</p>
            <p class="text-lg opacity-80">As Customer Acquisition Costs (CAC) continue to rise across all platforms, relying solely on linear acquisition is a race to the bottom of your margins.</p>
          </div>
        </div>

        <!-- Card 02 -->
        <div class="group relative flex flex-col justify-between rounded-[2rem] bg-[color:var(--color-brand-orange)] text-white p-8 md:p-12 transition-all duration-500 hover:-translate-y-2 border border-transparent shadow-sm hover:shadow-xl hover:brightness-[1.03]">
          <div class="flex items-start justify-between">
            <div class="font-display text-5xl md:text-6xl opacity-40 transition-all duration-500 group-hover:opacity-60 group-hover:scale-105 origin-top-left">02</div>
            <svg class="h-6 w-6 opacity-40 transition-all duration-500 group-hover:opacity-100 group-hover:-translate-y-2 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </div>
          <div class="mt-20">
            <h2 class="font-display text-3xl md:text-4xl mb-4 leading-tight">Understanding Growth Loops</h2>
            <p class="text-lg opacity-80 mb-6">A growth loop relies on mechanisms that incentivize existing customers to bring in new customers, or mechanisms that increase the Lifetime Value (LTV) of a customer to fund further acquisition.</p>
            <p class="text-lg opacity-80">The goal is compounding, sustainable growth. Growth loops turn existing customers into your most efficient acquisition channels.</p>
          </div>
        </div>

        <!-- Card 03 -->
        <div class="group relative flex flex-col justify-between rounded-[2rem] bg-[color:var(--color-brand-pink)] text-foreground p-8 md:p-12 transition-all duration-500 hover:-translate-y-2 border border-transparent shadow-sm hover:shadow-xl hover:brightness-[1.03]">
          <div class="flex items-start justify-between">
            <div class="font-display text-5xl md:text-6xl opacity-40 transition-all duration-500 group-hover:opacity-60 group-hover:scale-105 origin-top-left">03</div>
            <svg class="h-6 w-6 opacity-40 transition-all duration-500 group-hover:opacity-100 group-hover:-translate-y-2 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </div>
          <div class="mt-12">
            <h2 class="font-display text-3xl md:text-4xl mb-8 leading-tight">Growth Loops in Action</h2>
            <div class="mb-4 font-display text-[5rem] md:text-[6rem] leading-none tracking-tighter text-background drop-shadow-sm">3.4x</div>
            <p class="text-lg font-semibold mb-6 leading-snug">Higher LTV from customers acquired through referral loops.</p>
            
            <ul class="space-y-4 opacity-90 text-base md:text-lg">
              <li><strong>The Viral Loop:</strong> Customers refer friends for mutual discounts, generating new acquisitions automatically.</li>
              <li><strong>The Content Loop:</strong> Incentivize User-Generated Content (UGC) to reduce creative costs and boost authentic brand reach.</li>
            </ul>
          </div>
        </div>

        <!-- Card 04 -->
        <div class="group relative flex flex-col justify-between rounded-[2rem] bg-[color:var(--color-brand-blue)] text-background p-8 md:p-12 transition-all duration-500 hover:-translate-y-2 border border-transparent shadow-sm hover:shadow-xl hover:brightness-[1.1]">
          <div class="flex items-start justify-between">
            <div class="font-display text-5xl md:text-6xl opacity-40 transition-all duration-500 group-hover:opacity-60 group-hover:scale-105 origin-top-left">04</div>
            <svg class="h-6 w-6 opacity-40 transition-all duration-500 group-hover:opacity-100 group-hover:-translate-y-2 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </div>
          <div class="mt-16">
            <h2 class="font-display text-3xl md:text-4xl mb-6 leading-tight">Optimizing for LTV</h2>
            <p class="text-lg opacity-80 mb-4">Growth loops only function if the core product experience is exceptional. Focus heavily on the post-purchase flow: personalized unboxing experiences, targeted email flows, and VIP loyalty tiers.</p>
            <p class="text-lg opacity-80 mb-10">By maximizing LTV, you can afford to spend more to acquire the first click, effectively outbidding competitors.</p>
            <div class="bg-background/10 rounded-xl p-6 border border-background/20 backdrop-blur-sm">
              <span class="block text-[10px] font-bold uppercase tracking-[0.2em] opacity-70 mb-3">ACTION ITEM</span>
              <p class="text-base md:text-lg font-medium">Map out your post-purchase flow and optimize lifetime value to afford higher upfront acquisition costs.</p>
            </div>
          </div>
        </div>
      </div>
    `,
  },
];
