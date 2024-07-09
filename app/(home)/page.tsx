import { RecipeForm } from "@/components/form/recipe-form"
import AdsSection from "@/components/homepage/ads-section"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/layout/page-header"
import { RecipesCounter } from "@/components/recipes-counter"

export default async function IndexPage() {
  return (
    <div className="container grid">
      <PageHeader>
        <RecipesCounter />
        <PageHeaderHeading>
          Don&apos;t Waste Your Time! Florida Residents Can Get{" "}
          <span className="text-red-600">5X MORE CASH</span>
          !!!
        </PageHeaderHeading>
        <PageHeaderDescription className="max-w-lg">
          Use Crash-GPT for free. Get started by telling the Artificial
          Intelligence (AI) model a little about what happened.
        </PageHeaderDescription>
      </PageHeader>
      <div className="mx-auto mb-8 max-w-2xl space-y-6 md:space-x-6 md:space-y-0">
        <RecipeForm />
      </div>
      <AdsSection />
    </div>
  )
}
