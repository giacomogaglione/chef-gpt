"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

import { Recipe } from "@/types/types"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { macroInfo, recipeInfo } from "@/components/recipe-costants"
import { SaveRecipeButton } from "@/components/save-recipe-button"

interface GeneratedRecipeContentProps {
  recipe: Recipe
  saveRecipe: any
}

export function GeneratedRecipeContent({
  recipe,
  saveRecipe,
}: GeneratedRecipeContentProps) {
  const macroChartData = macroInfo.map((macro) => ({
    label: macro.label,
    value: recipe?.macros[macro.value],
  }))

  return (
    <Card className="mx-auto w-full max-w-3xl">
      <CardHeader>
        <CardTitle className="text-xl font-bold">{recipe?.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-sm">
        <div className="grid space-y-6 md:grid-cols-2 md:space-y-0">
          {/* Recipe Info Section */}
          <div className="grid grid-cols-2 gap-4 text-muted-foreground md:gap-0">
            {recipeInfo.map((info, index) => (
              <div key={index} className="flex items-center gap-2">
                {info.icon}
                <span>
                  {recipe[info.value]} {info.additionalText}
                </span>
              </div>
            ))}
          </div>
          {/* Macros BarChart Section */}
          <div className="grid grid-cols-1 gap-4 transition-all md:gap-0">
            <ResponsiveContainer width="100%" height={75}>
              <BarChart data={macroChartData} barCategoryGap="20%">
                <XAxis
                  dataKey="label"
                  stroke="#94a3b8"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#94a3b8"
                  fontSize={12}
                  width={30}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${value}g`}
                />
                <Bar
                  dataKey="value"
                  fill="currentColor"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
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
      <CardFooter>
        <SaveRecipeButton onClick={saveRecipe} />
      </CardFooter>
    </Card>
  )
}
