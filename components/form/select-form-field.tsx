"use client"

import { FieldValues } from "react-hook-form"

import { FormControl, FormField, FormItem } from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface SelectFormFieldProps {
  form: FieldValues
  name: string
}

export function SelectFormField({ form, name }: SelectFormFieldProps) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger aria-label="cooking-level">
                <SelectValue placeholder="Select your cooking level" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectItem value="Easy">Novice</SelectItem>
              <SelectItem value="Medium">Medium</SelectItem>
              <SelectItem value="Expert">Expert</SelectItem>
            </SelectContent>
          </Select>
        </FormItem>
      )}
    />
  )
}
