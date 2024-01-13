import React from "react"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

interface SaveButtonProps {
  onClick: () => void
}

export function SaveRecipeButton({ onClick }: SaveButtonProps) {
  return (
    <Button variant="outline" size="lg" className="w-full" onClick={onClick}>
      <Icons.heart className="mr-2 h-4 w-4" aria-hidden="true" />
      Save
    </Button>
  )
}
