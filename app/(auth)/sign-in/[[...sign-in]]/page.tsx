import { type Metadata } from "next"
import { SignIn } from "@clerk/nextjs"

export const metadata: Metadata = {
  metadataBase: new URL("https://chef-genie.app"),
  title: "Sign In",
  description: "Sign in to your account",
}

export default function SignInPage() {
  return (
    <div className="mt-2 md:mt-8">
      <SignIn />
    </div>
  )
}
