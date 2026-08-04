import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MarqueeSection } from "@/components/MarqueeSection";
import { AboutSection } from "@/components/AboutSection";
import { SolutionsSection } from "@/components/SolutionsSection";
import { JourneySection } from "@/components/JourneySection";
import { WorkSection } from "@/components/WorkSection";
import { IndustriesSection } from "@/components/IndustriesSection";
import { ClientVoicesSection } from "@/components/ClientVoicesSection";
import { InsightsSection } from "@/components/InsightsSection";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-dvh">
      <Header />
      <main className="min-h-dvh">
        <Hero />
        <MarqueeSection />
        <AboutSection />
        <SolutionsSection />
        <JourneySection />
        <WorkSection />
        <IndustriesSection />
        <ClientVoicesSection />
        <InsightsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
