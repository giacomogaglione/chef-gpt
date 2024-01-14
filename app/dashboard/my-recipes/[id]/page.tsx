import { type Metadata } from "next"
import { auth } from "@clerk/nextjs"

import supabaseClient from "@/lib/supabase-client"
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
  const { getToken, userId } = auth()
  const id = params.id
  const supabaseAccessToken = await getToken({ template: "chef-genie" })
  const supabase = await supabaseClient(supabaseAccessToken as string)
  const { data } = await supabase
    .from("recipes")
    .select("content_json")
    .eq("id", id)
    .single()

  const recipe = data ? data.content_json : null

  return (
    <div className="m-4">
      <GeneratedRecipeContent recipe={recipe} />
    </div>
  )
}
