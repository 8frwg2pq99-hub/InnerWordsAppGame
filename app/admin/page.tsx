'use client';

// Do NOT pre-render this page at build time
export const dynamic = 'force-dynamic';
export const revalidate = 0;

import { Suspense } from 'react';

// Optional: If you have a ConvexProvider at a higher layout, this page will work at runtime.
// During SSR build, we return a lightweight shell.
export default function AdminPage() {
  if (typeof window === 'undefined') {
    // Avoid running client hooks (like Convex useQuery) during build
    return (
      <main className="p-8">
        <h1 className="text-xl font-semibold">Admin</h1>
        <p>Loading…</p>
      </main>
    );
  }

  // Lazy-import your existing admin component here if you want:
  // const AdminDashboard = React.useMemo(() => require('@/components/admin-dashboard').default, []);
  // return <AdminDashboard />;

  return (
    <main className="p-8">
      <h1 className="text-xl font-semibold">Admin</h1>
      <p>Admin tools will load on the client.</p>
    </main>
  );
}
