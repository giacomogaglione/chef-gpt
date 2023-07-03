import { GenerateRecipe } from "@/components/generate-recipe"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-2 text-center">
        <h1 className="text-4xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          Say goodbye to mealtime indecision <br className="hidden sm:inline" />
          with Chef Genie
        </h1>
        <div className="mx-auto text-center text-lg font-semibold sm:text-xl">
          Customized recipe based on your ingredients, preferences, and dietary needs.
        </div>
      </div>
      <GenerateRecipe />
    </section>
  )
}