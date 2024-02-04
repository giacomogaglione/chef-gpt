import { Icons } from "@/components/icons"

export const macroInfo = [
  { label: "Protein", value: "protein" },
  { label: "Fats", value: "fats" },
  { label: "Carbs", value: "carbs" },
]

export const recipeInfo = [
  {
    icon: <Icons.cooking_time className="size-4" aria-hidden="true" />,
    value: "cooking_time",
    additionalText: "minutes",
  },
  {
    icon: <Icons.difficulty className="size-4" aria-hidden="true" />,
    value: "difficulty",
    additionalText: "",
  },
  {
    icon: <Icons.people className="size-4" aria-hidden="true" />,
    value: "people",
    additionalText: "servings",
  },
  {
    icon: <Icons.calories className="size-4" aria-hidden="true" />,
    value: "calories",
    additionalText: "calories",
  },
]
