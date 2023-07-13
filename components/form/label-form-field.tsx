import { FormLabel } from "@/components/ui/form"

interface RecipeFormLabelProps {
  index: string
  label: string
}

export function RecipeFormLabel({ index, label }: RecipeFormLabelProps) {
  return (
    <FormLabel className="font-semibold">
      <span className="mr-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 px-2 text-white">
        {index}
      </span>
      {label}
    </FormLabel>
  )
}
