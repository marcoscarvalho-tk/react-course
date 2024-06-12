export async function fetchAvailabelMeals() {
  const response = await fetch("http://localhost:3000/meals", );
  const meals = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch meals!");
  }

  return meals;
}
