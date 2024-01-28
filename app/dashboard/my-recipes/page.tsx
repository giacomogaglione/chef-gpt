import { type Metadata } from "next"
import { auth } from "@clerk/nextjs"

import type { Database } from "@/types/supabase"
import { getRecipesByUserId } from "@/lib/supabase-queries"
import { MyRecipeCardPreview } from "@/components/my-recipe-card-preview"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"

type Recipe = Database["public"]["Tables"]["recipes"]["Row"]

export const metadata: Metadata = {
  metadataBase: new URL("https://chef-genie.app"),
  title: "My Recipes",
  description: "Manage your recipes history.",
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
              <MyRecipeCardPreview recipe={recipe as Recipe} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
