import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col justify-between">
      <SEO
        title="Page Not Found | RR Swift Solutions"
        description="We couldn't find the page you were looking for. It may have been moved or deleted."
      />
      <Navbar />
      
      <main className="flex-grow pt-40 pb-28 container mx-auto px-6 text-center flex items-center justify-center">
        <div className="max-w-md mx-auto">
          <h1 className="font-display text-4xl font-bold text-foreground mb-4">Page Not Found</h1>
          <p className="text-muted-foreground mb-8">
            We couldn't find the page you were looking for. It may have been moved or deleted.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:brightness-110 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;

