"use client"

import React, { useState } from "react"
import { generatePrompt } from "@/utils/generate-prompt"
import { generateRecipe } from "@/utils/generate-recipe"

import type { FormData } from "@/types/types"
import { cn } from "@/lib/utils"
import { RecipeForm } from "@/components/form/recipe-form"
import { GeneratedRecipeContent } from "@/components/generated-recipe-content"

export function GenerateRecipe() {
  const [generatedRecipe, setGeneratedRecipe] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)
  const [recipeVisible, setRecipeVisible] = useState<boolean>(false)

  const onSubmit = async (values: FormData, e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setGeneratedRecipe("")

    const prompt = generatePrompt(values)
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
            <GeneratedRecipeContent recipe={generatedRecipe} />
          )}
        </div>
      </div>
    </div>
  )
}
