import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/layout/page-header"

export default function RecipeNotFound() {
  return (
    <div className="container grid ">
      <PageHeader>
        <PageHeaderHeading>Oops!</PageHeaderHeading>
        <PageHeaderDescription>
          It seems our chef got a bit too creative and lost the recipe!
          We&apos;re on a quest to find it. Meanwhile, let&apos;s share a
          virtual cookie and try another delicious adventure!✨
        </PageHeaderDescription>
        <PageActions>
          <Link href="/">
            <Button>Go back Home</Button>
          </Link>
        </PageActions>
      </PageHeader>
    </div>
  )
}
