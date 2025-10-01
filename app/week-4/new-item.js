"use client";

import { useState } from "react";

export default function NewItem() {
  // Initialize state
  const [quantity, setQuantity] = useState(1);

  // Increment function (max 20)
  const increment = () => {
    setQuantity((prev) => (prev < 20 ? prev + 1 : prev));
  };

  // Decrement function (min 1)
  const decrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <p className="text-lg font-semibold">Quantity: {quantity}</p>

      <div className="flex space-x-4">
        {/* Decrement Button */}
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className={`px-4 py-2 rounded-lg text-white font-semibold transition ${
            quantity === 1
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-red-500 hover:bg-red-600"
          }`}
        >
          -
        </button>

        {/* Increment Button */}
        <button
          onClick={increment}
          disabled={quantity === 20}
          className={`px-4 py-2 rounded-lg text-white font-semibold transition ${
            quantity === 20
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-500 hover:bg-green-600"
          }`}
        >
          +
        </button>
      </div>

      <p className="text-sm text-gray-500">
        Quantity must be between 1 and 20
      </p>
    </div>
  );
}