import { motion } from "framer-motion";

const techs = [
  { name: "Java", icon: "☕" },
  { name: "AWS", icon: "☁️" },
  { name: "DevOps", icon: "⚙️" },
  { name: "Salesforce", icon: "💼" },
  { name: "Data Science", icon: "📊" },
  { name: "Python", icon: "🐍" },
  { name: "React", icon: "⚛️" },
  { name: "Azure", icon: "🔷" },
  { name: ".NET", icon: "🔶" },
  { name: "Selenium", icon: "🧪" },
];

const Technologies = () => {
  return (
    <section id="technologies" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-green-medium mb-3">
            Technologies
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Technologies We <span className="text-gradient-green">Support</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {techs.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="group flex flex-col items-center justify-center p-6 rounded-xl border border-border bg-card hover:bg-green-subtle hover:border-primary/30 transition-all duration-300 cursor-default"
            >
              <span className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </span>
              <span className="text-sm font-semibold text-foreground">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
