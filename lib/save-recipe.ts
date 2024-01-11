import { FormData, Recipe } from "@/types/types"

interface SaveRecipeResponse {
  success: boolean
}

export async function saveRecipeToAPI(
  formValues: FormData,
  generatedRecipe: Recipe | null
): Promise<boolean> {
  try {
    if (!generatedRecipe) {
      throw new Error("Generated recipe is null or undefined.")
    }

    const requestBody = {
      ...formValues,
      content: generatedRecipe,
    }

    const response = await fetch("/api/save-recipe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })

    if (!response.ok) {
      throw new Error("Failed to save the recipe.")
    }

    const responseData: SaveRecipeResponse = await response.json()

    return responseData.success
  } catch (error) {
    console.error(error)
    return false
  }
}
