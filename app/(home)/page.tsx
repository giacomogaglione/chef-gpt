import { GenerateRecipe } from "@/components/generate-recipe"

export default function IndexPage() {
  return (
    <div className="container grid gap-6">
      <div className="flex max-w-5xl flex-col gap-2 text-center">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
          Say goodbye to mealtime indecision with
          <span className="bg-gradient-to-r from-violet-500 to-teal-300 bg-clip-text text-transparent">
            {" Chef Genie"}
          </span>
        </h1>
        <h2 className="text-lg text-muted-foreground">
          Recipe generator powered by OpenAI and ChatGPT
        </h2>
      </div>
      <GenerateRecipe />
    </div>
  )
}
