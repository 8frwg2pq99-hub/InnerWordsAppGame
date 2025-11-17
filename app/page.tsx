import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'InnerWords – Daily word sequence game',
  description:
    'InnerWords is a one-minute daily challenge where you chain words together using hidden letter sequences and chase ever higher scores.',
};

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-slate-50 px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
        InnerWords
      </h1>

      <p className="text-lg md:text-xl mb-4 text-center max-w-xl text-slate-200">
        A one-minute daily word game where you build chains of words from hidden
        letter sequences and race for the highest score.
      </p>

      <p className="mb-6 text-center text-slate-400 max-w-lg">
        The full game is coming online very soon. Follow{' '}
        <span className="font-semibold">@innerwordsgame</span> on socials for
        launch updates and early playtests.
      </p>

      <div className="text-xs text-slate-500 text-center">
        Built by Tom Kwei · Beta build (no accounts or leaderboards yet)
      </div>
    </main>
  );
}
