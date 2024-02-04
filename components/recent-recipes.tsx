import { getLatestRecipes } from "@/lib/supabase-queries"
import { RecipeCardPreview } from "@/components/recipe/recipe-card-preview"

export async function RecentRecipes() {
  const [recipes] = await Promise.all([getLatestRecipes()])
  return (
    <div className="duration-1200 ease-in-out animate-in fade-in slide-in-from-bottom-4">
      <h2 className="text-2xl font-semibold tracking-tight">Recent Recipes</h2>
      <div className="grid gap-2 md:grid-cols-3 md:gap-6">
        {recipes?.map((recipe) => (
          <div key={recipe.id}>
            <RecipeCardPreview recipe={recipe} />
          </div>
        ))}
      </div>
    </div>
  )
}
