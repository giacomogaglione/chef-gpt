import { getLatestRecipes } from "@/lib/supabase-queries"
import { GenerateRecipe } from "@/components/generate-recipe2"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { RecipeCardPreview } from "@/components/recipe-card-preview"

export default async function IndexPage() {
  const [recipes] = await Promise.all([getLatestRecipes()])

  return (
    <div className="container grid gap-6">
      <PageHeader>
        <PageHeaderHeading>
          Say goodbye to mealtime indecision with
          <span className="bg-gradient-to-r from-violet-500 to-teal-300 bg-clip-text text-transparent">
            {" Chef Genie"}
          </span>
        </PageHeaderHeading>
        <PageHeaderDescription>
          Recipe generator powered by OpenAI and ChatGPT
        </PageHeaderDescription>
      </PageHeader>
      <div><GenerateRecipe /></div>
      <h2 className="text-3xl font-semibold tracking-tight">Latest Recipes</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {recipes?.map((recipe) => (
          <div key={recipe.id}>
            <RecipeCardPreview recipe={recipe} />
          </div>
        ))}
      </div>
    </div>
  )
}
