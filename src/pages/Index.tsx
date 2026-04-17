import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HomeServices from "@/components/HomeServices";
import HomeTechnologies from "@/components/HomeTechnologies";
import HomeWhyUs from "@/components/HomeWhyUs";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="RR Swift Solutions | Online Job Support & IT Training from India"
        description="RR Swift Solutions offers expert Online Job Support, IT Training, Staffing & Outsourcing from Hyderabad, India. Specializing in Informatica, AWS, Salesforce, DevOps, Data Science, Java Full Stack, PHP & Cyber Security. Real-time remote support for IT professionals worldwide."
        canonical="/"
        keywords="online job support, IT job support India, Informatica online job support, AWS job support, Salesforce job support, DevOps job support, Data Science job support, Java Full Stack job support, PHP job support, Cyber Security job support, IT training Hyderabad, RR Swift Solutions"
      />
      <Navbar />
      <main id="main-content" role="main">
        <Hero />
        <HomeServices />
        <HomeTechnologies />
        <HomeWhyUs />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
