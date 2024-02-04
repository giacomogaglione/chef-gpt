import React from "react"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

interface SaveButtonProps {
  onClick: () => void
}

export function SaveRecipeButton({ onClick }: SaveButtonProps) {
  return (
    <Button variant="outline" size="lg" className="w-full" onClick={onClick}>
      <Icons.save className="mr-2 size-4" aria-hidden="true" />
      Save
    </Button>
  )
}
