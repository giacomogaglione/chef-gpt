import { SignIn } from "@clerk/nextjs"

export default function Page() {
  return (
    <div className="mt-2 md:mt-8">
      <SignIn />
    </div>
  )
}
