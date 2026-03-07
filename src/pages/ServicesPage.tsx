import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <Services />
      </div>
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default ServicesPage;
