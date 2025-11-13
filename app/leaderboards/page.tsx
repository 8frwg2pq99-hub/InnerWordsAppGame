'use client';

import dynamic from "next/dynamic";

// Client-only wrapper around the real leaderboard component.
// No `revalidate` export here, so Next can't get confused at build time.
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
