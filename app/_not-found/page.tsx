// app/_not-found/page.tsx
export const dynamic = "force-dynamic"; // avoid static prerender surprises

export default function NotFound() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Page not found</h1>
      <p>Sorry, that page doesn’t exist.</p>
    </main>
  );
}
