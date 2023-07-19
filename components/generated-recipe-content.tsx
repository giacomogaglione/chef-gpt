"use client"

import React, { useEffect, useRef } from "react"

export function GeneratedRecipeContent({ recipe }: { recipe: string }) {
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
    <div className="mx-auto p-4">
      <div className="transition">
        <p
          className="p-2 font-medium md:text-base"
          dangerouslySetInnerHTML={{ __html: recipe }}
          ref={recipeRef}
        />
      </div>
    </div>
  )
}
