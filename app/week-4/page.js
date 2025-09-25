import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="max-w-2xl mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Shopping List
      </h1>
      <ItemList />
    </main>
  );
}
