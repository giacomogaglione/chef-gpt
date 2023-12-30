"use client"

import React, { useEffect, useRef } from "react"

import { ScrollArea } from "@/components/ui/scroll-area"

interface GeneratedRecipeContentProps {
  ingredients: string
  recipe: string
}

export function GeneratedRecipeContent({
  ingredients,
  recipe,
}: GeneratedRecipeContentProps) {
  const recipeRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const scrollToRecipe = () => {
      if (recipeRef.current !== null) {
        recipeRef.current.scrollIntoView({ behavior: "smooth" })
      }
    }

    scrollToRecipe()
  }, [recipe])

  return (
    <div className="w-full rounded-xl border p-2">
      <ScrollArea className="h-[505px]">
        <div className="mx-auto">
          <div className="transition">
            <p
              className="p-2"
              dangerouslySetInnerHTML={{ __html: recipe }}
              ref={recipeRef}
            />
            {ingredients && (
              <div>
                <h3>Ingredients:</h3>
                <div
                  dangerouslySetInnerHTML={{ __html: ingredients }}
                  ref={recipeRef}
                />
              </div>
            )}
          </div>
        </div>
      </ScrollArea>
    </div>
  )
}
