import { type Metadata } from "next"
import { revalidatePath } from "next/cache"
import { auth } from "@clerk/nextjs"

import type { Database } from "@/types/supabase"
import { supabaseClient } from "@/lib/supabase-client"
import { RecipeCardPreview } from "@/components/recipe-card-preview"

type Recipe = Database["public"]["Tables"]["recipes"]["Row"]

export const metadata: Metadata = {
  metadataBase: new URL("https://chef-genie.app"),
  title: "My Recipes",
  description: "Manage your recipes history.",
}
export default async function RecipePage() {
  const { getToken, userId } = auth()
  const supabaseAccessToken = await getToken({ template: "chef-genie" })
  const supabase = await supabaseClient(supabaseAccessToken as string)
  const { data: recipes } = await supabase
    .from("recipes")
    .select()
    .eq("user_id", userId)
    .order("created_at", { ascending: false })

  revalidatePath("/account")

  return (
    <div className="m-4">
      <div className="grid gap-4 md:grid-cols-2">
        {recipes?.map((recipe) => (
          <div key={recipe.id}>
            <RecipeCardPreview recipe={recipe as Recipe} />
          </div>
        ))}
      </div>
    </div>
  )
}
