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
  title: "Your Culinary Creations",
  description:
    "Explore your saved recipes in one place. Your culinary journey starts here!",
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

    return recipes || null
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
    <div className="container grid">
      <PageHeader>
        <PageHeaderHeading>Your Culinary Creations</PageHeaderHeading>
        <PageHeaderDescription>
          Explore your saved recipes in one place. Your culinary journey starts
          here!
        </PageHeaderDescription>
      </PageHeader>
      {data && <DataTable columns={columns} data={data} />}
      <div className="grid gap-4 md:grid-cols-3">
        {recipes?.map((recipe) => (
          <div key={recipe.id}>
            <RecipeCardPreview recipe={recipe as Recipe} isPrivate />
          </div>
        ))}
      </div>
    </div>
  )
}
