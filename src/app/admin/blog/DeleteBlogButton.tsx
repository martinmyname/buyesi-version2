"use client";

import { useRouter } from "next/navigation";

export default function DeleteBlogButton({ id }: { id: string }) {
  const router = useRouter();

  async function handleDelete() {
    if (!confirm("Are you sure you want to delete this post?")) return;

    const res = await fetch(`/api/blog/${id}`, { method: "DELETE" });

    if (res.ok) {
      router.refresh();
    }
  }

  return (
    <button
      onClick={handleDelete}
      className="inline-block px-3 py-1.5 text-xs font-semibold text-red-600 border border-red-300 rounded-lg hover:bg-red-600 hover:text-white transition-colors font-body"
    >
      Delete
    </button>
  );
}
