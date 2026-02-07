const Item = ({ name, quantity, category }) => {
  return (
    <ul className="bg-white border border-gray-200 rounded-lg mb-3">
      <div className="flex justify-between items-center p-4">
        <div>
          <h2 className="text-lg text-black font-semibold capitalize">{name}</h2>
          {/* <p className="text-sm text-gray-500 capitalize">{category}</p> */}
          <p className="text-sm text-black">Quantity: {quantity}</p>
        </div>
      </div>
    </ul>
  );
}

export default Item;