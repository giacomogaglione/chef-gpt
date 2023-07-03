import React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { cuisines, diets, formSchema, meals } from "@/types/types"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RecipeFormField } from "@/components/recipe-form-field"

interface RecipeFormProps {
  onSubmit: (values: any, e: React.FormEvent) => void // Replace with the appropriate type
}

export function RecipeForm({ onSubmit }: RecipeFormProps) {
  const form = useForm<any>({
    // Replace with the appropriate type
    resolver: zodResolver(formSchema),
    defaultValues: {
      ingredients: "",
      meal: "not relevant",
      cuisine: "not relevant",
      diet: "not relevant",
    },
  })
  
  const formFields = [
    { name: "meal", label: "Meal", inputArray: meals },
    { name: "cuisine", label: "Cuisine", inputArray: cuisines },
    { name: "diet", label: "Diet", inputArray: diets },
  ]

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="ingredients"
          render={({ field }) => (
            <FormItem className="w-[90%]">
              <FormLabel className="font-semibold">
                Ingredients
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="e.g. chicken, carrots, lemon, ..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {formFields.map((field) => (
          <RecipeFormField
            key={field.name}
            form={form}
            name={field.name}
            label={field.label}
            inputArray={field.inputArray}
          />
        ))}
        <Button type="submit" size="lg" className="w-[90%]">Generate</Button>
      </form>
    </Form>
  )
}
