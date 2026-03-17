import { redirect } from "next/navigation";
import Link from "next/link";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { FileText, Eye, EyeOff, Mail, PenSquare } from "lucide-react";

export default async function AdminDashboardPage() {
  const session = await getSession();
  if (!session) redirect("/admin/login");

  const [totalBlogs, publishedBlogs, draftBlogs, totalContacts, recentBlogs] =
    await Promise.all([
      prisma.blog.count(),
      prisma.blog.count({ where: { published: true } }),
      prisma.blog.count({ where: { published: false } }),
      prisma.contact.count(),
      prisma.blog.findMany({
        include: { author: { select: { name: true } } },
        orderBy: { updatedAt: "desc" },
        take: 5,
      }),
    ]);

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-heading text-3xl font-bold text-dark">
          Dashboard
        </h1>
        <Link
          href="/admin/blog/new"
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-5 py-2.5 rounded-lg transition-colors font-body text-sm"
        >
          <PenSquare size={16} />
          New Post
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <FileText size={18} className="text-muted" />
            <p className="text-muted text-xs font-body">Total Posts</p>
          </div>
          <p className="text-2xl font-bold text-dark font-heading">
            {totalBlogs}
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <Eye size={18} className="text-primary" />
            <p className="text-muted text-xs font-body">Published</p>
          </div>
          <p className="text-2xl font-bold text-primary font-heading">
            {publishedBlogs}
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <EyeOff size={18} className="text-yellow-600" />
            <p className="text-muted text-xs font-body">Drafts</p>
          </div>
          <p className="text-2xl font-bold text-yellow-600 font-heading">
            {draftBlogs}
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <Mail size={18} className="text-blue-600" />
            <p className="text-muted text-xs font-body">Messages</p>
          </div>
          <p className="text-2xl font-bold text-blue-600 font-heading">
            {totalContacts}
          </p>
        </div>
      </div>

      {/* Recent Posts */}
      {recentBlogs.length > 0 && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100">
            <h2 className="font-heading text-lg font-bold text-dark">
              Recent Posts
            </h2>
          </div>
          <div className="divide-y divide-gray-50">
            {recentBlogs.map((blog) => (
              <div
                key={blog.id}
                className="px-6 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="min-w-0 flex-1 mr-4">
                  <Link
                    href={`/admin/blog/${blog.id}/edit`}
                    className="text-sm font-medium text-dark hover:text-primary transition-colors font-body block truncate"
                  >
                    {blog.title}
                  </Link>
                  <p className="text-xs text-muted font-body mt-0.5">
                    {blog.author.name} &middot;{" "}
                    {new Date(blog.updatedAt).toLocaleDateString()}
                  </p>
                </div>
                <span
                  className={`flex-shrink-0 inline-block px-2 py-0.5 text-xs font-semibold rounded-full font-body ${
                    blog.published
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {blog.published ? "Published" : "Draft"}
                </span>
              </div>
            ))}
          </div>
          <div className="px-6 py-3 border-t border-gray-100">
            <Link
              href="/admin/blog"
              className="text-sm text-primary hover:underline font-body"
            >
              View all posts
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
