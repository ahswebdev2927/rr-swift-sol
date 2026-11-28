import { post1JavaFullStack } from "./posts/post1-java-full-stack";
import { post2InDemandTechnologies } from "./posts/post2-in-demand-technologies";
import { post3SalesforceOnJobSupport } from "./posts/post3-salesforce-on-job-support";
import { post4DataEngineering } from "./posts/post4-data-engineering";
import { post5DataScience } from "./posts/post5-data-science";
import { post6SapOnJobSupport } from "./posts/post6-sap-on-job-support";
import { post7AutomationTesting } from "./posts/post7-automation-testing";
import { post8AwsOnJobSupport } from "./posts/post8-aws-on-job-support";
import { post9BigdataHadoop } from "./posts/post9-bigdata-hadoop";
import { post10AzureOnJobSupport } from "./posts/post10-azure-on-job-support";
import { post11MernMeanStack } from "./posts/post11-mern-mean-stack";
import { post12PythonJobTraining } from "./posts/post12-python-job-training";
import { post13TopItCareerTrends } from "./posts/post13-top-it-career-trends";
import { post14AwsOnJobSupportTechnicalAssistance } from "./posts/post14-aws-on-job-support-technical-assistance";
import { post15ItProjectOnJobSupport } from "./posts/post15-it-project-on-job-support";
import { post16ServiceNowOnJobSupport } from "./posts/post16-servicenow-on-job-support";
import { post17OnJobSupportProxySupport } from "./posts/post17-on-job-support-proxy-support";
import { post18FrontendUiDevelopmentJobSupport } from "./posts/post18-frontend-ui-development-job-support";
import { post19JavaFullStackOnlineJobSupportProxySupport } from "./posts/post19-java-full-stack-online-job-support-proxy-support";
import { post20WhyDoYouNeedAngularProxySupportIn2026 } from "./posts/post20-why-do-you-need-angular-proxy-support-in-2026";
import { post21MachineLearningProxyJobSupport } from "./posts/post21-machine-learning-proxy-job-support";
import { post22SapXiPiOnJobSupport } from "./posts/post22-sap-xi-pi-on-job-support";
import { post23RealTimeOnJobSupportExpertsIndia } from "./posts/post23-real-time-on-job-support-experts-india";
import { post24ArtificialIntelligenceProxyJobSupport } from "./posts/post24-artificial-intelligence-proxy-job-support";
import { post25GoogleDataEngineerOnJobSupport } from "./posts/post25-google-data-engineer-on-job-support";
import { post26MicrosoftAzureDataEngineeringOnJobSupport } from "./posts/post26-microsoft-azure-data-engineering-on-job-support";
import { post27GuidewirePolicyCenterOnJobSupport } from "./posts/post27-guidewire-policy-center-on-job-support";
import { post28RubyOnRailsJobSupport } from "./posts/post28-ruby-on-rails-job-support";
import { post29BlockchainOnJobSupport } from "./posts/post29-blockchain-on-job-support";
import { post30DotnetFullStackOnlineOnJobSupport } from "./posts/post30-dotnet-full-stack-online-on-job-support";
import { post31GenerativeAiOnlineOnJobSupport } from "./posts/post31-generative-ai-online-on-job-support";
import { post32InformaticaOnlineOnJobSupport } from "./posts/post32-informatica-online-on-job-support";
import { post33CyberSecurityOnlineOnJobSupport } from "./posts/post33-cyber-security-online-on-job-support";
import { post34MobileTestingOnlineOnJobSupport } from "./posts/post34-mobile-testing-online-on-job-support";
import { post35ClouderaDataAnalystOnlineOnJobSupport } from "./posts/post35-cloudera-data-analyst-online-on-job-support";
import { post36SapSuccessfactorsOnJobSupport } from "./posts/post36-sap-successfactors-on-job-support";
import { post37SapUi5FioriOnJobSupport } from "./posts/post37-sap-ui5-fiori-on-job-support";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string; // HTML or Markdown format
  category: "Job Support" | "Online Training" | "IT Consulting" | ("Job Support" | "Online Training" | "IT Consulting")[];
  tags: string[];
  author: {
    name: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: string;
  coverImage: string;
}

export const blogPosts: BlogPost[] = [
  post1JavaFullStack,
  post2InDemandTechnologies,
  post3SalesforceOnJobSupport,
  post4DataEngineering,
  post5DataScience,
  post6SapOnJobSupport,
  post7AutomationTesting,
  post8AwsOnJobSupport,
  post9BigdataHadoop,
  post10AzureOnJobSupport,
  post11MernMeanStack,
  post12PythonJobTraining,
  post13TopItCareerTrends,
  post14AwsOnJobSupportTechnicalAssistance,
  post15ItProjectOnJobSupport,
  post16ServiceNowOnJobSupport,
  post17OnJobSupportProxySupport,
  post18FrontendUiDevelopmentJobSupport,
  post19JavaFullStackOnlineJobSupportProxySupport,
  post20WhyDoYouNeedAngularProxySupportIn2026,
  post21MachineLearningProxyJobSupport,
  post22SapXiPiOnJobSupport,
  post23RealTimeOnJobSupportExpertsIndia,
  post24ArtificialIntelligenceProxyJobSupport,
  post25GoogleDataEngineerOnJobSupport,
  post26MicrosoftAzureDataEngineeringOnJobSupport,
  post27GuidewirePolicyCenterOnJobSupport,
  post28RubyOnRailsJobSupport,
  post29BlockchainOnJobSupport,
  post30DotnetFullStackOnlineOnJobSupport,
  post31GenerativeAiOnlineOnJobSupport,
  post32InformaticaOnlineOnJobSupport,
  post33CyberSecurityOnlineOnJobSupport,
  post34MobileTestingOnlineOnJobSupport,
  post35ClouderaDataAnalystOnlineOnJobSupport,
  post36SapSuccessfactorsOnJobSupport,
  post37SapUi5FioriOnJobSupport
];
