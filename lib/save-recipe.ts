export async function saveRecipeToAPI(formValues, generatedRecipe) {
  try {
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

    return true // Indicate success if the response is OK
  } catch (error) {
    console.error(error)
    return false // Indicate failure if an error occurs
  }
}
