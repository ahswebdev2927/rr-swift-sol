import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <Testimonials />
      </div>
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default TestimonialsPage;
