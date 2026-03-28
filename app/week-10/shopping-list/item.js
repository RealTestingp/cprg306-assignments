const Item = ({ name, quantity, onSelect, onDelete }) => {
  return (
    <ul
      style={{ cursor: 'pointer' }}
      className="border border-gray-200 rounded-lg mb-3 overflow-hidden bg-white hover:bg-gray-200"
      onClick={onSelect}
    >
      <div className="flex justify-between items-center p-4">
        <div>
          <h2 className="text-lg text-black font-semibold capitalize">{name}</h2>
          <p className="text-sm text-black">Quantity: {quantity}</p>
        </div>
        <button
          className="text-gray-400 hover:text-red-500 transition-colors p-1"
          onClick={(e) => { e.stopPropagation(); onDelete(); }}
          aria-label="Delete item"
        >
          Delete
        </button>
      </div>
    </ul>
  );
}

export default Item;