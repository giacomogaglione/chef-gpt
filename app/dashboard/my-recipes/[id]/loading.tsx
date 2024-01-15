import { Skeleton } from "@/components/ui/skeleton"

export default function RecipeLoading() {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <Skeleton className="h-6 w-14" />
        <Skeleton className="h-6 w-14" />
        <Skeleton className="h-6 w-14" />
      </div>
      <div className="flex flex-col gap-8 md:flex-row md:gap-16">
        <div className="w-full md:w-1/2">
          <div className="flex flex-col gap-2">
            <div className="flex w-full items-center justify-center gap-2">
              <Skeleton className="h-7 w-7 rounded-none" />
              {Array.from({ length: 3 }).map((_, i) => (
                <Skeleton
                  key={i}
                  className="aspect-square h-full w-full max-w-[100px] rounded-none"
                />
              ))}
              <Skeleton className="h-7 w-7 rounded-none" />
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col gap-4 md:w-1/2">
          <div className="space-y-2">
            <Skeleton className="h-9 w-16" />
            <Skeleton className="h-6 w-10" />
            <Skeleton className="h-6 w-14" />
          </div>
          <div className="grid gap-4 sm:max-w-[240px]">
            <div className="grid space-y-2">
              <Skeleton className="h-5 w-12" />
              <Skeleton className="h-9 w-full" />
            </div>
            <Skeleton className="h-9 w-full" />
          </div>
          <div className="flex items-center">
            <Skeleton className="h-7 w-16" />
            <Skeleton className="ml-auto h-4 w-4" />
          </div>
        </div>
      </div>
      <div className="overflow-hidden md:pt-6">
        <Skeleton className="h-9 w-14" />
      </div>
    </div>
  )
}
