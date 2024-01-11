"use client"

import React, { useCallback, useState } from "react"
import { useCompletion } from "ai/react"

import { Recipe, defaultValues, type FormData } from "@/types/types"
import { generatePrompt } from "@/lib/generate-prompt"
import { saveRecipeToAPI } from "@/lib/save-recipe"
import { cn } from "@/lib/utils"
import { ToastAction } from "@/components/ui/toast"
import { toast } from "@/components/ui/use-toast"
import { RecipeForm } from "@/components/form/generate-recipe-form"
import { GeneratedRecipeContent } from "@/components/generated-recipe-content"
import { SkeletonLoading } from "@/components/loading-skeleton"
import { SaveButton } from "@/components/save-button"

export function GenerateRecipe() {
  const [recipeVisible, setRecipeVisible] = useState<boolean>(false)
  const [formValues, setFormValues] = useState<FormData>(defaultValues)
  const [recipe, setRecipe] = useState<Recipe | null>(null)

  const handleSaveRecipe = async () => {
    const success = await saveRecipeToAPI(formValues, recipe)

    if (success) {
      toast({
        title: "Cool!",
        description: "Recipe successfully saved",
      })
    } else {
      toast({
        variant: "destructive",
        title: "Uh oh! Account needed.",
        description: "Sign-in to save your recipe",
        action: <ToastAction altText="Sign-in">Sign-In</ToastAction>,
      })
    }
  }

  const { complete, isLoading } = useCompletion({
    api: "/api/generate-recipe",
    onResponse: (res) => {
      if (res.status === 429) {
      }
    },
    onError: (error) => {
      console.log(error)
    },
    onFinish: () => {
      setRecipeVisible(true)
    },
  })

  const onSubmit = useCallback(
    async (values: FormData, e: React.FormEvent) => {
      const prompt = generatePrompt(values)
      const completion = await complete(prompt)
      setFormValues(values)
      if (!completion) throw new Error("Failed to get meal plan. Try again.")
      const result = JSON.parse(completion)
      setRecipe(result)
    },
    [complete]
  )

  const saveRecipe = async () => {
    await handleSaveRecipe()
  }

  return (
    <div className="max-w-5xl">
      <div
        className={cn("mx-auto w-full space-x-2", {
          "md:flex": isLoading || recipeVisible,
          "max-w-2xl": !isLoading && !recipeVisible,
        })}
      >
        <div
          className={cn("w-full justify-around", {
            "md:flex md:w-1/3": isLoading || recipeVisible,
            "": !isLoading && !recipeVisible,
          })}
        >
          <RecipeForm onSubmit={onSubmit} isLoading={isLoading} />
        </div>
        <div
          className={cn({
            "justify-around rounded-xl md:flex md:flex-col md:w-2/3":
              isLoading || recipeVisible,
            "": !isLoading && !recipeVisible,
          })}
        >
          <div className="my-2 md:flex">
            {isLoading ? (
              <SkeletonLoading />
            ) : (
              recipe && (
                <GeneratedRecipeContent recipe={recipe} setRecipe={setRecipe} />
              )
            )}
          </div>
          {recipeVisible && <SaveButton onClick={saveRecipe} />}
        </div>
      </div>
    </div>
  )
}
