import { FormData } from "@/types/types"

export function generatePrompt(values: FormData): string {
  return `You are an expert culinary chef. Create a meal recipe by strictly following these rules:

  Rules:
- The recipe must have a list of instructions;
- Diet:
    - Vegetarian: ${values.vegetarian} ;
    - Vegan: ${values.vegan} ;
    - Paleo: ${values.paleo} ;
- Ingredients available: ${values.ingredients} . Do not use ingredients that are incompatible with diet euqual to true;
- Cooking time: less than ${values.cooking_time} minutes;
- The recipe must be for ${values.people} people;
- Difficulty of execution: ${values.difficulty} ;
    
Example with ingredients: Mince, Mushroom, Pasta:

Mince and Mushroom Pasta

Ingredients:
- Mince
- Mushroom
- Pasta

Instructions:
1. Put pasta in boiling water
2. Fry mince and mushroom
`
}
