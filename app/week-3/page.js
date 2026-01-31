import GroceryItemList from "./GroceryItemList";

export default function Page() {
  return (
    <main className="flex flex-col items-center">
      <div className="w-full max-w-lg px-4">
        <h1 className="text-2xl font-bold py-4 w-full max-w-lg">Shopping List</h1>
        <GroceryItemList />
      </div>
    </main>
  )
}