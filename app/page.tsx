import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { TechStack } from "@/components/TechStack";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { Testimonials } from "@/components/Testimonials";
import { WritingList } from "@/components/WritingList";
import { AIAssistant } from "@/components/AIAssistant";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-base text-white">
      <Navbar />
      <main>
        <Hero />
        <ExperienceTimeline />
        <TechStack />
        <ProjectsGrid />
        <AIAssistant />
        <Testimonials />
        <WritingList />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
