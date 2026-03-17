import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import { compressImage } from "@/lib/compress";

export async function POST(request: Request) {
  const session = await getSession();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const compressed = await compressImage(buffer);

    const image = await prisma.image.create({
      data: {
        data: compressed.data,
        mimeType: compressed.mimeType,
        width: compressed.width,
        height: compressed.height,
        size: compressed.size,
      },
    });

    return NextResponse.json({
      id: image.id,
      url: `/api/images/${image.id}`,
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to upload image" },
      { status: 500 }
    );
  }
}
