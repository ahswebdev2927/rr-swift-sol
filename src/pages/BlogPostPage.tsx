import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, ArrowRight, User, MessageCircle, Share2, Link2, Check } from "lucide-react";
import { marked } from "marked";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { blogPosts } from "@/data/blogPosts";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [copied, setCopied] = useState(false);

  // Find the current blog post by slug
  const post = blogPosts.find((p) => p.slug === slug);

  const handleCopyLink = () => {
    const shareUrl = window.location.href;
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-32 pb-20 container mx-auto px-6 text-center">
          <div className="max-w-md mx-auto">
            <h1 className="font-display text-4xl font-bold mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-8">
              We couldn't find the blog post you were looking for. It may have been moved or deleted.
            </p>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:brightness-110 transition-all"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Get related posts (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${post.title} | RR Swift Solutions`}
        description={post.excerpt}
        canonical={`/blog/${post.slug}`}
      />
      <Navbar />

      <main id="main-content" role="main" className="pt-24 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Back & Breadcrumbs */}
          <div className="flex flex-col gap-4 mb-8">
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors self-start"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
            {/* <nav className="text-xs text-muted-foreground flex items-center gap-2" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-foreground font-medium truncate max-w-xs md:max-w-none">{post.title}</span>
            </nav> */}
          </div>

          {/* Article Header */}
          <header className="mb-10">
            <span className="px-3 py-1 text-xs font-bold rounded-md bg-primary text-primary-foreground">
              {post.category}
            </span>
            <h1 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-foreground mt-4 mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Author and Date row */}
            <div className="flex flex-wrap items-center justify-between gap-6 pb-6 border-b border-border">
              <div className="flex items-center gap-3">
                <img
                  src={post.author.avatar}
                  alt={`Profile of author ${post.author.name}`}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <span className="block text-sm font-semibold text-foreground">
                    {post.author.name}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button
                      title="Share Article"
                      className="inline-flex items-center gap-1 hover:text-foreground p-1 rounded hover:bg-muted transition-colors mr-1 cursor-pointer focus-visible:outline-none"
                    >
                      <Share2 className="w-3.5 h-3.5 text-primary" />
                      <span>Share</span>
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-40">
                    <DropdownMenuItem
                      onClick={handleCopyLink}
                      className="cursor-pointer flex items-center gap-2"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4 text-green-500" />
                          <span className="text-green-600 font-medium">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Link2 className="w-4 h-4 text-muted-foreground" />
                          <span>Copy Link</span>
                        </>
                      )}
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => {
                        const shareUrl = window.location.href;
                        if (navigator.share) {
                          navigator.share({
                            title: post.title,
                            url: shareUrl
                          }).catch((err) => {
                            if (err.name !== "AbortError") {
                              handleCopyLink();
                            }
                          });
                        } else {
                          handleCopyLink();
                        }
                      }}
                      className="cursor-pointer flex items-center gap-2"
                    >
                      <Share2 className="w-4 h-4 text-muted-foreground" />
                      <span>Share the Blog</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {post.publishedAt}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </header>

          {/* Cover Image */}
          <div className="aspect-video w-full rounded-2xl overflow-hidden mb-12 border border-border shadow-sm">
            <img
              src={post.coverImage}
              alt={`Cover photo for: ${post.title}`}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Body Content */}
          <article className="prose max-w-none lg:prose-lg prose-headings:font-display prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground prose-strong:text-foreground prose-a:text-primary hover:prose-a:underline border-b border-border pb-12 mb-12">
            <div dangerouslySetInnerHTML={{ __html: marked.parse(post.content || "") as string }} />
          </article>

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <section className="mb-16">
              <h2 className="font-display text-2xl font-bold text-foreground mb-8">
                Related Articles
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <article
                    key={relatedPost.id}
                    className="group flex flex-col bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-sm"
                  >
                    <Link to={`/blog/${relatedPost.slug}`} target="_blank" rel="noopener noreferrer" className="block overflow-hidden aspect-video relative">
                      <img
                        src={relatedPost.coverImage}
                        alt={`Cover photo for article: ${relatedPost.title}`}
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                        loading="lazy"
                      />
                    </Link>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-3 text-[11px] text-muted-foreground mb-2">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {relatedPost.publishedAt}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {relatedPost.readTime}
                        </span>
                      </div>
                      <h3 className="font-display text-base font-bold text-foreground mb-4 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                        <Link to={`/blog/${relatedPost.slug}`} target="_blank" rel="noopener noreferrer">{relatedPost.title}</Link>
                      </h3>
                      <Link
                        to={`/blog/${relatedPost.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold text-primary group-hover:translate-x-1 transition-transform mt-auto"
                      >
                        Read Post <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

        </div>
      </main>

      {/* Dynamic CTA section matching image layout with WhatsApp and Explore Services buttons */}
      <section
        id="contact"
        aria-label="Contact RR Swift Solutions"
        className="py-20 bg-foreground relative overflow-hidden"
      >
        {/* Green glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-primary/20 blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-background mb-4">
              Need IT Job Support or Training? Connect with Our Experts Today.
            </h2>
            <p className="text-background/70 max-w-2xl mx-auto mb-10 text-sm sm:text-base">
              RR Swift Solutions provides real-time, project-specific Online Job Support, IT
              Training, Staffing, and Outsourcing from Hyderabad, India. Available to IT
              professionals across the USA, UK, Canada, Australia, and worldwide.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/919000964005"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Talk to an IT expert on WhatsApp"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm green-glow-hover transition-all duration-300 hover:brightness-110"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                Talk to an IT Expert
              </a>
              <Link
                to="/services"
                aria-label="Explore our services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-background/20 text-background font-semibold text-sm hover:bg-background/10 transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPostPage;
