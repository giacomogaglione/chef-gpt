import React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"

import { formSchema, type FormData } from "@/types/types"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Slider, SliderThumb } from "@/components/ui/slider"
import { RecipeFormLabel } from "@/components/form/label-form-field"
import {
  RadioGroupFormField,
  options,
} from "@/components/form/radio-group-form-field"
import { SelectFormField } from "@/components/form/select-form-field"
import { SwitchFormField } from "@/components/form/switch-form-field"

interface RecipeFormProps {
  onSubmit: (values: FormData, e: React.FormEvent) => void
  isLoading: boolean
}

export function RecipeForm({ onSubmit, isLoading }: RecipeFormProps) {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ingredients: "",
      cooking_time: [5],
      people: "2",
      difficulty: "easy",
      vegetarian: false,
      vegan: false,
      paleo: false,
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
              <RecipeFormLabel
                index="1"
                label="What ingredients do you have?"
              />
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
          name="cooking_time"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <RecipeFormLabel index="2" label="How much time do you have?" />
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
                >
                  <SliderThumb aria-label="Cooking time"></SliderThumb>
                </Slider>
              </FormControl>
              <FormDescription className="flex flex-row-reverse">
                🕛 {field.value} minutes
              </FormDescription>
            </FormItem>
          )}
        />
        <FormItem>
          <RecipeFormLabel index="3" label="How many people?" />
          <RadioGroupFormField form={form} name="people" options={options} />
        </FormItem>
        <FormItem>
          <RecipeFormLabel index="4" label="Are you a good chef?" />
          <SelectFormField form={form} name="difficulty" />
        </FormItem>
        <FormItem>
          <RecipeFormLabel index="5" label="Do you have diet preference??" />
          <SwitchFormField
            form={form}
            name="vegetarian"
            label="🥗 Vegetarian"
          />
          <SwitchFormField form={form} name="vegan" label="🌿 Vegan" />
          <SwitchFormField form={form} name="paleo" label="🍖 Paleo" />
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
