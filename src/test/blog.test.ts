import { describe, it, expect } from "vitest";
import { blogPosts } from "../data/blogPosts";

describe("Blog Posts Data", () => {
  it("should have exactly 3 blog posts", () => {
    expect(blogPosts).toHaveLength(3);
  });

  it("should have valid fields for all blog posts", () => {
    blogPosts.forEach((post) => {
      expect(post.id).toBeDefined();
      expect(post.slug).toBeDefined();
      expect(post.title).toBeDefined();
      expect(post.excerpt).toBeDefined();
      expect(post.category).toBeDefined();
      expect(post.tags).toBeInstanceOf(Array);
      expect(post.author).toBeDefined();
      expect(post.author.name).toBeDefined();
      expect(post.author.avatar).toBeDefined();
      expect(post.publishedAt).toBeDefined();
      expect(post.readTime).toBeDefined();
      expect(post.coverImage).toBeDefined();
      expect(post.content).toBeDefined();
      expect(post.content!.length).toBeGreaterThan(0);
    });
  });
});
