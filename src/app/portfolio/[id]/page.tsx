import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CtaSection } from "@/components/CtaSection";
import { PORTFOLIO_PROJECTS } from "@/data/portfolioData";
import { CaseStudyHero } from "@/components/portfolio/CaseStudyHero";
import { CaseStudyChallenge } from "@/components/portfolio/CaseStudyChallenge";
import { CaseStudyResults } from "@/components/portfolio/CaseStudyResults";

export async function generateMetadata({ params }: { params: { id: string } }) {
  // Handle async params in Next.js 15+ if applicable
  const resolvedParams = await Promise.resolve(params);
  const project = PORTFOLIO_PROJECTS.find(p => p.id === resolvedParams.id);
  
  if (!project) return { title: "Project Not Found" };
  
  return {
    title: `${project.title} - ${project.client} | ShareOnSocial`,
    description: project.summary,
  };
}

export default async function CaseStudyPage({ params }: { params: { id: string } }) {
  // Handle async params in Next.js 15+ if applicable
  const resolvedParams = await Promise.resolve(params);
  const project = PORTFOLIO_PROJECTS.find(p => p.id === resolvedParams.id);
  
  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-dvh bg-background">
      <Header />
      <main className="min-h-dvh">
        <CaseStudyHero project={project} />
        <CaseStudyChallenge project={project} content={project.challenge} />
        <CaseStudyResults project={project} content={project.strategy} />
        <CtaSection
          heading={project.cta.heading}
          description={project.cta.description}
          primaryBtnText={project.cta.primaryBtn}
          secondaryBtnText={project.cta.secondaryBtn}
          smallHeading={true}
          className="mx-auto mt-24 mb-16 max-w-[1400px] px-6 md:mt-32 md:px-10"
        />
      </main>
      <Footer />
    </div>
  );
}
