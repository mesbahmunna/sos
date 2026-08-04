export type ContentBlock = 
  | { type: 'hero'; heading: string; description: string; primaryCta: string; secondaryCta: string }
  | { type: 'text'; heading: string; description: string }
  | { type: 'list'; heading: string; description?: string; items: string[] }
  | { type: 'cards'; heading: string; description?: string; items: { title: string; description?: string; icon?: string }[] }
  | { type: 'process'; heading: string; steps: { title: string; description: string }[] }
  | { type: 'cta'; heading: string; description?: string; primaryCta: string; secondaryCta: string };

export interface SolutionData {
  slug: string;
  title: string;
  featuredImage: string;
  category: string;
  shortDescription: string;
  tags: string[];
  seo: {
    title: string;
    description: string;
  };
  blocks: ContentBlock[];
}
