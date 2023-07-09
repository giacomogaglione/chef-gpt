"use client"

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface RadioGroupFormFieldProps {
  form: any
  name: string
}

export function RadioGroupFormField({ form, name }: RadioGroupFormFieldProps) {
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
              className="grid grid-cols-3"
              aria-label="people-recipe"
            >
              <FormItem>
                <FormLabel className="flex items-center justify-between rounded-md border-2 border-muted bg-popover px-4 py-2 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary">
                  <FormControl>
                    <RadioGroupItem
                      id="2-people"
                      aria-label="2-people"
                      value="2"
                      className="sr-only"
                    />
                  </FormControl>
                  2 People
                </FormLabel>
              </FormItem>
              <FormItem>
                <FormLabel className="flex items-center justify-between rounded-md border-2 border-muted bg-popover px-4 py-2 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary">
                  <FormControl>
                    <RadioGroupItem
                      id="4-people"
                      aria-label="4-people"
                      value="4"
                      className="sr-only"
                    />
                  </FormControl>
                  4 People
                </FormLabel>
              </FormItem>
              <FormItem>
                <FormLabel className="flex items-center justify-between rounded-md border-2 border-muted bg-popover px-4 py-2 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary">
                  <FormControl>
                    <RadioGroupItem
                      id="6-people"
                      aria-label="6-people"
                      value="6"
                      className="sr-only"
                    />
                  </FormControl>
                  6 People
                </FormLabel>
              </FormItem>
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
