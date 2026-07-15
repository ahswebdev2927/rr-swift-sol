import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Client Testimonials — Real Stories from IT Professionals | RR Swift Solutions"
        description="Read genuine reviews from IT professionals worldwide who used RR Swift Solutions for online job support and IT training. Real success stories across AWS, Salesforce, DevOps, Data Science, and more."
        canonical="/testimonials"
        keywords="RR Swift Solutions reviews, job support testimonials, IT training reviews, AWS support feedback, Salesforce support review, DevOps support feedback"
      />
      <Navbar />
      <main id="main-content" role="main" className="pt-16">
        <Testimonials />
      </main>
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default TestimonialsPage;
