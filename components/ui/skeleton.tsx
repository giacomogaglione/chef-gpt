import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("skeleton rounded-lg bg-muted-foreground/10", className)}
      {...props}
    />
  )
}

export { Skeleton }
