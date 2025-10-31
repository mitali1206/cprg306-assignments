"use client";
import { useState, useEffect } from "react";

// Function to fetch meal ideas from TheMealDB API
async function fetchMealIdeas(ingredient) {
  if (!ingredient) return [];
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await response.json();
  return data.meals || [];
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  async function loadMealIdeas() {
    const ideas = await fetchMealIdeas(ingredient);
    setMeals(ideas);
  }

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md mt-6">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Meal Ideas {ingredient ? `for "${ingredient}"` : ""}
      </h2>
      {!ingredient ? (
        <p className="text-gray-500 text-center">
          Select an ingredient to see meal ideas.
        </p>
      ) : meals.length > 0 ? (
        <ul className="list-disc list-inside space-y-1">
          {meals.map((meal) => (
            <li key={meal.idMeal} className="text-gray-700 font-medium">
              {meal.strMeal}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-center">No meal ideas found.</p>
      )}
    </div>
  );
}
