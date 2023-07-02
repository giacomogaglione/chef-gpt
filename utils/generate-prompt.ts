import { FormData } from "@/types/types"

export function generatePrompt(values: FormData): string {
  return `You are an expert culinary chef and how to come up with recipes that are easy for others to read and make.
  You will come up with 1 recipe based only these ${values.ingredients} you have available. 

  Requirements:
- You will return 1 recipe
- The recipe must have a title
- The recipe must have a list of ingredients
- The recipe must have a list of instructions
- The recipe must be unique
- Recipe has to include all ingredients selected
- The meal type is ${values.meal}
- The cuisine is ${values.cuisine}
- The diet is ${values.diet}
    
Example with ingredients Mince, Mushroom, spinach:

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
