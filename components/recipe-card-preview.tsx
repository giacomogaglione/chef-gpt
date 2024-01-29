"use client"

import Link from "next/link"

import type { Database } from "@/types/supabase"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type Recipe = Database["public"]["Tables"]["generations"]["Row"]

interface RecipeCardProps {
  recipe: Recipe
}

export function RecipeCardPreview({ recipe }: RecipeCardProps) {
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
