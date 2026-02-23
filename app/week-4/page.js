import ItemList from "./ItemList"
import items from "./items"

export default function Page () {
  return (
    <main className="flex flex-col items-center">
      <h1 className="text-2xl font-bold py-4 w-full max-w-lg">Shopping List Grouped by Categories</h1>
      <ItemList items={items}/>
    </main>
  )
}