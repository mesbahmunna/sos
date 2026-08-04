import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FaqsContent } from "@/components/FaqsContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs | ShareOnSocial",
  description: "Find answers to the most common questions about our services, process, and how we help businesses grow.",
};

export default function FaqsPage() {
  return (
    <div className="min-h-dvh">
      <Header />
      <main className="min-h-dvh">
        <FaqsContent />
      </main>
      <Footer />
    </div>
  );
}
