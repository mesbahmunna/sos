"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  slug: string;
};

const getSecondaryImageUrl = (slug: string) => {
  // Use high-quality, minimal concept/mockup secondary images from Unsplash
  const images: Record<string, string> = {
    "technology-startups": "1498050108023-c5249f4df085", // Code/Desk
    "technology-saas": "1504868584819-f818b45ce00f", // Work/Team
    "startups": "1519389953810-1950815bdd90", // Office/Modern
    "restaurants-hospitality": "1517248135467-4c7edcad34c4", // Restaurant interior
    "restaurants-cafes": "1497935586351-b67a49e012bf", // Coffee shop
    "hotels-hospitality": "1542314831-c53cd3816002", // Clean hotel lobby
    "real-estate": "1560518883-ce09059eeffa", // Building exterior
    "real-estate-property": "1464146072230-914cea290899", // Clean house
    "healthcare-wellness": "1516549655169-df83a0774514", // Medical consultation
    "dental-medical-clinics": "1606811841689-23dfddce3e95", // Clean clinic
    "retail-ecommerce": "1441986300917-64674bd600d8", // Store shelves
    "education-training": "1517245386807-bb43f82c33c4", // Classroom
    "construction-trades": "1504384308090-c894fdcc538d", // Construction site
    "home-services": "1584622650111-993a426fbf0a", // Plumber/Tools
    "professional-services": "1507679622140-522f7c0062f8", // Meeting
    "finance-accounting": "1454165804606-c3d57bc86b40", // Analytics laptop
    "legal-services": "1505664159854-20d8820c4515", // Law library/Office
    "beauty-personal-care": "1596462502278-27bfdc403348", // Spa
    "fitness-sports": "1518611012118-696072aa579a", // Gym interior
    "automotive": "1503375751356-b4d927d66927", // Clean garage
    "travel-tourism": "1476514525535-07fb3b4ae5f1", // Clean travel
    "events-entertainment": "1492684223066-81342ee5ff30", // Event audience
    "nonprofits-community": "1488521787991-ed7bbaae773c", // Community support
    "manufacturing-wholesale": "1565439390214-726880946059", // Manufacturing
    "logistics-transport": "1586528116493-a028fece4226", // Shipping/Logistics
    "agriculture-food-production": "1592982537444-2f7450d0e5fa", // Farm/Tractor
    "franchises-multi-location": "1497215175962-d2780bf4a621", // Abstract locations
  };

  const id = images[slug] || "1497215175962-d2780bf4a621"; // Default secondary abstract
  return `https://images.unsplash.com/photo-${id}?q=80&w=1200&auto=format&fit=crop`;
};

export function IndustryWhyUsIllustration({ slug }: Props) {
  const imageUrl = getSecondaryImageUrl(slug);

  return (
    <div className="relative mt-12 hidden lg:flex h-[500px] w-full items-center justify-center rounded-[2.5rem] border border-foreground/10 bg-gradient-to-br from-foreground/5 to-transparent overflow-hidden shadow-2xl shadow-black/5">
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative h-full w-full bg-background"
      >
        <Image
          src={imageUrl}
          alt={`Why Us Illustration for ${slug}`}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 35vw, (min-width: 768px) 50vw, 100vw"
        />
        
        {/* Subtle premium overlay to match the brand aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent mix-blend-multiply pointer-events-none"></div>
        <div className="absolute inset-0 border border-white/10 rounded-[2.5rem] shadow-inner mix-blend-overlay pointer-events-none"></div>
      </motion.div>
    </div>
  );
}
