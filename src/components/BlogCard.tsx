import Link from "next/link";
import Image from "next/image";
import { Calendar, User } from "lucide-react";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  imageId?: string | null;
  authorName: string;
  createdAt: string;
}

export default function BlogCard({
  id,
  title,
  excerpt,
  imageId,
  authorName,
  createdAt,
}: BlogCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow flex flex-col">
      {imageId && (
        <Link href={`/blog/${id}`} className="block relative aspect-[16/9]">
          <Image
            src={`/api/images/${imageId}`}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        </Link>
      )}
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <div className="flex items-center gap-3 text-xs text-muted mb-2">
          <span className="flex items-center gap-1">
            <User size={12} />
            {authorName}
          </span>
          <span className="flex items-center gap-1">
            <Calendar size={12} />
            {new Date(createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </span>
        </div>
        <h3 className="font-heading text-base sm:text-lg font-bold mb-2 line-clamp-2">
          <Link href={`/blog/${id}`} className="hover:text-primary">
            {title}
          </Link>
        </h3>
        <p className="text-sm text-muted line-clamp-3 mb-3 flex-1">
          {excerpt}
        </p>
        <Link
          href={`/blog/${id}`}
          className="text-primary text-sm font-medium hover:underline"
        >
          Read More
        </Link>
      </div>
    </article>
  );
}
