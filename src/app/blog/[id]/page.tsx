import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import { prisma } from "@/lib/prisma";
import { sanitizeBlogContent } from "@/lib/sanitize";
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

  const safeContent = sanitizeBlogContent(blog.content);

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

      <section className="py-8 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary hover:underline mb-6 sm:mb-8 text-sm"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>

          {blog.imageId && (
            <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-6 sm:mb-8">
              <Image
                src={`/api/images/${blog.imageId}`}
                alt={blog.title}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
                priority
              />
            </div>
          )}

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted mb-4 sm:mb-6">
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
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <FolderOpen size={14} className="text-muted flex-shrink-0" />
              {blog.categories.split(",").map((cat: string) => (
                <span
                  key={cat.trim()}
                  className="bg-primary/10 text-primary text-xs px-2.5 py-0.5 rounded-full"
                >
                  {cat.trim()}
                </span>
              ))}
            </div>
          )}

          {blog.tags && (
            <div className="flex flex-wrap items-center gap-2 mb-6 sm:mb-8">
              <Tag size={14} className="text-muted flex-shrink-0" />
              {blog.tags.split(",").map((tag: string) => (
                <span
                  key={tag.trim()}
                  className="bg-accent/20 text-dark text-xs px-2.5 py-0.5 rounded-full"
                >
                  {tag.trim()}
                </span>
              ))}
            </div>
          )}

          <div
            className="blog-content prose prose-sm sm:prose max-w-none"
            dangerouslySetInnerHTML={{ __html: safeContent }}
          />
        </div>
      </section>
    </>
  );
}
