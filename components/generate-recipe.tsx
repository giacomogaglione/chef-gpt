"use client"

import React, { useState } from "react"
import { generatePrompt } from "@/utils/generate-prompt"
import { generateRecipe } from "@/utils/generate-recipe"

import { GeneratedRecipeContent } from "@/components/generated-recipe-content"
import { RecipeForm } from "@/components/recipe-form"
import { Loader2 } from "lucide-react"

export function GenerateRecipe() {
  const [generatedRecipe, setGeneratedRecipe] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)


  const onSubmit = async (values: any, e: React.FormEvent) => {
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
      setLoading(false)
    }
  }

  return (
    <div className="flex">
      <div className="flex w-1/3">
        <RecipeForm onSubmit={onSubmit} />
      </div>
      <div className="flex w-2/3">
        <div className="my-auto space-y-10">
        {loading ? 
        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : ""}

          {generatedRecipe && (
            <GeneratedRecipeContent recipe={generatedRecipe} />
          )}
        </div>
      </div>
    </div>
  )
}
