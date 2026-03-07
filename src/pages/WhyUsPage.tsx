import Navbar from "@/components/Navbar";
import WhyChooseUs from "@/components/WhyChooseUs";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const WhyUsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <WhyChooseUs />
      </div>
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default WhyUsPage;
