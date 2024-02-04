import { RecipeCardSkeleton } from "@/components/recipe/recipe-card-skeleton"

export default function RecipeLoading() {
  return (
    <div className="m-8 w-full max-w-5xl">
      <RecipeCardSkeleton />
    </div>
  )
}
