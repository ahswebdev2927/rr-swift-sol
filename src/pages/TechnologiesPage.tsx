import Navbar from "@/components/Navbar";
import Technologies from "@/components/Technologies";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const TechnologiesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Technologies We Support — 25+ IT Stacks | RR Swift Solutions"
        description="RR Swift Solutions provides Online Job Support and Training across 25+ technologies including AWS, Salesforce, Hadoop, Big Data, Informatica, DevOps, Data Science, Java Full Stack, Automation Testing, .NET, Python, PHP, Cyber Security, SAP, ServiceNow, and more."
        canonical="/technologies"
        keywords="AWS support, Salesforce support, Hadoop support, Big Data support, Informatica support, DevOps support, Data Science support, Java Full Stack support, Automation Testing support, Selenium support, Cypress support, Playwright support, .NET support, Python support, PHP support, Cyber Security support, SAP support, ServiceNow support, Angular, React, Node.js"
      />
      <Navbar />
      <main id="main-content" role="main" className="pt-16">
        <Technologies />
      </main>
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default TechnologiesPage;
