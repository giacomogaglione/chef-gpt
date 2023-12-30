import React from "react"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

interface SaveButtonProps {
  onClick: () => void
}

export function SaveButton({ onClick }: SaveButtonProps) {
  return (
    <div className="flex justify-end">
      <Button variant="outline" size="lg" onClick={onClick}>
        <Icons.heart className="mr-2 h-4 w-4" aria-hidden="true" />
        Save
      </Button>
    </div>
  )
}
