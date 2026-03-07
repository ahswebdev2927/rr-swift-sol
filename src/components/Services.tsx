import { motion } from "framer-motion";
import { Headphones, GraduationCap, Briefcase } from "lucide-react";

const services = [
  {
    icon: Headphones,
    title: "Job Support",
    description:
      "Real-time, live project assistance from experienced IT professionals who help you deliver results on the job.",
  },
  {
    icon: GraduationCap,
    title: "Online Training",
    description:
      "Comprehensive training programs in trending technologies, designed for working professionals with flexible schedules.",
  },
  {
    icon: Briefcase,
    title: "IT Consulting",
    description:
      "Expert guidance on project architecture, code reviews, and technical strategy for teams and individuals.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-green-subtle/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-green-medium mb-3">
            Core Services
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            What We <span className="text-gradient-green">Offer</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group relative bg-card p-8 rounded-xl border border-border hover:bg-green-subtle hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-green-subtle flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {service.description}
              </p>
              {/* Green underline animation */}
              <div className="h-0.5 w-0 bg-primary rounded-full group-hover:w-12 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
