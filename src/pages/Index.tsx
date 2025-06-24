
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Resume } from "@/components/Resume";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Certifications } from "@/components/Certifications";
import { Achievements } from "@/components/Achievements";
import { Activities } from "@/components/Activities";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <div className="fixed top-20 right-6 z-50">
        <ThemeToggle />
      </div>
      <Navigation />
      <div className="space-y-0">
        <Hero />
        <div className="container mx-auto px-4 space-y-8 max-w-7xl">
          <About />
          <Resume />
          <Projects />
          <Skills />
          <Certifications />
          <Achievements />
          <Activities />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Index;
