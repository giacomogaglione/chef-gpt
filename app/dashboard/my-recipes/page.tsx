import { type Metadata } from "next"
import { auth } from "@clerk/nextjs"

import type { Tables } from "@/types/database.types"
import { supabaseClient } from "@/lib/supabase-client"
import { getRecipesByUserId } from "@/lib/supabase-queries"
import { columns, RecipeTable } from "@/components/dashboard/columns"
import { DataTable } from "@/components/dashboard/data-table"
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

async function getRecipesPrivate(): Promise<RecipeTable[] | null> {
  const { getToken, userId } = auth()
  const supabaseAccessToken = await getToken({ template: "chef-genie" })
  const supabase = await supabaseClient(supabaseAccessToken as string)
  try {
    const { data: recipes } = await supabase
      .from("recipes")
      .select()
      .eq("user_id", userId)
      .order("created_at", { ascending: false })

    return recipes || null // Ensure that it returns null in case recipes is falsy
  } catch (error) {
    console.error("Error:", error)
    return null
  }
}

export default async function RecipePage() {
  const { getToken, userId } = auth()
  const supabaseAccessToken = await getToken({ template: "chef-genie" })
  const recipes = await getRecipesByUserId(userId, supabaseAccessToken)
  const data = await getRecipesPrivate()

  return (
    <div>
      <PageHeader>
        <PageHeaderHeading>My Recipes</PageHeaderHeading>
        <PageHeaderDescription>
          Manage your recipes history.
        </PageHeaderDescription>
      </PageHeader>
      {data && (
        <div className="m-4">
          <DataTable columns={columns} data={data} />
        </div>
      )}
      <div className="m-4">
        <div className="grid gap-4 md:grid-cols-2">
          {recipes?.map((recipe) => (
            <div key={recipe.id}>
              <RecipeCardPreview recipe={recipe as Recipe} isPrivate />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
