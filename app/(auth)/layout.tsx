import { currentUser } from "@clerk/nextjs"

import { Footer } from "@/components/layout/footer"
import { SiteHeader } from "@/components/layout/site-header"

interface AuthLayoutProps {
  children: React.ReactNode
}

export default async function AuthLayout({ children }: AuthLayoutProps) {
  const user = await currentUser()

  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader user={user} />
      <div className="mx-auto flex-1">{children}</div>
      <Footer />
    </div>
  )
}
