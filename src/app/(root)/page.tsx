"use client";
import { Header } from "./_components/header-section";
import { HeroSection } from "./_components/hero-section";
import { PromptForm } from "./_components/prompt-form";
import { DonateSection } from "./_components/donate-section";
import { ResultSection } from "./_components/results-section";

export default function Home() {
  return (
    <main className="h-screen w-full">
      <div className="container mx-auto max-w-md w-full h-full pt-8 bg-background">
        <Header />
        <HeroSection />
        <PromptForm />
        <DonateSection />
        <ResultSection />
      </div>
    </main>
  );
}
