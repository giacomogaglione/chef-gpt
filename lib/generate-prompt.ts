import { FormData } from "@/types/types"

export function generatePrompt(values: FormData): string {
  const dietRestrictions = `
    - Low-calorie: ${values.low_calori ? "Yes" : "No"}
    - Vegan: ${values.vegan ? "Yes" : "No"}
    - Paleo: ${values.paleo ? "Yes" : "No"}
  `
  return `
    As a skilled culinary chef, craft a delightful meal recipe with the following considerations:

    Rules:
      - Response must be in JSON format.
      - Include detailed instructions for the recipe.
      - Adhere to the following dietary preferences: ${dietRestrictions}
      - Utilize only the available ingredients (${values.ingredients}).
        Avoid incompatible ingredients based on the specified diet.
      - Ensure the cooking time is under ${values.cooking_time} minutes.
      - Design the recipe to serve ${values.people} people.
      - Evaluate the difficulty of execution as ${values.difficulty}.

    The JSON object must include the following fields:
    - "title": [string]
    - "calories": [number],
    - "macros": {"protein": [number], "fats": [number], "carbs": [number]},
    - "ingredients": [{"name": [string], "amount": [string]}, ...] (based on the provided diet type and ingredients provided),
    - "instructions": [{"step": [number], "description": [string]}, ...]
    - "people": [number] (based on the provided input)
    - "difficulty": [string] (based on the provided input)
    - "cooking_time": [number] (based on the provided input)
    
    Format the response as a valid JSON object with all fields filled. Here is the structure for reference:
    
    {
      "title": /* details */,
      "calories":  /* details */ ,
      "macros": { /* details */ },
      "ingredients": { /* details */ },
      "instructions": { /* details */ },
      "people":  /* details */ ,
      "difficulty":  /* details */ ,
      "cooking_time":  /* details */ 
    }
    
    Respond only with the completed JSON object, without any additional explanatory or descriptive text. The JSON should be complete and ready for parsing
  
  `
}
