const GroceryItem = ({ name, quantity, category }) => {
  return (
    <li className="flex border-1 rounded-lg p-2 text-left w-full">
      <div>
        <p className="font-bold text-md capitalize">{name}</p>
        <p className="text-md">Quantity: {quantity}</p>
        <p className="text-md capitalize">Category: {category}</p>
      </div>
    </li>
  );
}


export default GroceryItem;