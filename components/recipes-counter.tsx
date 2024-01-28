import { Suspense } from "react"

import { getRecipesCount } from "@/lib/supabase-queries"

interface CountDisplayProps {
  count?: number | undefined
}

function CountDisplay({ count }: CountDisplayProps) {
  return (
    <p className="duration-1200 mb-12 ease-in-out animate-in fade-in slide-in-from-bottom-4">
      {count || "–––"} emojis generated and counting!
    </p>
  )
}

async function AsyncRecipesCount() {
  const count = (await getRecipesCount()) ?? 1111

  return <CountDisplay count={count} />
}

export function RecipesCount() {
  return (
    <Suspense fallback={<CountDisplay />}>
      <AsyncRecipesCount />
    </Suspense>
  )
}
