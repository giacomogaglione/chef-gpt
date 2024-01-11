import React from "react"

import { Skeleton } from "@/components/ui/skeleton"

function SkeletonLoading() {
  return (
    <div className="mx-auto h-[550px] w-full max-w-3xl animate-pulse rounded-xl border p-2">
      <div className="animate-pulse space-y-6 p-4 text-sm text-muted-foreground">
        <p>Generating Recipe</p>
        <Skeleton className="h-6 w-1/3" />
        <Skeleton className="h-3 w-1/2" />
        <Skeleton className="h-3 w-1/2" />

        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3].map((index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <Skeleton className="h-2 w-full" />
            </div>
          ))}
        </div>
        <div className="space-y-6">
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-3 w-1/3" />
          <Skeleton className="h-3 w-1/2" />
          <Skeleton className="h-3 w-1/3" />
        </div>
        <div className="space-y-6">
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-3 w-1/3" />
          <Skeleton className="h-3 w-1/2" />
          <Skeleton className="h-3 w-1/3" />
        </div>
      </div>
    </div>
  )
}

export { SkeletonLoading }
