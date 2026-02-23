"use client";
import ItemList from "./ItemList";
import NewItem from "./NewItem";
import items from "./items"
import { useState } from "react";

const App = () => {
  const [itemList, setItemList] = useState(items);

  const handleAddItem = (newItem) => {
    setItemList([...itemList, newItem]);
  };

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-6 flex flex-col items-center gap-6 pt-12">
      <h1 className="text-3xl font-bold mb-6">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={itemList} />
    </main>
  )
};

export default App;
