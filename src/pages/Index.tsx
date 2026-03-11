import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HomeServices from "@/components/HomeServices";
import HomeTechnologies from "@/components/HomeTechnologies";
import HomeWhyUs from "@/components/HomeWhyUs";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <HomeServices />
      <HomeTechnologies />
      <HomeWhyUs />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
