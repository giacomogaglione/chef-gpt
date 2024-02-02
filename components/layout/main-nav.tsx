import * as React from "react"
import Link from "next/link"

import { NavItem } from "@/types/types"
import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link
        href="/"
        aria-label="Chef Genie Homepage"
        className="items-center space-x-2 md:flex"
      >
        <Icons.logo className="size-5 md:size-6" />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
    </div>
  )
}
