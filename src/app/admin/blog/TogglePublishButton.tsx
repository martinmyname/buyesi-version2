"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function TogglePublishButton({
  id,
  published,
}: {
  id: string;
  published: boolean;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleToggle() {
    setLoading(true);
    const res = await fetch(`/api/blog/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ published: !published }),
    });

    if (res.ok) {
      router.refresh();
    }
    setLoading(false);
  }

  return (
    <button
      onClick={handleToggle}
      disabled={loading}
      className={`inline-block px-2.5 py-1 text-xs font-semibold rounded-full font-body cursor-pointer transition-colors disabled:opacity-50 ${
        published
          ? "bg-green-100 text-green-700 hover:bg-yellow-100 hover:text-yellow-700"
          : "bg-yellow-100 text-yellow-700 hover:bg-green-100 hover:text-green-700"
      }`}
      title={published ? "Click to unpublish" : "Click to publish"}
    >
      {published ? "Published" : "Draft"}
    </button>
  );
}
