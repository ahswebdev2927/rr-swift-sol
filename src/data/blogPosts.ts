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
  post16ServiceNowOnJobSupport
];
