"use client";
import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  function handleItemSelect(item) {
    let cleanedName = item.name
      .split(",")[0] // remove quantity info
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|\uFE0F)/g,
        ""
      ) // remove emoji
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
