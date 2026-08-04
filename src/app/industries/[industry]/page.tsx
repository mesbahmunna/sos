import { notFound } from 'next/navigation';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { industriesData } from "@/data/industries";
import { industries24Data } from "@/data/industries24";
import { IndustryHero } from "@/components/industry/IndustryHero";
import { IndustryChallenges } from "@/components/industry/IndustryChallenges";
import { IndustryIncluded } from "@/components/industry/IndustryIncluded";
import { IndustryWhyUs } from "@/components/industry/IndustryWhyUs";
import { IndustryProcess } from "@/components/industry/IndustryProcess";
import { IndustryCta } from "@/components/industry/IndustryCta";
import { IndustryNext } from "@/components/industry/IndustryNext";

export async function generateStaticParams() {
  const slugs1 = Object.keys(industriesData);
  const slugs2 = Object.keys(industries24Data);
  const allSlugs = Array.from(new Set([...slugs1, ...slugs2]));
  return allSlugs.map((slug) => ({
    industry: slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ industry: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.industry;
  const data = industries24Data[slug] || industriesData[slug];

  if (!data) {
    return {
      title: 'Industry Not Found',
    };
  }

  return {
    title: data.seo.title,
    description: data.seo.description,
  };
}

export default async function IndustryPage({ params }: { params: Promise<{ industry: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.industry;
  const data = industries24Data[slug] || industriesData[slug];

  if (!data) {
    notFound();
  }

  return (
    <div className="min-h-dvh">
      <Header />
      <main className="min-h-dvh">
        <IndustryHero data={data.hero} slug={slug} />
        <IndustryChallenges data={data.challenges} />
        <IndustryIncluded data={data.included} />
        <IndustryWhyUs data={data.whyUs} slug={slug} />
        <IndustryProcess data={data.process} />
        <IndustryCta data={data.cta} />
        <IndustryNext currentSlug={slug} />
      </main>
      <Footer />
    </div>
  );
}
