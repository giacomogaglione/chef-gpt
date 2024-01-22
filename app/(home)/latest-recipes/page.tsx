import { getLatestRecipes } from "@/lib/supabase-queries"
import { GenerateRecipe } from "@/components/generate-recipe"
import { RecipeCardPreview } from "@/components/recipe-card-preview"

export default async function IndexPage() {
  const [recipes] = await Promise.all([getLatestRecipes()])

  return (
    <div className="container grid gap-6">
      <div className="flex max-w-5xl flex-col gap-2 text-center">
        <h1 className="text-4xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          Say goodbye to mealtime indecision with
          <span className="bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
            {" Chef Genie"}
          </span>
        </h1>
        <h2 className="text-xl font-semibold leading-tight tracking-tighter text-muted-foreground">
          Recipe generator powered by OpenAI and ChatGPT
        </h2>
      </div>
      <GenerateRecipe />
      <div className="m-4">
        <div className="grid gap-4 md:grid-cols-2">
          {recipes?.map((recipe) => (
            <div key={recipe.id}>
              <RecipeCardPreview recipe={recipe} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
