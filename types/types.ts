import * as z from "zod"

export interface NavItem {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
}

export const formSchema = z.object({
  ingredients: z.string().min(2, {
    message: "Please insert some ingredients",
  }),
  meal: z.string({
    required_error: "Please select a meal type",
  }),
  cuisine: z.string({
    required_error: "Please select an email to display.",
  }),
  diet: z.string({
    required_error: "Please select an email to display.",
  }),
})

export type FormData = z.infer<typeof formSchema>

export interface Option {
  value: string
  label: string
}

export const meals = [
  { label: "Not relevant", value: "not relevant" },
  { label: "Breakfast", value: "breakfast" },
  { label: "Lunch", value: "lunch" },
  { label: "Dinner", value: "dinner" },
  { label: "Dessert", value: "dessert" },
  { label: "Snack", value: "snack" },
  { label: "Drink", value: "drink" },
  { label: "Appetizer", value: "appetizer" },
  { label: "Salad", value: "salad" },
  { label: "Sauce", value: "sauce" },
  { label: "Soup", value: "soup" },
  { label: "Beverage", value: "beverage" },
  { label: "Marinade", value: "marinade" },
  { label: "Fingerfood", value: "fingerfood" },
  { label: "Spread", value: "spread" },
] as Option[]

export const cuisines = [
  { label: "Not relevant", value: "not relevant" },
  { label: "caribbean", value: "caribbean" },
  { label: "african", value: "african" },
  { label: "chinese", value: "chinese" },
  { label: "japanese", value: "japanese" },
  { label: "korean", value: "korean" },
  { label: "vietnamese", value: "vietnamese" },
  { label: "thai", value: "thai" },
  { label: "indian", value: "indian" },
  { label: "british", value: "british" },
  { label: "irish", value: "irish" },
  { label: "french", value: "french" },
  { label: "italian", value: "italian" },
  { label: "mexican", value: "mexican" },
  { label: "spanish", value: "spanish" },
  { label: "latin american", value: "latin american" },
  { label: "middle eastern", value: "middle eastern" },
  { label: "eastern european", value: "eastern european" },
  { label: "jewish", value: "jewish" },
  { label: "american", value: "american" },
  { label: "cajun", value: "cajun" },
  { label: "southern", value: "southern" },
  { label: "greek", value: "greek" },
  { label: "german", value: "german" },
  { label: "nordic", value: "nordic" },
] as Option[]

export const diets = [
  { label: "Not relevant", value: "not relevant" },
  { label: "Normal", value: "normal" },
  { label: "Pescetarian", value: "pescetarian" },
  { label: "Lacto vegetarian", value: "lacto vegetarian" },
  { label: "Ovo vegetarian", value: "ovo vegetarian" },
  { label: "Vegan", value: "vegan" },
  { label: "Vegetarian", value: "vegetarian" },
  { label: "Paleo", value: "paleo" },
  { label: "Primal", value: "primal" },
  { label: "Whole30", value: "whole30" },
] as Option[]
