"use client";

import { useState } from "react";

export default function NewItem() {
 
  const [name, setName] = useState("");

  const [category, setCategory] = useState("produce");

  // quantity function 
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

  // submission handler
  function handleSubmit(e) {
    e.preventDefault();

    const item = { name, quantity, category };
    console.log(item);
    alert(`Item Added \nName: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

    
    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="text-center mt-20 p-4 bg-blue-50 rounded-lg w-80 mx-auto shadow-md"
    >
      <h2 className="text-2xl font-semibold mb-6">Add New Item</h2>

      {/* item name field */}
      <div className="mb-4 text-left">
        <label className="block font-medium mb-1">Item Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="e.g. eggs, milk, 3L ,etc"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Quantity*/}
      <div className="text-center mt-6 p-4 bg-blue-50 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Quantity: {quantity}</h2>

        <div className="flex justify-center space-x-4">
          <button
            type="button"
            onClick={decrease}
            disabled={quantity === 1}
            className="px-4 py-2 bg-red-500 text-white rounded disabled:bg-gray-400"
          >
            -
          </button>

          <button
            type="button"
            onClick={increase}
            disabled={quantity === 20}
            className="px-4 py-2 bg-green-500 text-white rounded disabled:bg-gray-400"
          >
            +
          </button>
        </div>

        <p className="Limit mt-2">Value Limits</p>
        <p className="text-sm text-gray-500 mt-1">Min: 1 | Max: 20</p>
      </div>

      {/*category field */}
      <div className="mt-6 text-left">
        <label className="block font-medium mb-1">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Submit Button */}
      
      <button
        type="submit"
        className="w-full mt-6 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Add Item
      </button>
    </form>
  );
}
