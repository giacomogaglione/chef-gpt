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
      - Include detailed instructions for the recipe.
      - Adhere to the following dietary preferences:
        ${dietRestrictions}
      - Utilize the only available ingredients (${values.ingredients}).
        Avoid incompatible ingredients based on the specified diet.
      - Ensure the cooking time is under ${values.cooking_time} minutes.
      - Design the recipe to serve ${values.people} people.
      - Evaluate the difficulty of execution as ${values.difficulty}.

    Let's illustrate with a delightful example featuring ingredients like Mince, Mushroom, and Pasta:

    Mince and Mushroom Pasta
  
    Ingredients:
      - Mince
      - Mushroom
      - Pasta
  
    Instructions:
      1. Begin by boiling water for the pasta.
      2. In a pan, sauté the mince and mushrooms until golden.
      3. Cook the pasta in the boiling water until al dente.
      4. Combine the cooked mince, mushrooms, and pasta.
      5. Season to taste and serve hot.
  
    Get creative and have fun crafting your unique culinary masterpiece!
  `
}
