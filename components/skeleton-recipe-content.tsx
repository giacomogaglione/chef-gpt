"use client"

import React from "react"

import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonRecipeContent() {
  return (
    <>
      <div className="mx-auto w-full p-4 font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        👨‍🍳 Add ingredients to generate recipe
      </div>
      <div className="m-4 p-4">
        <Skeleton className="mb-4 h-4 w-[250px]" />
        <div className="my-4 space-y-2">
          <Skeleton className="h-4 w-[150px]" />
          <Skeleton className="h-4 w-[200px]" />
          <Skeleton className="h-4 w-[220px]" />
          <Skeleton className="h-4 w-[200px]" />
          <Skeleton className="h-4 w-[220px]" />
        </div>
        <div className="mt-8 space-y-2">
          <Skeleton className="h-4 w-[150px]" />
          <Skeleton className="h-4 w-[200px]" />
          <Skeleton className="h-4 w-[220px]" />
          <Skeleton className="h-4 w-[200px]" />
          <Skeleton className="h-4 w-[220px]" />
        </div>
        <div className="mt-8 space-y-2">
          <Skeleton className="h-4 w-[150px]" />
          <Skeleton className="h-4 w-[200px]" />
          <Skeleton className="h-4 w-[220px]" />
          <Skeleton className="h-4 w-[200px]" />
          <Skeleton className="h-4 w-[220px]" />
        </div>
      </div>
    </>
  )
}
