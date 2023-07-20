"use client"

import React, { useState } from "react"
import { generatePrompt } from "@/utils/generate-prompt"
import { generateRecipe } from "@/utils/generate-recipe"
import { Heart } from "lucide-react"

import { defaultValues, type FormData } from "@/types/types"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { RecipeForm } from "@/components/form/recipe-form"
import { GeneratedRecipeContent } from "@/components/generated-recipe-content"

export function GenerateRecipe() {
  const [generatedRecipe, setGeneratedRecipe] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)
  const [recipeVisible, setRecipeVisible] = useState<boolean>(false)
  const [formValues, setFormValues] = useState<FormData>(defaultValues)

  const onSubmit = async (values: FormData, e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setGeneratedRecipe("")

    const prompt = generatePrompt(values)
    const response = await generateRecipe(prompt)
    setFormValues(values)

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

    while (!done) {
      const { value, done: doneReading } = await reader.read()
      done = doneReading
      const chunkValue = decoder.decode(value)
      const formattedChunk = chunkValue.replace(/\n/g, "<br>")
      setGeneratedRecipe((prev) => prev + formattedChunk)
      setRecipeVisible(true)
      setLoading(false)
    }
  }

  const saveRecipe = async () => {
    try {
      const requestBody = {
        ...formValues,
        content: generatedRecipe,
      }

      const response = await fetch("/api/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      })

      if (!response.ok) {
        throw new Error("Failed to save the recipe.")
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div
      className={cn("mx-auto w-full", {
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
          "my-2 rounded-xl border md:flex md:w-2/3": loading || recipeVisible,
          "": !loading && !recipeVisible,
        })}
      >
        <div className="my-auto w-full space-y-2">
          {generatedRecipe && (
            <>
              <div className="flex justify-end p-4">
                <Button variant="outline" size="icon" onClick={saveRecipe}>
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
              <GeneratedRecipeContent recipe={generatedRecipe} />
            </>
          )}
        </div>
      </div>
    </div>
  )
}
