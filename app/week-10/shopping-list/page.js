"use client";
import ItemList from "./ItemList";
import NewItem from "./NewItem";
import { useState, useEffect } from "react";
import MealIdeas from "./MealIdeas";
import { useUserAuth } from "@/app/contexts/AuthContext";
import { getItems, addItem, deleteItem } from "../_services/shopping-list-service";
import Link from "next/link";

const App = () => {
  const { user } = useUserAuth();
  const [itemList, setItemList] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadItems = async () => {
    const items = await getItems(user.uid);
    setItemList(items);
  };

  useEffect(() => {
    if (user) {
      loadItems();
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [user]);

  const handleAddItem = async (newItem) => {
    const id = await addItem(user.uid, newItem);
    setItemList((prev) => [...prev, { ...newItem, id }]);
  };

  const handleDeleteItem = async (item) => {
    await deleteItem(user.uid, item.id);
    setItemList((prev) => prev.filter((i) => i.id !== item.id));
  };

  const handleItemSelect = (item) => {
    const cleanitemName = item.name.split(",")[0].replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '').trim();
    setSelectedItemName(cleanitemName);
  };

  if (loading) return null;

  if (!user) return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-6 flex flex-col items-center gap-4 pt-12">
      <p className="text-lg">You must be logged in.</p>
      <Link href="/week-10/shopping-list" className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-md hover:from-blue-600 hover:to-purple-600">
        Go to Login
      </Link>
    </main>
  );

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-6 flex flex-col items-center gap-6 pt-12">
      <h1 className="text-3xl font-bold mb-6">Shopping List</h1>
      <div className="flex items-start gap-6" style={{ width: '1000px' }}>
        <div style={{ width: '500px' }} className="shrink-0 flex flex-col gap-6">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={itemList} onItemSelect={handleItemSelect} onItemDelete={handleDeleteItem}/>
        </div>
        <div style={{ width: '350px' }} className="shrink-0">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
};

export default App;