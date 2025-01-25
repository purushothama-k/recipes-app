import RecipeCard from "@/components/recipe-list";

async function fetchListOfRecipes() {
  try {
    const response = await fetch("https://dummyjson.com/recipes");
    const data = await response.json();

    return data?.recipes;
  } catch (error) {
    console.log("Failed to load the recipes");
    throw new Error(error);
  }
}

export default async function Recipes() {
  const recipes = await fetchListOfRecipes();

  return (
    <div className="container mx-auto py-8 px-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Recipes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
