"use client"

import React, { useState } from "react"

import { defaultValues, type FormData } from "@/types/types"
import { generatePrompt } from "@/lib/generate-prompt"
import { generateRecipe } from "@/lib/generate-recipe"
import { cn } from "@/lib/utils"
import { ToastAction } from "@/components/ui/toast"
import { toast } from "@/components/ui/use-toast"
import { RecipeForm } from "@/components/form/generate-recipe-form"
import { GeneratedRecipeContent } from "@/components/generated-recipe-content"
import { SaveButton } from "@/components/save-button"

export function GenerateRecipe() {
  const [generatedRecipe, setGeneratedRecipe] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)
  const [recipeVisible, setRecipeVisible] = useState<boolean>(false)
  const [formValues, setFormValues] = useState<FormData>(defaultValues)
  const [ingredients, setIngredients] = useState<string>("")

  const handleRecipeGeneration = async (prompt: string) => {
    try {
      setLoading(true)
      setGeneratedRecipe("")
      const response = await generateRecipe(prompt)

      if (!response.ok) {
        throw new Error(response.statusText)
      }

      const data = response.body
      if (!data) {
        return
      }

      const reader = data.getReader()
      const decoder = new TextDecoder()
      let done = false
      let recipeText = ""

      while (!done) {
        const { value, done: doneReading } = await reader.read()
        done = doneReading
        const chunkValue = decoder.decode(value)
        const formattedChunk = chunkValue.replace(/\n/g, "<br>")
        recipeText += formattedChunk
        setGeneratedRecipe(recipeText)
        setRecipeVisible(true)
        setLoading(false)
      }

      // Extract ingredients from the generated recipe
      const ingredientsMatch = recipeText.match(
        /Ingredients:([\s\S]*?)Instructions:/
      )
      const extractedIngredients = ingredientsMatch
        ? ingredientsMatch[1].trim()
        : ""

      setIngredients(extractedIngredients)
    } catch (error) {
      console.error(error)
    }
  }

  const handleSaveRecipe = async () => {
    try {
      const requestBody = {
        ...formValues,
        content: generatedRecipe,
      }

      const response = await fetch("/api/save-recipe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      })

      toast({
        title: "Cool!",
        description: "Recipe successfully saved",
      })

      if (!response.ok) {
        toast({
          variant: "destructive",
          title: "Uh oh! Account needed.",
          description: "Sign-in to save your recipe",
          action: <ToastAction altText="Sign-in">Sign-In</ToastAction>,
        })
        throw new Error("Failed to save the recipe.")
      }
    } catch (error) {
      console.error(error)
    }
  }

  const onSubmit = async (values: FormData, e: React.FormEvent) => {
    e.preventDefault()
    const prompt = generatePrompt(values)
    await handleRecipeGeneration(prompt)
  }

  const saveRecipe = async () => {
    await handleSaveRecipe()
  }

  return (
    <div className="max-w-5xl">
      <div
        className={cn("mx-auto w-full space-x-2", {
          "md:flex": loading || recipeVisible,
          "max-w-2xl": !loading && !recipeVisible,
        })}
      >
        <div
          className={cn("w-full justify-around", {
            "md:flex md:w-1/3": loading || recipeVisible,
            "": !loading && !recipeVisible,
          })}
        >
          <RecipeForm onSubmit={onSubmit} isLoading={loading} />
        </div>
        <div
          className={cn({
            "justify-around rounded-xl md:flex md:flex-col md:w-2/3":
              loading || recipeVisible,
            "": !loading && !recipeVisible,
          })}
        >
          <div className="my-2 md:flex">
            {generatedRecipe && (
              <>
                <GeneratedRecipeContent
                  ingredients={ingredients}
                  recipe={generatedRecipe}
                />
              </>
            )}
          </div>
          {generatedRecipe && recipeVisible && (
            <SaveButton onClick={saveRecipe} />
          )}
        </div>
      </div>
    </div>
  )
}
