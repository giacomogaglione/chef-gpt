"use client"

import { revalidatePath } from "next/cache"
import Link from "next/link"
import { Trash2Icon } from "lucide-react"

import type { Database } from "@/types/supabase"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "@/components/ui/use-toast"

type Recipe = Database["public"]["Tables"]["recipes"]["Row"]

interface RecipeCardProps {
  recipe: Recipe
}

export function RecipeCardPreview({ recipe }: RecipeCardProps) {
  const deleteRecipe = async (id: string) => {
    try {
      const response = await fetch("/api/delete-recipe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ recipeId: id }),
      })
      toast({
        title: "Cool!",
        description: "Recipe successfully deleted",
      })
      // revalidatePath("/dashboard/my-recipes")

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
          <CardTitle className="line-clamp-1 text-lg">
            {recipe?.title}
          </CardTitle>
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
        <div className="mb-4 flex space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            {"🕛 "} {recipe?.cooking_time?.replaceAll(/[^0-9]/g, "")}{" "}
            {" minutes"}
          </div>
          <div className="flex items-center">👨‍🍳 {recipe?.difficulty}</div>
          <div>{new Date(recipe?.created_at as string).toDateString()}</div>
        </div>
        <Link href={`/dashboard/my-recipes/${recipe.id}`}>
          <Button variant="outline" size="lg" className="w-full">
            Details
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}

export type DeleteTodoBody = {
  id: string
}
