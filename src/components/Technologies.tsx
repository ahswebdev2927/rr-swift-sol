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
  { name: "Java Full Stack", icon: "☕", description: "Our Java Full Stack on-job support covers Spring Boot, Microservices, Hibernate, REST APIs, and front-end integration. We help professionals working on enterprise-grade Java projects with real-time guidance, debugging, and architecture best practices. We provide comprehensive assistance with database migrations, secure authentication (OAuth2/JWT), testing with JUnit/Mockito, and seamless cloud deployments." },
  { name: "React", icon: "⚛️", description: "Get expert React on-job support including hooks, state management (Redux, Context API), component architecture, and performance optimization. We assist with real-world project challenges and code reviews. Our mentors help you master Next.js, SSR/SSG, TypeScript integration, complex form handling with React Hook Form, and resolving rendering bottlenecks." },
  { name: "Angular", icon: "🅰️", description: "Our Angular support covers modules, components, services, RxJS, routing, and enterprise application development. We provide hands-on assistance for complex Angular projects. Whether you are working with NgRx for state management, lazy loading, Angular CLI customization, or integrating third-party UI libraries, we have you covered." },
  { name: "Node.js", icon: "🟢", description: "Node.js on-job support for Express, NestJS, API development, database integration, and server-side architecture. Get real-time help with your backend Node.js projects. We assist in optimizing database queries, implementing real-time communication via WebSockets/Socket.io, handling authentication, and setting up robust logging." },
  { name: "Python", icon: "🐍", description: "Python job support covering Django, Flask, data processing, scripting, automation, and API development. Our experts help you navigate complex Python projects with confidence. Get support for FastAPI, Celery task queues, database ORMs (SQLAlchemy, Django ORM), scripting for web scraping, and integrating machine learning models." },
  { name: "AWS", icon: "☁️", description: "AWS on-job support for EC2, S3, Lambda, CloudFormation, IAM, and cloud architecture. We guide professionals through real AWS infrastructure and deployment challenges. Learn to configure VPCs, API Gateway, DynamoDB, RDS instances, and set up ECS/EKS for containerized applications with security best practices." },
  { name: "DevOps", icon: "⚙️", description: "DevOps support covering CI/CD pipelines, Docker, Kubernetes, Jenkins, Terraform, and infrastructure automation. Get expert guidance on your DevOps workflows. We assist in writing Helm charts, configuring Ansible, setting up GitLab CI/GitHub Actions, and monitoring infrastructure with Prometheus and Grafana." },
  { name: "Salesforce", icon: "💼", description: "Salesforce on-job support for Apex, Lightning, Visualforce, integrations, and admin/development tasks. We help professionals excel in Salesforce project delivery. Our team helps with LWC (Lightning Web Components), Salesforce Flow, REST/SOAP API integrations, Apex triggers, and certification prep." },
  { name: "Data Science", icon: "📊", description: "Data Science support covering data analysis, visualization, statistical modeling, Pandas, NumPy, and reporting. Get hands-on assistance with your data science projects. We assist in cleaning messy datasets, building data pipelines, creating interactive dashboards with Streamlit, and performing exploratory analysis." },
  { name: "Azure", icon: "🔷", description: "Azure on-job support for Azure DevOps, App Services, Functions, AKS, and cloud solutions. We provide real-time guidance for Microsoft Azure projects. Get support with Azure Active Directory integration, Key Vault management, Azure Pipelines configuration, and SQL Database administration." },
  { name: ".NET", icon: "🔶", description: ".NET on-job support covering ASP.NET, C#, Entity Framework, Web API, and enterprise application development. Get expert help with your .NET projects. We help you build scalable microservices, implement LINQ queries, manage database migrations, write unit tests with xUnit, and deploy to IIS or cloud environments." },
  { name: "Selenium", icon: "🧪", description: "Selenium support for test automation, framework development, cross-browser testing, and CI integration. We help QA professionals build robust test suites. Learn to build Page Object Model (POM) frameworks, integrate with TestNG/JUnit, generate Cucumber BDD reports, and run tests in parallel using Selenium Grid." },
  { name: "QA Testing", icon: "✅", description: "QA Testing support for manual and automation testing, test planning, defect management, and quality assurance best practices. We guide you on writing effective test cases, API testing with Postman, mobile testing with Appium, and integrating testing phases into the software development lifecycle." },
  { name: "SAP", icon: "🏢", description: "SAP on-job support for all functional and technical modules including FICO, MM, SD, ABAP, BASIS, and HANA. We cover the full SAP ecosystem. Get help with custom ABAP developments, SAP FIORI integrations, data migration projects, reports generation, and configuration of core modules." },
  { name: "C++", icon: "⚡", description: "C++ on-job support covering system programming, data structures, algorithms, embedded systems, and performance-critical applications. We assist with pointer/memory management, debugging memory leaks using Valgrind, writing multi-threaded applications, and optimizing runtime performance." },
  { name: "Ruby on Rails", icon: "💎", description: "Ruby on Rails support for web development, MVC architecture, ActiveRecord, APIs, and deployment. Get expert guidance on your Rails projects. Our experts help you optimize ActiveRecord queries, set up Sidekiq background jobs, implement Devise authentication, and write tests using RSpec." },
  { name: "Cyber Security", icon: "🔒", description: "Cyber Security on-job support covering network security, penetration testing, compliance, SIEM, and threat analysis. We help security professionals stay ahead. Learn to identify vulnerabilities, perform OWASP Top 10 security audits, configure firewalls/IDS, and write security incidence reports." },
  { name: "Machine Learning", icon: "🤖", description: "Machine Learning support for model development, TensorFlow, PyTorch, NLP, computer vision, and MLOps. Get hands-on help with your ML projects. We assist in fine-tuning transformer models, image classification, building recommendation systems, and deploying models using Docker and Kubernetes." },
  { name: "RPA / UI Path", icon: "🤖", description: "RPA and UI Path on-job support for process automation, bot development, orchestration, and enterprise RPA solutions. Get support in building unattended bots, managing PDF/Excel automation, configuring Orchestrator, and implementing Robotic Enterprise (RE) Framework." },
  { name: "PHP", icon: "🐘", description: "PHP on-job support for Laravel, WordPress, API development, and web applications. We provide real-time assistance for your PHP projects. We support MVC framework implementation, custom plugin/theme development, MySQL query optimization, and integration of payment gateways." },
  { name: "AB Initio", icon: "🔄", description: "AB Initio on-job support for ETL development, data integration, graph design, and enterprise data processing pipelines. Get help with Sandbox parameters, GDE configuration, EME administration, performance tuning of complex graphs, and working with multifiles." },
  { name: "Appian BPM", icon: "📋", description: "Appian BPM on-job support for process modeling, application development, integrations, and business process automation. We assist in designing Sail interfaces, configuring process models, implementing records/reports, and integrating with external databases via Web APIs." },
  { name: "Informatica", icon: "🔗", description: "Informatica on-job support for PowerCenter, IICS, data integration, ETL workflows, and data quality management. We help you build mapping templates, configure task flows, optimize session parameters, and debug data transformation errors in cloud and on-premise setups." },
  { name: "ServiceNow", icon: "🛠️", description: "ServiceNow on-job support for Admin and Development including ITSM, custom applications, scripting, and platform configuration. We assist with Client Scripts, Business Rules, UI Actions, Workflow/Flow Designer, Service Catalog customization, and Integration Hub setup." },
  { name: "Network Eng.", icon: "🌐", description: "Network Engineering on-job support covering routing, switching, firewalls, network design, and troubleshooting for enterprise networks. Get help configuring Cisco/Juniper devices, setting up VPNs, analyzing packet captures using Wireshark, and implementing network security policies." },
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
