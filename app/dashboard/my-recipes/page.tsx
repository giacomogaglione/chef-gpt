import { type Metadata } from "next"
import { auth } from "@clerk/nextjs"

import type { Tables } from "@/types/database.types"
import { getRecipesByUserId } from "@/lib/supabase-queries"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/layout/page-header"
import { RecipeCardPreview } from "@/components/recipe/recipe-card-preview"

type Recipe = Tables<"recipes">

export const metadata: Metadata = {
  metadataBase: new URL("https://chef-genie.app"),
  title: "My Recipes",
  description: "Manage your recipes",
}

export default async function RecipePage() {
  const { getToken, userId } = auth()
  const supabaseAccessToken = await getToken({ template: "chef-genie" })
  const recipes = await getRecipesByUserId(userId, supabaseAccessToken)

  return (
    <div>
      <PageHeader>
        <PageHeaderHeading>My Recipes</PageHeaderHeading>
        <PageHeaderDescription>
          Manage your recipes history.
        </PageHeaderDescription>
      </PageHeader>
      <div className="m-4">
        <div className="grid gap-4 md:grid-cols-2">
          {recipes?.map((recipe) => (
            <div key={recipe.id}>
              <RecipeCardPreview recipe={recipe as Recipe} isDeletable />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
