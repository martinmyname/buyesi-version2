import { getSession } from "@/lib/auth";
import AdminSidebar from "./AdminSidebar";
import AdminRedirect from "./AdminRedirect";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  return (
    <div className="min-h-screen bg-gray-50">
      {session ? (
        <div className="flex">
          <AdminSidebar />
          <main className="flex-1 p-4 pt-14 sm:p-6 md:p-8 ml-0 md:ml-64 min-w-0">{children}</main>
        </div>
      ) : (
        <>
          <AdminRedirect />
          {children}
        </>
      )}
    </div>
  );
}
