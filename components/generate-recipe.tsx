"use client"

import React, { useState } from "react"
import { generatePrompt } from "@/utils/generate-prompt"
import { generateRecipe } from "@/utils/generate-recipe"

import { RecipeForm } from "@/components/form/recipe-form"
import { GeneratedRecipeContent } from "@/components/generated-recipe-content"
import { SkeletonRecipeContent } from "@/components/skeleton-recipe-content"

export function GenerateRecipe() {
  const [generatedRecipe, setGeneratedRecipe] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)
  const [skeleton, setSkeleton] = useState<boolean>(true)

  const onSubmit = async (values: any, e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setGeneratedRecipe("")
    setSkeleton(false)

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
      <div className="w-full justify-around md:flex md:w-1/3">
        <RecipeForm onSubmit={onSubmit} isLoading={loading} />
      </div>
      <div className="my-2 rounded-xl border md:my-0 md:w-2/3">
        {skeleton ? (
          <SkeletonRecipeContent />
        ) : (
          <div className="my-auto w-full space-y-2">
            <div className="mx-auto w-full pl-4 pt-4 text-lg font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              👨‍🍳 Your recipe
            </div>
            {generatedRecipe && (
              <GeneratedRecipeContent recipe={generatedRecipe} />
            )}
          </div>
        )}
      </div>
    </div>
  )
}
