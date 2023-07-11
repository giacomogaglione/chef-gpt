"use client"

import { FieldValues } from "react-hook-form"

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"
import { Switch } from "@/components/ui/switch"

interface SwitchFormFieldProps {
  form: FieldValues
  name: string
  label: string
}

export function SwitchFormField({ form, name, label }: SwitchFormFieldProps) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="my-auto flex flex-row items-center justify-between space-y-0 rounded-lg border px-4 py-2">
          <FormLabel className="font-medium">{label}</FormLabel>
          <FormControl>
            <Switch
              aria-label={name}
              checked={field.value}
              onCheckedChange={field.onChange}
            />
          </FormControl>
        </FormItem>
      )}
    />
  )
}
