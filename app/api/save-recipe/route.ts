import { NextResponse } from "next/server"
import { auth } from "@clerk/nextjs"

import { formSchema } from "@/types/types"
import supabaseClient from "@/lib/supabase-client"

export async function POST(request: Request) {
  const { getToken, userId } = auth()
  const supabaseAccessToken = await getToken({ template: "chef-genie" })
  const supabase = await supabaseClient(supabaseAccessToken as string)

  if (!userId) throw new Error("User ID not found")

  const body = await request.json()
  const {
    ingredients,
    cooking_time,
    people,
    difficulty,
    low_calori,
    vegan,
    paleo,
  } = formSchema.parse(body)

  const data = {
    ingredients,
    cooking_time,
    people,
    difficulty,
    low_calori,
    vegan,
    paleo,
    user_id: userId,
    title: body.content.title,
    content_json: body.content,
  }
  const recipe = await supabase.from("recipes").insert([data])

  return NextResponse.json(recipe)
}
