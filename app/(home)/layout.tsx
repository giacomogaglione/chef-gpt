import { currentUser } from "@clerk/nextjs"

import { Footer } from "@/components/footer"
import { SiteHeader } from "@/components/site-header"

interface HomeLayoutProps {
  children: React.ReactNode
}

export default async function HomeLayout({ children }: HomeLayoutProps) {
  const user = await currentUser()

  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader user={user} />
      <div className="mx-auto flex-1">{children}</div>
      <Footer />
    </div>
  )
}
