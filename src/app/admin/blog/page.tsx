import { redirect } from "next/navigation";
import Link from "next/link";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import DeleteBlogButton from "./DeleteBlogButton";

export default async function AdminBlogListPage() {
  const session = await getSession();
  if (!session) redirect("/admin/login");

  const blogs = await prisma.blog.findMany({
    include: { author: { select: { name: true } } },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-heading text-3xl font-bold text-dark">
          Blog Posts
        </h1>
        <Link
          href="/admin/blog/new"
          className="bg-primary hover:bg-primary-dark text-white font-semibold px-5 py-2.5 rounded-lg transition-colors font-body text-sm"
        >
          New Post
        </Link>
      </div>

      {blogs.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm p-12 text-center border border-gray-100">
          <p className="text-muted font-body">No blog posts yet.</p>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                <th className="text-left px-6 py-3 text-sm font-semibold text-dark font-body">
                  Title
                </th>
                <th className="text-left px-6 py-3 text-sm font-semibold text-dark font-body">
                  Author
                </th>
                <th className="text-left px-6 py-3 text-sm font-semibold text-dark font-body">
                  Status
                </th>
                <th className="text-left px-6 py-3 text-sm font-semibold text-dark font-body">
                  Date
                </th>
                <th className="text-right px-6 py-3 text-sm font-semibold text-dark font-body">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => (
                <tr
                  key={blog.id}
                  className="border-b border-gray-50 hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4 font-body text-sm text-dark font-medium">
                    {blog.title}
                  </td>
                  <td className="px-6 py-4 font-body text-sm text-muted">
                    {blog.author.name}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block px-2.5 py-1 text-xs font-semibold rounded-full font-body ${
                        blog.published
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {blog.published ? "Published" : "Draft"}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-body text-sm text-muted">
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-right space-x-2">
                    <Link
                      href={`/admin/blog/${blog.id}/edit`}
                      className="inline-block px-3 py-1.5 text-xs font-semibold text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition-colors font-body"
                    >
                      Edit
                    </Link>
                    <DeleteBlogButton id={blog.id} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
