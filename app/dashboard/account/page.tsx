import type { Metadata } from "next"

import { UserProfile } from "@/components/user-profile"

export const metadata: Metadata = {
  metadataBase: new URL("https://chef-genie.app"),
  title: "Account",
  description: "Manage your account settings",
}

export default function AccountPage() {
  return (
    <div className="w-full overflow-hidden">
      <UserProfile />
    </div>
  )
}
