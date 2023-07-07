import { FormData } from "@/types/types"

export function generatePrompt(values: FormData): string {
  return `You are an expert culinary chef. Create a meal recipe by strictly following these rules:

  Rules:
- The recipe must have a title
- The recipe must have a list of ingredients
- The recipe must have a list of instructions
- Ingredients available: ${values.ingredients}
- Cooking time: less than ${values.time} minutes
- The recipe must be for ${values.people} people
- Difficulty of execution:${values.difficulty}
- Diet preference:
    - Vegetarian: ${values.vegetarian}
    - Vegan: ${values.vegan}
    - Gluten-free: ${values.gluten_free}
    
Example with ingredients: Mince, Mushroom, spinach:

Mince and Mushroom Pasta

Ingredients:
- Mince
- Mushroom
- Spinach
- Pasta

Instructions:
1. Put pasta in boiling water
2. Fry mince and mushroom
`
}
