"use client"

import { FieldValues } from "react-hook-form"

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface RadioGroupOption {
  label: string
  value: string
}

interface RadioGroupFormFieldProps {
  form: FieldValues
  name: string
  options: RadioGroupOption[]
}
export const howInjured: RadioGroupOption[] = [
  { label: "Automobile Accident", value: "Automobile Accident" },
  {
    label: "Pedestrian or Bicycle Accident",
    value: "Pedestrian or Bicycle Accident",
  },
  {
    label: "Truck Accident",
    value: "Truck Accident",
  },
  {
    label: "Motorcycle Accident",
    value: "Motorcycle Accident",
  },
  { label: "Accident or Injury At Work", value: "Accident or Injury At Work" },
  { label: "Medical Neglience", value: "Medical Neglience" },
  { label: "Fall or Slip", value: "Fall or Slip" },
  {
    label: "Other Injury or Accident",
    value: "Other Injury or Accident",
  },
]

export const periodOptions: RadioGroupOption[] = [
  { label: "within 1 month", value: "within 1 month" },
  { label: "within 3 months", value: "within 3 months" },
  { label: "within 6 months", value: "within 6 months" },
  { label: "within 18 months", value: "within 18 months" },
  { label: "within 24 months", value: "within 24 months" },
]
export const options: RadioGroupOption[] = [
  { label: "This Month (July 2024)", value: "july 2024" },
  { label: "Last Month (June)", value: "june 2024" },
  { label: "This Year (2024)", value: "2024" },
]

export function RadioGroupFormField({
  form,
  name,
  options,
}: RadioGroupFormFieldProps) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="grid lg:grid-cols-3"
              aria-label="people-recipe"
            >
              {options.map((option) => (
                <FormItem key={option.value}>
                  <FormLabel className="flex items-center justify-between rounded-md border-2 border-muted bg-popover px-4 py-2 capitalize hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary">
                    <FormControl>
                      <RadioGroupItem
                        aria-label={option.label}
                        value={option.value}
                        className="sr-only"
                      />
                    </FormControl>
                    {option.label}
                  </FormLabel>
                </FormItem>
              ))}
            </RadioGroup>
          </FormControl>
        </FormItem>
      )}
    />
  )
}
