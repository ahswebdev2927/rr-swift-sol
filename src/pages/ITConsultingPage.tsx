import Navbar from "@/components/Navbar";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Briefcase, Target, Code, BarChart3, Layers, Settings } from "lucide-react";

const offerings = [
  { icon: Target, title: "Project Architecture", text: "We help design scalable, maintainable system architectures tailored to your project requirements." },
  { icon: Code, title: "Code Reviews", text: "Get thorough code reviews from senior developers to improve code quality, security, and performance." },
  { icon: BarChart3, title: "Technical Strategy", text: "Strategic guidance on technology selection, migration planning, and modernization roadmaps." },
  { icon: Layers, title: "System Integration", text: "Expert assistance with integrating third-party APIs, microservices, and enterprise systems." },
  { icon: Settings, title: "DevOps & Infrastructure", text: "Optimize your CI/CD pipelines, cloud infrastructure, and deployment processes." },
  { icon: Briefcase, title: "Team Augmentation", text: "Augment your team with our experienced consultants for short-term or long-term project needs." },
];

const ITConsultingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <section className="py-24 bg-green-subtle/50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-8 h-8 text-primary" />
              </div>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
                IT <span className="text-gradient-green">Consulting</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Expert guidance on project architecture, code reviews, and technical strategy — 
                helping teams and individuals make the right technology decisions.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {offerings.map((o, i) => (
                <motion.div
                  key={o.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-card p-6 rounded-xl border border-border hover:bg-green-subtle hover:border-primary/40 transition-all duration-300"
                >
                  <o.icon className="w-6 h-6 text-primary mb-4" />
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">{o.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{o.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-16 bg-card rounded-xl border border-border p-8 max-w-3xl mx-auto"
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Why Our Consulting?</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">✅ Consultants with deep enterprise project experience</li>
                <li className="flex gap-3">✅ Technology-agnostic recommendations — we focus on what's best for you</li>
                <li className="flex gap-3">✅ Flexible engagement models — hourly, weekly, or project-based</li>
                <li className="flex gap-3">✅ Proven track record with startups and Fortune 500 companies</li>
              </ul>
            </motion.div>
          </div>
        </section>
      </div>
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default ITConsultingPage;
