import { Progress } from "@/components/ui/progress"
import { Skeleton } from "@/components/ui/skeleton"
import { macroInfo, recipeInfo } from "@/components/recipe-costants"

export function GeneratedRecipeLoading() {
  return (
    <div className="mx-auto h-[512px] w-full max-w-3xl animate-pulse rounded-xl border p-2">
      <div className="animate-pulse space-y-6 p-4 text-sm text-muted-foreground">
        <p className="text-xl font-bold">Generating Recipe...</p>
        <div className="grid grid-cols-2 gap-4 text-muted-foreground">
          {recipeInfo.map((info, index) => (
            <div key={index} className="flex items-center gap-2">
              {info.icon}
              <Skeleton className="h-3 w-1/3" />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4">
          {macroInfo.map((macro, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <div>
                <span className="font-semibold">{macro.label} - </span>
                <span className="text-xs text-muted-foreground"></span>
              </div>
              <Progress className="w-full" value={20} />
            </div>
          ))}
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Ingredients</h3>
          <Skeleton className="h-3 w-1/5" />
          <Skeleton className="h-3 w-1/4" />
          <Skeleton className="h-3 w-1/5" />
        </div>
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
