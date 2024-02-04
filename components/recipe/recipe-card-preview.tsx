"use client"

import Link from "next/link"

import type { Tables } from "@/types/database.types"
import { deleteRecipe } from "@/lib/delete-recipe"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { toast } from "@/components/ui/use-toast"
import { DeleteRecipeButton } from "@/components/recipe/delete-recipe-button"

type Recipe = Tables<"recipes">

interface RecipeCardProps {
  recipe: Recipe
  isDeletable?: boolean
}

const handleDeleteRecipe = async (id: string) => {
  await deleteRecipe(id)
  toast({
    title: "Cool!",
    description: "Recipe successfully deleted",
  })
}

export function RecipeCardPreview({
  recipe,
  isDeletable = false,
}: RecipeCardProps) {
  const onDeleteRecipe = async () => {
    await handleDeleteRecipe(recipe.id)
  }
  const isVegan = recipe?.vegan === "Yes"
  const isPaleo = recipe?.paleo === "Yes"
  const cookingTime = recipe?.cooking_time?.replaceAll(/[^0-9]/g, "")

  return (
    <Link href={`/recipes/${recipe.id}`}>
      <Card className="my-4 hover:bg-accent hover:shadow-lg">
        <CardHeader className="grid items-start gap-4 space-y-0">
          <div className="space-y-1">
            <CardTitle className="line-clamp-1 text-lg">
              {recipe?.title}
            </CardTitle>
            {isDeletable && <DeleteRecipeButton onClick={onDeleteRecipe} />}
            <CardDescription className="line-clamp-2">
              {recipe?.description}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2">
            <Badge>{recipe?.difficulty}</Badge>
            <Badge variant="secondary">🕓 {cookingTime} min</Badge>
            {isVegan && <Badge variant="vegan">Vegan</Badge>}
            {isPaleo && <Badge variant="paleo">Paleo</Badge>}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
