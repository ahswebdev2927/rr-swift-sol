import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="IT Services — Online Job Support, Training & Consulting | RR Swift Solutions"
        description="Explore RR Swift Solutions' core IT services: Online Job Support, Online Training, and IT Consulting. Real-time, project-specific guidance from industry experts in India for professionals worldwide."
        canonical="/services"
      />
      <Navbar />
      <main id="main-content" role="main" className="pt-16">
        <Services />
      </main>
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default ServicesPage;
