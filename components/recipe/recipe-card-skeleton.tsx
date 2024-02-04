import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Icons } from "@/components/icons"
import { recipeInfo } from "@/components/recipe/recipe-constants"

export function RecipeCardSkeleton() {
  return (
    <Card className="w-full animate-pulse">
      <CardHeader>
        <CardTitle className="text-xl font-bold">
          Your Recipe in the Making!
        </CardTitle>
        <CardDescription>
          Get ready for a pixel-perfect culinary experience! ✨
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 text-sm text-muted-foreground">
        <div className="grid space-y-6 rounded-lg border p-3 md:grid-cols-2 md:space-x-4 md:space-y-0">
          {/* Recipe Info Section */}
          <div className="grid grid-cols-2 gap-4 md:gap-0">
            <div className="col-span-2 mb-2 grid">
              <h3 className="text-lg font-semibold">Overview</h3>
            </div>
            {recipeInfo.map((info, index) => (
              <div key={index} className="flex gap-2 text-muted-foreground">
                {info.icon}
                <Skeleton className="h-3 w-1/3" />
              </div>
            ))}
          </div>
          {/* Macros BarChart Section */}
          <div className="grid grid-cols-1 gap-4 transition-all md:gap-0">
            <h3 className="text-lg font-semibold">Macros</h3>
            <div className="grid grid-cols-3 items-end gap-4 transition-all">
              <Skeleton className="h-12 w-1/3" />
              <Skeleton className="h-20 w-1/3" />
              <Skeleton className="h-8 w-1/3" />
            </div>
          </div>
        </div>
        {/* Ingredients Section */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Ingredients</h3>
          <Skeleton className="skeleton h-3 w-1/5" />
          <Skeleton className="skeleton h-3 w-1/4" />
          <Skeleton className="skeleton h-3 w-1/5" />
          <Skeleton className="skeleton h-3 w-1/4" />
        </div>
        {/* Instructions Info Section */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Instructions</h3>
          <Skeleton className="h-3 w-2/3" />
          <Skeleton className="h-3 w-1/2" />
          <Skeleton className="h-3 w-2/3" />
          <Skeleton className="h-3 w-1/3" />
          <Skeleton className="h-3 w-2/3" />
          <Skeleton className="h-3 w-1/2" />
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="lg" className="w-full">
          <Icons.save className="mr-2 size-4" aria-hidden="true" />
          Save
        </Button>
      </CardFooter>
    </Card>
  )
}
