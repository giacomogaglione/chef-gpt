import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/layout/page-header"
import { RecipeCardSkeleton } from "@/components/recipe/recipe-card-skeleton"

export default function RecipeLoading() {
  return (
    <div className="container grid animate-pulse">
      <PageHeader>
        <PageHeaderHeading>Your Recipe in the Making!</PageHeaderHeading>
        <PageHeaderDescription>
          Simmering up a digital feast! Your recipe is currently undergoing a
          gourmet transformation!✨
        </PageHeaderDescription>
      </PageHeader>
      <div className="mx-auto w-full max-w-3xl">
        <RecipeCardSkeleton />
      </div>
    </div>
  )
}
