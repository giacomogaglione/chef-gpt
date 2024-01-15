import { ErrorCard } from "@/components/error-card"

export default function RecipeNotFound() {
  return (
    <>
      <ErrorCard
        title="Recipe not found"
        description="The Recipe may have been deleted"
        retryLink="/"
        retryLinkText="Go to Home"
      />
    </>
  )
}
