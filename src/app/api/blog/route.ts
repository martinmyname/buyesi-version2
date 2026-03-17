import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";

export async function GET() {
  const blogs = await prisma.blog.findMany({
    where: { published: true },
    include: { author: { select: { name: true } } },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(blogs);
}

export async function POST(request: Request) {
  const session = await getSession();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { title, excerpt, content, imageId, categories, tags, published } =
      await request.json();

    const blog = await prisma.blog.create({
      data: {
        title,
        excerpt,
        content,
        imageId: imageId || null,
        categories: categories || null,
        tags: tags || null,
        published: published || false,
        authorId: session.userId,
      },
    });

    return NextResponse.json(blog, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Failed to create blog" },
      { status: 500 }
    );
  }
}
