import { NextResponse } from "next/server"

import { supabaseClientPublic } from "@/lib/supabase-client"

export async function POST(request: Request) {
  const supabase = await supabaseClientPublic()

  const body = await request.json()

  const data = {
    content_json: body.content,
    title: body.content.title,
    difficulty: body.content.difficulty,
    cooking_time: body.content.cooking_time,
    people: body.content.people,
    low_calories: body.content.low_calori,
    vegan: body.content.vegan,
    paleo: body.content.paleo,
    description: body.content.description,
  }
  const recipe = await supabase.from("generations").insert([data])

  return NextResponse.json(recipe)
}
