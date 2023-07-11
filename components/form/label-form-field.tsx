import { FormLabel } from "../ui/form"

interface RecipeFormLabelProps {
  index: string
  label: string
}

export function RecipeFormLabel({ index, label }: RecipeFormLabelProps) {
  return (
    <>
      <FormLabel className="font-semibold">
        <span className="mr-2 rounded-full bg-gradient-to-b from-indigo-500 to-cyan-400 px-2 text-white">
          {index}
        </span>
        {label}
      </FormLabel>
    </>
  )
}
