import { ContentBlock } from "@/data/solutions_types";
import { SolutionHero } from "../solution/SolutionHero";
import { SolutionTextSplit } from "../solution/SolutionTextSplit";
import { SolutionListCompactGrid } from "../solution/SolutionListCompactGrid";
import { SolutionListMediumCards } from "../solution/SolutionListMediumCards";
import { SolutionListFeatureCards } from "../solution/SolutionListFeatureCards";
import { SolutionMethodology } from "../solution/SolutionMethodology";
import { SolutionFeatures } from "../solution/SolutionFeatures";
import { SolutionProcessTimeline } from "../solution/SolutionProcessTimeline";
import { SolutionFinalCta } from "../solution/SolutionFinalCta";
import { SolutionWhoFor } from "../solution/SolutionWhoFor";
import { SolutionPlatforms } from "../solution/SolutionPlatforms";

const MOCK_STATS = [
  { label: "Leads", value: "+320%" },
  { label: "Client Rating", value: "4.8\u2605" },
  { label: "Projects", value: "120+" }
];

export function ContentBlockRenderer({ block, featuredImage, index }: { block: ContentBlock, featuredImage?: string, index: number }) {
  switch (block.type) {
    case 'hero':
      return (
        <SolutionHero 
          data={{
            headline: block.heading,
            valueProp: block.description,
            ctaPrimary: block.primaryCta,
            ctaSecondary: block.secondaryCta,
            image: featuredImage || 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop',
            stats: MOCK_STATS
          }} 
        />
      );
    case 'text':
      return (
        <SolutionTextSplit 
          key={index}
          data={{
            heading: block.heading,
            description: block.description
          }}
        />
      );
    case 'list':
      if (block.heading === 'Platforms We Support') {
        return <SolutionPlatforms key={index} data={{ heading: block.heading, description: block.description, items: block.items }} />;
      }
      
      if (block.heading === 'Why Social Media Matters') {
        return <SolutionListCompactGrid key={index} data={{ heading: block.heading, description: block.description, items: block.items }} />;
      }
      
      if (block.heading === 'Content We Can Create') {
        return <SolutionListMediumCards key={index} data={{ heading: block.heading, description: block.description, items: block.items }} />;
      }
      
      if (block.heading === 'More Than Posting') {
        return <SolutionListFeatureCards key={index} data={{ heading: block.heading, description: block.description, items: block.items }} />;
      }
      
      // Dynamically cycle through different premium list layouts based on index for maximum variety
      const layoutType = index % 3;
      
      if (layoutType === 0) {
        return <SolutionListFeatureCards key={index} data={{ heading: block.heading, description: block.description, items: block.items }} />;
      } else if (layoutType === 1) {
        return <SolutionListCompactGrid key={index} data={{ heading: block.heading, description: block.description, items: block.items }} />;
      } else {
        return <SolutionListMediumCards key={index} data={{ heading: block.heading, description: block.description, items: block.items }} />;
      }
    case 'cards':
      // We will alternate between SolutionWhoFor, SolutionMethodology and SolutionFeatures depending on the index or presence of numbers.
      // Or we can just use SolutionFeatures for 4 cards, SolutionMethodology for 8 cards.
      if (block.items.length <= 4) {
        return (
          <SolutionWhoFor 
            data={{
              heading: block.heading,
              introduction: block.description || '',
              cards: block.items.map((item) => ({
                icon: item.icon || 'CheckCircle',
                title: item.title,
                description: item.description || ''
              }))
            }}
          />
        );
      }
      return (
        <SolutionMethodology 
          data={{
            heading: block.heading,
            cards: block.items.map((item, i) => ({
              number: String(i + 1).padStart(2, '0'),
              icon: item.icon || 'CheckCircle',
              title: item.title,
              description: item.description || ''
            }))
          }}
        />
      );
    case 'process':
      return (
        <SolutionProcessTimeline 
          data={{
            heading: block.heading,
            steps: block.steps.map(step => ({
              title: step.title,
              description: step.description
            }))
          }}
        />
      );
    case 'cta':
      return (
        <SolutionFinalCta 
          data={{
            heading: block.heading,
            description: block.description || '',
            primaryBtnText: block.primaryCta,
            secondaryBtnText: block.secondaryCta
          }}
        />
      );
    default:
      return null;
  }
}
