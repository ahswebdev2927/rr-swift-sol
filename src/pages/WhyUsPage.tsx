import Navbar from "@/components/Navbar";
import WhyChooseUs from "@/components/WhyChooseUs";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const WhyUsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Why Choose RR Swift Solutions — Our Story & What Makes Us Unique"
        description="Founded in 2008 by Ramcharan Racharla, RR Swift Solutions is built on integrity, expertise, and client success. Discover why thousands of IT professionals across the USA, UK, Canada, Australia, and India trust us for online job support and training."
        canonical="/why-us"
        keywords="why choose RR Swift Solutions, online job support reviews, IT mentoring, Ramcharan Racharla, IT training provider, professional IT support"
      />
      <Navbar />
      <main id="main-content" role="main" className="pt-16">
        <WhyChooseUs />
      </main>
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default WhyUsPage;
