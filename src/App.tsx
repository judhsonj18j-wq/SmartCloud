import Ambient from "./components/Ambient";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import Features from "./components/Features";
import TemplateGallery from "./components/TemplateGallery";
import Showcase from "./components/Showcase";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import { useRevealContainer } from "./hooks/useReveal";

export default function App() {
  const ref = useRevealContainer<HTMLDivElement>();

  return (
    <div ref={ref} className="relative min-h-screen text-white antialiased">
      <Ambient />
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <TemplateGallery />
        <Showcase />
        <Benefits />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
