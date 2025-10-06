"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  function increase() {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  }

  function decrease() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <div className="text-center mt-20 p-4 bg-blue-50 rounded-lg w-60 mx-auto">
      <h2 className="text-xl font-semibold mb-4">Quantity: {quantity}</h2>

      <div className="flex justify-center space-x-4">
        <button
          onClick={decrease}
          disabled={quantity === 1}
          className="px-4 py-2 bg-red-500 text-white rounded disabled:bg-gray-400"
        >
          -
        </button>

        <button
          onClick={increase}
          disabled={quantity === 20}
          className="px-4 py-2 bg-green-500 text-white rounded disabled:bg-gray-400"
        >
          +
        </button>
      </div>
    
      <p className="Limit"> Value Limits</p>

      <p className="text-sm text-gray-500 mt-3">Min: 1 | Max: 20</p>

    ,
    </div>
  );
}
