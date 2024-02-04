import { ErrorCard } from "@/components/layout/error-card"

export default function RecipeNotFound() {
  return (
    <div className="max-w-3-xl my-8 w-full">
      <ErrorCard
        title="Recipe not found"
        description="The Recipe may have been deleted"
        retryLink="/"
        retryLinkText="Go to Home"
      />
    </div>
  )
}
