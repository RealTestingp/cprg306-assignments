"use client";
import { useState } from "react";

const NewItem = ({ onAddItem }) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Math.random().toString(36).substring(2, 9); // random ID
    const item = { id, name, quantity, category };
    onAddItem(item);
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  const categories = ["produce", "dairy", "bakery", "meat", "frozen foods", "canned goods", "dry goods", "beverages", "snacks", "household", "other"];
  return (
    <form className="max-w-md mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>

      <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
        Name
      </label>
      <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required
        className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white mb-4" />

      <div className="flex gap-4 mb-4">
        <div>
          <label htmlFor="quantity" className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
            Quantity
          </label>
          <input id="quantity" type="number" min="1" max="99" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-20 p-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
        </div>
        <div className="flex-1">
          <label htmlFor="category" className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
            Category
          </label>
          <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button type="submit"
        className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-md hover:from-blue-600 hover:to-purple-600">
        +
      </button>
    </form>
  );
}

export default NewItem;