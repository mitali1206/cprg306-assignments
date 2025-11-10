"use client";
import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";
import { useUserAuth } from "../../contexts/AuthContext"; 
import Link from "next/link";

export default function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  
  if (!user) {
    return (
      <main className="p-6 text-center">
        <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
        <p>You must be logged in to view this page.</p>
        <Link href="/week-9">
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
            Go to Login Page
          </button>
        </Link>
      </main>
    );
  }

  
  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  function handleItemSelect(item) {
    let cleanedName = item.name
      .split(",")[0] 
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|\uFE0F)/g,
        ""
      ) 
      .trim()
      .toLowerCase();
    setSelectedItemName(cleanedName);
  }

  return (
    <main className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Shopping List
      </h1>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        <div className="flex-1">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
