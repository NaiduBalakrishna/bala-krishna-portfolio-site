
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

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-indigo-900">
      <Navigation />
      <Hero />
      <About />
      <Resume />
      <Projects />
      <Skills />
      <Certifications />
      <Achievements />
      <Activities />
      <Contact />
    </div>
  );
};

export default Index;
