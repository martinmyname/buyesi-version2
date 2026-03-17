import { Metadata } from "next";
import Hero from "@/components/Hero";
import BlogCard from "@/components/BlogCard";
import { prisma } from "@/lib/prisma";
import { FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Blog - Buyesi Youth Initiative",
  description:
    "Read the latest news, stories, and updates from Buyesi Youth Initiative.",
};

async function getBlogs() {
  try {
    return await prisma.blog.findMany({
      where: { published: true },
      include: { author: { select: { name: true } } },
      orderBy: { createdAt: "desc" },
    });
  } catch {
    return [];
  }
}

export default async function BlogPage() {
  const blogs = await getBlogs();

  return (
    <>
      <Hero
        title="Our Blog"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
      />

      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {blogs.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogs.map((blog) => (
                <BlogCard
                  key={blog.id}
                  id={blog.id}
                  title={blog.title}
                  excerpt={blog.excerpt}
                  imageId={blog.imageId}
                  authorName={blog.author.name}
                  createdAt={blog.createdAt.toISOString()}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <FileText size={48} className="mx-auto mb-4 text-muted" />
              <h2 className="font-heading text-2xl font-bold mb-2">
                No blog posts yet
              </h2>
              <p className="text-muted">
                Check back soon for updates and stories from our community.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
