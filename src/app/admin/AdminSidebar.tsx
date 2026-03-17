"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
  }

  const links = [
    { href: "/admin", label: "Dashboard" },
    { href: "/admin/blog", label: "Blog Posts" },
    { href: "/admin/blog/new", label: "New Post" },
  ];

  return (
    <aside className="fixed top-0 left-0 z-40 h-screen w-64 bg-dark text-white hidden md:flex flex-col">
      <div className="p-6 border-b border-white/10">
        <h2 className="font-heading text-xl font-bold text-primary">
          Buyesi Admin
        </h2>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`block px-4 py-2.5 rounded-lg font-body text-sm transition-colors ${
              pathname === link.href
                ? "bg-primary text-white"
                : "text-gray-300 hover:bg-white/10 hover:text-white"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-white/10">
        <button
          onClick={handleLogout}
          className="w-full px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors font-body text-left"
        >
          Logout
        </button>
      </div>
    </aside>
  );
}
