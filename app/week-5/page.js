import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Assignments</h1>
      <ul className="space-y-4">
        <li>
          <Link href="/week-4" className="text-blue-600 hover:underline">
            Week 4 Assignment
          </Link>
        </li>
        <li>
          <Link href="/week-5" className="text-blue-600 hover:underline">
            Week 5 Assignment
          </Link>
        </li>
      </ul>
    </main>
  );
}
