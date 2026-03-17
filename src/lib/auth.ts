import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET environment variable is required");
}

export function hashPassword(password: string) {
  return bcrypt.hashSync(password, 12);
}

export function comparePassword(password: string, hash: string) {
  return bcrypt.compareSync(password, hash);
}

export function signToken(payload: { userId: string; username: string }) {
  return jwt.sign(payload, JWT_SECRET!, { expiresIn: "7d" });
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, JWT_SECRET!) as {
      userId: string;
      username: string;
    };
  } catch {
    return null;
  }
}

export async function getSession() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    if (!token) return null;

    const decoded = verifyToken(token);
    if (!decoded) return null;

    // Verify user still exists in database
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: { id: true, username: true, role: true },
    });

    if (!user) return null;

    return { userId: user.id, username: user.username, role: user.role };
  } catch {
    return null;
  }
}

// Simple in-memory rate limiter for login attempts
const loginAttempts = new Map<
  string,
  { count: number; firstAttempt: number }
>();

const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const MAX_ATTEMPTS = 10;

export function checkRateLimit(identifier: string): {
  allowed: boolean;
  retryAfterSeconds?: number;
} {
  const now = Date.now();
  const record = loginAttempts.get(identifier);

  // Clean up expired entries periodically
  if (loginAttempts.size > 1000) {
    for (const [key, val] of loginAttempts) {
      if (now - val.firstAttempt > RATE_LIMIT_WINDOW) {
        loginAttempts.delete(key);
      }
    }
  }

  if (!record || now - record.firstAttempt > RATE_LIMIT_WINDOW) {
    loginAttempts.set(identifier, { count: 1, firstAttempt: now });
    return { allowed: true };
  }

  if (record.count >= MAX_ATTEMPTS) {
    const retryAfter = Math.ceil(
      (RATE_LIMIT_WINDOW - (now - record.firstAttempt)) / 1000
    );
    return { allowed: false, retryAfterSeconds: retryAfter };
  }

  record.count++;
  return { allowed: true };
}
