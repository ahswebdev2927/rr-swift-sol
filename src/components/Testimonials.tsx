import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh K.",
    role: "Java Developer, USA",
    quote:
      "RR Swift Solutions helped me navigate a complex microservices project. Their real-time support was invaluable and saved my project deadline.",
  },
  {
    name: "Priya M.",
    role: "Salesforce Admin, Canada",
    quote:
      "The training sessions were perfectly tailored to my schedule. I upgraded my skills while working full-time without any hassle.",
  },
  {
    name: "Arun S.",
    role: "DevOps Engineer, UK",
    quote:
      "Professional, reliable, and deeply knowledgeable. They understand the real challenges of working abroad and provide exactly the support you need.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-green-medium mb-3">
            Testimonials
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            What Our <span className="text-gradient-green">Clients Say</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative p-8 rounded-xl border border-border bg-card"
            >
              {/* Green accent line */}
              <div className="absolute top-0 left-8 right-8 h-0.5 bg-primary/40 rounded-full" />
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                "{t.quote}"
              </p>
              <div>
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
