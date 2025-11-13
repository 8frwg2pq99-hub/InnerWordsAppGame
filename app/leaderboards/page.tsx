'use client';

import dynamic from "next/dynamic";

export const dynamic = "force-dynamic";
export const revalidate = 0;

// Load the real leaderboard page on the client only.
// This avoids running Convex hooks during the Vercel build.
const LeaderboardsClient = dynamic(
  () => import("../../components/leaderboard-page-content"),
  {
    ssr: false,
    loading: () => (
      <main className="p-8">
        <h1 className="text-xl font-semibold">Leaderboards</h1>
        <p>Loading…</p>
      </main>
    ),
  }
);

export default function Page() {
  return <LeaderboardsClient />;
}
