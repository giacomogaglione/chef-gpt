import { Suspense } from "react"

import { getRecipesCount } from "@/lib/supabase-queries"

interface CountDisplayProps {
  count?: number | undefined
}

function CountDisplay({ count }: CountDisplayProps) {
  return (
    <p className="duration-1200 inline-flex items-center rounded-lg bg-muted px-3 py-1 text-center text-sm font-medium ease-in-out animate-in fade-in slide-in-from-bottom-4">
      🎉 {count || "–––"} recipes generated and counting!
    </p>
  )
}

async function AsyncRecipesCount() {
  const count = (await getRecipesCount()) ?? 1111

  return <CountDisplay count={count} />
}

export function RecipesCounter() {
  return (
    <Suspense fallback={<CountDisplay />}>
      <AsyncRecipesCount />
    </Suspense>
  )
}
