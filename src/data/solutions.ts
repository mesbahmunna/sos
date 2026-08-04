export type SolutionData = {
  slug: string;
  title: string;
  shortDescription: string;
  featuredImage: string;
  category: string;
  tags: string[];
  seo: {
    title: string;
    description: string;
  };
  hero: {
    headline: string;
    valueProp: string;
    ctaPrimary: string;
    ctaSecondary: string;
    image: string;
    stats: { label: string; value: string; }[];
  };
  whoFor: {
    heading: string;
    introduction: string;
    cards: { icon: string; title: string; description: string; }[];
  };
  problem: {
    heading: string;
    description: string;
    painPoints: { title: string; description: string; }[];
  };
  ourSolution: {
    heading: string;
    cards: { number: string; icon: string; title: string; description: string; }[];
  };
  included: {
    heading: string;
    features: { icon: string; title: string; description: string; }[];
  };
  process: {
    heading: string;
    steps: { title: string; description: string; }[];
  };
  outcomes: {
    heading: string;
    metrics: { value: string; label: string; }[];
  };
  faq: {
    heading: string;
    questions: { question: string; answer: string; }[];
  };
  cta: {
    heading: string;
    description: string;
    primaryBtnText: string;
    secondaryBtnText: string;
  };
};

export const solutionsData: Record<string, SolutionData> = {
  "social-media-management": {
    "slug": "social-media-management",
    "title": "Social Media Management",
    "shortDescription": "Build a Stronger Presence. Stay Consistent.",
    "featuredImage": "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1000&auto=format&fit=crop",
    "category": "Social \u2022 ShareOnSocial",
    "tags": [
      "Strategy",
      "Content",
      "Publishing"
    ],
    "seo": {
      "title": "Social Media Management | Share On Social",
      "description": "Build a Stronger Presence. Stay Consistent."
    },
    "hero": {
      "headline": "Social Media Management",
      "valueProp": "Build a Stronger Presence. Stay Consistent. Social media should do more than keep your business active. It should help people discover your brand, understand what you offer, trust your business and take the next step. ShareOnSocial manages your social media from strategy and content planning to publishing, engagement and performance improvement. We create a consistent presence built around your audience, industry and business goals.",
      "ctaPrimary": "Start Your Project",
      "ctaSecondary": "Book a Call",
      "image": "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
      "stats": [
        {
          "label": "Leads",
          "value": "+320%"
        },
        {
          "label": "Client Rating",
          "value": "4.8\u2605"
        },
        {
          "label": "Projects",
          "value": "120+"
        }
      ]
    },
    "whoFor": {
      "heading": "Platforms We Support",
      "introduction": "We create and manage content for platforms relevant to your business, including:",
      "cards": [
        {
          "icon": "Facebook",
          "title": "Facebook",
          "description": "Engage your community and build brand loyalty."
        },
        {
          "icon": "Instagram",
          "title": "Instagram",
          "description": "Showcase your brand visually with high-quality posts and Reels."
        },
        {
          "icon": "Linkedin",
          "title": "LinkedIn",
          "description": "Connect with professionals and establish industry authority."
        },
        {
          "icon": "Youtube",
          "title": "YouTube & TikTok",
          "description": "Capture attention with short-form and long-form video content."
        }
      ]
    },
    "problem": {
      "heading": "Why Businesses Choose ShareOnSocial",
      "description": "Strategy, design, content and campaign planning are managed under one coordinated system.",
      "painPoints": [
        {
          "title": "One Connected Team",
          "description": "Strategy, design, content and campaign planning are managed under one coordinated system."
        },
        {
          "title": "Consistent Brand Presence",
          "description": "Your content follows a clear visual and communication direction across every platform."
        },
        {
          "title": "Industry-Focused Content",
          "description": "We create content around how your customers think, search and make decisions."
        },
        {
          "title": "Less Internal Work",
          "description": "Your team spends less time planning posts, writing captions and coordinating publishing."
        }
      ]
    },
    "ourSolution": {
      "heading": "What We Manage",
      "cards": [
        {
          "number": "01",
          "icon": "Search",
          "title": "Social Media Strategy",
          "description": "We develop a practical strategy based on your audience, industry, competitors, brand positioning and growth goals."
        },
        {
          "number": "02",
          "icon": "Calendar",
          "title": "Content Planning",
          "description": "We create an organised content calendar covering promotional, educational, engaging and brand-building topics."
        },
        {
          "number": "03",
          "icon": "PenTool",
          "title": "Creative Design",
          "description": "We produce branded static posts, carousels, stories and campaign creatives designed for clarity, consistency and engagement."
        },
        {
          "number": "04",
          "icon": "Type",
          "title": "Captions and Copywriting",
          "description": "We write audience-focused captions, calls to action, keywords and hashtags that support your message and encourage action."
        },
        {
          "number": "05",
          "icon": "Video",
          "title": "Reels and Short-Form Content",
          "description": "We plan and create short-form video concepts that showcase your products, services, expertise and brand personality."
        },
        {
          "number": "06",
          "icon": "Send",
          "title": "Publishing and Scheduling",
          "description": "Approved content is scheduled and published consistently across the selected platforms."
        },
        {
          "number": "07",
          "icon": "Users",
          "title": "Community Management",
          "description": "We help monitor comments and audience interactions so your brand remains responsive, professional and connected."
        },
        {
          "number": "08",
          "icon": "TrendingUp",
          "title": "Performance Optimisation",
          "description": "We review content performance and refine future topics, formats and messaging based on audience response."
        }
      ]
    },
    "included": {
      "heading": "Content Built Around Your Business",
      "features": [
        {
          "icon": "PenTool",
          "title": "Your Brand",
          "description": "Consistent colours, visual direction, tone of voice and positioning."
        },
        {
          "icon": "Users",
          "title": "Your Audience",
          "description": "Content designed around their needs, questions, interests and buying decisions."
        },
        {
          "icon": "Briefcase",
          "title": "Your Industry",
          "description": "Relevant topics, trends, occasions and customer expectations."
        },
        {
          "icon": "Target",
          "title": "Your Goals",
          "description": "Every content type supports a purpose, from awareness and trust to enquiries and sales."
        }
      ]
    },
    "process": {
      "heading": "Our Process",
      "steps": [
        {
          "title": "1. Understand",
          "description": "We learn about your business, audience, services, positioning and current social presence."
        },
        {
          "title": "2. Plan",
          "description": "We develop content pillars, campaign themes and a structured publishing calendar."
        },
        {
          "title": "3. Create",
          "description": "Our team produces the graphics, videos, captions, hashtags and calls to action."
        },
        {
          "title": "4. Review",
          "description": "Content is shared for review and approval before publication."
        },
        {
          "title": "5. Publish",
          "description": "Approved content is scheduled across the selected social platforms."
        },
        {
          "title": "6. Improve",
          "description": "We review performance and refine the strategy based on what attracts the strongest audience response."
        }
      ]
    },
    "outcomes": {
      "heading": "More Than Posting",
      "metrics": [
        {
          "value": "01",
          "label": "Website development"
        },
        {
          "value": "02",
          "label": "Meta & Google advertising"
        },
        {
          "value": "03",
          "label": "CRM and lead management"
        },
        {
          "value": "04",
          "label": "SEO and local visibility"
        }
      ]
    },
    "faq": {
      "heading": "",
      "questions": []
    },
    "cta": {
      "heading": "Ready for Social Media That Supports Your Business?",
      "description": "Let ShareOnSocial manage the planning, content, publishing and ongoing direction while you focus on running your business.",
      "primaryBtnText": "Book a Call",
      "secondaryBtnText": "Start Your Project"
    }
  },
  "branding": {
    "slug": "branding",
    "title": "Branding",
    "shortDescription": "Build a Brand People Recognise, Remember and Trust.",
    "featuredImage": "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1000&auto=format&fit=crop",
    "category": "Branding \u2022 ShareOnSocial",
    "tags": [
      "Identity",
      "Design",
      "Guidelines"
    ],
    "seo": {
      "title": "Branding | Share On Social",
      "description": "Build a Brand People Recognise, Remember and Trust."
    },
    "hero": {
      "headline": "Branding",
      "valueProp": "Build a Brand People Recognise, Remember and Trust. A strong brand is more than a logo. It is how your business looks, sounds and feels across every customer interaction. ShareOnSocial helps businesses create clear, consistent and memorable brands that communicate the right message, stand out in the market and support long-term growth.",
      "ctaPrimary": "Build Your Brand",
      "ctaSecondary": "Book a Call",
      "image": "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop",
      "stats": [
        {
          "label": "Leads",
          "value": "+320%"
        },
        {
          "label": "Client Rating",
          "value": "4.8\u2605"
        },
        {
          "label": "Projects",
          "value": "120+"
        }
      ]
    },
    "whoFor": {
      "heading": "Branding for Every Stage",
      "introduction": "Whether you are launching something new or refreshing an established business, we build identities for growth.",
      "cards": [
        {
          "icon": "Rocket",
          "title": "New Businesses",
          "description": "Brand direction, market positioning, visual identity, core messaging, social media setup, website design direction, and launch campaign assets."
        },
        {
          "icon": "RefreshCw",
          "title": "Established Businesses",
          "description": "Improve visual consistency, market relevance, customer perception, digital presentation, brand confidence, and campaign effectiveness."
        }
      ]
    },
    "problem": {
      "heading": "Why Businesses Choose ShareOnSocial",
      "description": "We build the identity around your business goals rather than creating visuals without clear direction.",
      "painPoints": [
        {
          "title": "Strategy Before Design",
          "description": "We build the identity around your business goals rather than creating visuals without clear direction."
        },
        {
          "title": "One Consistent System",
          "description": "Your logo, colours, messaging and content work together across every platform."
        },
        {
          "title": "Built for Digital Use",
          "description": "Your brand is designed to perform across websites, social media, advertising and mobile screens."
        },
        {
          "title": "Practical Brand Guidelines",
          "description": "Your team receives a clear system that makes future brand use easier and more consistent."
        }
      ]
    },
    "ourSolution": {
      "heading": "What We Create",
      "cards": [
        {
          "number": "01",
          "icon": "Compass",
          "title": "Brand Strategy",
          "description": "We define the foundation of your brand, including positioning, audience, values, personality and competitive direction."
        },
        {
          "number": "02",
          "icon": "Target",
          "title": "Brand Positioning",
          "description": "We clarify how your business should be understood in the market and what makes it relevant to the right customers."
        },
        {
          "number": "03",
          "icon": "PenTool",
          "title": "Logo Design",
          "description": "We create a professional logo system designed to work across digital platforms, print, signage and promotional materials."
        },
        {
          "number": "04",
          "icon": "Palette",
          "title": "Visual Identity",
          "description": "We develop a consistent visual direction using colours, typography, graphic elements, imagery and layout styles."
        },
        {
          "number": "05",
          "icon": "MessageSquare",
          "title": "Brand Messaging",
          "description": "We create clear language for your business, including key messages, value propositions, taglines and supporting statements."
        },
        {
          "number": "06",
          "icon": "Mic",
          "title": "Tone of Voice",
          "description": "We define how your brand should communicate so every message feels consistent, recognisable and appropriate for your audience."
        },
        {
          "number": "07",
          "icon": "BookOpen",
          "title": "Brand Guidelines",
          "description": "We organise your visual and communication standards into a practical guide your team can use across future content and campaigns."
        },
        {
          "number": "08",
          "icon": "RefreshCw",
          "title": "Brand Refresh",
          "description": "We modernise existing brands that feel outdated, inconsistent or disconnected from their current market position."
        }
      ]
    },
    "included": {
      "heading": "Branding With a Clear Business Purpose",
      "features": [
        {
          "icon": "User",
          "title": "Who You Are",
          "description": "Helping customers quickly understand your core identity."
        },
        {
          "icon": "Briefcase",
          "title": "What You Offer",
          "description": "Clear communication of your products or services."
        },
        {
          "icon": "Users",
          "title": "Who You Serve",
          "description": "Connecting with the right target audience."
        },
        {
          "icon": "Shield",
          "title": "Why They Should Trust You",
          "description": "Building credibility through consistent strategy, design and communication."
        }
      ]
    },
    "process": {
      "heading": "Our Branding Process",
      "steps": [
        {
          "title": "1. Discover",
          "description": "We learn about your business, audience, competitors, values, goals and current market position."
        },
        {
          "title": "2. Define",
          "description": "We establish your brand strategy, positioning, personality and communication direction."
        },
        {
          "title": "3. Design",
          "description": "We develop the logo, colour palette, typography and supporting visual elements."
        },
        {
          "title": "4. Refine",
          "description": "We review the creative direction and make agreed revisions to strengthen the final identity."
        },
        {
          "title": "5. Document",
          "description": "We create practical brand guidelines covering how the identity should be used."
        },
        {
          "title": "6. Apply",
          "description": "We extend the brand across your website, social media, campaigns, presentations, signage or other required materials."
        }
      ]
    },
    "outcomes": {
      "heading": "More Than a Logo",
      "metrics": [
        {
          "value": "01",
          "label": "Clear positioning"
        },
        {
          "value": "02",
          "label": "Relevant messaging"
        },
        {
          "value": "03",
          "label": "Consistent visuals"
        },
        {
          "value": "04",
          "label": "Recognisable communication"
        }
      ]
    },
    "faq": {
      "heading": "",
      "questions": []
    },
    "cta": {
      "heading": "Ready to Build a Brand That Moves Your Business Forward?",
      "description": "Whether you are launching something new or refreshing an established business, ShareOnSocial can create a brand identity built for recognition, consistency and growth.",
      "primaryBtnText": "Start Your Brand",
      "secondaryBtnText": "Book a Call"
    }
  },
  "website-development": {
    "slug": "website-development",
    "title": "Website Development",
    "shortDescription": "Creates a Website That Works.",
    "featuredImage": "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1000&auto=format&fit=crop",
    "category": "Technology \u2022 ShareOnSocial",
    "tags": [
      "Design",
      "Development",
      "Conversion"
    ],
    "seo": {
      "title": "Website Development | Share On Social",
      "description": "Creates a Website That Works."
    },
    "hero": {
      "headline": "Website Development",
      "valueProp": "Creates a Website That Works. Your website should do more than explain who you are. It should help visitors understand your services, trust your business, and take the next step. ShareOnSocial designs and develops responsive, user-friendly websites built around your audience, business goals, and customer journey. From clear structure and compelling content to lead generation, bookings, e-commerce, and automation, every element is created with purpose.",
      "ctaPrimary": "Start Your Website",
      "ctaSecondary": "Book a Call",
      "image": "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1000&auto=format&fit=crop",
      "stats": [
        {
          "label": "Leads",
          "value": "+320%"
        },
        {
          "label": "Client Rating",
          "value": "4.8\u2605"
        },
        {
          "label": "Projects",
          "value": "120+"
        }
      ]
    },
    "whoFor": {
      "heading": "Websites We Build",
      "introduction": "Depending on your business, we can create custom digital experiences that fit your specific industry needs.",
      "cards": [
        {
          "icon": "Briefcase",
          "title": "Business Websites",
          "description": "Lead-generation websites, professional-service websites, and landing pages."
        },
        {
          "icon": "ShoppingCart",
          "title": "E-commerce & Retail",
          "description": "E-commerce stores and restaurant and caf\u00e9 websites."
        },
        {
          "icon": "Home",
          "title": "Hospitality & Real Estate",
          "description": "Hotel and resort websites, and real estate platforms."
        },
        {
          "icon": "Activity",
          "title": "Medical & Education",
          "description": "Medical and clinic websites, and education and training platforms."
        }
      ]
    },
    "problem": {
      "heading": "Why Businesses Choose ShareOnSocial",
      "description": "We consider how the website will support marketing, lead generation, and customer acquisition from the beginning.",
      "painPoints": [
        {
          "title": "Strategy and Development Together",
          "description": "We consider how the website will support marketing, lead generation, and customer acquisition from the beginning."
        },
        {
          "title": "Built for Your Industry",
          "description": "The structure and features are tailored around how customers interact with businesses in your market."
        },
        {
          "title": "Content and Design Under One Team",
          "description": "Website structure, copy, design, and development are coordinated to create a more consistent result."
        },
        {
          "title": "Ready for Future Growth",
          "description": "Your website can be extended with advertising landing pages, automation, CRM, booking tools, and new services."
        }
      ]
    },
    "ourSolution": {
      "heading": "What We Deliver",
      "cards": [
        {
          "number": "01",
          "icon": "Map",
          "title": "Website Strategy",
          "description": "We plan the website structure, page flow, user journey, features, and calls to action before development begins."
        },
        {
          "number": "02",
          "icon": "Layout",
          "title": "Custom Website Design",
          "description": "We create a modern visual direction aligned with your brand, audience, and industry rather than relying on a generic layout."
        },
        {
          "number": "03",
          "icon": "Smartphone",
          "title": "Responsive Development",
          "description": "Your website is developed to work smoothly across desktop computers, tablets, and mobile devices."
        },
        {
          "number": "04",
          "icon": "FileText",
          "title": "Website Content",
          "description": "We can write clear, customer-focused website content that explains your value and guides visitors toward action."
        },
        {
          "number": "05",
          "icon": "Filter",
          "title": "Lead-Generation Features",
          "description": "We add enquiry forms, quote requests, click-to-call buttons, WhatsApp actions, and conversion-focused landing pages."
        },
        {
          "number": "06",
          "icon": "Calendar",
          "title": "Booking and Appointment Systems",
          "description": "We can create connected booking journeys for hotels, salons, clinics, coaches, events, and service businesses."
        },
        {
          "number": "07",
          "icon": "ShoppingBag",
          "title": "E-commerce Development",
          "description": "We build online stores with product categories, payment options, order workflows, and customer-friendly checkouts."
        },
        {
          "number": "08",
          "icon": "Settings",
          "title": "CRM and Automation Integration",
          "description": "Website enquiries can be connected to CRM systems, automated replies, lead assignment, and internal workflows."
        }
      ]
    },
    "included": {
      "heading": "A Website Built Around Your Business",
      "features": [
        {
          "icon": "CheckCircle",
          "title": "Present your business professionally",
          "description": "A visually attractive website with clear page structures and trust signals."
        },
        {
          "icon": "MessageSquare",
          "title": "Explain services clearly",
          "description": "A better customer journey that answers questions quickly without overwhelming the user."
        },
        {
          "icon": "UserPlus",
          "title": "Generate enquiries and leads",
          "description": "Strategically placed calls to action to guide visitors toward the next step."
        },
        {
          "icon": "CalendarCheck",
          "title": "Accept bookings or appointments",
          "description": "Designed for conversion to make the next step obvious and seamless."
        }
      ]
    },
    "process": {
      "heading": "Our Website Development Process",
      "steps": [
        {
          "title": "1. Discovery",
          "description": "Understand your business, goals, audience, and project requirements."
        },
        {
          "title": "2. Structure",
          "description": "Plan the sitemap, user journey, and content structure."
        },
        {
          "title": "3. Design",
          "description": "Create the visual design, layouts, and responsive interface."
        },
        {
          "title": "4. Development",
          "description": "Build the website, features, and required integrations."
        },
        {
          "title": "5. Content & Testing",
          "description": "Add content and test performance across all devices."
        },
        {
          "title": "6. Launch & Support",
          "description": "Launch your website and provide ongoing updates and support."
        }
      ]
    },
    "outcomes": {
      "heading": "Features We Can Integrate",
      "metrics": [
        {
          "value": "01",
          "label": "CRM systems & Payment gateways"
        },
        {
          "value": "02",
          "label": "Online booking tools & WhatsApp"
        },
        {
          "value": "03",
          "label": "Inventory & Property listing systems"
        },
        {
          "value": "04",
          "label": "Analytics & Marketing automation tools"
        }
      ]
    },
    "faq": {
      "heading": "",
      "questions": []
    },
    "cta": {
      "heading": "Ready to Build a Website That Works for Your Business?",
      "description": "Whether you need a new website, an e-commerce store, a booking platform, or a complete redesign, ShareOnSocial can create a digital experience built around your goals.",
      "primaryBtnText": "Start Your Website",
      "secondaryBtnText": "Book a Call"
    }
  },
  "seo-aeo": {
    "slug": "seo-aeo",
    "title": "SEO & AEO",
    "shortDescription": "Find Your Business\u2014Across Search Engines and AI Platforms.",
    "featuredImage": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    "category": "Digital \u2022 ShareOnSocial",
    "tags": [
      "SEO",
      "AEO",
      "Visibility"
    ],
    "seo": {
      "title": "SEO & AEO | Share On Social",
      "description": "Find Your Business\u2014Across Search Engines and AI Platforms."
    },
    "hero": {
      "headline": "SEO & AEO",
      "valueProp": "Find Your Business\u2014Across Search Engines and AI Platforms. Search is changing. Customers now discover businesses through Google, maps, voice search, featured answers, and AI-powered platforms. ShareOnSocial helps your website become easier to find, understand, and recommend through a connected approach to Search Engine Optimisation and Answer Engine Optimisation.",
      "ctaPrimary": "Improve Your Visibility",
      "ctaSecondary": "Book a Call",
      "image": "https://images.unsplash.com/photo-1572177812156-58036aae439c?q=80&w=1000&auto=format&fit=crop",
      "stats": [
        {
          "label": "Leads",
          "value": "+320%"
        },
        {
          "label": "Client Rating",
          "value": "4.8\u2605"
        },
        {
          "label": "Projects",
          "value": "120+"
        }
      ]
    },
    "whoFor": {
      "heading": "What We Can Optimise",
      "introduction": "Our SEO and AEO services can support a wide range of businesses and structures.",
      "cards": [
        {
          "icon": "Briefcase",
          "title": "Business Websites",
          "description": "Professional-service firms, local businesses, and B2B platforms."
        },
        {
          "icon": "MapPin",
          "title": "Multi-location Brands",
          "description": "Managing search visibility across multiple branches requires a clear structure."
        },
        {
          "icon": "ShoppingCart",
          "title": "E-commerce Stores",
          "description": "Optimising product categories, descriptions, and shopping journeys."
        },
        {
          "icon": "Activity",
          "title": "Healthcare & Real Estate",
          "description": "Clinics, hotels, real estate businesses, and education providers."
        }
      ]
    },
    "problem": {
      "heading": "Why Businesses Choose ShareOnSocial",
      "description": "We connect technical optimisation with useful content and clear customer messaging.",
      "painPoints": [
        {
          "title": "Search and Content Under One Strategy",
          "description": "We connect technical optimisation with useful content and clear customer messaging."
        },
        {
          "title": "Built Around Business Goals",
          "description": "We focus on visibility that can support enquiries, bookings, purchases, and meaningful customer actions."
        },
        {
          "title": "Local and National Capability",
          "description": "Strategies can be tailored for one service area, multiple locations, or wider markets."
        },
        {
          "title": "Ready for AI-Led Search",
          "description": "Your website is structured for both traditional search results and emerging answer-based platforms."
        }
      ]
    },
    "ourSolution": {
      "heading": "Our SEO & AEO Services",
      "cards": [
        {
          "number": "01",
          "icon": "Compass",
          "title": "SEO Strategy & Keyword Research",
          "description": "We identify the search terms and customer questions most relevant to your products, services, industry, and locations."
        },
        {
          "number": "02",
          "icon": "FileText",
          "title": "On-Page SEO",
          "description": "We optimise page headings, content, metadata, internal links, URLs, images, and calls to action."
        },
        {
          "number": "03",
          "icon": "Settings",
          "title": "Technical SEO",
          "description": "We review the technical foundations that can affect search performance, including site structure, mobile usability, indexing, redirects, and page speed."
        },
        {
          "number": "04",
          "icon": "MapPin",
          "title": "Local SEO",
          "description": "We improve visibility for location-based searches through local pages, business information, service-area content, and Google Business Profile optimisation."
        },
        {
          "number": "05",
          "icon": "MessageSquare",
          "title": "Question-Led Content",
          "description": "We identify the questions customers ask before choosing a business and build clear answers into your website."
        },
        {
          "number": "06",
          "icon": "List",
          "title": "Structured Service Information",
          "description": "We organise services, locations, features, benefits, and processes in a format that is easier for search and AI platforms to understand."
        },
        {
          "number": "07",
          "icon": "CheckCircle",
          "title": "FAQ & Conversational Content",
          "description": "We create useful FAQ sections and content using natural language that reflects how people speak, search, and ask questions."
        },
        {
          "number": "08",
          "icon": "Database",
          "title": "Structured Data Support",
          "description": "Where appropriate, we help implement structured information that gives search engines additional context about your business and website content."
        }
      ]
    },
    "included": {
      "heading": "SEO and AEO Work Better Together",
      "features": [
        {
          "icon": "Search",
          "title": "Search-focused service pages",
          "description": "SEO helps your pages get discovered."
        },
        {
          "icon": "MessageCircle",
          "title": "Customer question content",
          "description": "AEO helps your information become easier to understand and use in direct answers."
        },
        {
          "icon": "FileText",
          "title": "Structured FAQs",
          "description": "Providing clear business information and definitions."
        },
        {
          "icon": "BookOpen",
          "title": "Educational articles & case studies",
          "description": "Creating a stronger foundation for both traditional search and emerging AI-led discovery."
        }
      ]
    },
    "process": {
      "heading": "Our Process",
      "steps": [
        {
          "title": "1. Audit",
          "description": "Review your website, SEO health, and current search performance."
        },
        {
          "title": "2. Research",
          "description": "Identify keywords, competitors, and search opportunities."
        },
        {
          "title": "3. Strategy",
          "description": "Create a clear SEO plan for growth and visibility."
        },
        {
          "title": "4. Optimise",
          "description": "Improve content, technical SEO, and on-page elements."
        },
        {
          "title": "5. Build",
          "description": "Create new pages and content to expand search reach."
        },
        {
          "title": "6. Monitor & Improve",
          "description": "Track performance and continuously refine the strategy."
        }
      ]
    },
    "outcomes": {
      "heading": "Sustainable Visibility Takes Time",
      "metrics": [
        {
          "value": "01",
          "label": "Website quality & Technical condition"
        },
        {
          "value": "02",
          "label": "Competition & Market size"
        },
        {
          "value": "03",
          "label": "Content depth & Brand authority"
        },
        {
          "value": "04",
          "label": "Consistency of optimisation"
        }
      ]
    },
    "faq": {
      "heading": "",
      "questions": []
    },
    "cta": {
      "heading": "Ready to Make Your Business Easier to Find?",
      "description": "ShareOnSocial can help strengthen your visibility across search engines, local results, and AI-powered discovery through a connected SEO and AEO strategy.",
      "primaryBtnText": "Start Your SEO Strategy",
      "secondaryBtnText": "Book a Call"
    }
  },
  "paid-advertising": {
    "slug": "paid-advertising",
    "title": "Paid Advertising",
    "shortDescription": "Reach the Right Audience. Generate Better Leads.",
    "featuredImage": "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=1000&auto=format&fit=crop",
    "category": "Marketing \u2022 ShareOnSocial",
    "tags": [
      "Google Ads",
      "Meta Ads",
      "Lead Gen"
    ],
    "seo": {
      "title": "Paid Advertising | Share On Social",
      "description": "Reach the Right Audience. Generate Better Leads."
    },
    "hero": {
      "headline": "Paid Advertising",
      "valueProp": "Reach the Right Audience. Generate Better Leads. Paid advertising should do more than increase clicks and impressions. It should connect your business with people who are genuinely interested in your products or services and guide them toward a meaningful action. ShareOnSocial plans, creates, manages, and optimises paid campaigns across Google, Meta, and other relevant platforms. Every campaign is built around your audience, offer, location, customer journey, and business goals.",
      "ctaPrimary": "Launch Your Campaign",
      "ctaSecondary": "Book a Call",
      "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
      "stats": [
        {
          "label": "Leads",
          "value": "+320%"
        },
        {
          "label": "Client Rating",
          "value": "4.8\u2605"
        },
        {
          "label": "Projects",
          "value": "120+"
        }
      ]
    },
    "whoFor": {
      "heading": "Platforms We Manage",
      "introduction": "We connect the audience, message, creative, and landing experience so the campaign feels consistent from the first impression to the final action.",
      "cards": [
        {
          "icon": "Search",
          "title": "Google Ads",
          "description": "Reach people who are actively searching for your products, services, locations, or solutions. Includes Search, Display, Performance Max, and Shopping campaigns."
        },
        {
          "icon": "Facebook",
          "title": "Meta Ads",
          "description": "Reach and retarget audiences across Facebook and Instagram using interest, behaviour, location, and customer data."
        },
        {
          "icon": "Linkedin",
          "title": "LinkedIn Ads",
          "description": "Connect with professionals, business owners, decision-makers, and industry-specific audiences for B2B lead generation."
        },
        {
          "icon": "Youtube",
          "title": "Other Channels",
          "description": "Where relevant, we can also plan campaigns for platforms such as YouTube, TikTok, and selected industry-specific channels."
        }
      ]
    },
    "problem": {
      "heading": "Why Businesses Choose ShareOnSocial",
      "description": "Strategy, Creative and Campaign Management Together",
      "painPoints": [
        {
          "title": "Strategy, Creative and Campaign Management Together",
          "description": "Your targeting, messaging, design, and optimisation are coordinated by one team."
        },
        {
          "title": "Platform Selection Based on Your Goals",
          "description": "We recommend channels based on audience behaviour and campaign objectives rather than using every platform without purpose."
        },
        {
          "title": "Clearer Performance Measurement",
          "description": "We focus on leads, sales, bookings, and meaningful actions alongside reach and engagement."
        },
        {
          "title": "Ongoing Optimisation",
          "description": "Campaigns are actively reviewed and improved rather than simply launched and left running."
        }
      ]
    },
    "ourSolution": {
      "heading": "Our Paid Advertising Services",
      "cards": [
        {
          "number": "01",
          "icon": "Compass",
          "title": "Campaign Strategy",
          "description": "We define the audience, offer, platform, budget direction, campaign objective, and conversion journey before launch."
        },
        {
          "number": "02",
          "icon": "Users",
          "title": "Audience Research",
          "description": "We identify the people most likely to need your product or service based on location, search behaviour, demographics, interests, and intent."
        },
        {
          "number": "03",
          "icon": "Settings",
          "title": "Campaign Setup",
          "description": "We configure campaign structure, targeting, budgets, conversion actions, tracking, and platform settings."
        },
        {
          "number": "04",
          "icon": "Type",
          "title": "Ad Copywriting",
          "description": "We write clear, persuasive ad copy focused on customer needs, benefits, offers, and relevant calls to action."
        },
        {
          "number": "05",
          "icon": "PenTool",
          "title": "Creative Development",
          "description": "We produce static ads, carousels, videos, Reels, banners, and campaign variations designed for the selected platform."
        },
        {
          "number": "06",
          "icon": "Monitor",
          "title": "Landing Page Support",
          "description": "We review or create campaign landing pages that align with the advertisement and make the next step easy."
        },
        {
          "number": "07",
          "icon": "Activity",
          "title": "Conversion Tracking",
          "description": "We set up and review tracking for actions such as form submissions, phone calls, purchases, and appointment bookings."
        },
        {
          "number": "08",
          "icon": "TrendingUp",
          "title": "Campaign Optimisation",
          "description": "We regularly refine targeting, creative, copy, placements, bidding, and budgets based on performance."
        }
      ]
    },
    "included": {
      "heading": "What Makes a Campaign Work",
      "features": [
        {
          "icon": "CheckCircle",
          "title": "A relevant offer & Strong creative",
          "description": "Advertising cannot fix a weak offer or confusing customer journey by itself."
        },
        {
          "icon": "Target",
          "title": "Clear audience targeting",
          "description": "Reaching the right people at the right time."
        },
        {
          "icon": "FileText",
          "title": "Persuasive copy & A useful landing page",
          "description": "Communicating value and making the next step easy."
        },
        {
          "icon": "Activity",
          "title": "Accurate tracking & Ongoing optimisation",
          "description": "We review the wider process so campaigns have a stronger foundation."
        }
      ]
    },
    "process": {
      "heading": "Our Process",
      "steps": [
        {
          "title": "1. Understand",
          "description": "We learn about your business, audience, offer, locations, previous campaigns, and growth goals."
        },
        {
          "title": "2. Plan",
          "description": "We select the right platforms, campaign objectives, targeting approach, creative direction, and conversion journey."
        },
        {
          "title": "3. Build",
          "description": "We create the campaigns, advertisements, audiences, tracking, and landing-page requirements."
        },
        {
          "title": "4. Launch",
          "description": "Campaigns are reviewed, approved, and activated with controlled budgets and clear performance goals."
        },
        {
          "title": "5. Optimise",
          "description": "We monitor results and refine the campaign based on audience behaviour, conversion data, and cost efficiency."
        },
        {
          "title": "6. Report",
          "description": "We explain what happened, what changed, and where future improvements can be made."
        }
      ]
    },
    "outcomes": {
      "heading": "Connected Lead Management",
      "metrics": [
        {
          "value": "01",
          "label": "CRM systems & Automated notifications"
        },
        {
          "value": "02",
          "label": "Email, SMS & WhatsApp workflows"
        },
        {
          "value": "03",
          "label": "Lead assignment & Follow-up reminders"
        },
        {
          "value": "04",
          "label": "Appointment booking & Pipeline tracking"
        }
      ]
    },
    "faq": {
      "heading": "",
      "questions": []
    },
    "cta": {
      "heading": "Ready to Turn Advertising Spend Into Better Business Opportunities?",
      "description": "ShareOnSocial can help you plan, launch, manage, and optimise paid campaigns designed around your audience and business goals.",
      "primaryBtnText": "Launch Your Campaign",
      "secondaryBtnText": "Book a Call"
    }
  },
  "content-creation": {
    "slug": "content-creation",
    "title": "Content Creation",
    "shortDescription": "Create Content That Looks Strong.",
    "featuredImage": "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1000&auto=format&fit=crop",
    "category": "Content \u2022 ShareOnSocial",
    "tags": [
      "Copywriting",
      "Video",
      "Design"
    ],
    "seo": {
      "title": "Content Creation | Share On Social",
      "description": "Create Content That Looks Strong."
    },
    "hero": {
      "headline": "Content Creation",
      "valueProp": "Create Content That Looks Strong. Good content does more than fill a social media calendar. It helps people notice your business, understand your value, trust your brand and take the next step. ShareOnSocial creates strategic content for websites, social media, advertising and campaigns. Every piece is shaped around your audience, brand voice, platform and business goals.",
      "ctaPrimary": "Start Creating",
      "ctaSecondary": "Book a Call",
      "image": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop",
      "stats": [
        {
          "label": "Leads",
          "value": "+320%"
        },
        {
          "label": "Client Rating",
          "value": "4.8\u2605"
        },
        {
          "label": "Projects",
          "value": "120+"
        }
      ]
    },
    "whoFor": {
      "heading": "Content for Different Industries",
      "introduction": "We adapt content to the way customers think and make decisions within your market.",
      "cards": [
        {
          "icon": "Utensils",
          "title": "Restaurants and caf\u00e9s",
          "description": "A restaurant may need appetite-driven visuals to attract diners."
        },
        {
          "icon": "Briefcase",
          "title": "Professional services",
          "description": "A professional firm may need authority-building articles and guides."
        },
        {
          "icon": "ShoppingBag",
          "title": "Retail and e-commerce",
          "description": "A retailer may need product-focused Reels and persuasive ad copy."
        },
        {
          "icon": "Activity",
          "title": "Home services & Healthcare",
          "description": "A service business may need clear educational content that generates enquiries."
        }
      ]
    },
    "problem": {
      "heading": "Why Businesses Choose ShareOnSocial",
      "description": "Strategy and Creativity Together. We do not create content without understanding what it needs to achieve.",
      "painPoints": [
        {
          "title": "Strategy and Creativity Together",
          "description": "We do not create content without understanding what it needs to achieve."
        },
        {
          "title": "Content Tailored to Your Brand",
          "description": "Messaging, visuals and tone are developed around your business rather than copied from generic templates."
        },
        {
          "title": "Multiple Formats Under One Team",
          "description": "Copy, design, Reels, website content and campaign assets can be managed together."
        },
        {
          "title": "Consistent Communication",
          "description": "Your business presents one clear identity across platforms and customer touchpoints."
        }
      ]
    },
    "ourSolution": {
      "heading": "Our Content Creation Services",
      "cards": [
        {
          "number": "01",
          "icon": "Share2",
          "title": "Social Media Content",
          "description": "We create platform-ready content designed to keep your business active, consistent and relevant."
        },
        {
          "number": "02",
          "icon": "Video",
          "title": "Reels and Short-Form Videos",
          "description": "We develop short-form video content designed for fast-moving platforms and mobile audiences."
        },
        {
          "number": "03",
          "icon": "Monitor",
          "title": "Website Content",
          "description": "We write clear, structured website copy that helps visitors understand your business and move toward action."
        },
        {
          "number": "04",
          "icon": "Target",
          "title": "Advertising Content",
          "description": "We create persuasive content for paid campaigns across Google, Meta, LinkedIn and other platforms."
        },
        {
          "number": "05",
          "icon": "Shield",
          "title": "Brand Content",
          "description": "We help shape how your business communicates across every customer touchpoint."
        },
        {
          "number": "06",
          "icon": "FileText",
          "title": "Long-Form Content",
          "description": "We create useful, informative content that supports authority, search visibility and customer education."
        },
        {
          "number": "07",
          "icon": "PenTool",
          "title": "Creative Design",
          "description": "Content needs strong presentation as well as strong messaging. Our design team creates branded templates and visuals."
        },
        {
          "number": "08",
          "icon": "Cpu",
          "title": "AI-Assisted Content Creation",
          "description": "AI can improve content speed, variation and production when used with proper strategy and human direction."
        }
      ]
    },
    "included": {
      "heading": "Content for Every Stage of the Customer Journey",
      "features": [
        {
          "icon": "Eye",
          "title": "Awareness Content",
          "description": "Introduces your business and helps new audiences discover your brand."
        },
        {
          "icon": "HelpCircle",
          "title": "Consideration Content",
          "description": "Helps potential customers understand why your business may be right for them."
        },
        {
          "icon": "CheckCircle",
          "title": "Conversion Content",
          "description": "Encourages people to take action through offers, product promotions, and lead-generation."
        },
        {
          "icon": "Heart",
          "title": "Retention Content",
          "description": "Keeps existing customers engaged and encourages repeat business."
        }
      ]
    },
    "process": {
      "heading": "Our Content Creation Process",
      "steps": [
        {
          "title": "1. Understand",
          "description": "We learn about your business, audience, services, brand voice and content goals."
        },
        {
          "title": "2. Plan",
          "description": "We develop content pillars, topics, campaign themes and appropriate formats."
        },
        {
          "title": "3. Create",
          "description": "Our team produces the copy, visuals, scripts, videos or long-form content."
        },
        {
          "title": "4. Review",
          "description": "Content is shared for feedback and approval before publication or delivery."
        },
        {
          "title": "5. Publish or Deliver",
          "description": "Approved content is prepared for the relevant platforms, campaigns or website pages."
        },
        {
          "title": "6. Improve",
          "description": "We review audience response and performance to strengthen future content."
        }
      ]
    },
    "outcomes": {
      "heading": "More Than Attractive Content",
      "metrics": [
        {
          "value": "01",
          "label": "Audience understanding & Clear messaging"
        },
        {
          "value": "02",
          "label": "Useful information & Visual quality"
        },
        {
          "value": "03",
          "label": "Platform suitability & Brand consistency"
        },
        {
          "value": "04",
          "label": "Relevant calls to action & Ongoing improvement"
        }
      ]
    },
    "faq": {
      "heading": "",
      "questions": []
    },
    "cta": {
      "heading": "Ready to Create Content That Supports Your Growth?",
      "description": "ShareOnSocial can plan and produce the copy, designs, videos and campaign assets your business needs to communicate clearly and stay consistent.",
      "primaryBtnText": "Create Your Content",
      "secondaryBtnText": "Book a Call"
    }
  },
  "crm-automation": {
    "slug": "crm-automation",
    "title": "CRM & Automation",
    "shortDescription": "Automate Your Business.",
    "featuredImage": "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=1000&auto=format&fit=crop",
    "category": "Technology \u2022 ShareOnSocial",
    "tags": [
      "CRM",
      "Automation",
      "Workflows"
    ],
    "seo": {
      "title": "CRM & Automation | Share On Social",
      "description": "Automate Your Business."
    },
    "hero": {
      "headline": "CRM & Automation",
      "valueProp": "Automate Your Business. As your business grows, enquiries, follow-ups, customer details and internal tasks can quickly become difficult to manage. ShareOnSocial helps businesses implement connected CRM and automation systems that capture leads, organise information, improve response times and reduce repetitive manual work.",
      "ctaPrimary": "Automate Your Business",
      "ctaSecondary": "Book a Call",
      "image": "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop",
      "stats": [
        {
          "label": "Leads",
          "value": "+320%"
        },
        {
          "label": "Client Rating",
          "value": "4.8\u2605"
        },
        {
          "label": "Projects",
          "value": "120+"
        }
      ]
    },
    "whoFor": {
      "heading": "CRM and Automation for Different Businesses",
      "introduction": "We configure the CRM around your business structure, services, locations, team and customer journey.",
      "cards": [
        {
          "icon": "Briefcase",
          "title": "Service Businesses",
          "description": "Capture quote requests, organise follow-ups and track confirmed jobs."
        },
        {
          "icon": "Activity",
          "title": "Clinics and Salons",
          "description": "Manage appointments, reminders, customer history and repeat bookings."
        },
        {
          "icon": "Home",
          "title": "Real Estate Businesses",
          "description": "Track buyers, sellers, investors, properties and follow-up activity."
        },
        {
          "icon": "ShoppingCart",
          "title": "E-commerce & Hotels",
          "description": "Support customer journeys, manage booking enquiries, and customer segmentation."
        }
      ]
    },
    "problem": {
      "heading": "Why Businesses Choose ShareOnSocial",
      "description": "A connected CRM and automation system helps create one clear process from first contact to customer conversion.",
      "painPoints": [
        {
          "title": "Marketing and CRM Work Together",
          "description": "We connect lead generation with the systems required to manage and convert those leads."
        },
        {
          "title": "Built Around Your Workflow",
          "description": "The setup reflects how your business operates rather than forcing your team into a generic process."
        },
        {
          "title": "Fewer Missed Opportunities",
          "description": "Automated capture, notifications and reminders help reduce lost or forgotten enquiries."
        },
        {
          "title": "Better Team Visibility",
          "description": "Staff can see customer information, lead status and required actions in one place."
        }
      ]
    },
    "ourSolution": {
      "heading": "Our CRM & Automation Services",
      "cards": [
        {
          "number": "01",
          "icon": "Compass",
          "title": "CRM Strategy & Setup",
          "description": "We assess your current enquiry process and configure the CRM around your business structure."
        },
        {
          "number": "02",
          "icon": "Users",
          "title": "Contact and Lead Organisation",
          "description": "We create clear fields, categories, tags and records so customer information remains useful."
        },
        {
          "number": "03",
          "icon": "TrendingUp",
          "title": "Sales Pipeline Development",
          "description": "We build stages that reflect your real sales process, from first enquiry to conversion."
        },
        {
          "number": "04",
          "icon": "Settings",
          "title": "CRM Integration",
          "description": "The system can be connected with your website, advertising, forms, email, calendars, and booking tools."
        },
        {
          "number": "05",
          "icon": "Inbox",
          "title": "Enquiry Automation",
          "description": "Forms, advertisements and messages can trigger instant lead capture and internal notifications."
        },
        {
          "number": "06",
          "icon": "Mail",
          "title": "Email & SMS Automation",
          "description": "Automated emails and SMS can support welcome journeys, follow-ups, and booking confirmations."
        },
        {
          "number": "07",
          "icon": "CheckSquare",
          "title": "Task & Workflow Automation",
          "description": "The system can automatically create tasks, assign responsibilities and connect repeated internal steps."
        },
        {
          "number": "08",
          "icon": "Cpu",
          "title": "AI-Assisted Automation",
          "description": "Where suitable, AI can help classify enquiries, summarise conversations and route leads more efficiently."
        }
      ]
    },
    "included": {
      "heading": "A Better Lead-Management Process",
      "features": [
        {
          "icon": "Clock",
          "title": "Faster response times",
          "description": "Eliminate slow response times with automated workflows."
        },
        {
          "icon": "CheckCircle",
          "title": "Consistent follow-up",
          "description": "Ensure every enquiry receives the right attention."
        },
        {
          "icon": "Eye",
          "title": "Better visibility across the team",
          "description": "Keep leads stored in one central place instead of scattered notebooks and inboxes."
        },
        {
          "icon": "BarChart2",
          "title": "Measure conversions",
          "description": "Reduce repetitive administration and gain clear insights into what is working."
        }
      ]
    },
    "process": {
      "heading": "Our Process",
      "steps": [
        {
          "title": "1. Understand",
          "description": "Review your business, enquiries, and customer workflow."
        },
        {
          "title": "2. Map",
          "description": "Define the customer journey, tasks, and lead stages."
        },
        {
          "title": "3. Design",
          "description": "Plan the CRM, automations, and integrations."
        },
        {
          "title": "4. Build",
          "description": "Set up pipelines, forms, workflows, and automations."
        },
        {
          "title": "5. Test",
          "description": "Test workflows and fix issues before launch."
        },
        {
          "title": "6. Launch & Improve",
          "description": "Implement the system and continuously optimise it."
        }
      ]
    },
    "outcomes": {
      "heading": "CRM Integration With Your Marketing",
      "metrics": [
        {
          "value": "01",
          "label": "Website enquiry forms & Google Ads"
        },
        {
          "value": "02",
          "label": "Meta lead campaigns & Landing pages"
        },
        {
          "value": "03",
          "label": "Online booking platforms & WhatsApp"
        },
        {
          "value": "04",
          "label": "Review platforms & Reporting dashboards"
        }
      ]
    },
    "faq": {
      "heading": "",
      "questions": []
    },
    "cta": {
      "heading": "Ready to Build a More Organised Business?",
      "description": "ShareOnSocial can help you capture leads, organise customer information, automate follow-ups and create a clearer process from enquiry to conversion.",
      "primaryBtnText": "Build Your System",
      "secondaryBtnText": "Book a Call"
    }
  },
  "ai-business-solutions": {
    "slug": "ai-business-solutions",
    "title": "AI Business Solutions",
    "shortDescription": "Use AI to Work Smarter, Respond Faster and Scale More Efficiently.",
    "featuredImage": "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop",
    "category": "Technology \u2022 ShareOnSocial",
    "tags": [
      "AI",
      "Automation",
      "Workflows"
    ],
    "seo": {
      "title": "AI Business Solutions | Share On Social",
      "description": "Use AI to Work Smarter, Respond Faster and Scale More Efficiently."
    },
    "hero": {
      "headline": "AI Business Solutions",
      "valueProp": "Use AI to Work Smarter, Respond Faster and Scale More Efficiently. Artificial intelligence can help businesses reduce repetitive work, improve customer communication, organise information and make everyday processes more efficient. ShareOnSocial designs practical AI solutions around your business needs. We focus on useful systems that support your team, improve customer journeys and connect with your existing website, CRM, marketing and operations.",
      "ctaPrimary": "Explore AI Solutions",
      "ctaSecondary": "Book a Call",
      "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
      "stats": [
        {
          "label": "Leads",
          "value": "+320%"
        },
        {
          "label": "Client Rating",
          "value": "4.8\u2605"
        },
        {
          "label": "Projects",
          "value": "120+"
        }
      ]
    },
    "whoFor": {
      "heading": "Solutions for Different Industries",
      "introduction": "AI works best when it connects with the tools your business already uses and solves clear problems.",
      "cards": [
        {
          "icon": "Coffee",
          "title": "Hospitality",
          "description": "Guest enquiry assistants, booking support, review summaries and promotional content."
        },
        {
          "icon": "Stethoscope",
          "title": "Healthcare and Clinics",
          "description": "Patient FAQs, appointment guidance, internal knowledge support and enquiry routing."
        },
        {
          "icon": "ShoppingCart",
          "title": "Retail and E-commerce",
          "description": "Product recommendations, customer support, content creation and order-related assistance."
        },
        {
          "icon": "Briefcase",
          "title": "Professional Services",
          "description": "Consultation qualification, document summaries, lead management and internal knowledge tools."
        }
      ]
    },
    "problem": {
      "heading": "Why Businesses Choose ShareOnSocial",
      "description": "We focus on useful outcomes rather than adding AI simply because it is available.",
      "painPoints": [
        {
          "title": "Practical Solutions",
          "description": "We focus on useful outcomes rather than adding AI simply because it is available."
        },
        {
          "title": "Connected Expertise",
          "description": "AI can be integrated with your website, CRM, content, advertising and wider digital strategy."
        },
        {
          "title": "Built Around Your Workflow",
          "description": "Every solution is planned around how your team and customers actually operate."
        },
        {
          "title": "Human-Guided Implementation",
          "description": "Strategy, testing and quality control remain central throughout the process."
        }
      ]
    },
    "ourSolution": {
      "heading": "Our AI Business Solutions",
      "cards": [
        {
          "number": "01",
          "icon": "MessageCircle",
          "title": "AI Chat Assistants",
          "description": "We create website and customer-support assistants that can answer common questions and direct enquiries."
        },
        {
          "number": "02",
          "icon": "Filter",
          "title": "AI Lead Qualification",
          "description": "We can use AI to review new enquiries, identify customer intent and organise leads based on value."
        },
        {
          "number": "03",
          "icon": "RefreshCw",
          "title": "AI-Powered Follow-Up",
          "description": "AI can support follow-up workflows by helping prepare responses and summarise previous interactions."
        },
        {
          "number": "04",
          "icon": "PenTool",
          "title": "AI Content Support",
          "description": "We help businesses use AI to support content planning and production without losing brand consistency."
        },
        {
          "number": "05",
          "icon": "Video",
          "title": "AI Reels and Video Creation",
          "description": "We develop AI-assisted short-form videos for social media, campaigns and product promotion."
        },
        {
          "number": "06",
          "icon": "FileText",
          "title": "AI Document and Data Support",
          "description": "AI can help businesses process large amounts of information, extract data, and prepare reports more quickly."
        },
        {
          "number": "07",
          "icon": "Settings",
          "title": "AI Workflow Automation",
          "description": "We connect AI with CRM, email, forms, calendars and internal tools to create more intelligent workflows."
        },
        {
          "number": "08",
          "icon": "Database",
          "title": "AI Knowledge Assistants",
          "description": "We can create internal assistants trained around approved business information so staff can find answers faster."
        }
      ]
    },
    "included": {
      "heading": "Responsible AI Implementation",
      "features": [
        {
          "icon": "UserCheck",
          "title": "Human review where required",
          "description": "AI should assist your team\u2014not replace professional judgement where it is needed."
        },
        {
          "icon": "Lock",
          "title": "Controlled information sources",
          "description": "Limited access to sensitive data and appropriate escalation pathways."
        },
        {
          "icon": "MessageSquare",
          "title": "Clear customer communication",
          "description": "Ensuring users know how their data is handled and who they are interacting with."
        },
        {
          "icon": "Shield",
          "title": "Regular testing and updates",
          "description": "We design systems with clear boundaries, ensuring no unsupported claims or decisions."
        }
      ]
    },
    "process": {
      "heading": "Our Process",
      "steps": [
        {
          "title": "1. Identify",
          "description": "We review your current processes and identify where AI could save time or improve customer experience."
        },
        {
          "title": "2. Prioritise",
          "description": "We focus on practical opportunities with clear business value rather than automating everything at once."
        },
        {
          "title": "3. Design",
          "description": "We map the workflow, required information, human approvals, integrations and expected outcomes."
        },
        {
          "title": "4. Build",
          "description": "We configure the assistant, automation or AI-supported process around your business requirements."
        },
        {
          "title": "5. Test",
          "description": "We test accuracy, customer journeys, escalation points and system behaviour before launch."
        },
        {
          "title": "6. Implement & Improve",
          "description": "The solution is introduced into your business with the appropriate controls and team access. We refine based on real use."
        }
      ]
    },
    "outcomes": {
      "heading": "AI Built Around Real Business Needs",
      "metrics": [
        {
          "value": "01",
          "label": "Respond to enquiries faster"
        },
        {
          "value": "02",
          "label": "Automate repetitive tasks"
        },
        {
          "value": "03",
          "label": "Personalise communication"
        },
        {
          "value": "04",
          "label": "Support internal decision-making"
        }
      ]
    },
    "faq": {
      "heading": "",
      "questions": []
    },
    "cta": {
      "heading": "Ready to Put AI to Work in Your Business?",
      "description": "ShareOnSocial can help you identify the right opportunities, build practical AI systems and connect them with your existing marketing and operations.",
      "primaryBtnText": "Start With AI",
      "secondaryBtnText": "Book a Call"
    }
  },
  "outdoor-marketing": {
    "slug": "outdoor-marketing",
    "title": "Outdoor Marketing",
    "shortDescription": "Put Your Brand Where People Can See, Remember and Act on It.",
    "featuredImage": "https://images.unsplash.com/photo-1498623116890-37e912163d5d?q=80&w=1000&auto=format&fit=crop",
    "category": "Marketing \u2022 ShareOnSocial",
    "tags": [
      "Billboards",
      "Signage",
      "Print"
    ],
    "seo": {
      "title": "Outdoor Marketing | Share On Social",
      "description": "Put Your Brand Where People Can See, Remember and Act on It."
    },
    "hero": {
      "headline": "Outdoor Marketing",
      "valueProp": "Put Your Brand Where People Can See, Remember and Act on It. Outdoor marketing helps your business reach people in the real world\u2014on the road, in neighbourhoods, near stores, around events and across high-traffic locations. ShareOnSocial plans and creates outdoor campaigns that connect strong messaging, clear design and strategic placement. From billboards and vehicle advertising to signage and local activations, every campaign is built to improve visibility and support your wider marketing goals.",
      "ctaPrimary": "Plan Your Campaign",
      "ctaSecondary": "Book a Call",
      "image": "https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=1000&auto=format&fit=crop",
      "stats": [
        {
          "label": "Leads",
          "value": "+320%"
        },
        {
          "label": "Client Rating",
          "value": "4.8\u2605"
        },
        {
          "label": "Projects",
          "value": "120+"
        }
      ]
    },
    "whoFor": {
      "heading": "Outdoor Marketing for Different Goals",
      "introduction": "Outdoor marketing is especially useful for businesses trying to build visibility within specific locations.",
      "cards": [
        {
          "icon": "Eye",
          "title": "Brand Awareness",
          "description": "Create repeated visibility and improve recognition in key markets."
        },
        {
          "icon": "MapPin",
          "title": "Store or Branch Launches",
          "description": "Introduce a new location and direct nearby audiences toward it."
        },
        {
          "icon": "Users",
          "title": "Lead Generation",
          "description": "Use strong calls to action, phone numbers, QR codes and campaign landing pages."
        },
        {
          "icon": "Calendar",
          "title": "Event & Offer Promotion",
          "description": "Build awareness, highlight limited-time campaigns and promote local deals."
        }
      ]
    },
    "problem": {
      "heading": "Why Businesses Choose ShareOnSocial",
      "description": "We design for real viewing conditions rather than treating a billboard like a social media post.",
      "painPoints": [
        {
          "title": "One Connected Campaign",
          "description": "Outdoor, digital, content and lead generation can be planned under one strategy."
        },
        {
          "title": "Clear, Practical Creative",
          "description": "We design for real viewing conditions rather than treating a billboard like a social media post."
        },
        {
          "title": "Strong Local Relevance",
          "description": "Campaigns can be tailored around specific locations, communities and branches."
        },
        {
          "title": "Brand Consistency",
          "description": "Outdoor creative follows the same brand identity as your website, social media and advertising."
        }
      ]
    },
    "ourSolution": {
      "heading": "Our Outdoor Marketing Services",
      "cards": [
        {
          "number": "01",
          "icon": "Layout",
          "title": "Billboard Advertising",
          "description": "We create high-impact billboard campaigns designed for busy roads, commercial areas and selected high-visibility locations."
        },
        {
          "number": "02",
          "icon": "Truck",
          "title": "Vehicle Advertising",
          "description": "We design promotional graphics for cars, vans, buses and mobile advertising vehicles to reach multiple neighbourhoods."
        },
        {
          "number": "03",
          "icon": "Home",
          "title": "Storefront and Building Signage",
          "description": "We create signage that helps customers recognise, locate and understand your business, including shopfront signs and window graphics."
        },
        {
          "number": "04",
          "icon": "Navigation",
          "title": "Transit Advertising",
          "description": "We develop creative for buses, taxis, stations and other transport-based advertising opportunities where available."
        },
        {
          "number": "05",
          "icon": "Map",
          "title": "Street-Level Advertising",
          "description": "We create campaigns for locations where customers move, shop and spend time using posters, kiosks, and local banners."
        },
        {
          "number": "06",
          "icon": "Award",
          "title": "Event and Activation Marketing",
          "description": "We support physical campaigns around launches, exhibitions, festivals, community events and promotional activations."
        },
        {
          "number": "07",
          "icon": "Printer",
          "title": "Print Campaign Materials",
          "description": "We create supporting printed materials that extend the outdoor campaign such as flyers, brochures, and promotional vouchers."
        },
        {
          "number": "08",
          "icon": "Smartphone",
          "title": "Measurable Next Steps",
          "description": "We use QR codes, landing pages, phone tracking and campaign-specific actions where appropriate."
        }
      ]
    },
    "included": {
      "heading": "Campaigns Built for Fast Attention",
      "features": [
        {
          "icon": "Type",
          "title": "Short, memorable headlines",
          "description": "People often see outdoor advertising while driving, walking or passing through busy spaces. The message must work quickly."
        },
        {
          "icon": "Image",
          "title": "Clear visual hierarchy",
          "description": "Strong brand recognition and high-contrast, practical layouts with minimal distractions."
        },
        {
          "icon": "MapPin",
          "title": "Relevant location messaging",
          "description": "The goal is not to include every business detail. It is to create recognition and encourage the next action."
        },
        {
          "icon": "Target",
          "title": "One clear call to action",
          "description": "Easy-to-read typography and one obvious action for the viewer to take."
        }
      ]
    },
    "process": {
      "heading": "Our Outdoor Marketing Process",
      "steps": [
        {
          "title": "1. Understand",
          "description": "We learn about your audience, campaign goals, locations, offer and wider marketing activity."
        },
        {
          "title": "2. Plan",
          "description": "We define the campaign message, format, placement direction, call to action and supporting digital journey."
        },
        {
          "title": "3. Create & Prepare",
          "description": "Our team develops the copy, design and adapts the artwork to the required dimensions and print specifications."
        },
        {
          "title": "4. Coordinate",
          "description": "Where included, we support communication with media owners, printers or campaign partners."
        },
        {
          "title": "5. Launch",
          "description": "The campaign is installed, displayed or activated across the selected locations."
        },
        {
          "title": "6. Review",
          "description": "Where tracking is available, we review enquiries, QR activity, website traffic, campaign codes and digital response."
        }
      ]
    },
    "outcomes": {
      "heading": "Outdoor and Digital Work Better Together",
      "metrics": [
        {
          "value": "01",
          "label": "Dedicated landing pages & QR codes"
        },
        {
          "value": "02",
          "label": "Google Ads & Meta Ads integration"
        },
        {
          "value": "03",
          "label": "Local social media campaigns"
        },
        {
          "value": "04",
          "label": "CRM lead capture & Tracking"
        }
      ]
    },
    "faq": {
      "heading": "",
      "questions": []
    },
    "cta": {
      "heading": "Ready to Take Your Brand Beyond the Screen?",
      "description": "ShareOnSocial can help you plan, design and connect outdoor campaigns that improve visibility and support real business action.",
      "primaryBtnText": "Plan Your Campaign",
      "secondaryBtnText": "Book a Call"
    }
  }
};
