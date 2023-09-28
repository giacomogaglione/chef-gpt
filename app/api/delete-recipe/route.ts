import { revalidatePath } from "next/cache"
import { NextResponse } from "next/server"
import { auth } from "@clerk/nextjs"

import supabaseClient from "@/lib/supabase-client"

/*
export const runtime = "edge"
export const dynamic = "force-dynamic"
*/
export async function POST(request: Request) {
  const { getToken, userId } = auth()
  const supabaseAccessToken = await getToken({ template: "chef-genie" })
  const supabase = await supabaseClient(supabaseAccessToken as string)

  if (!userId) throw new Error("User ID not found")

  const { recipeId } = await request.json()
  const recipe = await supabase.from("recipes").delete().eq("id", recipeId)
  revalidatePath("/account")

  return NextResponse.json(recipe)
}
