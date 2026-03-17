import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { comparePassword, signToken, checkRateLimit } from "@/lib/auth";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  try {
    // Rate limit by IP
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded?.split(",")[0]?.trim() || "unknown";
    const rateCheck = checkRateLimit(ip);

    if (!rateCheck.allowed) {
      return NextResponse.json(
        {
          error: `Too many login attempts. Try again in ${Math.ceil(
            (rateCheck.retryAfterSeconds || 60) / 60
          )} minutes.`,
        },
        { status: 429 }
      );
    }

    const body = await request.json().catch(() => null);
    if (!body) {
      return NextResponse.json(
        { error: "Invalid request body" },
        { status: 400 }
      );
    }

    const { username, password } = body;

    if (
      !username ||
      !password ||
      typeof username !== "string" ||
      typeof password !== "string"
    ) {
      return NextResponse.json(
        { error: "Username and password are required" },
        { status: 400 }
      );
    }

    // Sanitize input length
    if (username.length > 100 || password.length > 200) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { username: username.trim() },
    });

    // Always compare password even if user not found (timing attack prevention)
    const dummyHash =
      "$2b$12$LJ3m5Rs6sJ6P6x5e3JHMaeG9rF.YrFSe/A9N6qQFGBn4b1F7YbWSS";
    const isValid = comparePassword(password, user?.password || dummyHash);

    if (!user || !isValid) {
      return NextResponse.json(
        { error: "Invalid username or password" },
        { status: 401 }
      );
    }

    const token = signToken({ userId: user.id, username: user.username });

    const cookieStore = await cookies();
    cookieStore.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return NextResponse.json({
      success: true,
      user: { id: user.id, name: user.name, username: user.username },
    });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
