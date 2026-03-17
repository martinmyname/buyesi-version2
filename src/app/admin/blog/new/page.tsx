"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";
import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";
import BlogEditorField, { FeaturedImageUpload } from "@/components/BlogEditor";
import { CheckCircle } from "lucide-react";

export default function NewBlogPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [categories, setCategories] = useState("");
  const [tags, setTags] = useState("");
  const [featuredImage, setFeaturedImage] = useState<{
    id: string;
    url: string;
  } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit,
      Link.configure({ openOnClick: false }),
      Underline,
      Image,
      Placeholder.configure({
        placeholder: "Start writing your blog post...",
      }),
    ],
    editorProps: {
      attributes: {
        class:
          "prose prose-sm max-w-none min-h-[300px] p-4 focus:outline-none font-body",
      },
    },
  });

  async function handleSubmit(publish: boolean) {
    if (!editor || !title.trim() || !excerpt.trim()) {
      setError("Title and excerpt are required");
      return;
    }

    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const res = await fetch("/api/blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          excerpt,
          content: editor.getHTML(),
          imageId: featuredImage?.id || null,
          categories,
          tags,
          published: publish,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "Failed to create post");
        return;
      }

      setSuccess(publish ? "Post published!" : "Draft saved!");
      setTimeout(() => router.push("/admin/blog"), 1000);
    } catch {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-4xl">
      <h1 className="font-heading text-3xl font-bold text-dark mb-8">
        Create New Post
      </h1>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 text-sm font-body">
          {error}
        </div>
      )}

      {success && (
        <div className="flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6 text-sm font-body">
          <CheckCircle size={16} />
          {success}
        </div>
      )}

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-dark mb-1.5 font-body">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-body"
            placeholder="Post title"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-dark mb-1.5 font-body">
            Excerpt
          </label>
          <textarea
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-body resize-none"
            placeholder="Brief description of the post"
          />
        </div>

        <FeaturedImageUpload
          image={featuredImage}
          onUpload={setFeaturedImage}
          onRemove={() => setFeaturedImage(null)}
        />

        <BlogEditorField editor={editor} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-dark mb-1.5 font-body">
              Categories
            </label>
            <input
              type="text"
              value={categories}
              onChange={(e) => setCategories(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-body"
              placeholder="e.g. Farming, Community"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-dark mb-1.5 font-body">
              Tags
            </label>
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-body"
              placeholder="e.g. goats, sustainability"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          <button
            type="button"
            onClick={() => handleSubmit(true)}
            disabled={loading}
            className="bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors font-body disabled:opacity-50"
          >
            {loading ? "Saving..." : "Publish"}
          </button>
          <button
            type="button"
            onClick={() => handleSubmit(false)}
            disabled={loading}
            className="bg-gray-700 hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors font-body disabled:opacity-50"
          >
            Save as Draft
          </button>
          <button
            type="button"
            onClick={() => router.push("/admin/blog")}
            className="bg-gray-200 hover:bg-gray-300 text-dark font-semibold px-6 py-3 rounded-lg transition-colors font-body"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
