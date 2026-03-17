import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Hero from "@/components/Hero";
import { prisma } from "@/lib/prisma";
import { ArrowLeft, Calendar, User, Tag, FolderOpen } from "lucide-react";

interface Props {
  params: Promise<{ id: string }>;
}

async function getBlog(id: string) {
  try {
    return await prisma.blog.findUnique({
      where: { id },
      include: { author: { select: { name: true } } },
    });
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const blog = await getBlog(id);
  return {
    title: blog
      ? `${blog.title} - Buyesi Youth Initiative`
      : "Blog - Buyesi Youth Initiative",
    description: blog?.excerpt ?? "",
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { id } = await params;
  const blog = await getBlog(id);

  if (!blog) notFound();

  return (
    <>
      <Hero
        title={blog.title}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: blog.title },
        ]}
      />

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary hover:underline mb-8"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>

          {blog.imageId && (
            <img
              src={`/api/images/${blog.imageId}`}
              alt={blog.title}
              className="w-full rounded-lg mb-8 object-cover max-h-[500px]"
            />
          )}

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted mb-6">
            <span className="flex items-center gap-1">
              <User size={14} />
              {blog.author.name}
            </span>
            <span className="flex items-center gap-1">
              <Calendar size={14} />
              {new Date(blog.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>

          {blog.categories && (
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <FolderOpen size={14} className="text-muted" />
              {blog.categories.split(",").map((cat: string) => (
                <span
                  key={cat.trim()}
                  className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full"
                >
                  {cat.trim()}
                </span>
              ))}
            </div>
          )}

          {blog.tags && (
            <div className="flex flex-wrap items-center gap-2 mb-8">
              <Tag size={14} className="text-muted" />
              {blog.tags.split(",").map((tag: string) => (
                <span
                  key={tag.trim()}
                  className="bg-accent/20 text-dark text-xs px-3 py-1 rounded-full"
                >
                  {tag.trim()}
                </span>
              ))}
            </div>
          )}

          <div
            className="blog-content prose max-w-none"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
      </section>
    </>
  );
}
