// app/archive/page.tsx
import dynamic from "next/dynamic";

// Do not prerender; run only on client
export const dynamic = "force-dynamic";
export const revalidate = 0;

const ArchiveClient = dynamic(
  () => import("../../components/archive-page-content"),
  {
    ssr: false,
    loading: () => (
      <main className="p-8">
        <h1 className="text-xl font-semibold">Archive</h1>
        <p>Loading…</p>
      </main>
    ),
  }
);

export default function Page() {
  return <ArchiveClient />;
}
