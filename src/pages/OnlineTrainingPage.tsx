import Navbar from "@/components/Navbar";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Video, Award, Calendar, Globe } from "lucide-react";

const features = [
  { icon: Video, title: "Live Interactive Sessions", text: "Learn through live classes with experienced trainers — ask questions and get instant answers." },
  { icon: BookOpen, title: "Industry-Relevant Curriculum", text: "Our courses are designed based on real-world project requirements, not just theory." },
  { icon: Calendar, title: "Flexible Timing", text: "Weekend and weekday batches available to accommodate working professionals globally." },
  { icon: Award, title: "Hands-On Projects", text: "Work on real-time projects and scenarios that prepare you for actual job challenges." },
  { icon: Globe, title: "Global Access", text: "Join from anywhere in the world. All you need is a stable internet connection." },
  { icon: GraduationCap, title: "Career Guidance", text: "Get resume preparation, interview coaching, and placement assistance to land your dream role." },
];

const courses = [
  { title: "AWS Cloud Solutions Training", text: "Master Amazon Web Services from scratch — EC2, S3, Lambda, VPC, CloudFormation, RDS and more. Ideal for IT professionals preparing for AWS certification or cloud career advancement." },
  { title: "Salesforce CRM & Developer Training", text: "Comprehensive Salesforce training covering Apex, Visualforce, Lightning Experience, Flow Builder, and integrations. Perfect for aspiring Salesforce Administrators and Developers." },
  { title: "Data Science with Python Training", text: "Hands-on Data Science training covering Python, Pandas, NumPy, Scikit-learn, Machine Learning, and data visualization — building job-ready skills for real-world data roles." },
  { title: "DevOps Engineering Training", text: "Learn CI/CD pipelines, Docker, Kubernetes, Jenkins, Terraform, Git, and Ansible in this practical DevOps training designed for engineers ready to modernize software delivery." },
];

const OnlineTrainingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Online IT Training — AWS, Salesforce, Data Science & More | RR Swift Solutions"
        description="Master in-demand technologies with RR Swift Solutions' instructor-led Online Training. AWS Cloud, Salesforce CRM, Data Science with Python, DevOps Engineering, and more — designed for working IT professionals worldwide."
        canonical="/services/online-training"
      />
      <Navbar />
      <main id="main-content" role="main" className="pt-16">
        <section aria-label="Online Training" className="py-24 bg-green-subtle/50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="w-8 h-8 text-primary" aria-hidden="true" />
              </div>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
                Online <span className="text-gradient-green">IT Training</span> for Working Professionals
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Master in-demand technologies with our comprehensive online training programs.
                Designed for working professionals who want to upskill without leaving their jobs.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-card p-6 rounded-xl border border-border hover:bg-green-subtle hover:border-primary/40 transition-all duration-300"
                >
                  <f.icon className="w-6 h-6 text-primary mb-4" aria-hidden="true" />
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.text}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-20 max-w-5xl mx-auto">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground text-center mb-10">
                Featured <span className="text-gradient-green">Courses</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {courses.map((c, i) => (
                  <motion.article
                    key={c.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="bg-card p-6 rounded-xl border border-border hover:bg-green-subtle hover:border-primary/40 transition-all duration-300"
                  >
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">{c.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{c.text}</p>
                  </motion.article>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-16 bg-card rounded-xl border border-border p-8 max-w-3xl mx-auto"
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Training Highlights</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">✅ 25+ technologies covered across all major IT domains</li>
                <li className="flex gap-3">✅ Trainers with 10+ years of real industry experience</li>
                <li className="flex gap-3">✅ Recorded sessions available for revision</li>
                <li className="flex gap-3">✅ Small batch sizes for personalized attention</li>
                <li className="flex gap-3">✅ Certificate of completion provided</li>
              </ul>
            </motion.div>
          </div>
        </section>
      </main>
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default OnlineTrainingPage;
