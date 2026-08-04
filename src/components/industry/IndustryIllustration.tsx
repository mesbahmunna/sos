"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  slug: string;
};

const getImageUrl = (slug: string) => {
  // Use high-quality, minimal concept/mockup images from Unsplash
  const images: Record<string, string> = {
    "technology-startups": "1551288049-bebda4e38f71", // Dashboard UI
    "technology-saas": "1460925895917-afdab827c52f", // Analytics/Macbook
    "startups": "1551288049-bebda4e38f71", 
    "restaurants-hospitality": "1414235077428-338989a2e8c0", // Fine dining setting
    "restaurants-cafes": "1555396273-367ea4eb4db5", // Clean cafe
    "hotels-hospitality": "1566073771259-6a8506099945", // Clean hotel room
    "real-estate": "1600596542815-ffad4c1539a9", // Modern interior
    "real-estate-property": "1512917774080-9991f1c4c750", // Modern architecture
    "healthcare-wellness": "1576091160550-2173ff9e5eb3", // Medical/Stethoscope
    "dental-medical-clinics": "1584982751601-97dcc096659c", // Blue clean medical
    "retail-ecommerce": "1556742049-0cfed4f6a45d", // Digital payment/POS
    "education-training": "1503676260728-1c00da094a0b", // Clean desk/books
    "construction-trades": "1503387762-592deb58ef4e", // Architecture blueprints
    "home-services": "1581578731548-c64695cc6952", // Cleaning/Services
    "professional-services": "1450101499163-c8848c66ca85", // Clean desk/documents
    "finance-accounting": "1554224155-8d04cb21cd6c", // Calculator/Charts
    "legal-services": "1589829085413-56de8ae18c73", // Law/Gavel minimal
    "beauty-personal-care": "1522337360788-8b13dee7a37e", // Beauty products flat lay
    "fitness-sports": "1534438327276-14e5300c3a48", // Clean weights
    "automotive": "1494976388531-d1058494cdd8", // Clean car
    "travel-tourism": "1455849318743-b2233052fcff", // Clean luggage/travel
    "events-entertainment": "1511512578047-dfb367046420", // Clean event setup
    "nonprofits-community": "1469571433403-0be56011eb6e", // Hands/Community
    "manufacturing-wholesale": "1581091226825-a6a2a5aee158", // Clean warehouse/industry
    "logistics-transport": "1586528116311-b8c04016ce03", // Clean shipping boxes
    "agriculture-food-production": "1500937386664-56d1dfef6093", // Clean field/growth
    "franchises-multi-location": "1497366216548-37526070297c", // Clean abstract building
  };

  const id = images[slug] || "1497366216548-37526070297c"; // Default clean abstract
  return `https://images.unsplash.com/photo-${id}?q=80&w=1920&auto=format&fit=crop`;
};

export function IndustryIllustration({ slug }: Props) {
  const imageUrl = getImageUrl(slug);

  return (
    <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden rounded-[2rem] border border-foreground/10 shadow-xl shadow-black/5">
      {/* Background container for the image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative h-full w-full bg-background"
      >
        <Image
          src={imageUrl}
          alt={`Illustration for ${slug}`}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 35vw, (min-width: 768px) 50vw, 100vw"
          priority
        />
        
        {/* Subtle premium overlay to match the brand aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-background/10 to-transparent mix-blend-multiply"></div>
        <div className="absolute inset-0 border border-white/10 rounded-[2rem] shadow-inner mix-blend-overlay"></div>
      </motion.div>
    </div>
  );
}
