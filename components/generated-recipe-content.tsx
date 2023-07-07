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
    <div className="mx-auto my-4 w-full max-w-5xl p-4">
      <div className="w-full cursor-copy rounded-xl border p-4 shadow-md transition">
        <p
          className="p-2 font-medium text-slate-600 dark:text-slate-400"
          dangerouslySetInnerHTML={{ __html: recipe }}
          ref={recipeRef}
        />
      </div>
    </div>
  )
}
