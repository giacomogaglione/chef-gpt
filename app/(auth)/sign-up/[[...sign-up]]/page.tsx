import { type Metadata } from "next"
import { SignUp } from "@clerk/nextjs"

export const metadata: Metadata = {
  metadataBase: new URL("https://chef-genie.app"),
  title: "Sign Up",
  description: "Sign up for an account",
}

export default function SignUpPage() {
  return (
    <div className="mt-2 md:mt-8">
      <SignUp />
    </div>
  )
}
