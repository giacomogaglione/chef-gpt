import { type Metadata } from "next"
import { notFound } from "next/navigation"
import { auth } from "@clerk/nextjs"

import { getRecipePrivate } from "@/lib/supabase-queries"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/layout/page-header"
import { RecipeCard } from "@/components/recipe/recipe-card"

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
  const { getToken } = auth()
  const id = params.id
  const supabaseAccessToken = await getToken({ template: "chef-genie" })
  const [recipe] = await Promise.all([
    getRecipePrivate(id, supabaseAccessToken),
  ])

  if (!recipe) {
    notFound()
  }

  return (
    <div className="container grid">
      <PageHeader>
        <PageHeaderHeading>{recipe.title}</PageHeaderHeading>
        <PageHeaderDescription>{recipe.description}</PageHeaderDescription>
      </PageHeader>
      <div className="mx-auto w-full max-w-3xl">
        <RecipeCard recipe={recipe} />
      </div>
    </div>
  )
}
