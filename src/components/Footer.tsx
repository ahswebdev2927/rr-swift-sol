import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex flex-col items-start gap-1 mb-4" aria-label="RR Swift Solutions home">
              <img
                src={logo}
                alt="RR Swift Solutions logo — Online Job Support & IT Training from India"
                className="h-12 w-auto"
                width="120"
                height="48"
              />
              <span className="font-display text-[10px] font-bold tracking-wider text-foreground uppercase">
                RR Swift Solutions
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Real-time IT job support and online training for working
              professionals across the globe.
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer quick links">
            <h2 className="font-display text-sm font-bold text-foreground uppercase tracking-wider mb-4">
              Quick Links
            </h2>
            <ul className="flex flex-col gap-2">
              {[
                { label: "Home", to: "/" },
                { label: "Services", to: "/services" },
                { label: "Technologies", to: "/technologies" },
                { label: "Why Us", to: "/why-us" },
                { label: "Testimonials", to: "/testimonials" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <address className="not-italic">
            <h2 className="font-display text-sm font-bold text-foreground uppercase tracking-wider mb-4">
              Contact Us
            </h2>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:info@rrswiftsol.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email RR Swift Solutions"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                info@rrswiftsol.com
              </a>
              <a
                href="tel:+919000964005"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Call RR Swift Solutions"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                +91 900-096-4005
              </a>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>Hyderabad, Telangana, India</span>
              </div>
            </div>
          </address>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} RR Swift Solutions. All rights reserved.
          </p>
          <p
            className="mt-3 text-muted-foreground/70 leading-relaxed"
            style={{ fontSize: "11px" }}
          >
            Online Job Support | IT Training India | Informatica Support | AWS Job Support |
            Salesforce Support | DevOps Support | Data Science Support | Java Full Stack Support |
            PHP Job Support | Cyber Security Support | IT Staffing | Outsourcing | Hyderabad | India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
