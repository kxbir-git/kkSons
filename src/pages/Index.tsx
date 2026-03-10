import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PromoSection from "@/components/PromoSection";
import HelpSection from "@/components/HelpSection";
import RentingEasy from "@/components/RentingEasy";
import PopularRentals from "@/components/PopularRentals";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <PromoSection />
      <HelpSection />
      <RentingEasy />
      <PopularRentals />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
