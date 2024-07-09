import { currentUser } from "@clerk/nextjs"

import Footer from "@/components/general/footer"
import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"

interface HomeLayoutProps {
  children: React.ReactNode
}

export default async function HomeLayout({ children }: HomeLayoutProps) {
  const user = await currentUser()

  return (
    <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center gap-2">
      <SiteHeader user={user} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
