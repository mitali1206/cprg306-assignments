import NewItem from "./new-item";

export default function Page() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">New Item</h1>
        <NewItem />
      </div>
    </main>
  );
}