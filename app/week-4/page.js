import ItemList from "./item-list"
import items from "./items"

const Page = () => {
  return (
    <main className="flex flex-col items-center">
      <h1 className="text-2xl font-bold py-4 w-full max-w-lg">Shopping List</h1>
      <ItemList items={items}/>
    </main>
  )
}

export default Page