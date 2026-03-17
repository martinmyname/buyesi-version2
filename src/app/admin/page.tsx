import { redirect } from "next/navigation";
import Link from "next/link";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export default async function AdminDashboardPage() {
  const session = await getSession();
  if (!session) redirect("/admin/login");

  const [totalBlogs, publishedBlogs, draftBlogs] = await Promise.all([
    prisma.blog.count(),
    prisma.blog.count({ where: { published: true } }),
    prisma.blog.count({ where: { published: false } }),
  ]);

  return (
    <div>
      <h1 className="font-heading text-3xl font-bold text-dark mb-8">
        Welcome back!
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <p className="text-muted text-sm font-body mb-1">Total Posts</p>
          <p className="text-3xl font-bold text-dark font-heading">
            {totalBlogs}
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <p className="text-muted text-sm font-body mb-1">Published</p>
          <p className="text-3xl font-bold text-primary font-heading">
            {publishedBlogs}
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <p className="text-muted text-sm font-body mb-1">Drafts</p>
          <p className="text-3xl font-bold text-accent-dark font-heading">
            {draftBlogs}
          </p>
        </div>
      </div>

      <Link
        href="/admin/blog/new"
        className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors font-body"
      >
        Create New Post
      </Link>
    </div>
  );
}
