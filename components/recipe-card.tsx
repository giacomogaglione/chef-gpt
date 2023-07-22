"use client"

import { Trash2Icon } from "lucide-react"

import type { Database } from "@/types/supabase"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type Recipe = Database["public"]["Tables"]["recipes"]["Row"]

interface RecipeCardProps {
  recipe: Recipe
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  const deleteRecipe = async (id: string) => {
    try {
      const response = await fetch("/api/delete-recipe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ recipeId: id }),
      })

      if (!response.ok) {
        throw new Error("Failed to delete the recipe.")
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Card className="my-4">
      <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
        <div className="space-y-1">
          <CardTitle>{recipe.content?.split("<br>")[0]}</CardTitle>
          <CardDescription>Ingredients: {recipe.ingredients}</CardDescription>
        </div>
        <div className="flex justify-end">
          <Button
            variant="destructive"
            size="icon"
            className="h-8"
            onClick={() => deleteRecipe(recipe.id)}
          >
            <Trash2Icon className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            {"🕛 "} {recipe.cooking_time?.replaceAll(/[^0-9]/g, "")}{" "}
            {" minutes"}
          </div>
          <div className="flex items-center">👨‍🍳 {recipe.difficulty}</div>
          <div>{new Date(recipe.created_at as string).toDateString()}</div>
        </div>
      </CardContent>
    </Card>
  )
}

export type DeleteTodoBody = {
  id: string
}
