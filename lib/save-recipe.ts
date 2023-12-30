export async function saveRecipeApiCall(requestBody: Record<string, any>) {
  return await fetch("/api/save-recipe", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      requestBody,
    }),
  })
}
