import { currentUser } from "@clerk/nextjs"

import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"

interface AuthLayoutProps {
  children: React.ReactNode
}

export default async function AuthLayout({ children }: AuthLayoutProps) {
  const user = await currentUser()

  return (
    <div className="relative flex min-h-screen flex-col gap-2">
      <SiteHeader user={user} />
      <main className="mx-auto flex-1 md:px-8">{children}</main>
      <SiteFooter />
    </div>
  )
}
