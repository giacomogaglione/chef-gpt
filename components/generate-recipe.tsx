"use client"

import React, { useState } from "react"
import { generatePrompt } from "@/utils/generate-prompt"
import { generateRecipe } from "@/utils/generate-recipe"

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
    <div className="w-full md:flex">
      <div className="w-full md:flex md:w-1/4">
        <RecipeForm onSubmit={onSubmit} isLoading={loading} />
      </div>
      <div className="my-2 rounded-xl border md:my-0 md:w-3/4">
        <h3 className="mx-auto w-full text-center text-xl font-bold text-slate-600 dark:text-slate-400 sm:text-3xl md:pt-2">
          👨‍🍳 your recipe...
        </h3>
        <div className="my-auto w-full space-y-10">
          {generatedRecipe && (
            <GeneratedRecipeContent recipe={generatedRecipe} />
          )}
        </div>
      </div>
    </div>
  )
}
