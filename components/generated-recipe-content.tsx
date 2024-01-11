"use client"

import React, { Dispatch, SetStateAction } from "react"

import { Recipe } from "@/types/types"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Icons } from "@/components/icons"

const macroInfo = [
  { label: "Protein", value: "protein" },
  { label: "Fats", value: "fats" },
  { label: "Carbs", value: "carbs" },
]
const recipeInfo = [
  {
    icon: <Icons.cooking_time className="h-4 w-4" aria-hidden="true" />,
    value: "cooking_time",
    additionalText: "minutes",
  },
  {
    icon: <Icons.people className="h-4 w-4" aria-hidden="true" />,
    value: "people",
    additionalText: "servings",
  },
  {
    icon: <Icons.calories className="h-4 w-4" aria-hidden="true" />,
    value: "calories",
    additionalText: "calories",
  },
  {
    icon: <Icons.difficulty className="h-4 w-4" aria-hidden="true" />,
    value: "difficulty",
    additionalText: "",
  },
]

interface GeneratedRecipeContentProps {
  recipe: Recipe
  setRecipe: Dispatch<SetStateAction<Recipe>>
}

export function GeneratedRecipeContent({
  recipe,
  setRecipe,
}: GeneratedRecipeContentProps) {
  return (
    <Card className="mx-auto max-w-3xl">
      <CardHeader>
        <CardTitle className="text-xl font-bold">{recipe?.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-sm">
        <div className="grid grid-cols-2 gap-4 text-muted-foreground">
          {recipeInfo.map((info, index) => (
            <div key={index} className="flex items-center gap-2">
              {info.icon}
              <span>
                {recipe[info.value]} {info.additionalText}
              </span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4">
          {macroInfo.map((macro, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <div>
                <span className="font-semibold">{macro.label} - </span>
                <span className="text-xs text-muted-foreground">
                  {recipe?.macros[macro.value]}g
                </span>
              </div>
              <Progress
                className="w-full"
                value={recipe?.macros[macro.value]}
              />
            </div>
          ))}
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Ingredients</h3>
          <ol className="list-disc pl-4">
            {recipe?.ingredients.map(
              (
                ingredient: { name: string; amount: number | string },
                i: number
              ) => {
                return (
                  <li key={`${ingredient}-${i}`} className="">
                    {ingredient.name} - {ingredient.amount}
                  </li>
                )
              }
            )}
          </ol>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Instructions</h3>
          <ol className="list-decimal pl-4">
            {recipe?.instructions.map(
              (
                instruction: { step: number; description: string | string },
                i: number
              ) => {
                return (
                  <li key={`${instruction}-${i}`}>{instruction.description}</li>
                )
              }
            )}
          </ol>
        </div>
      </CardContent>
    </Card>
  )
}
