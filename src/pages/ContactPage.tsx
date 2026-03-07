import Navbar from "@/components/Navbar";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <FinalCTA />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
