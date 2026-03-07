import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const regions = [
  {
    title: "Professionals in North America",
    description: "Full time zone coverage across the USA and Canada with real-time project support.",
    flag: "🇺🇸 🇨🇦",
  },
  {
    title: "Professionals in Europe & UK",
    description: "GMT and CET compatible sessions with expert mentors for European professionals.",
    flag: "🇬🇧 🇪🇺",
  },
  {
    title: "Professionals Worldwide",
    description: "Supporting IT professionals in Australia, Middle East, Asia, and beyond — wherever you work.",
    flag: "🌍",
  },
];

const WhoWeHelp = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-green-medium mb-3">
            Who We Help
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Supporting IT Professionals <span className="text-gradient-green">Globally</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {regions.map((region, i) => (
            <motion.div
              key={region.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group relative p-8 rounded-xl border border-border bg-card hover:bg-green-subtle hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{region.flag}</div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                {region.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {region.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;
