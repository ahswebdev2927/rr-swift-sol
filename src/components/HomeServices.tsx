import { motion } from "framer-motion";
import { Headphones, GraduationCap, Briefcase, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Headphones,
    title: "Job Support",
    summary: "Real-time project help from experienced IT pros — right when you need it.",
    href: "/services/job-support",
  },
  {
    icon: GraduationCap,
    title: "Online Training",
    summary: "Flexible training programs in trending technologies for working professionals.",
    href: "/services/online-training",
  },
  {
    icon: Briefcase,
    title: "IT Consulting",
    summary: "Expert guidance on architecture, code reviews, and technical strategy.",
    href: "/services/it-consulting",
  },
];

const HomeServices = () => {
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
            Our Services
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground">
            What We <span className="text-gradient-green">Offer</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Link key={s.title} to={s.href}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group bg-card p-7 rounded-xl border border-border hover:bg-green-subtle hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 cursor-pointer h-full"
              >
                <div className="w-11 h-11 rounded-lg bg-green-subtle flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <s.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{s.summary}</p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight className="w-3 h-3" />
                </span>
              </motion.div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
