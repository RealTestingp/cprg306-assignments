"use client";
import ItemList from "./ItemList";
import NewItem from "./NewItem";
import items from "./items"
import { useState } from "react";
import MealIdeas from "./MealIdeas";

const App = () => {
  const [itemList, setItemList] = useState(items);
  const [selectedItemName, setSelectedItemName] = useState(null);

  const handleAddItem = (newItem) => {
    setItemList((prev) => [...prev, newItem]);
  };

  const handleItemSelect = (item) => {
    const cleanitemName = item.name.split(",")[0].replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '').trim();
    setSelectedItemName(cleanitemName);
  };

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-6 flex flex-col items-center gap-6 pt-12">
      <h1 className="text-3xl font-bold mb-6">Shopping List</h1>
      <div className="flex items-start gap-6" style={{ width: '1000px' }}>
        <div style={{ width: '500px' }} className="shrink-0 flex flex-col gap-6">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={itemList} onItemSelect={handleItemSelect}/>
        </div>
        <div style={{ width: '350px' }} className="shrink-0">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  )
};

export default App;
