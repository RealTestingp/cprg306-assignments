const Item = ({ name, quantity, category }) => {
  return (
    <ul className="bg-white border border-gray-200 rounded-lg mb-3">
      <div className="flex justify-between items-center p-4">
        <div>
          <h2 className="text-lg text-black font-semibold capitalize">{name}</h2>
          <p className="text-sm text-gray-500">Quantity: {quantity}</p>
        </div>
        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">{category}</span>
      </div>
    </ul>
  );
}

export default Item;