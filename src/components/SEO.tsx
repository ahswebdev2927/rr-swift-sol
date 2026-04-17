import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string;
  ogImage?: string;
}

const SITE_URL = "https://swift-pathways-pro.lovable.app";
const DEFAULT_OG = "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8c448cb8-d4cb-49e0-9616-befe19d49038/id-preview-7cc107c5--36d0027b-bad0-47b9-8856-d4dab6b9ad79.lovable.app-1771958873226.png";

const SEO = ({ title, description, canonical, keywords, ogImage = DEFAULT_OG }: SEOProps) => {
  const url = canonical ? `${SITE_URL}${canonical}` : SITE_URL + "/";
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="RR Swift Solutions" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@RRSwiftSol" />
    </Helmet>
  );
};

export default SEO;
