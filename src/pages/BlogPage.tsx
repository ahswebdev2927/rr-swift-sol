import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Calendar, Clock, ArrowRight, BookOpen, MessageCircle, Share2, Link2, Check } from "lucide-react";
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

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyLink = (slug: string, id: string) => {
    const shareUrl = `${window.location.origin}/blog/${slug}`;
    navigator.clipboard.writeText(shareUrl);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };



  const categories = ["All", ...Array.from(new Set(blogPosts.map((post) => post.category)))];

  // Filter posts based on search query and selected category
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const featuredPost = filteredPosts.length > 0 ? filteredPosts[0] : null;
  const regularPosts = filteredPosts.length > 1 ? filteredPosts.slice(1) : [];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Resources & Articles | RR Swift Solutions Blog"
        description="Stay updated with the latest trends in IT job support, online software training, cloud computing, and digital transformation strategy."
        canonical="/blog"
      />
      <Navbar />

      <main id="main-content" role="main" className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-subtle text-green-medium border border-green-soft">
              Stay Informed
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-foreground mt-4 mb-6">
              Our Blog & <span className="text-gradient-green">Insights</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Explore tutorials, roadmaps, and expert tips on job support, Informatica, AWS cloud deployments, and trending tech.
            </p>
          </div>

          {/* Filters & Search */}
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12 border-b border-border pb-6">
            {/* Category tabs */}
            <nav className="flex flex-wrap gap-2 w-full md:w-auto" aria-label="Blog categories">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground green-glow-hover"
                      : "bg-card text-muted-foreground border border-border hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {category}
                </button>
              ))}
            </nav>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-4 w-4 text-muted-foreground" />
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles, tags, tech..."
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-card text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              />
            </div>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-20 bg-card rounded-2xl border border-border">
              <BookOpen className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <h2 className="text-xl font-bold text-foreground mb-2">No Articles Found</h2>
              <p className="text-muted-foreground max-w-sm mx-auto">
                We couldn't find any posts matching "{searchQuery}". Try searching for something else or clearing your filters.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="mt-6 px-5 py-2.5 bg-primary text-primary-foreground font-semibold text-sm rounded-lg hover:brightness-110 transition-all"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <>
              {/* Featured Post Card */}
              {featuredPost && (
                <article className="mb-16">
                  <Link
                    to={`/blog/${featuredPost.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group grid lg:grid-cols-12 gap-8 bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="lg:col-span-7 aspect-video lg:aspect-auto lg:h-[400px] overflow-hidden relative">
                      <img
                        src={featuredPost.coverImage}
                        alt={`Cover photo for article: ${featuredPost.title}`}
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 text-xs font-bold rounded-md bg-primary text-primary-foreground shadow-sm">
                          {featuredPost.category}
                        </span>
                      </div>
                    </div>
                    <div className="lg:col-span-5 p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {featuredPost.publishedAt}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {featuredPost.readTime}
                        </span>
                      </div>
                      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors leading-tight">
                        {featuredPost.title}
                      </h2>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-3">
                          <img
                            src={featuredPost.author.avatar}
                            alt={`Profile of author ${featuredPost.author.name}`}
                            className="w-8 h-8 rounded-full object-cover"
                          />
                          <div>
                            <span className="block text-xs font-semibold text-foreground">
                              {featuredPost.author.name}
                            </span>
                            <span className="block text-[10px] text-muted-foreground">
                              {featuredPost.author.role}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <button
                                  onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                  }}
                                  title="Share Article"
                                  className="p-2 rounded bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors cursor-pointer focus-visible:outline-none"
                                >
                                  <Share2 className="w-4 h-4" />
                                </button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent
                                align="end"
                                className="w-40"
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                }}
                              >
                                <DropdownMenuItem
                                  onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    handleCopyLink(featuredPost.slug, featuredPost.id);
                                  }}
                                  className="cursor-pointer flex items-center gap-2"
                                >
                                  {copiedId === featuredPost.id ? (
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
                                  onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    const shareUrl = `${window.location.origin}/blog/${featuredPost.slug}`;
                                    if (navigator.share) {
                                      navigator.share({
                                        title: featuredPost.title,
                                        url: shareUrl
                                      }).catch((err) => {
                                        if (err.name !== "AbortError") {
                                          handleCopyLink(featuredPost.slug, featuredPost.id);
                                        }
                                      });
                                    } else {
                                      handleCopyLink(featuredPost.slug, featuredPost.id);
                                    }
                                  }}
                                  className="cursor-pointer flex items-center gap-2"
                                >
                                  <Share2 className="w-4 h-4 text-muted-foreground" />
                                  <span>Share the Blog</span>
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary group-hover:translate-x-1 transition-transform">
                            Read Post <ArrowRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              )}

              {/* Grid of Regular Posts */}
              {regularPosts.length > 0 && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {regularPosts.map((post) => (
                    <article
                      key={post.id}
                      className="group flex flex-col bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-md"
                    >
                      <Link to={`/blog/${post.slug}`} target="_blank" rel="noopener noreferrer" className="block overflow-hidden aspect-video relative">
                        <img
                          src={post.coverImage}
                          alt={`Cover photo for article: ${post.title}`}
                          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="px-2.5 py-0.5 text-[10px] font-bold rounded bg-primary/90 text-primary-foreground backdrop-blur-sm">
                            {post.category}
                          </span>
                        </div>
                      </Link>
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center gap-3 text-[11px] text-muted-foreground mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {post.publishedAt}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </span>
                        </div>
                        <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                          <Link to={`/blog/${post.slug}`} target="_blank" rel="noopener noreferrer">{post.title}</Link>
                        </h3>
                        <p className="text-muted-foreground text-xs leading-relaxed mb-6 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                          <div className="flex items-center gap-2">
                            <img
                              src={post.author.avatar}
                              alt={`Profile of author ${post.author.name}`}
                              className="w-6 h-6 rounded-full object-cover"
                            />
                            <span className="text-[11px] font-medium text-foreground">
                              {post.author.name}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <button
                                  onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                  }}
                                  title="Share Article"
                                  className="p-1.5 rounded bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors cursor-pointer focus-visible:outline-none"
                                >
                                  <Share2 className="w-3.5 h-3.5" />
                                </button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent
                                align="end"
                                className="w-40"
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                }}
                              >
                                <DropdownMenuItem
                                  onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    handleCopyLink(post.slug, post.id);
                                  }}
                                  className="cursor-pointer flex items-center gap-2"
                                >
                                  {copiedId === post.id ? (
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
                                  onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    const shareUrl = `${window.location.origin}/blog/${post.slug}`;
                                    if (navigator.share) {
                                      navigator.share({
                                        title: post.title,
                                        url: shareUrl
                                      }).catch((err) => {
                                        if (err.name !== "AbortError") {
                                          handleCopyLink(post.slug, post.id);
                                        }
                                      });
                                    } else {
                                      handleCopyLink(post.slug, post.id);
                                    }
                                  }}
                                  className="cursor-pointer flex items-center gap-2"
                                >
                                  <Share2 className="w-4 h-4 text-muted-foreground" />
                                  <span>Share the Blog</span>
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                            <Link
                              to={`/blog/${post.slug}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-xs font-bold text-primary group-hover:translate-x-1 transition-transform"
                            >
                              Read <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </>
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

export default BlogPage;
