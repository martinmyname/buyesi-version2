"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import {
  LayoutDashboard,
  FileText,
  PenSquare,
  LogOut,
  Menu,
  X,
  Globe,
} from "lucide-react";

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/");
    router.refresh();
  }

  const links = [
    { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
    { href: "/admin/blog", label: "Blog Posts", icon: FileText },
    { href: "/admin/blog/new", label: "New Post", icon: PenSquare },
  ];

  const isActive = (href: string) =>
    href === "/admin" ? pathname === href : pathname.startsWith(href);

  const sidebar = (
    <>
      <div className="p-6 border-b border-white/10">
        <h2 className="font-heading text-xl font-bold text-primary">
          Buyesi Admin
        </h2>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-lg font-body text-sm transition-colors ${
                isActive(link.href)
                  ? "bg-primary text-white"
                  : "text-gray-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Icon size={18} />
              {link.label}
            </Link>
          );
        })}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3 px-4 py-2.5 rounded-lg font-body text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
        >
          <Globe size={18} />
          View Site
        </Link>
      </nav>

      <div className="p-4 border-t border-white/10">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors font-body text-left"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 bg-dark text-white p-2 rounded-lg shadow-lg"
      >
        <Menu size={20} />
      </button>

      {/* Mobile overlay */}
      {open && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile sidebar */}
      <aside
        className={`md:hidden fixed top-0 left-0 z-50 h-screen w-64 bg-dark text-white flex flex-col transition-transform duration-200 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X size={20} />
        </button>
        {sidebar}
      </aside>

      {/* Desktop sidebar */}
      <aside className="fixed top-0 left-0 z-40 h-screen w-64 bg-dark text-white hidden md:flex flex-col">
        {sidebar}
      </aside>
    </>
  );
}
