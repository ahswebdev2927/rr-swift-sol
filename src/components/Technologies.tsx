import { motion } from "framer-motion";

const techs = [
  { name: "Java Full Stack", icon: "☕" },
  { name: "React", icon: "⚛️" },
  { name: "Angular", icon: "🅰️" },
  { name: "Node.js", icon: "🟢" },
  { name: "Python", icon: "🐍" },
  { name: "AWS", icon: "☁️" },
  { name: "DevOps", icon: "⚙️" },
  { name: "Salesforce", icon: "💼" },
  { name: "Data Science", icon: "📊" },
  { name: "Azure", icon: "🔷" },
  { name: ".NET", icon: "🔶" },
  { name: "Selenium", icon: "🧪" },
  { name: "QA Testing", icon: "✅" },
  { name: "SAP", icon: "🏢" },
  { name: "C++", icon: "⚡" },
  { name: "Ruby on Rails", icon: "💎" },
  { name: "Cyber Security", icon: "🔒" },
  { name: "Machine Learning", icon: "🤖" },
  { name: "RPA / UI Path", icon: "🤖" },
  { name: "PHP", icon: "🐘" },
  { name: "AB Initio", icon: "🔄" },
  { name: "Appian BPM", icon: "📋" },
  { name: "Informatica", icon: "🔗" },
  { name: "ServiceNow", icon: "🛠️" },
  { name: "Network Eng.", icon: "🌐" },
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
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            On-job support and training across 25+ technologies — and many more.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {techs.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
              className="group flex flex-col items-center justify-center p-6 rounded-xl border border-border bg-card hover:bg-green-subtle hover:border-primary/30 transition-all duration-300 cursor-default"
            >
              <span className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </span>
              <span className="text-sm font-semibold text-foreground text-center">
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
