import Item from './item';
import { useState } from 'react';

const ItemList = ({ items }) => {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = [...items].sort((a, b) => 
    a['name'].localeCompare(b['name'])
  );

  const groupItems = sortedItems.reduce((grouped, item) => {
    if (!grouped[item.category]) {
      grouped[item.category] = [];
    }
    grouped[item.category].push(item);
    return grouped;
  }, {});

  const sortedCategories = Object.keys(groupItems).sort();

  const buttonClass = (mode) =>
    `mr-2 px-4 py-2 rounded ${
      sortBy === mode
        ? 'bg-gray-800 text-white dark:bg-gray-200 dark:text-gray-900'
        : 'bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-white'
    }`;

  return (
    <div className="w-full max-w-lg">
      <div className="mb-4">
        <button onClick={() => setSortBy('name')} className={buttonClass('name')}>
          Sort by Name
        </button>
        <button onClick={() => setSortBy('category')} className={buttonClass('category')}>
          Sort by Category
        </button>
        <button onClick={() => setSortBy('grouped')} className={buttonClass('grouped')}>
          Group by Category
        </button>
      </div>

      {/* {sortedCategories.map((category) => (
        <div key={category} className="mb-6">
          <h2 className="text-xl font-semibold mb-3 capitalize">{category}</h2>
          {sortedItems.filter((item) => item.category === category).map((item) => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          ))}
        </div>
      ))} */}

      {sortBy === 'grouped' ? (
  sortedCategories.map((category) => (
    <div key={category} className="mb-6">
      <h2 className="text-xl font-semibold mb-3 capitalize">{category}</h2>
      {groupItems[category].map((item) => (
        <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
      ))}
    </div>
  ))
) : (
  <div>
    {[...items]
      .sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
      .map((item) => (
        <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
      ))}
  </div>
)}
    </div>
  );
}

export default ItemList;