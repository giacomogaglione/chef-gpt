"use client"

import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"

interface ErrorCardProps extends React.ComponentPropsWithoutRef<typeof Card> {
  title: string
  description: string
  retryLink?: string
  retryLinkText?: string
}

export function ErrorCard({
  title,
  description,
  retryLink,
  retryLinkText = "Go back",
  className,
  ...props
}: ErrorCardProps) {
  return (
    <Card
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      className={cn(
        "flex w-full min-w-0 flex-col items-center justify-center overflow-hidden p-10",
        className
      )}
      {...props}
    >
      <div className="flex flex-col items-center justify-center space-y-1.5 py-14 text-center">
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="line-clamp-4">
          {description}
        </CardDescription>
      </div>
      {retryLink ? (
        <Link
          href={retryLink}
          className={cn(
            buttonVariants({
              variant: "ghost",
            })
          )}
        >
          {retryLinkText}
          <span className="sr-only">{retryLinkText}</span>
        </Link>
      ) : null}
    </Card>
  )
}
