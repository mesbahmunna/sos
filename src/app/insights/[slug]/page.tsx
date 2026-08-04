import { notFound } from "next/navigation";
import { allInsights } from "@/data/insights-extended";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArticleHero } from "@/components/ArticleHero";
import { ArticleProgress } from "@/components/ArticleProgress";
import { ArticleNavBar } from "@/components/ArticleNavBar";
import { KeepReading } from "@/components/KeepReading";
import { ArticleCTA } from "@/components/ArticleCTA";
import { ArticleEnd } from "@/components/ArticleEnd";

export async function generateStaticParams() {
  return allInsights.map((insight) => ({
    slug: insight.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const insight = allInsights.find((i) => i.slug === resolvedParams.slug);

  if (!insight) return {};

  return {
    title: insight.seoTitle || insight.title,
    description: insight.seoDescription || insight.introduction,
  };
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const insight = allInsights.find((i) => i.slug === resolvedParams.slug);

  if (!insight) {
    notFound();
  }

  // Get exactly 2 related insights for the asymmetric layout
  const relatedInsights = allInsights.filter((i) => i.slug !== resolvedParams.slug).slice(0, 2);

  return (
    <div className="min-h-dvh">
      <ArticleProgress />
      <Header />
      
      <main className="min-h-dvh">
        <ArticleHero 
          title={insight.title}
          category={insight.category}
          introduction={insight.introduction}
          image={insight.image}
        />

        <ArticleNavBar />

        {/* Global wrapper for standard spacing */}
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 pb-20 pt-16">
          <article 
            className="
              [&_.editorial-intro]:grid [&_.editorial-intro]:md:grid-cols-12 [&_.editorial-intro]:gap-8 [&_.editorial-intro]:md:gap-16 [&_.editorial-intro]:mb-24 [&_.editorial-intro]:mt-10
              [&_.intro-statement]:md:col-span-6 [&_.intro-statement]:text-3xl [&_.intro-statement]:md:text-5xl [&_.intro-statement]:font-display [&_.intro-statement]:leading-[1.1] [&_.intro-statement]:text-foreground
              [&_.intro-body]:md:col-span-6 [&_.intro-body]:text-lg [&_.intro-body]:text-foreground/70 [&_.intro-body_p]:mb-6
              
              [&_.article-grid]:flex [&_.article-grid]:flex-col [&_.article-grid]:gap-16 [&_.article-grid]:md:gap-32
              
              [&_.grid-row]:grid [&_.grid-row]:md:grid-cols-12 [&_.grid-row]:gap-8 [&_.grid-row]:md:gap-10 [&_.grid-row]:items-start
              [&_.grid-number]:md:col-span-2 [&_.grid-number]:font-display [&_.grid-number]:text-5xl [&_.grid-number]:text-foreground/20 [&_.grid-number]:hidden [&_.grid-number]:md:block
              [&_.grid-content]:md:col-span-7 [&_.grid-content]:lg:col-span-6 [&_.grid-content]:text-lg [&_.grid-content]:text-foreground/80
              [&_.grid-content_h2]:font-display [&_.grid-content_h2]:text-3xl [&_.grid-content_h2]:md:text-4xl [&_.grid-content_h2]:mb-6 [&_.grid-content_h2]:text-foreground [&_.grid-content_h2]:tracking-tight
              [&_.grid-content_p]:mb-6 [&_.grid-content_ul]:list-disc [&_.grid-content_ul]:pl-5 [&_.grid-content_ul_li]:mb-3 [&_.grid-content_strong]:font-semibold [&_.grid-content_em]:italic
              
              [&_.grid-callout]:md:col-span-3 [&_.grid-callout]:lg:col-span-4 [&_.grid-callout]:mt-8 md:[&_.grid-callout]:mt-0
              [&_.side-takeaway]:border [&_.side-takeaway]:border-foreground/10 [&_.side-takeaway]:bg-foreground/5 [&_.side-takeaway]:rounded-2xl [&_.side-takeaway]:p-6 [&_.side-takeaway]:shadow-sm
              [&_.takeaway-label]:text-[10px] [&_.takeaway-label]:font-bold [&_.takeaway-label]:uppercase [&_.takeaway-label]:tracking-[0.2em] [&_.takeaway-label]:text-foreground/50 [&_.takeaway-label]:block [&_.takeaway-label]:mb-3
              
              [&_.visual-break]:w-full [&_.visual-break]:py-20 [&_.visual-break]:md:py-32 [&_.visual-break]:border-y [&_.visual-break]:border-foreground/10 [&_.visual-break]:text-center [&_.visual-break]:flex [&_.visual-break]:flex-col [&_.visual-break]:items-center [&_.visual-break]:justify-center [&_.visual-break]:relative
              [&_.break-large-text]:font-display [&_.break-large-text]:text-[5rem] [&_.break-large-text]:md:text-[10rem] [&_.break-large-text]:leading-none [&_.break-large-text]:tracking-tighter [&_.break-large-text]:text-[color:var(--color-brand-orange)]
              [&_.break-sub-text]:mt-6 [&_.break-sub-text]:text-xl [&_.break-sub-text]:md:text-3xl [&_.break-sub-text]:font-display [&_.break-sub-text]:text-foreground/80 [&_.break-sub-text]:max-w-2xl [&_.break-sub-text]:mx-auto
              
              [&_.key-takeaways-section]:mt-24 [&_.key-takeaways-section]:md:mt-40 [&_.key-takeaways-section]:border-t [&_.key-takeaways-section]:border-foreground/10 [&_.key-takeaways-section]:pt-20
              [&_.key-takeaways-section_h3]:font-display [&_.key-takeaways-section_h3]:text-4xl [&_.key-takeaways-section_h3]:mb-12 [&_.key-takeaways-section_h3]:text-center
              [&_.takeaways-grid]:grid [&_.takeaways-grid]:md:grid-cols-3 [&_.takeaways-grid]:gap-6 [&_.takeaways-grid]:md:gap-8
              [&_.takeaway-card]:bg-foreground/5 [&_.takeaway-card]:border [&_.takeaway-card]:border-foreground/10 [&_.takeaway-card]:rounded-[2rem] [&_.takeaway-card]:p-8 [&_.takeaway-card]:md:p-10 [&_.takeaway-card]:flex [&_.takeaway-card]:flex-col [&_.takeaway-card]:shadow-sm
              [&_.takeaway-card_.num]:font-display [&_.takeaway-card_.num]:text-5xl [&_.takeaway-card_.num]:text-[color:var(--color-brand-cyan)] [&_.takeaway-card_.num]:mb-6
              [&_.takeaway-card_p]:text-xl [&_.takeaway-card_p]:font-medium [&_.takeaway-card_p]:leading-snug
            "
            dangerouslySetInnerHTML={{ __html: insight.content }}
          />
        </div>

        <ArticleEnd />
        
        <KeepReading insights={relatedInsights} />
        
        <ArticleCTA />
      </main>

      <Footer />
    </div>
  );
}
