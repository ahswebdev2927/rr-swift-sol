import Navbar from "@/components/Navbar";
import Technologies from "@/components/Technologies";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const TechnologiesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <Technologies />
      </div>
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default TechnologiesPage;
