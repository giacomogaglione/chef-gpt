import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { GenerateRecipe } from "@/components/generate-recipe"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          Say goodbye to mealtime indecision <br className="hidden sm:inline" />
          with Chef Genie
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          Customized recipe suggestions based on your ingredients, preferences,
          and dietary needs.
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline", size: "lg" })}
        >
          GitHub
        </Link>
      </div>
      <GenerateRecipe />
    </section>
  )
}
