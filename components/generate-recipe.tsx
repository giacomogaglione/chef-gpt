"use client"

import React, { useCallback, useEffect, useState } from "react"
import { useCompletion } from "ai/react"
import { toast } from "sonner"

import { defaultValues, Recipe, type FormData } from "@/types/types"
import { saveGeneration } from "@/lib/actions"
import { generatePrompt } from "@/lib/generate-prompt"
import { cn } from "@/lib/utils"
import { RecipeForm } from "@/components/form/recipe-form"
import { RecipeCard } from "@/components/recipe/recipe-card"
import { RecipeCardSkeleton } from "@/components/recipe/recipe-card-skeleton"

export function GenerateRecipe() {
  const [isRecipeVisible, setIsRecipeVisible] = useState<boolean>(false)
  const [formValues, setFormValues] = useState<FormData>(defaultValues)
  const [recipe, setRecipe] = useState<Recipe | null>(null)

  const { complete, isLoading } = useCompletion({
    api: "/api/generate-recipe",
    onFinish: () => {
      setIsRecipeVisible(true)
    },
  })

  useEffect(() => {
    if (recipe) {
      saveGeneration(recipe)
    }
  }, [recipe])

  const onSubmit = useCallback(
    async (values: FormData, e: React.FormEvent) => {
      const prompt = generatePrompt(values)
      const completion = await complete(prompt)
      setFormValues(values)
      if (!completion) throw new Error("Failed to generate recipe. Try again.")
      try {
        const result = JSON.parse(completion)
        setRecipe(result)
      } catch (error) {
        console.error("Error parsing JSON:", error)
        toast.error("Uh oh! Failed to generate recipe. Try again.")
      }
    },
    [complete]
  )

  return (
    <div className="pb-24">
      <div
        className={cn("mx-auto space-y-6 md:space-x-6 md:space-y-0", {
          "md:flex": isLoading || isRecipeVisible,
          "max-w-2xl": !isLoading && !isRecipeVisible,
        })}
      >
        <div
          className={cn({
            "md:flex md:w-1/3": isLoading || isRecipeVisible,
          })}
        >
          <RecipeForm onSubmit={onSubmit} isLoading={isLoading} />
        </div>
        <div
          className={cn({
            "md:flex md:flex-col md:w-2/3": isLoading || isRecipeVisible,
          })}
        >
          <div className="md:flex">
            {!isLoading && recipe && <RecipeCard recipe={recipe} />}
            {isLoading && <RecipeCardSkeleton />}
          </div>
        </div>
      </div>
    </div>
  )
}
