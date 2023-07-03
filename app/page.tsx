import { GenerateRecipe } from "@/components/generate-recipe"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-2 text-center">
        <h1 className="text-4xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          Say goodbye to mealtime indecision with
          <span className="bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
            {" "}
            Chef Genie
          </span>
        </h1>
        <div className="mx-auto mb-4 text-center text-lg font-semibold text-slate-600 dark:text-slate-400 sm:text-xl">
          Customized recipe based on your ingredients, preferences, and dietary
          needs.
        </div>
      </div>
      <GenerateRecipe />
    </section>
  )
}
