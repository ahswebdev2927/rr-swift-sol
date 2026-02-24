import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhoWeHelp from "@/components/WhoWeHelp";
import Services from "@/components/Services";
import Technologies from "@/components/Technologies";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <WhoWeHelp />
      <Services />
      <Technologies />
      <WhyChooseUs />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
