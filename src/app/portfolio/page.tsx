import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CtaSection } from "@/components/CtaSection";
import { PortfolioHero } from "@/components/portfolio/PortfolioHero";
import { PortfolioContent } from "@/components/portfolio/PortfolioContent";
import { ImpactMetrics } from "@/components/portfolio/ImpactMetrics";

export const metadata = {
  title: "Portfolio - ShareOnSocial",
  description: "Work that moves metrics. Case studies across restaurants, healthcare, retail, education, real estate and startups.",
};

export default function PortfolioPage() {
  return (
    <div className="min-h-dvh bg-background">
      <Header />
      <main className="min-h-dvh">
        <PortfolioHero />
        <PortfolioContent />
        <ImpactMetrics />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
