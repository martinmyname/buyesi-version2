import { redirect } from "next/navigation";
import Link from "next/link";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import DeleteBlogButton from "./DeleteBlogButton";
import TogglePublishButton from "./TogglePublishButton";
import { ExternalLink } from "lucide-react";

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
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <th className="text-left px-6 py-3 text-sm font-semibold text-dark font-body">
                    Title
                  </th>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-dark font-body hidden md:table-cell">
                    Author
                  </th>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-dark font-body">
                    Status
                  </th>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-dark font-body hidden sm:table-cell">
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
                    <td className="px-6 py-4 font-body text-sm text-dark font-medium max-w-xs">
                      <div className="truncate">{blog.title}</div>
                    </td>
                    <td className="px-6 py-4 font-body text-sm text-muted hidden md:table-cell">
                      {blog.author.name}
                    </td>
                    <td className="px-6 py-4">
                      <TogglePublishButton
                        id={blog.id}
                        published={blog.published}
                      />
                    </td>
                    <td className="px-6 py-4 font-body text-sm text-muted hidden sm:table-cell">
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <a
                          href={`/blog/${blog.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors font-body"
                          title="View post"
                        >
                          <ExternalLink size={12} />
                          View
                        </a>
                        <Link
                          href={`/admin/blog/${blog.id}/edit`}
                          className="inline-block px-3 py-1.5 text-xs font-semibold text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition-colors font-body"
                        >
                          Edit
                        </Link>
                        <DeleteBlogButton id={blog.id} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
