import * as z from "zod"

export interface NavItem {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
}

export const formSchema = z.object({
  ingredients: z.string().min(2, {
    message: "Please add at least one ingredient",
  }),
  cooking_time: z.array(z.number()).optional(),
  people: z.enum(["2", "4", "6"]).optional(),
  difficulty: z.string().optional(),
  vegetarian: z.boolean().default(false).optional(),
  vegan: z.boolean().default(false).optional(),
  paleo: z.boolean().default(false).optional(),
})

export type FormData = z.infer<typeof formSchema>
