import { Flag, Mail, MapPin, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { OFFICES } from "@/data/offices";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Contact RR Swift Solutions — Get Online Job Support Today"
        description="Reach out to RR Swift Solutions in India (Hyderabad) or the USA (Frederick, MD) for Online Job Support, IT Training, Staffing, and Outsourcing. Call +91 9000964005 or email info@rrswiftsol.com."
        canonical="/contact"
        keywords="contact RR Swift Solutions, call job support, email job support, AWS job support contact, Salesforce job support contact, Hyderabad job support phone number, USA Maryland IT support"
      />
      <Navbar />
      <main id="main-content" role="main" className="pt-16">
        <section aria-labelledby="offices-heading" className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h1
                id="offices-heading"
                className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3"
              >
                Our Global Offices
              </h1>
              <p className="text-muted-foreground">
                Connect with our teams in India and the United States for real-time IT job support,
                online training, and consulting.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {OFFICES.map((office) => (
                <article
                  key={office.id}
                  className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase mb-4">
                      <Flag className="w-3.5 h-3.5" aria-hidden="true" />
                      {office.badge}
                    </span>

                    <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-4">
                      {office.title}
                    </h2>

                    <div className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" aria-hidden="true" />
                      <span>{office.address}</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-5 border-t border-border flex flex-col gap-3">
                    <a
                      href={office.phoneHref}
                      className="inline-flex items-center gap-2.5 text-sm font-medium text-foreground hover:text-primary transition-colors"
                      aria-label={`Call ${office.title}`}
                    >
                      <Phone className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />
                      {office.phoneDisplay}
                    </a>
                    <a
                      href={`mailto:${office.email}`}
                      className="inline-flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`Email ${office.title}`}
                    >
                      <Mail className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />
                      {office.email}
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
