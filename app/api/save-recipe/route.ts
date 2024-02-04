import { NextResponse } from "next/server"
import { auth } from "@clerk/nextjs"

import { formSchema } from "@/types/types"
import { supabaseClient } from "@/lib/supabase-client"

export async function POST(request: Request) {
  const { getToken, userId } = auth()
  const supabaseAccessToken = await getToken({ template: "chef-genie" })
  const supabase = await supabaseClient(supabaseAccessToken as string)

  if (!userId) throw new Error("User ID not found")

  const body = await request.json()
  const { ingredients } = formSchema.parse(body)

  const data = {
    user_id: userId,
    title: body.content.title,
    description: body.content.description,
    content_json: body.content,
    ingredients,
    difficulty: body.content.difficulty,
    cooking_time: body.content.cooking_time,
    people: body.content.people,
    low_calories: body.content.low_calori,
    vegan: body.content.vegan,
    paleo: body.content.paleo,
    calories: body.content.calories,
    proteins: body.content.macros.protein,
    fats: body.content.macros.fats,
    carbs: body.content.macros.carbs,
  }
  const recipe = await supabase.from("recipes").insert([data])

  return NextResponse.json(recipe)
}
