import { Skeleton } from "@/components/ui/skeleton"
import { recipeInfo } from "@/components/recipe-costants"

export function GeneratedRecipeLoading() {
  return (
    <div className="h-[628px] w-full max-w-3xl animate-pulse rounded-lg border">
      <div className="animate-pulse space-y-6 p-6 text-sm text-muted-foreground">
        <p className="text-xl font-bold">
          Generating Recipe, This may take a little time...
        </p>
        {/* Recipe Info Section */}
        <div className="grid w-1/2 grid-cols-2 gap-4 text-muted-foreground">
          {recipeInfo.map((info, index) => (
            <div key={index} className="flex items-center gap-2">
              {info.icon}
              <Skeleton className="h-3 w-1/3" />
            </div>
          ))}
        </div>
        {/* Ingredients Section */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Ingredients</h3>
          <Skeleton className="h-3 w-1/5" />
          <Skeleton className="h-3 w-1/4" />
          <Skeleton className="h-3 w-1/5" />
          <Skeleton className="h-3 w-1/4" />
        </div>
        {/* Instructions Info Section */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Instructions</h3>
          <Skeleton className="h-3 w-2/3" />
          <Skeleton className="h-3 w-1/2" />
          <Skeleton className="h-3 w-2/3" />
          <Skeleton className="h-3 w-1/2" />
          <Skeleton className="h-3 w-1/3" />
          <Skeleton className="h-3 w-2/3" />
          <Skeleton className="h-3 w-1/2" />
        </div>
      </div>
    </div>
  )
}
