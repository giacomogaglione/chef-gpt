import Link from "next/link"

import { siteConfig } from "@/config/site"
import { getLatestRecipes } from "@/lib/supabase-queries"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { GenerateRecipe } from "@/components/generate-recipe"
import { Icons } from "@/components/icons"
import {
  PageActions,
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
        <PageActions>
          <Link href="/generate" className={cn(buttonVariants())}>
            Generate Now
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            <Icons.gitHub className="mr-2 h-4 w-4" />
            GitHub
          </Link>
        </PageActions>
      </PageHeader>
      <div className="grid gap-4 md:grid-cols-3">
        {recipes?.map((recipe) => (
          <div key={recipe.id}>
            <RecipeCardPreview recipe={recipe} />
          </div>
        ))}
      </div>
    </div>
  )
}
