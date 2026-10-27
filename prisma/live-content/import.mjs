// One-off import of the blog posts and images recovered from the previous
// buyesi.org deployment. Safe to run more than once: rows are upserted by id,
// so existing post and image URLs keep working.
//
// Usage (after `npx prisma migrate deploy`):
//   ADMIN_PASSWORD='choose-a-strong-password' node prisma/live-content/import.mjs

import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import bcrypt from "bcryptjs";
import sharp from "sharp";
import { PrismaClient } from "@prisma/client";

const dir = path.dirname(fileURLToPath(import.meta.url));
const prisma = new PrismaClient();

// Hidden along with the Crystal Palace event; can be republished from admin.
const unpublished = new Set(["cmpiq1fji00013x9xqw4kcgbz"]);

async function main() {
  let admin = await prisma.user.findUnique({ where: { username: "admin" } });
  if (!admin) {
    const password = process.env.ADMIN_PASSWORD;
    if (!password) {
      throw new Error("Set ADMIN_PASSWORD to create the admin account.");
    }
    admin = await prisma.user.create({
      data: {
        username: "admin",
        password: bcrypt.hashSync(password, 12),
        name: "Doughlous Koche",
        role: "admin",
      },
    });
    console.log("Created admin user");
  }

  const posts = JSON.parse(
    await readFile(path.join(dir, "posts.json"), "utf8")
  );

  for (const post of posts) {
    if (post.imageId) {
      const data = await readFile(
        path.join(dir, "images", `${post.imageId}.webp`)
      );
      const { width = 0, height = 0 } = await sharp(data).metadata();
      const image = {
        data,
        mimeType: "image/webp",
        width,
        height,
        size: data.length,
      };
      await prisma.image.upsert({
        where: { id: post.imageId },
        create: { id: post.imageId, ...image },
        update: image,
      });
    }

    const blog = {
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      imageId: post.imageId,
      categories: post.categories,
      tags: post.tags,
      published: !unpublished.has(post.id),
      createdAt: new Date(post.createdAt),
      authorId: admin.id,
    };
    await prisma.blog.upsert({
      where: { id: post.id },
      create: { id: post.id, ...blog },
      update: blog,
    });
    console.log(`${blog.published ? "Published" : "Draft    "}  ${post.title}`);
  }
}

main()
  .catch((err) => {
    console.error(err);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
