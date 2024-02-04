import { supabaseClient, supabaseClientPublic } from "@/lib/supabase-client"

export const getRecipesByUserId = async (userId, supabaseAccessToken) => {
  const supabase = await supabaseClient(supabaseAccessToken as string)
  const { data: recipes } = await supabase
    .from("recipes")
    .select()
    .eq("user_id", userId)
    .order("created_at", { ascending: false })

  return recipes
}

export async function getLatestRecipes() {
  const supabase = await supabaseClientPublic()
  try {
    const { data: recipes } = await supabase
      .from("generations")
      .select()
      .range(0, 2)
      .order("created_at", { ascending: false })

    return recipes
  } catch (error) {
    console.error("Error:", error)
    return null
  }
}

export async function getRecipe(id: string) {
  const supabase = await supabaseClientPublic()
  try {
    const { data: recipe } = await supabase
      .from("recipes")
      .select("content_json")
      .eq("id", id)
      .single()

    return recipe
  } catch (error) {
    console.error("Error:", error)
    return null
  }
}

export async function getRecipesCount() {
  const supabase = await supabaseClientPublic()
  try {
    const { count } = await supabase
      .from("generations")
      .select("*", { count: "exact", head: true })

    return count
  } catch (error) {
    console.error("Error:", error)
    return null
  }
}

export async function getRecipePublic(id: string) {
  const supabase = await supabaseClientPublic()
  try {
    const { data: recipe } = await supabase
      .from("generations")
      .select("content_json")
      .eq("id", id)
      .single()

    return recipe ? recipe.content_json : null
  } catch (error) {
    console.error("Error:", error)
    return null
  }
}

export async function getRecipePrivate(id: string, supabaseAccessToken) {
  const supabase = await supabaseClient(supabaseAccessToken as string)
  try {
    const { data: recipe } = await supabase
      .from("recipes")
      .select("content_json")
      .eq("id", id)
      .single()

    return recipe ? recipe.content_json : null
  } catch (error) {
    console.error("Error:", error)
    return null
  }
}
