import { motion } from "framer-motion";
import { Clock, Shield, Users, Globe, Zap, HeadphonesIcon } from "lucide-react";

const reasons = [
  { icon: Clock, text: "Available across all time zones worldwide" },
  { icon: Shield, text: "100% confidential project support" },
  { icon: Users, text: "Industry-experienced mentors" },
  { icon: Globe, text: "Serving professionals globally" },
  { icon: Zap, text: "Real-time, hands-on assistance" },
  { icon: HeadphonesIcon, text: "Dedicated 1-on-1 support" },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-24 bg-green-subtle/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-green-medium mb-3">
            Why Choose Us
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Built for <span className="text-gradient-green">Your Success</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.text}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
              className="flex items-start gap-4 p-5 rounded-lg"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <reason.icon className="w-5 h-5 text-green-medium" />
              </div>
              <p className="text-sm font-medium text-foreground leading-relaxed pt-2">
                {reason.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
