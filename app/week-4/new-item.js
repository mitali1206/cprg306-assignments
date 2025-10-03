"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  function increment() {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  }

  function decrement() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <div className="text-center p-6 bg-white rounded shadow w-64 mx-auto">
      <h2 className="text-xl font-semibold mb-4">Quantity: {quantity}</h2>

      <div className="space-x-4">
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className="px-4 py-2 bg-red-500 text-white rounded disabled:bg-gray-400"
        >
          -
        </button>

        <button
          onClick={increment}
          disabled={quantity === 20}
          className="px-4 py-2 bg-green-500 text-white rounded disabled:bg-gray-400"
        >
          +
        </button>
      </div>

      <p className="text-sm text-gray-500 mt-3">Min: 1 | Max: 20</p>
    </div>
  );
}
