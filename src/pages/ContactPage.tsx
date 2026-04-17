import Navbar from "@/components/Navbar";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Contact RR Swift Solutions — Get Online Job Support Today"
        description="Reach out to RR Swift Solutions for Online Job Support, IT Training, Staffing, and Outsourcing. Call +91 9000964005 or email info@rrswiftsol.com. Serving IT professionals across the USA, UK, Canada, Australia, and worldwide."
        canonical="/contact"
      />
      <Navbar />
      <main id="main-content" role="main" className="pt-16">
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
