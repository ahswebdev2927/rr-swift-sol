import Navbar from "@/components/Navbar";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Headphones, CheckCircle, Users, Clock, Shield, Zap } from "lucide-react";

const benefits = [
  { icon: CheckCircle, title: "Real-Time Assistance", text: "Get live, hands-on help during your actual project work — not pre-recorded sessions." },
  { icon: Users, title: "Industry-Expert Mentors", text: "Our consultants have 10+ years of experience in enterprise IT environments." },
  { icon: Clock, title: "Flexible Scheduling", text: "Available across all time zones — morning, evening, or weekend sessions to fit your work schedule." },
  { icon: Shield, title: "100% Confidential", text: "Your project details and code remain strictly confidential. We sign NDAs when required." },
  { icon: Zap, title: "Immediate Impact", text: "Start seeing results from day one. We help you deliver tasks on time and exceed expectations." },
  { icon: Headphones, title: "Dedicated 1-on-1 Support", text: "You get a dedicated consultant who understands your project inside out." },
];

const JobSupportPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Online Job Support Services — Real-Time Project Help | RR Swift Solutions"
        description="Expert Online Job Support from India for AWS, Salesforce, Hadoop, Big Data, Informatica, DevOps, Data Science, Java, PHP, Cyber Security, Automation Testing & more. Real-time, confidential, and tailored to your live project needs."
        canonical="/services/job-support"
        keywords="AWS job support, Salesforce job support, Hadoop job support, Big Data job support, Informatica job support, DevOps job support, Data Science job support, Java job support, Automation Testing job support, online job support India, IT job support"
      />
      <Navbar />
      <main id="main-content" role="main" className="pt-16">
        <section aria-label="On-Job Support" className="py-24 bg-green-subtle/50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Headphones className="w-8 h-8 text-primary" aria-hidden="true" />
              </div>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
                Online <span className="text-gradient-green">On-Job Support</span> for IT Professionals
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Struggling with a complex project at work? Our experienced IT professionals provide real-time,
                live assistance to help you deliver quality results — every single day.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-card p-6 rounded-xl border border-border hover:bg-green-subtle hover:border-primary/40 transition-all duration-300"
                >
                  <b.icon className="w-6 h-6 text-primary mb-4" aria-hidden="true" />
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">{b.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-16 bg-card rounded-xl border border-border p-8 max-w-3xl mx-auto"
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">How It Works</h2>
              <ol className="space-y-4 text-muted-foreground">
                <li className="flex gap-3"><span className="font-bold text-primary">1.</span> Tell us about your project, technology stack, and the challenges you're facing.</li>
                <li className="flex gap-3"><span className="font-bold text-primary">2.</span> We match you with a dedicated consultant who has deep expertise in your domain.</li>
                <li className="flex gap-3"><span className="font-bold text-primary">3.</span> Connect via screen share for real-time, hands-on support during your work hours.</li>
                <li className="flex gap-3"><span className="font-bold text-primary">4.</span> Deliver your tasks on time, build confidence, and grow in your role.</li>
              </ol>
            </motion.div>
          </div>
        </section>
      </main>
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default JobSupportPage;
