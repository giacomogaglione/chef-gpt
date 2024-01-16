export async function saveGeneration(generatedRecipe) {
  try {
    const requestBody = {
      content: generatedRecipe,
    }

    const response = await fetch("/api/save-generation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })

    if (!response.ok) {
      throw new Error("Failed to save the recipe.")
    }

    return true
  } catch (error) {
    console.error(error)
    return false
  }
}
