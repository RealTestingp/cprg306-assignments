import Item from './item';

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <Item
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
    </div>
  );
}

export default ItemList;