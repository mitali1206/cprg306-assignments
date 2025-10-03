"use client";

import { useState } from "react";

export default function NewItem() {
  // quantity starts at 1
  const [quantity, setQuantity] = useState(1);

  // increase quantity (max 20)
  function increment() {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  }

  // decrease quantity (min 1)
  function decrement() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <div>
      <h2>Quantity: {quantity}</h2>

      <button onClick={decrement} disabled={quantity === 1}>
        -
      </button>

      <button onClick={increment} disabled={quantity === 20}>
        +
      </button>
    </div>
  );
}
