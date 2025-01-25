import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function RecipeCard({ recipe }) {
  return (
    <Link href={`/recipes/${recipe.id}`}>
      <Card className="overflow-hidden hover:shadow-lg duration-300 hover:scale-105 transition-all">
        <Image
          src={recipe.image || "/placeholder.svg"}
          alt={recipe.name}
          width={400}
          height={300}
          className="w-full h-48 object-cover"
        />
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold mb-2">{recipe.name}</h2>
          <p className="text-sm text-gray-600 mb-2">
            Prep: {recipe.prepTimeMinutes}min | Cook: {recipe.cookTimeMinutes}
            min
          </p>
          <div className="flex flex-wrap gap-2">
            {recipe.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="bg-gray-50 p-4">
          <div className="flex items-center justify-between w-full">
            <span className="text-sm font-medium">{recipe.difficulty}</span>
            <span className="text-sm font-medium">
              {recipe.caloriesPerServing} cal/serving
            </span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
