"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";
import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";
import {
  Bold,
  Italic,
  UnderlineIcon,
  Heading1,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Quote,
  Link as LinkIcon,
  ImageIcon,
  Undo,
  Redo,
} from "lucide-react";

export default function NewBlogPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [categories, setCategories] = useState("");
  const [tags, setTags] = useState("");
  const [published, setPublished] = useState(false);
  const [featuredImage, setFeaturedImage] = useState<{
    id: string;
    url: string;
  } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const editorImageInputRef = useRef<HTMLInputElement>(null);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({ openOnClick: false }),
      Underline,
      Image,
      Placeholder.configure({ placeholder: "Start writing your blog post..." }),
    ],
    editorProps: {
      attributes: {
        class:
          "prose prose-sm max-w-none min-h-[300px] p-4 focus:outline-none font-body",
      },
    },
  });

  async function handleFeaturedImageUpload(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/images", { method: "POST", body: formData });
    const data = await res.json();

    if (res.ok) {
      setFeaturedImage({ id: data.id, url: data.url });
    }
  }

  async function handleEditorImageUpload(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = e.target.files?.[0];
    if (!file || !editor) return;

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/images", { method: "POST", body: formData });
    const data = await res.json();

    if (res.ok) {
      editor.chain().focus().setImage({ src: data.url }).run();
    }
  }

  function addLink() {
    if (!editor) return;
    const url = prompt("Enter URL:");
    if (url) {
      editor.chain().focus().setLink({ href: url }).run();
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!editor) return;

    setError("");
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
          published,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "Failed to create post");
        return;
      }

      router.push("/admin/blog");
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

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-dark mb-1.5 font-body">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
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
            required
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-body resize-none"
            placeholder="Brief description of the post"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-dark mb-1.5 font-body">
            Featured Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFeaturedImageUpload}
            className="w-full text-sm text-muted font-body file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
          />
          {featuredImage && (
            <img
              src={featuredImage.url}
              alt="Featured preview"
              className="mt-3 max-h-48 rounded-lg object-cover"
            />
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-dark mb-1.5 font-body">
            Content
          </label>
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <div className="flex flex-wrap gap-1 p-2 border-b border-gray-200 bg-gray-50">
              <ToolbarButton
                onClick={() => editor?.chain().focus().toggleBold().run()}
                active={editor?.isActive("bold")}
              >
                <Bold size={16} />
              </ToolbarButton>
              <ToolbarButton
                onClick={() => editor?.chain().focus().toggleItalic().run()}
                active={editor?.isActive("italic")}
              >
                <Italic size={16} />
              </ToolbarButton>
              <ToolbarButton
                onClick={() => editor?.chain().focus().toggleUnderline().run()}
                active={editor?.isActive("underline")}
              >
                <UnderlineIcon size={16} />
              </ToolbarButton>
              <div className="w-px bg-gray-300 mx-1" />
              <ToolbarButton
                onClick={() =>
                  editor?.chain().focus().toggleHeading({ level: 1 }).run()
                }
                active={editor?.isActive("heading", { level: 1 })}
              >
                <Heading1 size={16} />
              </ToolbarButton>
              <ToolbarButton
                onClick={() =>
                  editor?.chain().focus().toggleHeading({ level: 2 }).run()
                }
                active={editor?.isActive("heading", { level: 2 })}
              >
                <Heading2 size={16} />
              </ToolbarButton>
              <ToolbarButton
                onClick={() =>
                  editor?.chain().focus().toggleHeading({ level: 3 }).run()
                }
                active={editor?.isActive("heading", { level: 3 })}
              >
                <Heading3 size={16} />
              </ToolbarButton>
              <div className="w-px bg-gray-300 mx-1" />
              <ToolbarButton
                onClick={() =>
                  editor?.chain().focus().toggleBulletList().run()
                }
                active={editor?.isActive("bulletList")}
              >
                <List size={16} />
              </ToolbarButton>
              <ToolbarButton
                onClick={() =>
                  editor?.chain().focus().toggleOrderedList().run()
                }
                active={editor?.isActive("orderedList")}
              >
                <ListOrdered size={16} />
              </ToolbarButton>
              <ToolbarButton
                onClick={() =>
                  editor?.chain().focus().toggleBlockquote().run()
                }
                active={editor?.isActive("blockquote")}
              >
                <Quote size={16} />
              </ToolbarButton>
              <div className="w-px bg-gray-300 mx-1" />
              <ToolbarButton
                onClick={addLink}
                active={editor?.isActive("link")}
              >
                <LinkIcon size={16} />
              </ToolbarButton>
              <ToolbarButton
                onClick={() => editorImageInputRef.current?.click()}
              >
                <ImageIcon size={16} />
              </ToolbarButton>
              <div className="w-px bg-gray-300 mx-1" />
              <ToolbarButton
                onClick={() => editor?.chain().focus().undo().run()}
              >
                <Undo size={16} />
              </ToolbarButton>
              <ToolbarButton
                onClick={() => editor?.chain().focus().redo().run()}
              >
                <Redo size={16} />
              </ToolbarButton>
            </div>
            <EditorContent editor={editor} />
          </div>
          <input
            ref={editorImageInputRef}
            type="file"
            accept="image/*"
            onChange={handleEditorImageUpload}
            className="hidden"
          />
        </div>

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

        <div className="flex items-center gap-3">
          <input
            id="published"
            type="checkbox"
            checked={published}
            onChange={(e) => setPublished(e.target.checked)}
            className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
          />
          <label
            htmlFor="published"
            className="text-sm font-semibold text-dark font-body"
          >
            Publish immediately
          </label>
        </div>

        <div className="flex gap-3">
          <button
            type="submit"
            disabled={loading}
            className="bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors font-body disabled:opacity-50"
          >
            {loading ? "Creating..." : "Create Post"}
          </button>
          <button
            type="button"
            onClick={() => router.push("/admin/blog")}
            className="bg-gray-200 hover:bg-gray-300 text-dark font-semibold px-6 py-3 rounded-lg transition-colors font-body"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

function ToolbarButton({
  onClick,
  active,
  children,
}: {
  onClick: () => void;
  active?: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`p-2 rounded transition-colors ${
        active
          ? "bg-primary text-white"
          : "text-muted hover:bg-gray-200 hover:text-dark"
      }`}
    >
      {children}
    </button>
  );
}
