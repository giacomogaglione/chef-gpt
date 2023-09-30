import { currentUser } from "@clerk/nextjs"

import { Footer } from "@/components/layout/footer"
import { SiteHeader } from "@/components/layout/site-header"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const user = await currentUser()

  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader user={user} />
      <div className="mx-auto flex-1">{children}</div>
      <Footer />
    </div>
  )
}
