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
    <div className="mx-auto my-4 w-full max-w-5xl p-4">
      <div className="w-full cursor-copy rounded-xl border bg-white p-4 shadow-md transition hover:bg-gray-100">
        <p
          className="p-2 text-slate-900"
          dangerouslySetInnerHTML={{ __html: recipe }}
          ref={bioRef}
        />
      </div>
    </div>
  )
}
