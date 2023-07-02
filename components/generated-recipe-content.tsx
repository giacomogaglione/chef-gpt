"use client"

import React, { useEffect, useRef } from "react"

export function GeneratedRecipeContent({ recipe }: { recipe: string }) {
  const bioRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const scrollToBios = () => {
      if (bioRef.current !== null) {
        bioRef.current.scrollIntoView({ behavior: "smooth" })
      }
    }

    scrollToBios()
  }, [recipe])

  return (
    <div className="mx-auto my-4 max-w-5xl">
      <h2
        className="mx-auto text-3xl font-bold text-slate-900 sm:text-4xl"
        ref={bioRef}
      >
        Your generated recipes
      </h2>
      <div className="cursor-copy rounded-xl border bg-white p-4 shadow-md transition hover:bg-gray-100">
        <p
          className="text-slate-900"
          dangerouslySetInnerHTML={{ __html: recipe }}
        />
      </div>
    </div>
  )
}
