import { currentUser } from "@clerk/nextjs"

import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"

interface RecipesLayoutProps {
  children: React.ReactNode
}

export default async function RecipesLayout({ children }: RecipesLayoutProps) {
  const user = await currentUser()

  return (
    <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center">
      <SiteHeader user={user} />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  )
}
