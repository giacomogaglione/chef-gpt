import { NextResponse } from "next/server"
import { db } from "@/db"
import { recipes } from "@/drizzle/schema"
import { auth } from "@clerk/nextjs"

import { formSchema } from "@/types/types"

export const revalidate = 0

export async function POST(request: Request) {
  const { userId } = auth()

  if (!userId) throw new Error("User ID not found")

  const body = await request.json()
  const { ingredients, people, difficulty, vegan, paleo } =
    formSchema.parse(body)

  const recipe = await db.insert(recipes).values({
    userId: userId,
    ingredients,
    people,
    difficulty,
    vegan,
    paleo,
  })

  return NextResponse.json(recipe)
}
