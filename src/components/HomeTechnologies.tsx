import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const featuredTechs = [
  { name: "Java Full Stack", icon: "☕" },
  { name: "React", icon: "⚛️" },
  { name: "Python", icon: "🐍" },
  { name: "AWS", icon: "☁️" },
  { name: "DevOps", icon: "⚙️" },
  { name: "Salesforce", icon: "💼" },
  { name: "Angular", icon: "🅰️" },
  { name: "Azure", icon: "🔷" },
  { name: ".NET", icon: "🔶" },
  { name: "Data Science", icon: "📊" },
];

const HomeTechnologies = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-green-medium mb-2">
              Technologies
            </p>
            <h2 className="font-display text-3xl font-bold text-foreground">
              We <span className="text-gradient-green">Support</span>
            </h2>
          </motion.div>
          <Link
            to="/technologies"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-sm font-semibold text-foreground hover:bg-green-subtle transition-all group"
          >
            View All 25+
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
          {featuredTechs.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="group flex flex-col items-center justify-center p-5 rounded-xl border border-border bg-card hover:bg-green-subtle hover:border-primary/30 transition-all duration-300"
            >
              <span className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                {tech.icon}
              </span>
              <span className="text-xs font-semibold text-foreground text-center">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8 sm:hidden">
          <Link
            to="/technologies"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            View All Technologies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeTechnologies;
