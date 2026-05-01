import { motion } from "framer-motion";
import { Clock, Shield, Users, Globe, Zap, HeadphonesIcon, Award, Star, TrendingUp, Heart } from "lucide-react";

const reasons = [
  { icon: Clock, text: "Available across all time zones worldwide" },
  { icon: Shield, text: "100% confidential project support" },
  { icon: Users, text: "Industry-experienced mentors" },
  { icon: Globe, text: "Serving professionals globally" },
  { icon: Zap, text: "Real-time, hands-on assistance" },
  { icon: HeadphonesIcon, text: "Dedicated 1-on-1 support" },
];

const uniquePoints = [
  { icon: Award, title: "Top-Quality Consultants", text: "Every consultant we assign is a handpicked industry veteran with 10+ years of real-world experience — not freshers reading from scripts." },
  { icon: Star, title: "Unmatched Expertise Across 25+ Technologies", text: "From Java to Salesforce, SAP to Cyber Security — we cover the full spectrum of enterprise IT. No other provider matches our breadth and depth." },
  { icon: TrendingUp, title: "Proven Track Record Since 2008", text: "With over 15 years in the industry, we've helped thousands of professionals across the globe succeed in their careers and projects." },
  { icon: Heart, title: "We Treat Every Client Like Family", text: "We don't just provide a service — we build relationships. Our consultants invest in your success as if it were their own." },
  { icon: Shield, title: "Confidentiality & Trust", text: "Your project details stay safe with us. We maintain strict NDAs and have never had a confidentiality breach in our 15+ years." },
  { icon: Globe, title: "Truly Global, Truly Available", text: "Whether you're in the US, UK, Australia, Canada, or India — we're available when you need us, in your time zone." },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-24 bg-green-subtle/50">
      <div className="container mx-auto px-6">
        {/* Origin Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-green-medium mb-3">
            Our Story
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
            How It All <span className="text-gradient-green">Began</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl mx-auto bg-card rounded-xl border border-border p-8 mb-20"
        >
          <p className="text-muted-foreground leading-relaxed mb-4">
            It all started back in <span className="font-bold text-foreground">2008</span>, when the journey 
            began with a simple goal — helping IT professionals sharpen their skills and grow in their careers. 
            One day, a thought sparked — <em className="text-primary">"Why not take this online and do it independently?"</em>
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            What began as a small idea quickly evolved into something much bigger. Driven by a deep passion for 
            teaching and a genuine desire to help professionals succeed, the focus shifted to offering personalized 
            online training and real-time job support — long before it became mainstream.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            That spark of initiative grew into <span className="font-bold text-foreground">RR Swift Solutions</span> — 
            a company that today supports thousands of IT professionals across the globe, covering 25+ technologies 
            with a team of handpicked industry experts.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            From a one-person mission to a global presence, the journey has been guided by one simple belief: 
            <span className="font-bold text-primary"> every professional deserves access to quality guidance, 
            no matter where they are in the world.</span>
          </p>
        </motion.div>

        {/* Why Choose Us - Quick Points */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-green-medium mb-3">
            Why Choose Us
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Built for <span className="text-gradient-green">Your Success</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-20">
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

        {/* What Makes Us Unique */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-green-medium mb-3">
            Stand Alone In The Market
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            What Makes Us <span className="text-gradient-green">Unique</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {uniquePoints.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-card p-6 rounded-xl border border-border hover:bg-green-subtle hover:border-primary/40 transition-all duration-300"
            >
              <point.icon className="w-6 h-6 text-primary mb-4" />
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{point.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{point.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
