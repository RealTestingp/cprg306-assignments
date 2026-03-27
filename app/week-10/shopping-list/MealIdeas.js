"use client";
import { useState, useEffect } from 'react';

const fetchMealIdeas = async (ingredient) => {
  const result = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const data = await result.json();
  return data.meals;
};

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);

  const loadMealIdeas = async () => {
    const ideas = await fetchMealIdeas(ingredient);
    setMeals(ideas || []);
  };

  useEffect(() => {
    if (ingredient) loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="shrink-0" style={{ width: '350px' }}>
      <h2 className="text-xl font-semibold mb-3">Meal Ideas</h2>
      {!ingredient ? (
        <p className="text-gray-500">Select an item to see meal ideas</p>
      ) : meals.length === 0 ? (
        <p className="text-gray-500">No meal ideas found</p>
      ) : (
        <ul>
          {meals.map((meal) => (
            <li key={meal.idMeal} className="bg-white border border-gray-200 rounded-lg p-4 text-sm font-medium text-black mb-3 capitalize">{meal.strMeal}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MealIdeas;