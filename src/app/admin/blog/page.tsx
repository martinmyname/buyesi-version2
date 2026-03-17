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
      <div className="flex items-center justify-between mb-6 sm:mb-8 gap-4">
        <h1 className="font-heading text-2xl sm:text-3xl font-bold text-dark">
          Blog Posts
        </h1>
        <Link
          href="/admin/blog/new"
          className="bg-primary hover:bg-primary-dark text-white font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg transition-colors font-body text-xs sm:text-sm flex-shrink-0"
        >
          New Post
        </Link>
      </div>

      {blogs.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm p-8 sm:p-12 text-center border border-gray-100">
          <p className="text-muted font-body">No blog posts yet.</p>
        </div>
      ) : (
        <>
          {/* Mobile card view */}
          <div className="sm:hidden space-y-3">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-lg shadow-sm border border-gray-100 p-4"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <Link
                    href={`/admin/blog/${blog.id}/edit`}
                    className="font-body text-sm text-dark font-medium hover:text-primary line-clamp-2 flex-1"
                  >
                    {blog.title}
                  </Link>
                  <TogglePublishButton
                    id={blog.id}
                    published={blog.published}
                  />
                </div>
                <p className="text-xs text-muted font-body mb-3">
                  {blog.author.name} &middot;{" "}
                  {new Date(blog.createdAt).toLocaleDateString()}
                </p>
                <div className="flex items-center gap-2">
                  <a
                    href={`/blog/${blog.id}`}
                    className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors font-body"
                  >
                    <ExternalLink size={11} />
                    View
                  </a>
                  <Link
                    href={`/admin/blog/${blog.id}/edit`}
                    className="inline-block px-2.5 py-1 text-xs font-semibold text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition-colors font-body"
                  >
                    Edit
                  </Link>
                  <DeleteBlogButton id={blog.id} />
                </div>
              </div>
            ))}
          </div>

          {/* Desktop table view */}
          <div className="hidden sm:block bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100 bg-gray-50">
                    <th className="text-left px-4 md:px-6 py-3 text-sm font-semibold text-dark font-body">
                      Title
                    </th>
                    <th className="text-left px-4 md:px-6 py-3 text-sm font-semibold text-dark font-body hidden lg:table-cell">
                      Author
                    </th>
                    <th className="text-left px-4 md:px-6 py-3 text-sm font-semibold text-dark font-body">
                      Status
                    </th>
                    <th className="text-left px-4 md:px-6 py-3 text-sm font-semibold text-dark font-body hidden md:table-cell">
                      Date
                    </th>
                    <th className="text-right px-4 md:px-6 py-3 text-sm font-semibold text-dark font-body">
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
                      <td className="px-4 md:px-6 py-4 font-body text-sm text-dark font-medium max-w-xs">
                        <div className="truncate">{blog.title}</div>
                      </td>
                      <td className="px-4 md:px-6 py-4 font-body text-sm text-muted hidden lg:table-cell">
                        {blog.author.name}
                      </td>
                      <td className="px-4 md:px-6 py-4">
                        <TogglePublishButton
                          id={blog.id}
                          published={blog.published}
                        />
                      </td>
                      <td className="px-4 md:px-6 py-4 font-body text-sm text-muted hidden md:table-cell">
                        {new Date(blog.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-4 md:px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <a
                            href={`/blog/${blog.id}`}
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
        </>
      )}
    </div>
  );
}
