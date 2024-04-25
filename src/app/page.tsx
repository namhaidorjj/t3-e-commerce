import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div>hey whats happening</div>
      <Link href="/about">
        <a className="text-blue-500 underline">About</a>
      </Link>
    </main>
  );
}
