"use client"

import Link from "next/link"

import type { Database } from "@/types/supabase"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/icons"

type Recipe = Database["public"]["Tables"]["generations"]["Row"]

interface RecipeCardProps {
  recipe: Recipe
}

export function RecipeCardPreview({ recipe }: RecipeCardProps) {
  const isVegan = recipe?.vegan === "Yes"
  const isPaleo = recipe?.paleo === "Yes"

  return (
    <Link href={`/dashboard/my-recipes/${recipe.id}`}>
      <Card className="my-4">
        <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
          <div className="space-y-1">
            <CardTitle className="line-clamp-1 text-lg">
              {recipe?.title}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-4 items-center space-y-2 text-sm text-muted-foreground">
            <p className="flex">
              <Icons.cooking_time className="mr-2 h-4 w-4" aria-hidden="true" />
              {recipe?.cooking_time?.replaceAll(/[^0-9]/g, "")} minutes
            </p>
            <p className="flex">
              <Icons.people className="mr-2 h-4 w-4" aria-hidden="true" />
              {recipe?.people} servings
            </p>
          </div>
          <div className="mt-4 flex space-x-2">
            <Badge variant="secondary">{recipe?.difficulty}</Badge>
            {isVegan && <Badge variant="vegan">Vegan</Badge>}
            {isPaleo && <Badge variant="paleo">Paleo</Badge>}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
