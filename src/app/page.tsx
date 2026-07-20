import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CredentialsSection from "@/components/CredentialsSection";
import ServicesSection from "@/components/ServicesSection";
import FaqSection from "@/components/FaqSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <HeroSection />
      <CredentialsSection />
      <ServicesSection />
      <FaqSection />
      <AboutSection />
      <Footer />
    </div>
  );
}
