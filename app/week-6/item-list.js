import Item from './item';

const ItemList = ({ items }) => {
  const groupItems = items.reduce((grouped, item) => {
    if (!grouped[item.category]) {
      grouped[item.category] = [];
    }
    grouped[item.category].push(item);
    return grouped;
  }, {});

  const sortedCategories = Object.keys(groupItems).sort();

  return (
    <div className="w-full max-w-lg">
      {sortedCategories.map((category) => (
        <div key={category} className="mb-6">
          <h2 className="text-xl font-semibold mb-3 capitalize">{category}</h2>
          {groupItems[category].map((item) => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

// const ItemList = ({ items }) => {
//   return (
//     <div>
//       {items.map((item) => (
//         <Item
//           key={item.id}
//           name={item.name}
//           quantity={item.quantity}
//           category={item.category}
//         />
//       ))}
//     </div>
//   );
// }

export default ItemList;