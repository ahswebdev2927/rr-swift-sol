import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-lg font-bold text-foreground mb-4">
              RR<span className="text-gradient-green">Swift</span>Sol
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Real-time IT job support and online training for working
              professionals across the globe.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm font-bold text-foreground uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              {["Home", "Services", "Technologies", "Why Us", "Testimonials", "Contact"].map(
                (link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link}
                  </a>
                )
              )}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-bold text-foreground uppercase tracking-wider mb-4">
              Contact Us
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:info@rrswiftsol.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@rrswiftsol.com
              </a>
              <a
                href="tel:+919999999999"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91 999-999-9999
              </a>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Hyderabad, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} RR Swift Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
