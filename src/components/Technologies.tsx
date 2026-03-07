import { useState } from "react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const techs = [
  { name: "Java Full Stack", icon: "☕", description: "Our Java Full Stack on-job support covers Spring Boot, Microservices, Hibernate, REST APIs, and front-end integration. We help professionals working on enterprise-grade Java projects with real-time guidance, debugging, and architecture best practices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { name: "React", icon: "⚛️", description: "Get expert React on-job support including hooks, state management (Redux, Context API), component architecture, and performance optimization. We assist with real-world project challenges and code reviews. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { name: "Angular", icon: "🅰️", description: "Our Angular support covers modules, components, services, RxJS, routing, and enterprise application development. We provide hands-on assistance for complex Angular projects. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { name: "Node.js", icon: "🟢", description: "Node.js on-job support for Express, NestJS, API development, database integration, and server-side architecture. Get real-time help with your backend Node.js projects. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { name: "Python", icon: "🐍", description: "Python job support covering Django, Flask, data processing, scripting, automation, and API development. Our experts help you navigate complex Python projects with confidence. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { name: "AWS", icon: "☁️", description: "AWS on-job support for EC2, S3, Lambda, CloudFormation, IAM, and cloud architecture. We guide professionals through real AWS infrastructure and deployment challenges. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { name: "DevOps", icon: "⚙️", description: "DevOps support covering CI/CD pipelines, Docker, Kubernetes, Jenkins, Terraform, and infrastructure automation. Get expert guidance on your DevOps workflows. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { name: "Salesforce", icon: "💼", description: "Salesforce on-job support for Apex, Lightning, Visualforce, integrations, and admin/development tasks. We help professionals excel in Salesforce project delivery. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { name: "Data Science", icon: "📊", description: "Data Science support covering data analysis, visualization, statistical modeling, Pandas, NumPy, and reporting. Get hands-on assistance with your data science projects. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { name: "Azure", icon: "🔷", description: "Azure on-job support for Azure DevOps, App Services, Functions, AKS, and cloud solutions. We provide real-time guidance for Microsoft Azure projects. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { name: ".NET", icon: "🔶", description: ".NET on-job support covering ASP.NET, C#, Entity Framework, Web API, and enterprise application development. Get expert help with your .NET projects. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { name: "Selenium", icon: "🧪", description: "Selenium support for test automation, framework development, cross-browser testing, and CI integration. We help QA professionals build robust test suites. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { name: "QA Testing", icon: "✅", description: "QA Testing support for manual and automation testing, test planning, defect management, and quality assurance best practices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { name: "SAP", icon: "🏢", description: "SAP on-job support for all functional and technical modules including FICO, MM, SD, ABAP, BASIS, and HANA. We cover the full SAP ecosystem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { name: "C++", icon: "⚡", description: "C++ on-job support covering system programming, data structures, algorithms, embedded systems, and performance-critical applications. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { name: "Ruby on Rails", icon: "💎", description: "Ruby on Rails support for web development, MVC architecture, ActiveRecord, APIs, and deployment. Get expert guidance on your Rails projects. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { name: "Cyber Security", icon: "🔒", description: "Cyber Security on-job support covering network security, penetration testing, compliance, SIEM, and threat analysis. We help security professionals stay ahead. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { name: "Machine Learning", icon: "🤖", description: "Machine Learning support for model development, TensorFlow, PyTorch, NLP, computer vision, and MLOps. Get hands-on help with your ML projects. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { name: "RPA / UI Path", icon: "🤖", description: "RPA and UI Path on-job support for process automation, bot development, orchestration, and enterprise RPA solutions. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { name: "PHP", icon: "🐘", description: "PHP on-job support for Laravel, WordPress, API development, and web applications. We provide real-time assistance for your PHP projects. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { name: "AB Initio", icon: "🔄", description: "AB Initio on-job support for ETL development, data integration, graph design, and enterprise data processing pipelines. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { name: "Appian BPM", icon: "📋", description: "Appian BPM on-job support for process modeling, application development, integrations, and business process automation. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { name: "Informatica", icon: "🔗", description: "Informatica on-job support for PowerCenter, IICS, data integration, ETL workflows, and data quality management. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { name: "ServiceNow", icon: "🛠️", description: "ServiceNow on-job support for Admin and Development including ITSM, custom applications, scripting, and platform configuration. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { name: "Network Eng.", icon: "🌐", description: "Network Engineering on-job support covering routing, switching, firewalls, network design, and troubleshooting for enterprise networks. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
];

const Technologies = () => {
  const [selectedTech, setSelectedTech] = useState<typeof techs[0] | null>(null);

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
              onClick={() => setSelectedTech(tech)}
              className="group flex flex-col items-center justify-center p-6 rounded-xl border border-border bg-card hover:bg-green-subtle hover:border-primary/30 transition-all duration-300 cursor-pointer"
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

      <Dialog open={!!selectedTech} onOpenChange={(open) => !open && setSelectedTech(null)}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3 text-xl">
              <span className="text-3xl">{selectedTech?.icon}</span>
              {selectedTech?.name}
            </DialogTitle>
            <DialogDescription className="pt-4 text-base leading-relaxed">
              {selectedTech?.description}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Technologies;
