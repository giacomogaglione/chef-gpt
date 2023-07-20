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
  low_calori: z.boolean().default(false).optional(),
  vegan: z.boolean().default(false).optional(),
  paleo: z.boolean().default(false).optional(),
})

export const defaultValues: FormData = {
  ingredients: "",
  cooking_time: [5],
  people: "2",
  difficulty: "easy",
  low_calori: false,
  vegan: false,
  paleo: false,
}

export type FormData = z.infer<typeof formSchema>
