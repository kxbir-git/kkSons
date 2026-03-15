import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StatsCounter from "@/components/StatsCounter";
import ServicesSection from "@/components/ServicesSection";
import RecentWork from "@/components/RecentWork";
import ContactSection from "@/components/ContactSection";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Header />
      <HeroSection />
      <AboutSection />
      <StatsCounter />
      <ServicesSection />
      <RecentWork />
      
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
