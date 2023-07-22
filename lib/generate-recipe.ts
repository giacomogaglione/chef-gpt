export async function generateRecipe(prompt: string): Promise<Response> {
  const response = await fetch("/api/generate-recipe", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt,
    }),
  })

  if (!response.ok) {
    throw new Error(response.statusText)
  }

  return response
}
