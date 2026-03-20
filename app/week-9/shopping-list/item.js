import { useState } from "react";

const Item = ({ name, quantity, onSelect }) => {
  const [pressed, setPressed] = useState(false);

  return (
    <ul
      style={{ cursor: 'pointer' }}
      className={`border border-gray-200 rounded-lg mb-3 overflow-hidden ${
        pressed ? 'bg-gray-200' : 'bg-white'
      }`}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => { setPressed(false); onSelect(); }}
      onMouseLeave={() => setPressed(false)}
    >
      <div className="flex justify-between items-center p-4">
        <div>
          <h2 className="text-lg text-black font-semibold capitalize">{name}</h2>
          <p className="text-sm text-black">Quantity: {quantity}</p>
        </div>
      </div>
    </ul>
  );
}

export default Item;