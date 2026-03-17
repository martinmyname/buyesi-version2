"use client";

import { useRef, useCallback } from "react";
import { Editor, EditorContent } from "@tiptap/react";
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
  X,
  Upload,
  Loader2,
} from "lucide-react";
import { useState } from "react";

function ToolbarButton({
  onClick,
  active,
  children,
  title,
}: {
  onClick: () => void;
  active?: boolean;
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={title}
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

function EditorToolbar({
  editor,
  onImageClick,
}: {
  editor: Editor;
  onImageClick: () => void;
}) {
  function addLink() {
    const url = prompt("Enter URL:");
    if (url) {
      editor.chain().focus().setLink({ href: url }).run();
    }
  }

  return (
    <div className="flex flex-wrap gap-1 p-2 border-b border-gray-200 bg-gray-50">
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleBold().run()}
        active={editor.isActive("bold")}
        title="Bold"
      >
        <Bold size={16} />
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleItalic().run()}
        active={editor.isActive("italic")}
        title="Italic"
      >
        <Italic size={16} />
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        active={editor.isActive("underline")}
        title="Underline"
      >
        <UnderlineIcon size={16} />
      </ToolbarButton>
      <div className="w-px bg-gray-300 mx-1" />
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        active={editor.isActive("heading", { level: 1 })}
        title="Heading 1"
      >
        <Heading1 size={16} />
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        active={editor.isActive("heading", { level: 2 })}
        title="Heading 2"
      >
        <Heading2 size={16} />
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        active={editor.isActive("heading", { level: 3 })}
        title="Heading 3"
      >
        <Heading3 size={16} />
      </ToolbarButton>
      <div className="w-px bg-gray-300 mx-1" />
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        active={editor.isActive("bulletList")}
        title="Bullet list"
      >
        <List size={16} />
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        active={editor.isActive("orderedList")}
        title="Numbered list"
      >
        <ListOrdered size={16} />
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        active={editor.isActive("blockquote")}
        title="Quote"
      >
        <Quote size={16} />
      </ToolbarButton>
      <div className="w-px bg-gray-300 mx-1" />
      <ToolbarButton
        onClick={addLink}
        active={editor.isActive("link")}
        title="Add link"
      >
        <LinkIcon size={16} />
      </ToolbarButton>
      <ToolbarButton onClick={onImageClick} title="Insert image">
        <ImageIcon size={16} />
      </ToolbarButton>
      <div className="w-px bg-gray-300 mx-1" />
      <ToolbarButton
        onClick={() => editor.chain().focus().undo().run()}
        title="Undo"
      >
        <Undo size={16} />
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().redo().run()}
        title="Redo"
      >
        <Redo size={16} />
      </ToolbarButton>
    </div>
  );
}

function WordCount({ editor }: { editor: Editor }) {
  const text = editor.getText();
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const chars = text.length;

  return (
    <div className="flex gap-3 px-3 py-1.5 border-t border-gray-200 bg-gray-50 text-xs text-muted font-body">
      <span>{words} words</span>
      <span>{chars} characters</span>
    </div>
  );
}

export function FeaturedImageUpload({
  image,
  onUpload,
  onRemove,
}: {
  image: { id: string; url: string } | null;
  onUpload: (image: { id: string; url: string }) => void;
  onRemove: () => void;
}) {
  const [uploading, setUploading] = useState(false);

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/images", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (res.ok) {
        onUpload({ id: data.id, url: data.url });
      }
    } finally {
      setUploading(false);
    }
  }

  return (
    <div>
      <label className="block text-sm font-semibold text-dark mb-1.5 font-body">
        Featured Image
      </label>
      {image ? (
        <div className="relative inline-block">
          <img
            src={image.url}
            alt="Featured preview"
            className="max-h-48 rounded-lg object-cover"
          />
          <button
            type="button"
            onClick={onRemove}
            className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white rounded-full p-1 transition-colors"
            title="Remove image"
          >
            <X size={14} />
          </button>
        </div>
      ) : (
        <label className="flex items-center gap-2 cursor-pointer w-fit px-4 py-2.5 rounded-lg border border-dashed border-gray-300 hover:border-primary hover:bg-primary/5 transition-colors text-sm text-muted font-body">
          {uploading ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Uploading...
            </>
          ) : (
            <>
              <Upload size={16} />
              Choose image
            </>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleUpload}
            disabled={uploading}
            className="hidden"
          />
        </label>
      )}
    </div>
  );
}

export default function BlogEditorField({
  editor,
}: {
  editor: Editor | null;
}) {
  const editorImageInputRef = useRef<HTMLInputElement>(null);

  const handleEditorImageUpload = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file || !editor) return;

      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/images", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (res.ok) {
        editor.chain().focus().setImage({ src: data.url }).run();
      }
    },
    [editor]
  );

  if (!editor) return null;

  return (
    <div>
      <label className="block text-sm font-semibold text-dark mb-1.5 font-body">
        Content
      </label>
      <div className="border border-gray-300 rounded-lg overflow-hidden">
        <EditorToolbar
          editor={editor}
          onImageClick={() => editorImageInputRef.current?.click()}
        />
        <EditorContent editor={editor} />
        <WordCount editor={editor} />
      </div>
      <input
        ref={editorImageInputRef}
        type="file"
        accept="image/*"
        onChange={handleEditorImageUpload}
        className="hidden"
      />
    </div>
  );
}
