import { motion } from "framer-motion";
import { Clock, Shield, Users, Globe, Zap, HeadphonesIcon, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const highlights = [
  { icon: Clock, text: "All time zones covered" },
  { icon: Shield, text: "100% confidential" },
  { icon: Users, text: "Industry-experienced mentors" },
  { icon: Globe, text: "Serving professionals globally" },
  { icon: Zap, text: "Real-time assistance" },
  { icon: HeadphonesIcon, text: "Dedicated 1-on-1 support" },
];

const HomeWhyUs = () => {
  return (
    <section className="py-20 bg-green-subtle/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-green-medium mb-2">
            Why Choose Us
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground">
            Built for <span className="text-gradient-green">Your Success</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {highlights.map((h, i) => (
            <motion.div
              key={h.text}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border"
            >
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <h.icon className="w-4 h-4 text-green-medium" />
              </div>
              <p className="text-sm font-medium text-foreground">{h.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/why-us"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            Learn Our Story & What Makes Us Unique <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeWhyUs;
