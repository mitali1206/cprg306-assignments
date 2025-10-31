"use client";
import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else {
      return a.category.localeCompare(b.category);
    }
  });

  return (
    <div>
      <div className="flex gap-4 mb-4 justify-center">
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 rounded ${
            sortBy === "name" ? "bg-blue-300" : "bg-white"
          }`}
        >
          Sort by Name
        </button>

        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 rounded ${
            sortBy === "category" ? "bg-blue-300" : "bg-white"
          }`}
        >
          Sort by Category
        </button>
      </div>

      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            onSelect={() => onItemSelect(item)}
          />
        ))}
      </ul>
    </div>
  );
}
