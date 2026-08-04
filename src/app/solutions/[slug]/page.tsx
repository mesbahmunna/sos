import { notFound } from 'next/navigation';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { solutionsData } from "@/data/solutions_data";

import { ContentBlockRenderer } from "@/components/solutions/ContentBlockRenderer";
import { SolutionRelatedWork } from "@/components/solution/SolutionRelatedWork";
import { ContentBlock } from "@/data/solutions_types";

export async function generateStaticParams() {
  const slugs = solutionsData.map(s => s.slug);
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const data = solutionsData.find(s => s.slug === slug);

  if (!data || !data.seo) {
    return {
      title: 'Solution Not Found',
    };
  }

  return {
    title: data.seo.title,
    description: data.seo.description,
  };
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const data = solutionsData.find(s => s.slug === slug);

  if (!data) {
    notFound();
  }

  return (
    <div className="min-h-dvh">
      <Header />
      <main className="min-h-dvh">
        {data.blocks.map((block: ContentBlock, i: number) => (
          <ContentBlockRenderer key={i} block={block} featuredImage={data.featuredImage} index={i} />
        ))}
        <SolutionRelatedWork slug={slug} />
      </main>
      <Footer />
    </div>
  );
}

