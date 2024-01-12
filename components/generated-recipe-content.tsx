"use client"

import React, { Dispatch, SetStateAction } from "react"

import { Recipe } from "@/types/types"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { macroInfo, recipeInfo } from "@/components/recipe-costants"

interface GeneratedRecipeContentProps {
  recipe: Recipe
  setRecipe: Dispatch<SetStateAction<Recipe>>
}

export function GeneratedRecipeContent({
  recipe,
  setRecipe,
}: GeneratedRecipeContentProps) {
  return (
    <Card className="mx-auto w-full max-w-3xl">
      <CardHeader>
        <CardTitle className="text-xl font-bold">{recipe?.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-sm">
        {/* Recipe Info Section */}
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

        {/* Macros Info Section */}
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

        {/* Ingredients Section */}
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

        {/* Instructions Section */}
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
