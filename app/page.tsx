export const dynamic = 'force-static';
export const revalidate = false;

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="max-w-xl px-6 text-center space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">
          InnerWords
        </h1>
        <p className="text-lg text-gray-300">
          Daily word-weaving is coming soon.
        </p>
        <p className="text-sm text-gray-400">
          If you can see this page, the deploy worked – game UI will be plugged
          back in next.
        </p>
      </div>
    </main>
  );
}
