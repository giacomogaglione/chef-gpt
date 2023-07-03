"use client"

import React, { useState } from "react"
import { generatePrompt } from "@/utils/generate-prompt"
import { generateRecipe } from "@/utils/generate-recipe"
import { Loader2 } from "lucide-react"

import { GeneratedRecipeContent } from "@/components/generated-recipe-content"
import { RecipeForm } from "@/components/recipe-form"

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
      <div className="flex w-1/4">
        <RecipeForm onSubmit={onSubmit} isLoading={loading} />
      </div>
      <div className="w-3/4 rounded-xl border">
        <h2 className="mx-auto w-full py-2 text-center text-2xl font-semibold text-slate-900 sm:text-4xl">
          Your generated recipes
        </h2>
        <div className="my-auto w-full space-y-10">
          {generatedRecipe && (
            <GeneratedRecipeContent recipe={generatedRecipe} />
          )}
        </div>
      </div>
    </div>
  )
}
