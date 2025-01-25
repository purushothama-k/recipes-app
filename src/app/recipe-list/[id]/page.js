import Image from "next/image";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";

async function getRecipe(id) {
  const res = await fetch(`https://dummyjson.com/recipes/${id}`);
  if (!res.ok) {
    notFound();
  }
  return res.json();
}

export default async function RecipeDetailPage({ params }) {
  const recipe = await getRecipe(params.id);

  return (
    <div className="container mx-auto py-8 px-6">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <Image
          src={recipe.image || "/placeholder.svg"}
          alt={recipe.name}
          width={1200}
          height={600}
          className="w-full h-96 object-cover"
        />
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-4">{recipe.name}</h1>
          <div className="flex flex-wrap gap-2 mb-4">
            {recipe.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <p className="text-gray-600">
                Prep Time: {recipe.prepTimeMinutes} minutes
              </p>
              <p className="text-gray-600">
                Cook Time: {recipe.cookTimeMinutes} minutes
              </p>
              <p className="text-gray-600">Servings: {recipe.servings}</p>
            </div>
            <div>
              <p className="text-gray-600">Difficulty: {recipe.difficulty}</p>
              <p className="text-gray-600">Cuisine: {recipe.cuisine}</p>
              <p className="text-gray-600">
                Calories: {recipe.caloriesPerServing} per serving
              </p>
            </div>
          </div>
          <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc pl-5 mb-6">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="text-gray-700">
                {ingredient}
              </li>
            ))}
          </ul>
          <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
          <ol className="list-decimal pl-5">
            {recipe.instructions.map((instruction, index) => (
              <li key={index} className="text-gray-700 mb-2">
                {instruction}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
