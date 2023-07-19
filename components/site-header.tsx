"use client"

import Link from "next/link"
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs"
import { dark } from "@clerk/themes"
import { useTheme } from "next-themes"

import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  const { resolvedTheme } = useTheme()

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-14 items-center justify-between">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex items-center justify-between space-x-2 md:justify-end md:space-x-4">
          <nav className="flex items-center">
            <SignedIn>
              <UserButton
                appearance={{
                  baseTheme: resolvedTheme === "dark" ? dark : undefined,
                  userProfile: {
                    baseTheme: resolvedTheme === "dark" ? dark : undefined,
                  },
                }}
                afterSignOutUrl="/"
              />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <Button variant="outline" size="xs" className="mx-1 md:mx-3">
                  Log In
                </Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button size="xs" className="mx-1 md:mx-3">
                  Sign Up
                </Button>
              </SignUpButton>
            </SignedOut>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                  className: "md:ml-3",
                })}
              >
                <Icons.gitHub className="h-4 w-4 md:h-5 md:w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
