export async function deleteRecipe(id: string) {
  try {
    const response = await fetch("/api/delete-recipe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ recipeId: id }),
    })
    if (!response.ok) {
      throw new Error("Failed to delete the recipe.")
    }
  } catch (error) {
    console.error(error)
  }
}
