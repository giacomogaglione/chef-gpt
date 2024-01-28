import { type Metadata } from "next"
import { notFound } from "next/navigation"

import { getRecipePublic } from "@/lib/supabase-queries"
import { GeneratedRecipeContent } from "@/components/generated-recipe-content"

export const metadata: Metadata = {
  metadataBase: new URL("https://chef-genie.app"),
  title: "My Recipes",
  description: "Manage your recipes.",
}

interface RecipePageProps {
  params: {
    id: string
  }
}

export default async function RecipePage({ params }: RecipePageProps) {
  const id = params.id
  const [recipe] = await Promise.all([getRecipePublic(id)])

  if (!recipe) {
    notFound()
  }

  return (
    <div className="m-8 w-full max-w-3xl">
      <GeneratedRecipeContent recipe={recipe} />
    </div>
  )
}
