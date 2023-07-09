import React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"

import { formSchema } from "@/types/types"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { RadioGroupFormField } from "@/components/form/radio-group-form-field"
import { SelectFormField } from "@/components/form/select-form-field"
import { SwitchFormField } from "@/components/form/switch-form-field"

interface RecipeFormProps {
  onSubmit: (values: any, e: React.FormEvent) => void // Replace with the appropriate type
  isLoading: boolean
}

export function RecipeForm({ onSubmit, isLoading }: RecipeFormProps) {
  const form = useForm<any>({
    // Replace with the appropriate type
    resolver: zodResolver(formSchema),
    defaultValues: {
      ingredients: "",
      time: [5],
      people: "2",
      difficulty: "easy",
      vegetarian: false,
      vegan: false,
      gluten_free: false,
    },
  })

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-4 md:px-8"
      >
        <FormField
          control={form.control}
          name="ingredients"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold">
                <span className="mr-2 rounded-full bg-gradient-to-b from-indigo-500 to-cyan-400 px-2">
                  1
                </span>
                What ingredients do you have?
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
        <FormField
          control={form.control}
          name="time"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel className="font-semibold">
                <span className="mr-2 rounded-full bg-gradient-to-b from-indigo-500 to-cyan-400 px-2">
                  2
                </span>
                How much time do you have?
              </FormLabel>
              <FormControl>
                <Slider
                  id="cooking-time"
                  aria-label="Choose cooking time"
                  defaultValue={[5]}
                  max={120}
                  step={10}
                  min={5}
                  onValueChange={field.onChange}
                  {...field}
                />
              </FormControl>
              <FormDescription className="flex flex-row-reverse">
                🕛 {field.value} minutes
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormItem>
          <FormLabel className="font-semibold">
            <span className="mr-2 rounded-full bg-gradient-to-b from-indigo-500 to-cyan-400 px-2">
              3
            </span>
            How many people?
          </FormLabel>
          <RadioGroupFormField form={form} name="people" />
        </FormItem>
        <FormItem>
          <FormLabel className="font-semibold">
            <span className="mr-2 rounded-full bg-gradient-to-b from-indigo-500 to-cyan-400 px-2">
              4
            </span>
            Are you a good chef?
          </FormLabel>
          <SelectFormField form={form} name="difficulty" />
        </FormItem>
        <FormItem>
          <FormLabel className="font-semibold">
            <span className="mr-2 rounded-full bg-gradient-to-b from-indigo-500 to-cyan-400 px-2">
              5
            </span>
            Do you have diet preference?
          </FormLabel>
          <SwitchFormField
            form={form}
            name="vegetarian"
            label="🥗 Vegetarian"
          />
          <SwitchFormField form={form} name="vegan" label="🌿 Vegan" />
          <SwitchFormField
            form={form}
            name="gluten_free"
            label="🌾 Gluten-Free"
          />
        </FormItem>
        {isLoading ? (
          <Button disabled size="lg" className="w-full font-semibold">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Generating
          </Button>
        ) : (
          <Button
            type="submit"
            size="lg"
            className="w-full bg-gradient-to-r from-indigo-500 to-cyan-400 font-semibold"
          >
            Generate
          </Button>
        )}
      </form>
    </Form>
  )
}
