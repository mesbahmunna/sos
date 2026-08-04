export type IndustryData = {
  slug: string;
  seo: {
    title: string;
    description: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  challenges: {
    headline: string;
    description: string;
    listHeadline: string;
    items: string[];
  };
  included: {
    headline: string;
    description: string;
    listHeadline: string;
    items: string[];
  };
  whyUs: {
    headline: string;
    description: string;
    listHeadline: string;
    items: string[];
  };
  process: {
    headline: string;
    steps: {
      number: string;
      title: string;
      description: string;
    }[];
  };
  cta: {
    headline: string;
    description: string;
    closingText: string;
    ctaButton: string;
  };
};

export const industriesData: Record<string, IndustryData> = {
  "restaurants-hospitality": {
    slug: 'restaurants-hospitality',
    seo: {
      title: "Digital Marketing for Restaurants & Hospitality | Share On Social",
      description: "Drive bookings, delivery sales, loyalty and local visibility with targeted digital marketing for restaurants and hospitality venues."
    },
    hero: {
      headline: "Drive Bookings, Delivery Sales, Loyalty & Local Visibility",
      subheadline: "For Restaurants & Hospitality.",
      description: "Stop relying on foot traffic. We help hospitality venues build predictable streams of reservations, boost delivery sales, and turn local diners into loyal regulars.",
      ctaPrimary: "Grow Your Venue",
      ctaSecondary: "View Hospitality Success"
    },
    challenges: {
      headline: "Overcome Hospitality Roadblocks",
      description: "It takes more than great food to survive in hospitality. We solve the visibility gaps holding you back.",
      listHeadline: "Challenges We Solve:",
      items: [
        "Low bookings and empty tables during mid-week.",
        "Weak Google visibility when hungry locals are searching.",
        "Poor online reviews costing you new customers.",
        "Inconsistent social media that fails to show off your menu.",
        "Low repeat customers and lack of loyalty.",
        "Ineffective delivery platform promotions."
      ]
    },
    included: {
      headline: "The Complete Hospitality Toolkit",
      description: "Everything you need to dominate your local food scene.",
      listHeadline: "Our Services:",
      items: [
        "Custom Website Design for Restaurants",
        "Local SEO to dominate 'near me' searches",
        "Google Business Profile Optimization",
        "Social Media Management",
        "Targeted Paid Ads (Meta & Google)",
        "CRM & Marketing Automation for loyalty"
      ]
    },
    whyUs: {
      headline: "Why Choose Us: The Results We Deliver",
      description: "We don't focus on vanity metrics. We focus on putting bums in seats and driving revenue.",
      listHeadline: "Expected Results:",
      items: [
        "More reservations and walk-ins.",
        "More delivery and takeout orders.",
        "Better reviews and stronger reputation.",
        "Higher customer loyalty and repeat visits.",
        "Stronger local presence than your competitors."
      ]
    },
    process: {
      headline: "How We Help You Grow",
      steps: [
        {
          number: "01",
          title: "Local Foundation",
          description: "We optimize your Website and Google Business Profile to capture local intent."
        },
        {
          number: "02",
          title: "Content Creation",
          description: "We produce stunning Reels & Social Media content that makes your food irresistible."
        },
        {
          number: "03",
          title: "Demand Generation",
          description: "We launch Paid Ads and Local SEO campaigns to drive immediate bookings."
        },
        {
          number: "04",
          title: "Loyalty Automation",
          description: "We implement CRM & Automation to turn first-time diners into loyal regulars."
        }
      ]
    },
    cta: {
      headline: "Ready to fill every table?",
      description: "Join the top-rated hospitality brands scaling their growth with us.",
      closingText: "Let's make your venue the talk of the town.",
      ctaButton: "Book a Strategy Call"
    }
  },

  "healthcare-wellness": {
    slug: 'healthcare-wellness',
    seo: {
      title: "Healthcare & Wellness Digital Marketing | Share On Social",
      description: "Increase patient enquiries and build a trusted digital reputation with our specialized healthcare marketing services."
    },
    hero: {
      headline: "Increase Patient Enquiries & Build a Trusted Reputation",
      subheadline: "For Healthcare & Wellness.",
      description: "We help clinics, practices, and wellness centers establish an authoritative digital presence that turns local searches into booked appointments.",
      ctaPrimary: "Grow Your Practice",
      ctaSecondary: "See Medical Case Studies"
    },
    challenges: {
      headline: "Solve Healthcare Marketing Hurdles",
      description: "Patients need to trust you before they book. We fix the digital gaps preventing patient acquisition.",
      listHeadline: "Challenges We Solve:",
      items: [
        "Low patient enquiries and empty appointment slots.",
        "Poor online reputation and lack of patient reviews.",
        "Weak local visibility on search engines.",
        "Outdated website that fails to build trust.",
        "Difficulty navigating medical advertising compliance.",
        "Failing to rank for specific treatments."
      ]
    },
    included: {
      headline: "Comprehensive Healthcare Solutions",
      description: "Compliant, trust-building strategies for medical and wellness professionals.",
      listHeadline: "Our Services:",
      items: [
        "Professional Clinic Website Design",
        "Medical SEO for treatment keywords",
        "Google Business Profile Management",
        "Authoritative Content Marketing",
        "Compliant Paid Ads (Search & Social)",
        "Appointment Booking Automation"
      ]
    },
    whyUs: {
      headline: "Why Choose Us: The Results We Deliver",
      description: "We deliver ethical, compliant marketing that grows your patient base predictably.",
      listHeadline: "Expected Results:",
      items: [
        "More patient bookings and full calendars.",
        "Improved patient trust and online credibility.",
        "Better local rankings for essential treatments.",
        "Higher volume of 5-star patient reviews.",
        "Lower cost-per-acquisition for new patients."
      ]
    },
    process: {
      headline: "How We Help You Grow",
      steps: [
        {
          number: "01",
          title: "Trust Infrastructure",
          description: "We build a professional Website and optimize your Google Business profile."
        },
        {
          number: "02",
          title: "Authority Building",
          description: "We deploy Content Marketing and SEO to establish your medical expertise."
        },
        {
          number: "03",
          title: "Patient Acquisition",
          description: "We run highly targeted Paid Ads to capture patients seeking immediate care."
        },
        {
          number: "04",
          title: "Streamlined Booking",
          description: "We implement Appointment Automation to make converting leads effortless."
        }
      ]
    },
    cta: {
      headline: "Ready to welcome more patients?",
      description: "Partner with experts who know how to grow healthcare practices ethically.",
      closingText: "Let's build your digital reputation.",
      ctaButton: "Schedule a Consultation"
    }
  },

  "retail-ecommerce": {
    slug: 'retail-ecommerce',
    seo: {
      title: "Retail & E-commerce Digital Marketing | Share On Social",
      description: "Drive online sales, increase foot traffic, and maximize repeat purchases for your retail or e-commerce business."
    },
    hero: {
      headline: "Drive Online Sales, Foot Traffic & Repeat Purchases",
      subheadline: "For Retail & E-commerce.",
      description: "Scale your store with high-converting campaigns, seamless omnichannel marketing, and automation that turns browsers into lifelong customers.",
      ctaPrimary: "Scale Your Sales",
      ctaSecondary: "View Retail Results"
    },
    challenges: {
      headline: "Break Through the Retail Noise",
      description: "The e-commerce landscape is crowded. We help you stand out and acquire customers profitably.",
      listHeadline: "Challenges We Solve:",
      items: [
        "Low conversion rates on product pages.",
        "High cart abandonment rates.",
        "Low repeat purchases and poor customer lifetime value.",
        "Limited website traffic and visibility.",
        "Struggling to drive foot traffic to physical stores.",
        "Unprofitable return on ad spend (ROAS)."
      ]
    },
    included: {
      headline: "Omnichannel Growth Solutions",
      description: "End-to-end strategies to sell more products, online and offline.",
      listHeadline: "Our Services:",
      items: [
        "Shopify Development & Optimization",
        "High-converting Ecommerce Website Design",
        "Product-focused SEO",
        "Paid Ads (Meta, Google Shopping, TikTok)",
        "Email Marketing & SMS flows",
        "CRM integration & Marketing Automation"
      ]
    },
    whyUs: {
      headline: "Why Choose Us: The Results We Deliver",
      description: "We focus on one metric above all else: your bottom-line revenue and profitability.",
      listHeadline: "Expected Results:",
      items: [
        "Higher revenue and profitable ROAS.",
        "Better conversion rates across all devices.",
        "More repeat customers and higher LTV.",
        "Reduced cart abandonment.",
        "Increased foot traffic for brick-and-mortar stores."
      ]
    },
    process: {
      headline: "How We Help You Grow",
      steps: [
        {
          number: "01",
          title: "Storefront Optimization",
          description: "We build or refine your Shopify/Ecommerce Website for maximum conversions."
        },
        {
          number: "02",
          title: "Traffic Generation",
          description: "We launch aggressive Paid Ads and SEO to drive qualified shoppers."
        },
        {
          number: "03",
          title: "Abandonment Recovery",
          description: "We deploy Automation to recover lost carts and recapture revenue."
        },
        {
          number: "04",
          title: "Retention Loop",
          description: "We use Email Marketing & CRM to turn one-time buyers into loyal fans."
        }
      ]
    },
    cta: {
      headline: "Ready to scale your store?",
      description: "Stop leaving sales on the table. Let's build a profitable growth engine.",
      closingText: "Your next revenue milestone awaits.",
      ctaButton: "Get a Free Audit"
    }
  },

  "education-training": {
    slug: 'education-training',
    seo: {
      title: "Marketing for Education & Training | Share On Social",
      description: "Boost enrolments, promote your courses, and increase student engagement with tailored digital strategies."
    },
    hero: {
      headline: "Boost Enrolments, Course Promotion & Student Engagement",
      subheadline: "For Education & Training.",
      description: "We help schools, universities, and training providers fill classrooms and courses with compelling digital marketing and lead generation strategies.",
      ctaPrimary: "Increase Enrolments",
      ctaSecondary: "See Education Success"
    },
    challenges: {
      headline: "Navigate Enrolment Hurdles",
      description: "Education marketing requires building trust over long decision cycles. We streamline the journey from inquiry to enrolment.",
      listHeadline: "Challenges We Solve:",
      items: [
        "Low enrolments for key courses or intakes.",
        "Weak brand awareness among prospective students.",
        "Low engagement from applicants during the decision process.",
        "Poor lead generation and high cost-per-acquisition.",
        "Bland institutional marketing that fails to inspire.",
        "Difficulty reaching both students and parents."
      ]
    },
    included: {
      headline: "Full-Funnel Enrolment Strategies",
      description: "Everything you need to attract, nurture, and enroll your ideal students.",
      listHeadline: "Our Services:",
      items: [
        "Institutional Website Design",
        "SEO for specific course searches",
        "Educational Content Marketing",
        "Social Media Management",
        "Targeted Paid Ads (Meta, Google, LinkedIn)",
        "CRM & Enrolment Automation"
      ]
    },
    whyUs: {
      headline: "Why Choose Us: The Results We Deliver",
      description: "We understand the nuances of the student enrolment funnel, delivering predictable cohorts.",
      listHeadline: "Expected Results:",
      items: [
        "More student enquiries and prospectus downloads.",
        "More finalized enrolments and filled classes.",
        "Higher engagement across all digital touchpoints.",
        "Lower cost-per-acquisition for new students.",
        "Stronger institutional brand authority."
      ]
    },
    process: {
      headline: "How We Help You Grow",
      steps: [
        {
          number: "01",
          title: "Digital Campus",
          description: "We optimize your Website and Content Marketing to reflect your institution's prestige."
        },
        {
          number: "02",
          title: "Lead Generation",
          description: "We deploy Paid Ads and Social Media to capture prospective student interest."
        },
        {
          number: "03",
          title: "Search Dominance",
          description: "We use SEO to ensure your courses rank when students are actively researching."
        },
        {
          number: "04",
          title: "Nurture & Enroll",
          description: "We implement CRM systems to automate follow-ups and drive final enrolments."
        }
      ]
    },
    cta: {
      headline: "Ready to fill your next intake?",
      description: "Partner with experts who know how to market education effectively.",
      closingText: "Let's drive your enrolments to record highs.",
      ctaButton: "Book a Strategy Session"
    }
  },

  "professional-services": {
    slug: 'professional-services',
    seo: {
      title: "Marketing for Professional Services | Share On Social",
      description: "Build authority, generate qualified leads, and acquire high-value clients for your professional service firm."
    },
    hero: {
      headline: "Build Authority, Generate Qualified Leads & Acquire Clients",
      subheadline: "For Professional Services.",
      description: "We help law firms, consultants, and agencies establish unshakeable digital trust and build a predictable pipeline of high-value clients.",
      ctaPrimary: "Get More Clients",
      ctaSecondary: "View Case Studies"
    },
    challenges: {
      headline: "Overcome B2B Marketing Challenges",
      description: "In professional services, you sell expertise. We help you translate that expertise into digital authority.",
      listHeadline: "Challenges We Solve:",
      items: [
        "Low digital authority in a competitive market.",
        "Poor lead quality wasting your team's time.",
        "Weak online visibility when clients search for your services.",
        "Over-reliance on word-of-mouth referrals.",
        "Failing to differentiate from competing firms.",
        "Lack of systems to nurture long-term prospects."
      ]
    },
    included: {
      headline: "Authority-Driven Growth Strategies",
      description: "Sophisticated marketing solutions designed for high-ticket service acquisition.",
      listHeadline: "Our Services:",
      items: [
        "Professional Website Design",
        "B2B and Local SEO",
        "LinkedIn Marketing & Outreach",
        "Brand Identity & Positioning",
        "CRM Implementation",
        "Lead Nurturing Automation"
      ]
    },
    whyUs: {
      headline: "Why Choose Us: The Results We Deliver",
      description: "We deliver marketing that reflects the prestige of your firm while driving measurable ROI.",
      listHeadline: "Expected Results:",
      items: [
        "Predictable flow of qualified leads.",
        "More high-value consultations and meetings.",
        "Higher trust and market authority.",
        "Reduced reliance on unpredictable referrals.",
        "Shorter sales cycles through automated nurturing."
      ]
    },
    process: {
      headline: "How We Help You Grow",
      steps: [
        {
          number: "01",
          title: "Positioning",
          description: "We refine your Branding and Website to immediately communicate premium value."
        },
        {
          number: "02",
          title: "Authority Building",
          description: "We use LinkedIn Marketing and SEO to establish your firm as the industry leader."
        },
        {
          number: "03",
          title: "Lead Capture",
          description: "We deploy targeted campaigns to attract highly qualified prospects."
        },
        {
          number: "04",
          title: "Automated Nurture",
          description: "We implement CRM & Automation to warm up leads until they are ready to hire you."
        }
      ]
    },
    cta: {
      headline: "Ready to scale your firm?",
      description: "Stop waiting for referrals. Build a predictable client acquisition engine.",
      closingText: "Let's fill your calendar with qualified leads.",
      ctaButton: "Schedule a Growth Call"
    }
  },

  "real-estate": {
    slug: 'real-estate',
    seo: {
      title: "Real Estate & Property Digital Marketing | Share On Social",
      description: "Generate exclusive listings, buyer leads, and seller enquiries with powerful real estate marketing systems."
    },
    hero: {
      headline: "Generate Listings, Buyer Leads & Seller Enquiries",
      subheadline: "For Real Estate & Property.",
      description: "We help real estate agents, developers, and property managers dominate their territory and generate qualified leads on autopilot.",
      ctaPrimary: "Dominate Your Market",
      ctaSecondary: "See Real Estate Results"
    },
    challenges: {
      headline: "Solve Property Marketing Headaches",
      description: "The property market is ruthless. You need a system that keeps your brand top-of-mind 24/7.",
      listHeadline: "Challenges We Solve:",
      items: [
        "Low listing enquiries and seller appraisals.",
        "Poor lead management and database neglect.",
        "Weak visibility against dominating local competitors.",
        "Relying entirely on expensive property portals.",
        "Failing to build a distinct personal agent brand.",
        "Lack of systems for off-market or project campaigns."
      ]
    },
    included: {
      headline: "The Complete Property Engine",
      description: "End-to-end solutions to build your brand and move properties fast.",
      listHeadline: "Our Services:",
      items: [
        "Agent & Agency Website Design",
        "Local SEO & Search Dominance",
        "Google Ads for seller leads",
        "Real Estate CRM Integration",
        "Marketing Automation",
        "High-converting Landing Pages"
      ]
    },
    whyUs: {
      headline: "Why Choose Us: The Results We Deliver",
      description: "We know real estate. We know what makes a vendor appraise and a buyer convert.",
      listHeadline: "Expected Results:",
      items: [
        "More exclusive property listings.",
        "More qualified buyer enquiries.",
        "Higher conversion rates from appraisal to listing.",
        "Dominant local brand recognition.",
        "Automated database reactivation."
      ]
    },
    process: {
      headline: "How We Help You Grow",
      steps: [
        {
          number: "01",
          title: "Digital Storefront",
          description: "We build powerful Landing Pages and Websites to capture vendor interest."
        },
        {
          number: "02",
          title: "Active Prospecting",
          description: "We deploy Google Ads and SEO to capture high-intent sellers in your territory."
        },
        {
          number: "03",
          title: "Lead Management",
          description: "We integrate your CRM to ensure zero leads fall through the cracks."
        },
        {
          number: "04",
          title: "Database Nurture",
          description: "We use Automation to stay in touch with past clients and future buyers."
        }
      ]
    },
    cta: {
      headline: "Ready to list and sell more?",
      description: "Join the top-performing agents who rely on our digital systems.",
      closingText: "Let's make you the #1 agent in your area.",
      ctaButton: "Book a Strategy Session"
    }
  },

  "construction-trades": {
    slug: 'construction-trades',
    seo: {
      title: "Digital Marketing for Construction & Trades | Share On Social",
      description: "Get more local leads, project enquiries, and trust-building content for your construction or trade business."
    },
    hero: {
      headline: "Drive Local Leads, Project Enquiries & Build Trust",
      subheadline: "For Construction & Trades.",
      description: "We help builders, contractors, and trade businesses generate consistent local leads, showcase their best work, and win higher-paying projects.",
      ctaPrimary: "Get More Projects",
      ctaSecondary: "View Trade Success"
    },
    challenges: {
      headline: "Overcome Trade Marketing Hurdles",
      description: "Stop relying on unpredictable directories and start owning your own lead generation engine.",
      listHeadline: "Challenges We Solve:",
      items: [
        "Low volume of high-quality project enquiries.",
        "Poor local rankings when customers search for your trade.",
        "Weak online credibility and lack of portfolio presentation.",
        "Wasting time quoting unqualified tire-kickers.",
        "Inconsistent work pipelines leading to cash flow stress.",
        "Relying entirely on word-of-mouth."
      ]
    },
    included: {
      headline: "The Trades Growth Toolkit",
      description: "Everything a modern construction or trade business needs to scale predictably.",
      listHeadline: "Our Services:",
      items: [
        "Professional Trade Website Design",
        "Local SEO to dominate service areas",
        "Google Business Profile Optimization",
        "Google Ads for high-intent leads",
        "Review Generation Systems",
        "CRM for quote management"
      ]
    },
    whyUs: {
      headline: "Why Choose Us: The Results We Deliver",
      description: "We cut the jargon and focus on what matters: the phone ringing with good, profitable jobs.",
      listHeadline: "Expected Results:",
      items: [
        "More inbound phone calls.",
        "More high-value quote requests.",
        "More signed projects and contracts.",
        "Dominant presence in your specific service postcodes.",
        "A 5-star reputation that wins jobs automatically."
      ]
    },
    process: {
      headline: "How We Help You Grow",
      steps: [
        {
          number: "01",
          title: "Local Foundation",
          description: "We optimize your Website and Google Business profile for local discovery."
        },
        {
          number: "02",
          title: "Trust Building",
          description: "We implement Review systems to showcase your reliability and craftsmanship."
        },
        {
          number: "03",
          title: "Demand Capture",
          description: "We run Local SEO and Paid Ads to capture customers needing urgent quotes."
        },
        {
          number: "04",
          title: "Lead Management",
          description: "We set up CRM systems so you can manage quotes and follow-ups from the site."
        }
      ]
    },
    cta: {
      headline: "Ready for better projects?",
      description: "Take control of your lead generation and scale your trade business.",
      closingText: "Let's keep your crew busy with the right work.",
      ctaButton: "Get a Free Marketing Audit"
    }
  },

  "home-services": {
    slug: 'home-services',
    seo: {
      title: "Home Services Digital Marketing | Share On Social",
      description: "Generate more calls, bookings, reviews, and service-area visibility for your home service business."
    },
    hero: {
      headline: "Generate Calls, Bookings, Reviews & Local Visibility",
      subheadline: "For Home Services.",
      description: "We help plumbers, HVAC, electricians, and cleaners dominate local search, flood their dispatch with calls, and build 5-star reputations.",
      ctaPrimary: "Generate More Calls",
      ctaSecondary: "See Our Strategies"
    },
    challenges: {
      headline: "Solve Home Service Bottlenecks",
      description: "When a homeowner has an emergency, they call the first business they trust. We make sure that's you.",
      listHeadline: "Challenges We Solve:",
      items: [
        "Low bookings during shoulder seasons.",
        "Poor local visibility and losing jobs to competitors.",
        "Weak review profiles on Google and Yelp.",
        "High cost-per-lead on shared lead platforms.",
        "Wasting ad spend outside your service radius.",
        "Failing to re-engage past customers."
      ]
    },
    included: {
      headline: "Local Dominance Package",
      description: "A specialized toolkit to capture high-intent local demand instantly.",
      listHeadline: "Our Services:",
      items: [
        "Conversion-focused Website Design",
        "Aggressive Local SEO",
        "Google Business Profile Management",
        "Service Automation",
        "CRM Integration",
        "Review Collection Systems"
      ]
    },
    whyUs: {
      headline: "Why Choose Us: The Results We Deliver",
      description: "We know that in home services, speed to lead and local trust are everything.",
      listHeadline: "Expected Results:",
      items: [
        "More immediate phone bookings.",
        "Better map pack and search rankings.",
        "Stronger online reputation with 5-star reviews.",
        "Lower cost per acquired customer.",
        "Consistent work for your technicians year-round."
      ]
    },
    process: {
      headline: "How We Help You Grow",
      steps: [
        {
          number: "01",
          title: "Local Setup",
          description: "We aggressively optimize your Google Business and Local SEO presence."
        },
        {
          number: "02",
          title: "Conversion Hub",
          description: "We build a Website designed specifically to make homeowners call immediately."
        },
        {
          number: "03",
          title: "Reputation Engine",
          description: "We automate Reviews to build undeniable trust in your service area."
        },
        {
          number: "04",
          title: "Efficiency",
          description: "We integrate CRM and Automation to streamline dispatch and follow-ups."
        }
      ]
    },
    cta: {
      headline: "Ready to dispatch more trucks?",
      description: "Stop losing local jobs to your competitors.",
      closingText: "Let's make your phone ring today.",
      ctaButton: "Book a Strategy Call"
    }
  },

  "beauty-personal-care": {
    slug: 'beauty-personal-care',
    seo: {
      title: "Beauty & Personal Care Marketing | Share On Social",
      description: "Fill your calendar with appointments, offers, reels, and local discovery campaigns for beauty brands."
    },
    hero: {
      headline: "Drive Appointments, Offers, Reels & Local Discovery",
      subheadline: "For Beauty & Personal Care.",
      description: "We help salons, spas, and beauty brands build a cult following, create viral aesthetic content, and keep their appointment calendars fully booked.",
      ctaPrimary: "Book Out Your Salon",
      ctaSecondary: "View Beauty Portfolio"
    },
    challenges: {
      headline: "Break Through the Beauty Noise",
      description: "The beauty industry is highly visual. You need scroll-stopping content and seamless booking to survive.",
      listHeadline: "Challenges We Solve:",
      items: [
        "Low appointment bookings and empty slots.",
        "Poor Instagram reach and low engagement.",
        "Low retention of repeat clients.",
        "Struggling to sell retail products.",
        "Inconsistent brand aesthetic online.",
        "Relying too heavily on discounting."
      ]
    },
    included: {
      headline: "The Beauty Growth Engine",
      description: "Everything you need to showcase your artistry and scale your revenue.",
      listHeadline: "Our Services:",
      items: [
        "Premium Brand Identity Design",
        "Social Media Management",
        "Viral Reels & TikTok Creation",
        "Aesthetic Website Design",
        "Booking Automation",
        "Targeted Paid Ads (Meta)"
      ]
    },
    whyUs: {
      headline: "Why Choose Us: The Results We Deliver",
      description: "We combine high-end aesthetic sensibilities with hard-hitting performance marketing.",
      listHeadline: "Expected Results:",
      items: [
        "More high-ticket appointments.",
        "Higher engagement and follower growth.",
        "Better client retention and re-booking rates.",
        "Increased retail product sales.",
        "A premium, cohesive digital brand."
      ]
    },
    process: {
      headline: "How We Help You Grow",
      steps: [
        {
          number: "01",
          title: "Aesthetic Blueprint",
          description: "We elevate your Branding and Website to reflect premium quality."
        },
        {
          number: "02",
          title: "Visual Storytelling",
          description: "We produce Social Media content and Reels that demand attention."
        },
        {
          number: "03",
          title: "Local Acquisition",
          description: "We run Paid Ads to turn local scrollers into booked clients."
        },
        {
          number: "04",
          title: "Retention Loop",
          description: "We use Booking Automation to keep clients returning effortlessly."
        }
      ]
    },
    cta: {
      headline: "Ready for a fully booked calendar?",
      description: "Partner with an agency that understands beauty aesthetics and business growth.",
      closingText: "Let's elevate your beauty brand.",
      ctaButton: "Get a Free Audit"
    }
  },

  "finance-accounting": {
    slug: 'finance-accounting',
    seo: {
      title: "Finance & Accounting Digital Marketing | Share On Social",
      description: "Establish credibility, generate leads, and distribute educational content to grow your financial firm."
    },
    hero: {
      headline: "Establish Credibility, Generate Leads & Educate Clients",
      subheadline: "For Finance & Accounting.",
      description: "We help financial advisors, accountants, and fintech firms establish thought leadership and build a predictable pipeline of qualified, high-net-worth clients.",
      ctaPrimary: "Generate Qualified Leads",
      ctaSecondary: "See Financial Success"
    },
    challenges: {
      headline: "Navigate Financial Marketing Challenges",
      description: "Trust is your currency. We help you build it at scale while staying fully compliant.",
      listHeadline: "Challenges We Solve:",
      items: [
        "Low consumer trust and weak brand authority.",
        "Poor lead generation and low-quality prospects.",
        "Struggling to differentiate in a sea of similar firms.",
        "Navigating complex advertising regulations.",
        "Bland, highly technical marketing that ignores human connection.",
        "Invisible digital presence for high-intent searches."
      ]
    },
    included: {
      headline: "Compliant Financial Growth Solutions",
      description: "Sophisticated marketing strategies for serious financial businesses.",
      listHeadline: "Our Services:",
      items: [
        "Professional Financial Website Design",
        "SEO for high-intent financial keywords",
        "Educational Content Marketing",
        "LinkedIn B2B Marketing",
        "Secure CRM Integration",
        "Lead Nurturing Automation"
      ]
    },
    whyUs: {
      headline: "Why Choose Us: The Results We Deliver",
      description: "We prioritize trust, authority, and compliance to deliver exceptional ROI.",
      listHeadline: "Expected Results:",
      items: [
        "Higher credibility and market authority.",
        "More inbound enquiries from ideal clients.",
        "Qualified leads with higher portfolios.",
        "Reduced reliance on traditional networking.",
        "Shorter sales cycles through education."
      ]
    },
    process: {
      headline: "How We Help You Grow",
      steps: [
        {
          number: "01",
          title: "Trust Infrastructure",
          description: "We build a compliant Website that immediately establishes authority."
        },
        {
          number: "02",
          title: "Thought Leadership",
          description: "We deploy Content Marketing and LinkedIn strategies to showcase expertise."
        },
        {
          number: "03",
          title: "Search Dominance",
          description: "We implement SEO to capture prospects actively seeking financial help."
        },
        {
          number: "04",
          title: "Pipeline Automation",
          description: "We use CRM and Automation to seamlessly nurture your leads."
        }
      ]
    },
    cta: {
      headline: "Ready to grow your firm?",
      description: "Stop relying on traditional networking. Build a modern digital pipeline.",
      closingText: "Let's acquire your next tier of clients.",
      ctaButton: "Book a Strategy Call"
    }
  },

  "technology-startups": {
    slug: 'technology-startups',
    seo: {
      title: "Marketing for Technology & Startups | Share On Social",
      description: "Execute flawless product launches, drive demand generation, and build scalable systems for tech startups."
    },
    hero: {
      headline: "Execute Product Launches, Demand Generation & Scalable Systems",
      subheadline: "For Technology & Startups.",
      description: "We help SaaS, tech companies, and funded startups build rapid growth engines, dominate their niche, and acquire users at scale.",
      ctaPrimary: "Scale Your Growth",
      ctaSecondary: "View Tech Case Studies"
    },
    challenges: {
      headline: "Overcome Startup Growth Hurdles",
      description: "A great product is only step one. You need a predictable, scalable engine for user acquisition.",
      listHeadline: "Challenges We Solve:",
      items: [
        "Low brand awareness in a crowded tech market.",
        "Poor product adoption and high churn rates.",
        "Scaling difficulties and high Customer Acquisition Cost (CAC).",
        "Struggling to explain complex technology simply.",
        "Failing to gain traction during product launches.",
        "Difficulty reaching specific B2B decision-makers."
      ]
    },
    included: {
      headline: "The Startup Growth Engine",
      description: "Agile, data-driven marketing designed for rapid scaling and market penetration.",
      listHeadline: "Our Services:",
      items: [
        "High-Performance Website Design",
        "Conversion-Optimized Landing Pages",
        "Technical and Content SEO",
        "Paid Ads (Meta, Google, LinkedIn)",
        "AI Automation workflows",
        "Startup CRM Implementation"
      ]
    },
    whyUs: {
      headline: "Why Choose Us: The Results We Deliver",
      description: "We move at the speed of tech. We test rapidly, scale winners, and obsess over data.",
      listHeadline: "Expected Results:",
      items: [
        "More product demos and trial signups.",
        "More active users and lower churn.",
        "Scalable growth with predictable CAC.",
        "Successful, high-impact product launches.",
        "Stronger positioning in the tech ecosystem."
      ]
    },
    process: {
      headline: "How We Help You Grow",
      steps: [
        {
          number: "01",
          title: "Conversion Architecture",
          description: "We build Websites and Landing Pages designed to convert traffic into users."
        },
        {
          number: "02",
          title: "Demand Generation",
          description: "We launch Paid Ads and SEO campaigns to rapidly scale awareness."
        },
        {
          number: "03",
          title: "Efficiency",
          description: "We integrate AI Automation to streamline onboarding and reduce churn."
        },
        {
          number: "04",
          title: "Data-Driven Scaling",
          description: "We use CRM data to optimize campaigns and lower acquisition costs continuously."
        }
      ]
    },
    cta: {
      headline: "Ready for hyper-growth?",
      description: "Partner with a team that understands how to scale tech products.",
      closingText: "Let's build your acquisition engine.",
      ctaButton: "Get a Growth Audit"
    }
  },

  "events-entertainment": {
    slug: 'events-entertainment',
    seo: {
      title: "Events & Entertainment Digital Marketing | Share On Social",
      description: "Drive registrations, maximize ticket sales, and boost audience engagement with explosive event marketing."
    },
    hero: {
      headline: "Drive Registrations, Ticket Sales & Audience Engagement",
      subheadline: "For Events & Entertainment.",
      description: "We help festivals, conferences, and entertainers create viral hype and drive massive ticket sales through explosive digital marketing campaigns.",
      ctaPrimary: "Sell Out Your Event",
      ctaSecondary: "See Past Campaigns"
    },
    challenges: {
      headline: "Solve Event Marketing Deadlines",
      description: "Event marketing has a hard deadline. You need campaigns that generate urgency and immediate action.",
      listHeadline: "Challenges We Solve:",
      items: [
        "Low registrations and slow ticket sales.",
        "Poor event awareness leading up to the launch date.",
        "Limited reach and failing to generate organic buzz.",
        "High cost-per-registration for conferences.",
        "Lack of engaging content to showcase the experience.",
        "Poor retargeting for users who abandon checkout."
      ]
    },
    included: {
      headline: "The Sold-Out Event Playbook",
      description: "High-energy strategies designed to create FOMO and drive conversions.",
      listHeadline: "Our Services:",
      items: [
        "High-converting Event Landing Pages",
        "Viral Social Media Management",
        "Aggressive Paid Ads (Meta, Google, TikTok)",
        "Urgency-driven Email Marketing",
        "Ticketing CRM Integration",
        "Pre-event and Post-event Automation"
      ]
    },
    whyUs: {
      headline: "Why Choose Us: The Results We Deliver",
      description: "We thrive under the pressure of a deadline. We know how to engineer hype.",
      listHeadline: "Expected Results:",
      items: [
        "More attendee registrations.",
        "More rapid ticket sales across all tiers.",
        "Greater audience engagement and FOMO.",
        "Higher ROAS during the final ticketing push.",
        "Seamless digital experience for attendees."
      ]
    },
    process: {
      headline: "How We Help You Grow",
      steps: [
        {
          number: "01",
          title: "Hype Hub",
          description: "We deploy Event Landing Pages optimized for rapid ticketing conversions."
        },
        {
          number: "02",
          title: "Awareness Blast",
          description: "We use Social Media and Paid Ads to generate massive pre-sale awareness."
        },
        {
          number: "03",
          title: "Urgency Retargeting",
          description: "We implement Email Marketing and Ads to capture hesitant buyers."
        },
        {
          number: "04",
          title: "Data Management",
          description: "We integrate your CRM to build a database for your future events."
        }
      ]
    },
    cta: {
      headline: "Ready for a sold-out crowd?",
      description: "Don't leave your ticket sales to chance. Let's engineer a sell-out.",
      closingText: "Your biggest event yet starts here.",
      ctaButton: "Plan Your Campaign"
    }
  }
};
