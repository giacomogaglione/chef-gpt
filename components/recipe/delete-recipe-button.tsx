import React from "react"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

interface DeleteButtonProps {
  onClick: any
}

export function DeleteRecipeButton({ onClick }: DeleteButtonProps) {
  return (
    <div className="flex justify-end">
      <Button
        variant="destructive"
        size="icon"
        className="h-8"
        onClick={onClick}
      >
        <Icons.delete className="mr-2 size-4" aria-hidden="true" />
      </Button>
    </div>
  )
}
