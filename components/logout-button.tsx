"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { SignOutButton } from "@clerk/nextjs"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export function LogOutButtons() {
  const router = useRouter()
  const [isPending, startTransition] = React.useTransition()

  return (
    <div className="flex w-full items-center space-x-2">
      <SignOutButton
        signOutCallback={() =>
          startTransition(() => {
            router.push(`${window.location.origin}/?redirect=false`)
          })
        }
      >
        <Button
          aria-label="Log out"
          size="sm"
          className="w-full"
          disabled={isPending}
        >
          {isPending && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
          Log out
        </Button>
      </SignOutButton>
    </div>
  )
}
